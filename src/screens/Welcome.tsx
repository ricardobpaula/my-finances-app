import React from 'react'

import {
    VStack,
    Heading
} from 'native-base'

import Saving from '../assets/saving.svg'

import Button from '../components/Button'

const Welcome:React.FC = () => {

    const handleStart = () => {
        console.log('Start')
    }
    return (
        <VStack 
            flex={1}
            paddingX={8}
            paddingY={8}
            bgColor="gray.700"
            justifyContent="space-around"
            safeArea
        >
            <Heading
                color="primary.700"
                fontSize="2xl"
                textAlign="center"
            >
                Organize suas finanças aqui
            </Heading>

            <Saving width="100%" height="100%"/>

            <Button 
                title="Quero começar"
                onPress={handleStart}
            />
        </VStack>
    )
}

export default Welcome