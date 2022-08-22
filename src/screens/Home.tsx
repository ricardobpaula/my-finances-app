import React from 'react'

import {
    VStack,
    Heading,
    useTheme
} from 'native-base' 

import {
    ArrowUp,
    ArrowDown,
    CreditCard,
    Wallet
} from 'phosphor-react-native'

import NewTransactionStagger from '../components/NewTransactionStagger/NewTransactionStagger'
import ItemResume from '../components/ItemResume'

const Home:React.FC = () => {

    const { colors } = useTheme()

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
            >
                <Heading textAlign='center' color='gray.200'>Agosto</Heading>
            
                <ItemResume
                    title='Entradas'
                    value={33300.45}
                    icon={<ArrowUp size={20}/>}
                    backgroundColorIcon={colors.green[300]}
                />            
                <ItemResume
                    title='Saidas'
                    value={4000.30}
                    icon={<ArrowDown size={20}/>}
                    backgroundColorIcon={colors.red[300]}
                />
                <ItemResume
                    title='Cartões de crédito'
                    value={3533.21}
                    icon={<CreditCard size={20}/>}
                    backgroundColorIcon={colors.secondary[500]}
                />
                <ItemResume
                    title='Saldo'
                    value={25766.94}
                    icon={<Wallet size={20}/>}
                    backgroundColorIcon={colors.primary[500]}
                />

            </VStack>

            <NewTransactionStagger />

            
        </VStack>
    )
}

export default Home