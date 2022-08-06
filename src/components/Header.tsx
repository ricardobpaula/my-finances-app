import React from 'react' 

import {
    HStack, 
    IconButton,
    StyledProps,
    Heading,
    useTheme
} from 'native-base' 

import { useNavigation } from '@react-navigation/native'

import { CaretLeft } from 'phosphor-react-native'

type Props = StyledProps & {
    title: string
}

const Header:React.FC<Props> = ({ title, ...rest }) => {
    const { colors } = useTheme()

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
        <HStack
            width='full'
            bg='gray.500'
            fontFamily='body'
            alignItems='center'
            borderBottomWidth={0.3}
            justifyContent='space-between'
            borderBottomColor='gray.200'
            {...rest}
        >
            <IconButton 
              icon={<CaretLeft color={colors.primary[700]} size={24}/>}
              onPress={handleGoBack}
            />
            <Heading
                flex={1}
                color='primary.500'
                fontSize='lg'
                paddingLeft={3}
            >
                {title}
            </Heading>
        </HStack>
    )
}

export default Header