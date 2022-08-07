import React from 'react' 

import {
    Center,
    Spinner
} from 'native-base' 

const Loading:React.FC<any> = () => {
    return (
        <Center flex={1} bg="gray.700">
            <Spinner color="primary.700" />
        </Center>
    )
}

export default Loading