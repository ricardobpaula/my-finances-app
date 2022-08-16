import React from 'react' 

import {
    VStack
} from 'native-base' 
import Header from '../components/Header'
import Button from '../components/Button'
import { useAuth } from '../contexts/auth'

const Settings:React.FC = () => {
    const { logout } = useAuth()

    const handleLogout = async () => {
        await logout()
    }
    
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header
                title='Configurações'
                backButton={false}
            />
            <VStack
                flex={1}
                paddingY={8}
                paddingX={8}
                justifyContent="space-around"
            >
                <Button title='Sair' onPress={handleLogout} />
            </VStack>
        </VStack>
    )
}

export default Settings