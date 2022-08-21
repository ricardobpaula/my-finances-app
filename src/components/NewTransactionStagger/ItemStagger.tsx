import React from 'react' 

import {
    Text,
    HStack,
    IPressableProps,
    useTheme,
    Pressable,
    Box
} from 'native-base' 

type ItemStaggerProps = IPressableProps & {
    title: string
    icon: React.ReactNode
    backgroundColorIcon: string
}

const ItemStagger:React.FC<ItemStaggerProps> = ({title, icon,backgroundColorIcon, ...rest}) => {
    const { colors } = useTheme()

    return (
        <Pressable {...rest}>
            <HStack
                space={2}
                marginX={5}
                marginY={3}
                alignItems='center'
                justifyContent='flex-end'
            >
                <Text color='gray.100'>{title}</Text>
                <Box
                        backgroundColor={backgroundColorIcon}
                        padding={3}
                        rounded={30}
                    >
                    {icon}
                </Box>
            </HStack>
        </Pressable>
    )
}

export default ItemStagger