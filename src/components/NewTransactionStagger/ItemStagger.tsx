import React from 'react' 

import {
    Box,
    Text,
    HStack,
    Pressable,
    IPressableProps
} from 'native-base' 

type ItemStaggerProps = IPressableProps & {
    title: string
    icon: React.ReactNode
    backgroundColor: string
}

const ItemStagger:React.FC<ItemStaggerProps> = ({title, icon,backgroundColor, ...rest}) => {
    return (
        <Pressable
            _pressed={{opacity: 0.7}}
            {...rest}
            flex={1}
        >
            <HStack
                space={2}
                marginX={5}
                marginY={3}
                justifyContent='space-between'
                alignItems='center'
                backgroundColor={backgroundColor}
                padding={3}
                rounded={30}
            >
                <Text paddingLeft={2} color='gray.700'>{title}</Text>
                <Box borderLeftWidth={1} paddingLeft={2}>
                    {icon}
                </Box>
            </HStack>
        </Pressable>
    )
}

export default ItemStagger