import React from 'react' 

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import NewTransaction from '../screens/NewTransaction'

const { Navigator, Screen } = createNativeStackNavigator()

export type HomeStackParamsList = {
    Home: undefined
    NewTransaction: undefined
}

const HomeStack:React.FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Home' component={Home} />
            <Screen name='NewTransaction' component={NewTransaction} />
        </Navigator>
    )
}

export default HomeStack 