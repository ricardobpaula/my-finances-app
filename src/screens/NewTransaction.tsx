import React from 'react' 

import {
    VStack
} from 'native-base' 

import Header from '../components/Header'

const NewTransaction:React.FC = () => {
    
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header
                title='Nova movimentação'
            />

        </VStack>
    )
}

export default NewTransaction