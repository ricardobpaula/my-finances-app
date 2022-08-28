import React from 'react' 

import {
    Pressable,
    IPressableProps,
    Text,
    HStack
} from 'native-base' 

type ItemBundleProps = IPressableProps & {
    title: string
    balance: number
    hide?: boolean
}

const ItemBundle:React.FC<ItemBundleProps> = ({ 
    title,
    balance,
    hide = false,
    ...rest }) => {
    return (
        <Pressable
            width='full'
            _pressed={{opacity: 0.7}}
            {...rest}
        >
            <HStack
                justifyContent='space-between'
            >
                <Text color="gray.100" fontSize="sm">
                    {title}
                </Text>

                <Text color="gray.100" fontSize="sm">
                    {   hide
                            ? '*'.repeat(8)
                            : balance.toLocaleString('pt-br', {style: 'currency',currency: 'BRL' })
                    }
                </Text>
            </HStack>
        </Pressable>
    )
}

export default ItemBundle