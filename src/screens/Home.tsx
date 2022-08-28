import React, { useState } from 'react'

import {
    VStack,
    Heading,
    useTheme,
    Text,
    IconButton,
    Box,
    HStack,
    ScrollView
} from 'native-base' 

import {
    Eye,
    EyeClosed,
    Bank,
    Wallet,
    Cardholder,
    ArrowUp,
    ArrowDown,
    CreditCard
} from 'phosphor-react-native'

import NewTransactionStagger from '../components/NewTransactionStagger/NewTransactionStagger'
import ItemResume from '../components/ItemResume'
import Bundle from '../components/Bundle'

const Home:React.FC = () => {

    const [hide, setHide] = useState<boolean>(false)

    const { colors } = useTheme()

    const handleToggleHide = () => {
        setHide(hide => !hide)
    }

    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
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

            <ScrollView
            >
                <Bundle
                    title='Minhas contas'
                    icon={<Bank color={colors.primary[500]} size={24}/>}
                    balance={33300.45}
                    data={
                        [
                            {id: '1', title: 'Carteira', balance: 23300.45, type: 'wallet'},
                            {id: '2', title: 'Nubank', balance: 10000.00, type: 'bank'},
                        ]
                    }
                    hide={hide}
                    EmptyComponent={<Text>Não possui dados</Text>}
                />                    

                <Bundle
                    title='Cartões de crédito'
                    icon={<Cardholder color={colors.primary[500]} size={24}/>}
                    balance={3533.21}
                    data={[]}
                    hide={hide}
                    EmptyComponent={<Text color="white">Não possui dados</Text>}
                />
                    
            </ScrollView>

            <NewTransactionStagger />
            
        </VStack>
    )
}

export default Home