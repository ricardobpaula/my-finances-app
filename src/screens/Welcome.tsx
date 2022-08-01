import React from 'react'

import {
    VStack,
    Text
} from 'native-base'

const Welcome:React.FC = () => {
    return (
        <VStack flex={1} bgColor="gray.700" alignItems="center" justifyContent="center">
            <Text color="white">Hello world</Text>
        </VStack>
    )
}

export default Welcome