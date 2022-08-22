import React from 'react' 

import {
    Box,
    HStack,
    IconButton,
    PresenceTransition,
    Stagger,
    useDisclose,
    useTheme,
    VStack,
} from 'native-base'

import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { 
    Plus,
    ArrowUp, 
    ArrowDown,
    CreditCard,
    ArrowsDownUp
} from 'phosphor-react-native'

import { HomeStackParamsList } from '../../routes/home.routes'

import ItemStagger from './ItemStagger'

type Screen = 'NewIncome' | 'NewExpense'| 'NewExpenseCreditCard' | 'NewTransfer'

type HomeScreenProps = NativeStackNavigationProp<HomeStackParamsList, 'Home'>

const NewTransactionStagger:React.FC = () => {
    const { isOpen, onToggle } = useDisclose()
    const navigation = useNavigation<HomeScreenProps>()
    const { colors } = useTheme()

    const handlePressButton = (screen: Screen) => {
        onToggle()
        navigation.navigate(screen)
    }

    return (
        <VStack 
            position='absolute'
            bottom={0}
            right={0}
        >
            <Box>
                <Stagger 
                    visible={isOpen}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        translateY: 34 
                    }}
                    animate={{
                        translateY: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: 'spring',
                            mass: 0.8,
                            stagger: {
                                offset: 30,
                                reverse: true
                            }
                        }
                    }}
                    exit={{
                        translateY: 34,
                        scale: 0.5,
                        opacity: 0,
                        transition: {
                            duration: 150,
                            stagger: {
                                offset: 30,
                                reverse: true
                            }
                        }
                    }}
                >
                    <ItemStagger 
                        title='Entrada'
                        icon={<ArrowUp size={20}/>}
                        backgroundColorIcon={colors.green[300]}
                        onPress={() => handlePressButton('NewIncome')}
                    />
                    <ItemStagger 
                        title='Saida'
                        icon={<ArrowDown color={colors.gray[700]} size={20}/>}
                        backgroundColorIcon={colors.red[300]}
                    />
                    <ItemStagger
                        title='Cartão de crédito'
                        icon={<CreditCard size={20}/>}
                        backgroundColorIcon={colors.secondary[500]}
                    />
                    <ItemStagger 
                        title='Transferência'
                        icon={<ArrowsDownUp size={20}/>}
                        backgroundColorIcon={colors.primary[500]}
                    />

                </Stagger>
            </Box>
            <HStack alignItems='center' justifyContent='flex-end'>
                <IconButton
                    shadow={3}
                    padding={3}
                    rounded={30}
                    marginRight={5}
                    marginBottom={5}
                    onPress={onToggle}
                    backgroundColor={colors.primary[500]}
                    _pressed={{opacity: 0.7}}
                    icon={
                            <PresenceTransition 
                                visible={isOpen}
                                initial={{
                                    rotate: '0deg'
                                }}
                                animate={{
                                    rotate: '45deg',
                                    transition: {
                                        duration: 150
                                    }
                                }}
                            >
                                <Plus
                                    color={colors.gray[700]} 
                                    size={20}
                                />
                            </PresenceTransition>
                    }
                />
            </HStack>
        </VStack>
    )
}

export default NewTransactionStagger