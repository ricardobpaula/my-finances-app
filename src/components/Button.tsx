import React from 'react' 

import {
    Button as ButtonNativeBase,
    IButtonProps,
    Heading
} from 'native-base' 

type Props = IButtonProps & {
    title: string
    transparent?: boolean
}
const Button:React.FC<Props> = ({title,transparent = false, ...rest}) => {
    return (
        <ButtonNativeBase
            background="primary.500"
            height={12}
            fontSize="sm"
            rounded="xl"
            _pressed={{opacity: 0.7}}
            marginY={4}
            width="full"
            {...rest}
        >
            <Heading color="white" fontSize="md">
                {title}
            </Heading>
        </ButtonNativeBase>
    )
}

export default Button