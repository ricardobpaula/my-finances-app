import React from 'react' 

import {
    Pressable,
    Text,
    VStack
} from 'native-base' 

type EmptyBundleProps = {
    title: string
    icon: React.ReactNode
}

const EmptyBundle:React.FC<EmptyBundleProps> = ({ title, icon }) => {
    return (
        <VStack alignItems='center'>
            {icon}
            <Text color='gray.200' textAlign='center'>{title}</Text>
        </VStack>
    )
}

export default EmptyBundle