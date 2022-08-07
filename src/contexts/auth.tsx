import React, {
    createContext,
    useState,
    useEffect,
    useContext
} from 'react'

import { Alert } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import jwtDecode from 'jwt-decode'

import { getAuthStorage, setAuthStorage } from '../utils/storage'

import api from '../services/api'

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
    logout(): void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider:React.FC = ({children}) => {
    const [user, setUser] = useState<User>()
    const [loading, setLoading] = useState<boolean>(true)
    
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

        }catch (error: any) {
            if(!error.response){
                return Alert.alert('Login', 'Nos desculpe, não foi possivel conectar aos nossos servidores')
            }

            const { response } = error

            let message: string
            
            switch (response.status) {
                case 404:
                  message = 'E-mail/Senha estão incorretos.'
                  break
                case 500:
                  message = 'Nos desculpe, não foi possivel conectar aos nossos servidores.'
                  break
                default:
                  message = 'Oops, algo de errado não está certo.'
                  break
              }
              
              Alert.alert('Login', message)
        }
    }

    function logout():void {
        AsyncStorage.clear()
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
  )    
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}