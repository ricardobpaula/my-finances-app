import React from 'react' 

import {
    VStack
} from 'native-base' 
import Header from '../components/Header'

const Transactions:React.FC = () => {
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header
                title='Movimentações'
                backButton={false}
            />
        </VStack>
    )
}

export default Transactions