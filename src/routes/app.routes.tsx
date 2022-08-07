import React from 'react' 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

const AppRoutes:React.FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Home' component={Home} />
        </Navigator>
    )
}

export default AppRoutes