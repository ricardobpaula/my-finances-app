import React, { useEffect, useState } from 'react' 

import {
    useTheme,
    VStack
} from 'native-base'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import Header from '../components/Header'
import Button from '../components/Button'
import InputForm from '../components/InputForm'
import { useForm } from 'react-hook-form'
import { Bank, CurrencyDollarSimple, Money } from 'phosphor-react-native'

const FormAccount:React.FC<any> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { colors } = useTheme()

    const schema = yup.object().shape({
        name: yup
            .string()
            .required('Nome da conta é obrigatório'),
        balance: yup
            .number()
            .default(0)
    })

    const { register, reset, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = ({name, balance}: any) => {
        setIsLoading(true)
        // TODO: call api method
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    useEffect(() => {
        register('name')
        register('balance')
    }, [register])

    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header title="Nova conta" />

            <VStack
                flex={1}
                paddingY={8}
                paddingX={8}
                justifyContent="space-around"
            >
                <VStack
                    flex= {1}
                >   
                    <InputForm
                        title='Nome da conta'
                        placeholder='Ex: Carteira'
                        onChangeText={text => setValue('name', text)}
                        error={errors?.name}
                        icon={<Bank size={20} color={colors.gray[300]}/>}
                    />
                    <InputForm
                        title='Saldo da conta'
                        placeholder='R$ 0,00'
                        keyboardType='decimal-pad'
                        onChangeText={value => setValue('balance', value)}
                        error={errors?.email}
                        icon={<Money size={20} color={colors.gray[300]}/>}
                    />

                </VStack>

                <Button 
                    title='Nova conta'
                    isLoading={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />

            </VStack>
        </VStack>
    )
}

export default FormAccount