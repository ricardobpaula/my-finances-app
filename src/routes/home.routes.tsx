import React from 'react' 

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import NewIncome from '../screens/NewIncome'

const { Navigator, Screen } = createNativeStackNavigator()

export type HomeStackParamsList = {
    Home: undefined
    NewIncome: undefined
    NewExpense: undefined
    NewTransfer: undefined
    NewExpenseCreditCard: undefined
}

const HomeStack:React.FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Home' component={Home} />
            <Screen name='NewIncome' component={NewIncome} />
        </Navigator>
    )
}

export default HomeStack 