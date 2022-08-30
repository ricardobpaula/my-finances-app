import React, { useEffect, useState } from 'react' 

import {
    VStack,
    useTheme
} from 'native-base'

import { CreditCard, Calendar, Money } from 'phosphor-react-native'

import { useNavigation } from '@react-navigation/native'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'

import api from '../services/api'

import Header from '../components/Header'
import Button from '../components/Button'
import InputForm from '../components/InputForm'

import { useCustomToast } from '../hooks/useCustomToast'

const FormCreditCard:React.FC<any> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { colors } = useTheme()
    const navigation = useNavigation()

    const { show } = useCustomToast()

    const schema = yup.object().shape({
        name: yup
            .string()
            .required('Nome da conta é obrigatório'),
        dueDay: yup
            .number()
            .min(1, 'Dia minimo é 1')
            .max(30, 'Dia maxímo é 30')
            .required('Dia de vencimento é obrigatório'),
        balance: yup
            .number()
            .default(0)
    })

    const { register, reset, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async ({name, dueDay, balance}: any) => {
        setIsLoading(true)
        try {
            const { status: statusCode } = await api.post('/credit-cards', {
                name,
                dueDay,
                balance
            })

            const message = statusCode === 201
                ? 'Cartão de credito cadastrado com sucesso'
                : 'Erro ao cadastradar cartão de crédito'
            
            const status = statusCode === 201 
                ? 'success'
                : 'error'

            show({
                id: 'form-credit-card',
                title: 'Novo cartão de crédito',
                message,
                status
            })

            if(statusCode === 201) {
                reset()
                navigation.goBack()
            }
        } catch (error: any) {
            setIsLoading(false)
            console.error(error)
        }
        
    }

    useEffect(() => {
        register('name')
        register('dueDay')
        register('balance')
    }, [register])

    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header title="Novo cartão de crédito" />

            <VStack
                flex={1}
                paddingTop={8}
                paddingX={8}
                justifyContent="space-between"
            >
                <VStack>   
                    <InputForm
                        title='Nome do cartão'
                        placeholder='Ex: Cartão exemplo'
                        onChangeText={text => setValue('name', text)}
                        error={errors?.name}
                        icon={<CreditCard size={20} color={colors.gray[300]}/>}
                    />
                    <InputForm
                        title='Dia de vencimento'
                        placeholder='Ex: 15'
                        keyboardType='decimal-pad'
                        onChangeText={value => setValue('dueDay', value)}
                        error={errors?.dueDay}
                        icon={<Calendar size={20} color={colors.gray[300]}/>}
                    />
                    <InputForm
                        title='Saldo do cartão'
                        placeholder='R$ 0,00'
                        keyboardType='decimal-pad'
                        onChangeText={value => setValue('balance', value)}
                        error={errors?.email}
                        icon={<Money size={20} color={colors.gray[300]}/>}
                    />

                </VStack>

                <Button 
                    title='Novo cartão de crédito'
                    isLoading={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />

            </VStack>
        </VStack>
    )
}

export default FormCreditCard