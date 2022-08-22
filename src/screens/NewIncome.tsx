import React from 'react'

import {
    VStack
} from 'native-base'

import Header from '../components/Header'

const NewIncome:React.FC = () => {
    
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header
                title='Nova entrada'
            />

        </VStack>
    )
}

export default NewIncome