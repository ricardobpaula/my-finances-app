import React from 'react'

import { NativeBaseProvider, StatusBar } from 'native-base'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { THEME } from './src/styles/theme'

import Loading from './src/components/Loading'

import Welcome from './src/screens/Welcome'

const App:React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        { fontsLoaded ? <Welcome /> : <Loading /> }
    </NativeBaseProvider>
  );
}

export default App