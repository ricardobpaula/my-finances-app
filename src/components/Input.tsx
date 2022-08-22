import React, { useState } from 'react' 

import {
    Box,
    IconButton,
    IInputProps,
    Input as NativeBaseInput,
    useTheme
} from 'native-base'

import {
    Eye,
    EyeClosed
} from 'phosphor-react-native'

export type InputProps = IInputProps & {
    icon?: React.ReactNode 
}

const Input:React.FC<InputProps> = ({icon, ...rest}) => {
    
    const [hide, setHide] = useState<boolean>(true)
    const { colors } = useTheme()

    const handleToggleHide = () => {
        setHide(hide => !hide)
    }
    return (
        <NativeBaseInput
            size="sm"
            height={12}
            fontSize="sm"
            color="white"
            rounded="xl"
            borderWidth={0}
            fontFamily="body"
            marginBottom={4}
            autoCapitalize='none'
            backgroundColor={"gray.700"}
            placeholderTextColor="gray.300"
            leftElement={
                    <Box marginLeft={icon ? 3 : 0}>{icon}</Box>
            }
            rightElement={
                rest.secureTextEntry &&
                <IconButton
                        icon={
                            hide 
                                ? <EyeClosed size={20} color={colors.gray[300]}/>
                                : <Eye size={20} color={colors.gray[300]}/>
                    }
                        onPress={handleToggleHide}
                    />
            }
            {...rest}
            secureTextEntry={hide}

        />
    )
}

export default Input