import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#E09200',
      600: '#EE9900',
      500: '#F9A826',
      300: '#FFB833'
    },
    secondary: {
      700: '#6C63FF',
      500: '#8b85ff'
    },
    red: {
      700: '#F00000',
      500: '#FF0000',
      300: '#FF5555',
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Poppins_700Bold',
    body: 'Poppins_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});