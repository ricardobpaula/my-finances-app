import React from 'react' 

import {
    VStack
} from 'native-base' 

const Home:React.FC = () => {
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <VStack
                flex={1}
                paddingY={8}
                paddingX={8}
                justifyContent="space-around"
            >

            </VStack>
        </VStack>
    )
}

export default Home