import React, { useEffect, useState } from 'react' 

import {
    VStack,
    Heading,
    ScrollView,
    useTheme
} from 'native-base' 

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import Header from '../components/Header'
import Button from '../components/Button'
import InputForm from '../components/InputForm'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import api from '../services/api'
import { useAuth } from '../contexts/auth'
import { Envelope, LockKey, User } from 'phosphor-react-native'

const SignUp:React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { colors } = useTheme()
    const { login } = useAuth()

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required('Nome é obrigatório'),
        lastName: yup
            .string()
            .required('Sobrenome é obrigatório'),
        email: yup
            .string()
            .email('E-mail invalido')
            .required('E-mail é obrigatório'),
        password: yup
            .string()
            .min(6, 'Senha tem que ter no minimo de 6 caracteres')
            .required('Senha é obrigatória')
            .oneOf([yup.ref('confirmPassword'), null], 'Senha e confirmação de senha não conferem'),
        confirmPassword: yup
            .string()
            .required('Confirmação de senha é obrigatória')
            .oneOf([yup.ref('password'), null], 'Senha e confirmação de senha não conferem')
    })

    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async ({
        firstName, lastName, email, password
    }: any) => {
        setIsLoading(true)
        try {
            const { status } = await api.post('users', {
                firstName,
                lastName,
                email,
                password
            })

            if(status === 201) {
                await login({email, password})
            }
        }catch (error: any) {
            setIsLoading(false)
            Alert.alert('Cadastro', 'Erro ao realizar o cadastro')
        }
    }

    useEffect(() => {
        register('firstName')
        register('lastName')
        register('email')
        register('password')
        register('confirmPassword')
    }, [register])

    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header title="Cadastro"/>

            <VStack
                flex={1}
                paddingY={8}
                paddingX={8}
                justifyContent="space-between"
            >
                <Heading 
                    fontFamily="body"
                    color="primary.700"
                >
                    Vamos começar
                </Heading>

                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                    }}
                >
                    <InputForm
                        title='Nome'
                        placeholder='Nome'
                        onChangeText={text => setValue('firstName', text)}
                        error={errors?.firstName}
                        icon={<User size={20} color={colors.gray[300]}/>}
                    />
                    <InputForm
                        title='Sobrenome'
                        placeholder='Sobrenome'
                        onChangeText={text => setValue('lastName', text)}
                        error={errors?.lastName}
                        icon={<User size={20} color={colors.gray[300]}/>}
                    />
                    <InputForm
                        title='E-mail'
                        placeholder='E-mail'
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
                    <InputForm
                        title='Confirmação da senha'
                        placeholder='Confirmação da senha'
                        onChangeText={text => setValue('confirmPassword', text)}
                        error={errors?.confirmPassword}
                        secureTextEntry
                        icon={<LockKey size={20} color={colors.gray[300]}/>}
                    />
                </ScrollView>
                
                <Button 
                    title='Cadastrar'
                    isLoading={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />

            </VStack>
            
        </VStack>
    )
}

export default SignUp