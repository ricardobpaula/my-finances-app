import React from 'react' 

import {
    FormControl,
    IFormControlProps
} from 'native-base' 

import Input, { InputProps } from './Input'

type Props = InputProps & {
    title: string
    error?: any
    formControlProps?: IFormControlProps
}

const InputForm:React.FC<Props> = ({title, error,formControlProps, ...rest}) => {
    return (
        <FormControl 
            marginBottom={4}
            isInvalid={!!error}
            {...formControlProps}
        >
            <FormControl.Label
                marginX={2}
            >
                {title}
            </FormControl.Label>
            <Input
                {...rest}
            />
            <FormControl.ErrorMessage
                marginX={2}
            >
                {error?.message}
            </FormControl.ErrorMessage>
        </FormControl>
        
    )
}

export default InputForm