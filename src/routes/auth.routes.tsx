import React from 'react'

import {  createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const { Navigator, Screen } = createNativeStackNavigator()

export type AuthStackParamsList = {
    Welcome: undefined
    Login: undefined
    SignUp: undefined
}

const AuthRoutes:React.FC = () => {
    return (
       <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Welcome' component={Welcome}/>
        <Screen name='Login' component={Login}/>
        <Screen name='SignUp' component={SignUp}/>
       </Navigator>
    )
}

export default AuthRoutes