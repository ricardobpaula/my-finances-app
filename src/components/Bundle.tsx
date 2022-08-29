import React from 'react' 

import {
    Text,
    VStack,
    HStack,
    Heading,
    useTheme,
    IconButton
} from 'native-base'

import ItemBundle from './ItemBundle'

import { Plus } from 'phosphor-react-native'

export type DataProps = {
    id: string
    title: string
    balance: number
}

type BundleProps = {
    title: string
    icon: React.ReactNode
    balance: number
    data: DataProps[]
    onPress: () => void
    EmptyComponent: React.ReactNode
    hide?: boolean
}

const Bundle:React.FC<BundleProps> = ({ 
    title,
    icon,
    balance,
    data,
    EmptyComponent,
    onPress,
    hide = false }) => {

    const { colors } = useTheme()

    return (
        <VStack
            backgroundColor="gray.600"
            rounded={25}
            paddingY={2}
            margin={2}
        >
            <HStack 
                justifyContent="space-between"
                paddingX={4}
                alignItems="center"
            >
                {icon}

                <Heading color="primary.500" fontSize="xl">
                    {title}
                </Heading>
                
                <IconButton
                    icon={<Plus color={colors.primary[500]} size={24}/>}
                    onPress={onPress}
                />
                
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

            { data.length > 0 &&
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
            }
        </VStack>
    )
}

export default Bundle