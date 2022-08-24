import React from 'react' 

import {
    Heading,
    HStack,
    Text,
    VStack
} from 'native-base'

type BundleProps = {
    title: string
    icon: React.ReactNode
    balance: number
    hide?: boolean
}

const Bundle:React.FC<BundleProps> = ({ title, icon,balance,hide = false,  children }) => {
    return (
        <VStack
            backgroundColor="gray.600"
            rounded={25}
            padding={4}
            margin={4}
        >
            <HStack 
                justifyContent="space-between"
            >
                <Heading color="primary.500" fontSize="xl">
                    {title}
                </Heading>
                {icon}
            </HStack>

            {children}

            <HStack 
                justifyContent="space-between"
                borderTopWidth={1}
                marginTop={2}
                borderColor="gray.300"
            >
                <Text color="gray.100">Saldo total: </Text>
                <Text color="gray.100">{
                    hide 
                        ? '*'.repeat(8)

                        : balance.toLocaleString('pt-br', {style: 'currency',currency: 'BRL' })
                }</Text>
            </HStack>
        </VStack>
    )
}

export default Bundle