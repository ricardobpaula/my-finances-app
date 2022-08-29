import React, { useEffect, useState } from 'react'

import {
    VStack,
    Heading,
    ScrollView,
    useTheme,
} from 'native-base' 

import {
    Envelope,
    LockKey
} from 'phosphor-react-native'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import Header from '../components/Header'
import Button from '../components/Button'
import InputForm from '../components/InputForm'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'

const Login:React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { colors } = useTheme()
    const { login } = useAuth()

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('E-mail invalido')
            .required('E-mail é obrigatório'),
        password: yup
            .string()
            .required('Senha é obrigatória')
    })

    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async ({email, password}: any) => {
        setIsLoading(true)
        const hasError = await login({
            email,
            password
        })
        if(!hasError){
            setIsLoading(false)
        }
    }

    useEffect(() => {
        register('email')
        register('password')
    },[register])

    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header title="Login" />
            <VStack
                flex={1}
                paddingY={8}
                paddingX={8}
                justifyContent="space-around"
            >
                <Heading 
                    fontFamily="body"
                    color="primary.500"
                >
                    Acesse sua conta
                </Heading>

                <ScrollView
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >   
                    <InputForm
                        title='E-mail'
                        placeholder='E-mail'
                        keyboardType='email-address'
                        onChangeText={text => setValue('email', text)}
                        error={errors?.email}
                        icon={<Envelope size={20} color={colors.gray[300]}/>}
                    />
                    <InputForm 
                        title='Senha'
                        placeholder='Senha'
                        onChangeText={text => setValue('password', text)}
                        error={errors?.password}
                        secureTextEntry
                        icon={<LockKey size={20} color={colors.gray[300]}/>}
                    />
                </ScrollView>

                <Button 
                    title='Entrar'
                    isLoading={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />

            </VStack>

        </VStack>
    )
}

export default Login