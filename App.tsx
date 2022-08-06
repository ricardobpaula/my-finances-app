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
        { fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}

export default App