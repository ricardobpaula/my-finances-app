import React from 'react' 

import { Platform } from 'react-native'
import {
    Box,
    Divider,
    HStack,
    IconButton,
    PresenceTransition,
    Stagger,
    Text,
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

    const hideOptions = Platform.OS === 'android' ? true : isOpen

    return (
        <VStack 
            position='absolute'
            bottom={0}
            right={0}
        >
            {
                hideOptions ?
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
                            title='Nova Entrada'
                            icon={<ArrowUp size={20}/>}
                            backgroundColor={colors.green[300]}
                            onPress={() => handlePressButton('NewIncome')}
                        />
                        <ItemStagger 
                            title='Nova Saida'
                            icon={<ArrowDown color={colors.gray[700]} size={20}/>}
                            backgroundColor={colors.red[300]}
                        />
                        <ItemStagger
                            title='Cartão de crédito'
                            icon={<CreditCard size={20}/>}
                            backgroundColor={colors.secondary[500]}
                        />
                        <ItemStagger 
                            title='Transferência'
                            icon={<ArrowsDownUp size={20}/>}
                            backgroundColor={colors.primary[500]}
                        />

                    </Stagger>
                </Box>
                : <></>
            }
            <HStack alignItems='center' justifyContent='flex-end'>
                <IconButton
                    shadow={3}
                    padding={3}
                    rounded={30}
                    marginRight={5}
                    marginBottom={5}
                    marginTop={3}
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
                                <Box>
                                    <Plus
                                        color={colors.gray[700]} 
                                        size={20}
                                    />
                                </Box>
                            </PresenceTransition>
                    }
                />
            </HStack>
        </VStack>
    )
}

export default NewTransactionStagger