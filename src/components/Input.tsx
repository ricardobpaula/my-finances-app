import React from 'react' 

import {
    IInputProps,
    Input as NativeBaseInput
} from 'native-base'

export type InputProps = IInputProps

const Input:React.FC<InputProps> = ({...rest}) => {
    return (
        <NativeBaseInput
            size="sm"
            height={12}
            fontSize="sm"
            color="white"
            rounded="2xl"
            borderWidth={0}
            fontFamily="body"
            marginBottom={4}
            autoCapitalize='none'
            backgroundColor={"gray.700"}
            placeholderTextColor="gray.300"
            {...rest}
        />
    )
}

export default Input