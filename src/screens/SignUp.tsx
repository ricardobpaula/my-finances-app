import React, { useEffect, useState } from 'react' 

import {
    VStack,
    Heading,
    ScrollView
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

const SignUp:React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

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
                    />
                    <InputForm
                        title='Sobrenome'
                        placeholder='Sobrenome'
                        onChangeText={text => setValue('lastName', text)}
                        error={errors?.lastName}
                    />
                    <InputForm
                        title='E-mail'
                        placeholder='E-mail'
                        onChangeText={text => setValue('email', text)}
                        error={errors?.email}
                    />
                    <InputForm
                        title='Senha'
                        placeholder='Senha'
                        onChangeText={text => setValue('password', text)}
                        error={errors?.password}
                        secureTextEntry
                    />
                    <InputForm
                        title='Confirmação da senha'
                        placeholder='Confirmação da senha'
                        onChangeText={text => setValue('confirmPassword', text)}
                        error={errors?.confirmPassword}
                        secureTextEntry
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