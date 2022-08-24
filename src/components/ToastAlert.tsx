import React from 'react' 

import {
    Alert,
    IAlertProps,
    HStack,
    Text,
    VStack,
    Pressable,
} from 'native-base' 

type ToastAlertProps = IAlertProps & {
    title: string
    description: string
    isClosable?: boolean
    close?: () => void
}

const ToastAlert:React.FC<ToastAlertProps> = ({
    title,
    description,
    isClosable = false,
    close = () => {},
    ...rest}) => {
    return (
        <Alert
            maxWidth="full"
            alignSelf="center"
            flexDirection="row"
            marginX={5}
            rounded="xl"
            {...rest}
        >
            <Pressable
                disabled={!isClosable}
                onPress={close}
                width="full"
            >
                <VStack space={1} width="full">
                    <HStack space={2} width="full" alignItems="center">
                            <Alert.Icon />
                            <Text fontSize="sm">
                                {title}
                            </Text>
                    </HStack>
                    <Text textAlign="center" fontSize="xs">
                        {description}
                    </Text>
                </VStack>
            </Pressable>
        </Alert>
    )
}

export default ToastAlert