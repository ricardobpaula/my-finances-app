import React from 'react' 

import {
    Heading,
    HStack,
    Text,
    VStack
} from 'native-base'
import ItemBundle from './ItemBundle'

type DataProps = {
    id: string
    title: string
    balance: number
    type: 'wallet' | 'bank' | 'investiment' | 'credit-card'
}

type BundleProps = {
    title: string
    icon: React.ReactNode
    balance: number
    data: DataProps[]
    EmptyComponent: React.ReactNode
    hide?: boolean
}

const Bundle:React.FC<BundleProps> = ({ 
    title,
    icon,
    balance,
    data,
    EmptyComponent,
    hide = false }) => {

    return (
        <VStack
            backgroundColor="gray.600"
            rounded={25}
            paddingY={4}
            margin={4}
        >
            <HStack 
                justifyContent="space-between"
                paddingX={4}
            >
                <Heading color="primary.500" fontSize="xl">
                    {title}
                </Heading>
                {icon}
            </HStack>

            <VStack
                space={2}
                marginY={2}
                paddingX={4}
            >

                {
                    data.length > 0 ?
                        data.map((item) => {
                            return (
                                <ItemBundle
                                    key={item.id}
                                    title={item.title}
                                    balance={item.balance}
                                    hide={hide}
                                />
                            )
                        }) :
                        EmptyComponent
                }
            </VStack>

            <HStack 
                justifyContent="space-between"
                borderTopWidth={1}
                borderColor="gray.300"
                paddingX={4}
            >
                <Text color="gray.100" fontSize="md">Saldo total: </Text>
                <Text color="gray.100" fontSize="md">{
                    hide 
                        ? '*'.repeat(8)

                        : balance.toLocaleString('pt-br', {style: 'currency',currency: 'BRL' })
                }</Text>
            </HStack>
        </VStack>
    )
}

export default Bundle