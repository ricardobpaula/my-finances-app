import React from 'react' 

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useAuth } from '../hooks/useAuth'
import Loading from '../components/Loading'

const Routes:React.FC = () => {

    const { signed, loading } = useAuth()
    
    if (loading) {
        return <Loading />
    }

    return signed ?  <AppRoutes /> : <AuthRoutes />
}

export default Routes