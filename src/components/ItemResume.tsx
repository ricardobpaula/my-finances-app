import React from 'react' 

import {
    Box,
    HStack,
    Text
} from 'native-base' 

type ItemResumeProps = {
    title: string
    value: number
    icon: React.ReactNode
    backgroundColorIcon: string
    hide?: boolean
}

const ItemResume:React.FC<ItemResumeProps> = ({ 
    title, 
    value,
    icon,
    backgroundColorIcon,
    hide = false
 }) => {
    return (
        <HStack
                marginY={2}
                justifyContent='space-between'
            >
                <HStack space={2} alignItems="center">
                    <Box
                        backgroundColor={backgroundColorIcon}
                        padding={1}
                        rounded={20}
                    >
                        {icon}
                    </Box>
                    <Text color="gray.100" fontSize="xs">{title}</Text>
                </HStack>
                <Text color="gray.100" fontSize="xs">
                    {   hide
                            ? '*'.repeat(8)
                            : value.toLocaleString('pt-br', {style: 'currency',currency: 'BRL' })
                    
                    }
                </Text>
        </HStack>
    )
}

export default ItemResume