import React from 'react'

import { NativeBaseProvider, StatusBar } from 'native-base'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { THEME } from './src/styles/theme'

import Loading from './src/components/Loading'

import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/contexts/auth'

const App:React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
        <NavigationContainer>
          <AuthProvider>
            <StatusBar
              barStyle='light-content'
              backgroundColor='transparent'
              translucent
            />
            {fontsLoaded ? <Routes /> : <Loading />}
          </AuthProvider>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App