import React from 'react' 

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import NewIncome from '../screens/NewIncome'
import FormAccount from '../screens/FormAccount'

const { Navigator, Screen } = createNativeStackNavigator()

export type HomeStackParamsList = {
    Home: undefined
    NewIncome: undefined
    NewExpense: undefined
    NewTransfer: undefined
    NewExpenseCreditCard: undefined
    FormAccount: undefined
}

const HomeStack:React.FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Home' component={Home} />
            <Screen name='NewIncome' component={NewIncome} />
            <Screen name='FormAccount' component={FormAccount} />
        </Navigator>
    )
}

export default HomeStack 