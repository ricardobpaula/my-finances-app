import React from 'react' 

import {
    Heading,
    HStack,
    VStack
} from 'native-base'

type BundleProps = {
    title: string
    icon: React.ReactNode
}

const Bundle:React.FC<BundleProps> = ({ title, icon, children }) => {
    return (
        <VStack
            backgroundColor="gray.600"
            rounded={25}
            padding={4}
            margin={4}
        >
            <HStack justifyContent="space-between">
                <Heading 
                    color="primary.500"
                    fontSize="xl"
                >
                    {title}
                </Heading>
                {icon}
            </HStack>
            {children}
        </VStack>
    )
}

export default Bundle