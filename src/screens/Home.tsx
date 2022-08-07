import React from 'react' 

import {
    Text,
    VStack
} from 'native-base' 

import Header from '../components/Header'

const Home:React.FC = () => {
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header title="Login" />
            <VStack
                flex={1}
                paddingY={8}
                paddingX={8}
                justifyContent="space-around"
            >
                <Text>Hello World</Text>
            </VStack>
        </VStack>
    )
}

export default Home