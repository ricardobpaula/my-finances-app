import React from 'react' 

import {
    VStack
} from 'native-base' 
import Header from '../components/Header'

const Reports:React.FC = () => {
    return (
        <VStack
            flex={1}
            bgColor="gray.500"
            safeArea
        >
            <Header 
                title='Relatórios'
                backButton={false}
            />
        </VStack>
    )
}

export default Reports