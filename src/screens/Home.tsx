import React, { useState } from 'react'

import {
    VStack,
    HStack,
    Heading,
    useTheme,
    IconButton,
    ScrollView
} from 'native-base' 

import {
    Eye,
    Bank,
    Wallet,
    ArrowUp,
    ArrowDown,
    EyeClosed,
    Cardholder,
    CreditCard
} from 'phosphor-react-native'

import { HomeStackParamsList } from '../routes/home.routes'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import NewTransactionStagger from '../components/NewTransactionStagger/NewTransactionStagger'
import ItemResume from '../components/ItemResume'
import Bundle, { DataProps } from '../components/Bundle'
import EmptyBundle from '../components/EmptyBundle'
import { useNavigation } from '@react-navigation/native'

type HomeScreenProps = NativeStackNavigationProp<HomeStackParamsList, 'Home'>

const Home:React.FC = () => {
    
    const [hide, setHide] = useState<boolean>(false)
    const [accounts, setAccounts] = useState<DataProps[]>([
        {id: '1', title: 'Carteira', balance: 23300.45},
        {id: '2', title: 'Nubank', balance: 10000.00},
    ])
    const [creditCards, setCreditCards] = useState<DataProps[]>([])

    const navigation = useNavigation<HomeScreenProps>()

    const { colors } = useTheme()

    const handleToggleHide = () => {
        setHide(hide => !hide)
    }

    const handleCreateAccount = () => {
        navigation.navigate('FormAccount')
    }

    const handleCreateCreditCard = () => {
        console.log('createCreditCard')
    }

    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <ScrollView flex={1}>
                <VStack
                    backgroundColor="gray.600"
                    width='full'
                    borderBottomRadius={50}
                    paddingX={8}
                    paddingY={4}
                    marginBottom={4}
                >
                    <HStack
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Heading textAlign='center' color='gray.200'>Agosto</Heading>

                        <IconButton
                            icon={
                                hide 
                                    ? <EyeClosed size={24} color={colors.gray[100]}/>
                                    : <Eye size={24} color={colors.gray[100]}/>
                        }
                            onPress={handleToggleHide}
                        />

                    </HStack>

                    <ItemResume
                        title='Entradas'
                        value={33300.45}
                        icon={<ArrowUp size={20}/>}
                        backgroundColorIcon={colors.green[300]}
                        hide={hide}
                    />            
                    <ItemResume
                        title='Saidas'
                        value={4000.30}
                        icon={<ArrowDown size={20}/>}
                        backgroundColorIcon={colors.red[300]}
                        hide={hide}
                    />
                    <ItemResume
                        title='Cartões de crédito'
                        value={3533.21}
                        icon={<CreditCard size={20}/>}
                        backgroundColorIcon={colors.secondary[500]}
                        hide={hide}
                    />
                    <ItemResume
                        title='Saldo'
                        value={25766.94}
                        icon={<Wallet size={20}/>}
                        backgroundColorIcon={colors.primary[500]}
                        hide={hide}
                    />

                </VStack>

                <Bundle
                    title='Minhas contas'
                    icon={<Bank color={colors.primary[500]} size={24}/>}
                    onPress={handleCreateAccount}
                    balance={33300.45}
                    data={accounts}
                    hide={hide}
                    EmptyComponent={
                        <EmptyBundle
                            title='Nenhuma conta cadastrada'
                            icon={<Bank
                                color={colors.gray[300]}
                                size={100}
                            />}
                        />
                    }
                />                   

                <Bundle
                    title='Cartões de créditos'
                    icon={<Cardholder color={colors.primary[500]} size={24}/>}
                    balance={3533.21}
                    data={creditCards}
                    hide={hide}
                    onPress={handleCreateCreditCard}
                    EmptyComponent={
                        <EmptyBundle
                            title='Nenhum cartão cadastrado'
                            icon={<CreditCard 
                                    color={colors.gray[300]}
                                    size={100}
                                />}
                        />
                    }
                />
            </ScrollView>

            <NewTransactionStagger />
            
        </VStack>
    )
}

export default Home