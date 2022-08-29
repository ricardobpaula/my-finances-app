import React from "react"
import { Toast } from "native-base"

import ToastAlert from '../components/ToastAlert'

type CustomToastProps = {
    title: string
    id: string
    status: 'success' | 'warning' | 'error'
    message: string
}

const show = (props: CustomToastProps) => {
    const { title, id, status, message } = props

    if(!Toast.isActive(id)){
        Toast.show({
            render: () => 
                <ToastAlert                         
                    title={title}
                    description={message}
                    status={status}
                    isClosable
                    close={() => Toast.close(id)}
                />,
                duration: 1000 * 3, // ms * ss
                placement: 'top',
                id
        })
    }
}

export const useCustomToast = () => {
    return { show }
}