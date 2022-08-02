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
            background="primary.700"
            height={14}
            fontSize="sm"
            rounded="2xl"
            _pressed={{bg: "primary.500"}}
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