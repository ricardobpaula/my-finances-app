import React from 'react' 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ArrowsLeftRight, ChartBar, Gear, House, Plus } from 'phosphor-react-native'
import Home from '../screens/Home'
import { useTheme } from 'native-base'
import Transactions from '../screens/Transactions'
import Reports from '../screens/Reports'
import Settings from '../screens/Settings'
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
                name='Home' 
                component={Home} 
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
            {/* <Screen name='NewTransaction' 
                component={Home}
                options={{
                    tabBarIcon: () => <Plus
                        color={colors.primary[700]} 
                        size={40}
                    />
                }}
            />
             */}
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