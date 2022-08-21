import React from 'react' 

import { useTheme } from 'native-base'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ArrowsLeftRight, ChartBar, Gear, House, Plus } from 'phosphor-react-native'

import HomeStack from './home.routes'

import Transactions from '../screens/Transactions'
import Settings from '../screens/Settings'
import Reports from '../screens/Reports'

const { Navigator, Screen } = createBottomTabNavigator()

const AppRoutes:React.FC = () => {
    const { colors } = useTheme()
    return (
        <Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary[500],
                tabBarInactiveTintColor: colors.gray[200],
                tabBarStyle: {
                    backgroundColor: colors.gray[600]
                },
            }}
        >
            <Screen 
                name='HomeStack' 
                component={HomeStack} 
                options={{
                    tabBarIcon: ({ color }) => <House color={color} />,
                }}
            />
            <Screen 
                name='Transactions' 
                component={Transactions} 
                options={{
                    tabBarIcon: ({ color }) => <ArrowsLeftRight color={color} />,
                }}
            />
            <Screen 
                name='Reports'
                component={Reports} 
                options={{
                    tabBarIcon: ({ color }) => <ChartBar color={color} />,
                }}
            />
            <Screen 
                name='Settings' 
                component={Settings} 
                options={{
                    tabBarIcon: ({ color }) => <Gear color={color} />,
                }}
            />
        </Navigator>
    )
}

export default AppRoutes