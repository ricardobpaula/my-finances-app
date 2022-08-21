import React from 'react'

import {
    Text,
    VStack,
    Heading,
    Pressable
} from 'native-base'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Saving from '../assets/saving.svg'

import Button from '../components/Button'
import { AuthStackParamsList } from '../routes/auth.routes'

type WelcomeScreenProps = NativeStackNavigationProp<AuthStackParamsList, 'Welcome'>

const Welcome:React.FC = () => {

    const navigation = useNavigation<WelcomeScreenProps>()

    const handleSignUp = () => {
        navigation.navigate('SignUp')
    }

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <VStack 
            flex={1}
            paddingX={8}
            paddingY={16}
            bgColor="gray.500"
            justifyContent="space-around"
            safeArea
        >
            <Heading
                color="primary.500"
                fontSize="2xl"
                textAlign="center"
            >
                Organize suas finanças aqui
            </Heading>

            <Saving width="100%" height="100%"/>

            <VStack>
                <Button 
                    title="Quero começar"
                    onPress={handleSignUp}
                />
                <Pressable
                    onPress={handleLogin}
                    _pressed={{opacity: 0.2}}
                >
                    <Text
                        color="white"
                        textAlign="center"
                    >
                        Já possui conta?
                    </Text>
                </Pressable>
            </VStack>
        </VStack>
    )
}

export default Welcome