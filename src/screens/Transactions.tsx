import React from 'react' 

import {
    VStack
} from 'native-base' 
import Header from '../components/Header'
import NewTransactionStagger from '../components/NewTransactionStagger/NewTransactionStagger'

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

            <NewTransactionStagger />
        </VStack>
    )
}

export default Transactions