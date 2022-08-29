import React, {
    createContext,
    useState,
    useEffect,
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import jwtDecode from 'jwt-decode'

import { getAuthStorage, setAuthStorage } from '../utils/storage'

import api from '../services/api'
import ToastAlert from '../components/ToastAlert'
import { useCustomToast } from '../hooks/useCustomToast'
interface AuthProps {
    user: User
    token: string
}

interface RequestProps {
    email: string
    password: string
}

interface AuthContextProps {
    loading: boolean
    signed: boolean
    user: User
    login(request: RequestProps): Promise<void>
    logout(): Promise<void>
}

type AuthProviderProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>()
    const [loading, setLoading] = useState<boolean>(true)
    const { show } = useCustomToast()

    useEffect(() => {
        async function loadStorage() {
            const storage = await getAuthStorage()
            
            if (!storage){
                setUser(undefined)
                setLoading(false)
                return
            }

            if(new Date() > new Date(storage.token.expiresIn)){
                setUser(undefined)
                setLoading(false)
                return
            }

            setUser(storage.user)
            setLoading(false)

        }
        loadStorage()
    },[])

    async function login({email, password}: RequestProps):Promise<void> {
        try {
            const { data: { user, token} } = await api.post<AuthProps>('/auth/login', {
                email,
                password
            })

            const { exp } = jwtDecode(token) as any

            const expiresIn =  new Date(Number(exp) * 1000)

            await setAuthStorage({
                user,
                token: {
                    token,
                    expiresIn
                }
            })

            api.defaults.headers['x-access-token'] = token

            setUser(user)
            setLoading(false)

        } catch (error: any) {
            const toastId = 'toast-login'
            const statusCode = error?.response?.status ?? 500
            const status = statusCode === 404 ? 'warning' : 'error'
            let message = ''

            switch (statusCode) {
                case 404:
                  message = 'E-mail e/ou senha estão incorretos.'
                  break
                case 500:
                  message = 'Nos desculpe, não foi possivel conectar aos nossos servidores.'
                  break
                default:
                  message = 'Oops, algo de errado não está certo.'
                  break
            }
              
            show({
                id: toastId,
                title: 'Login',
                message,
                status
            })
        }
    }

    async function logout():Promise<void> {
        await AsyncStorage.clear()
        api.defaults.headers['x-access-token'] = undefined
        setUser(undefined)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
  )    
}