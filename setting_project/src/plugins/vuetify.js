// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import {VDateInput, VTreeview, VTimePicker} from 'vuetify/labs/components'
import {ko}  from 'vuetify/locale'

// Custom Theme
const CustomDark = {
  dark: true,
  colors: {
    background: '#1E2631',
    surface: '#282F3C',
    'surface-bright' : '#404751',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomIvory = {
  dark: false,
  colors: {
    background: '#FFFFF0',
    surface: '#F2EFDE',
    'surface-bright' : '#e6e2c3',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomBlue = {
  dark: false,
  colors: {
    background: '#f0fcff',
    surface: '#def1f2',
    'surface-bright' : '#b6d9da',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomBlack = {
  dark: true,
  colors: {
    background: '#2b2a28',
    surface: '#363532',
    'surface-bright' : '#5f5f5d',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomPink = {
  dark: false,
  colors: {
    background: '#fff2f0',
    surface: '#f6dada',
    'surface-bright' : '#efcdcd',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomGreen = {
  dark: true,
  colors: {
    background: '#0c2119',
    surface: '#213e35',
    'surface-bright' : '#50796f',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomMint = {
  dark: false,
  colors: {
    background: '#f0feff',
    surface: '#d9f7f3',
    'surface-bright' : '#c4ece6',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}
const CustomBrown = {
  dark: true,
  colors: {
    background: '#362d20',
    surface: '#423a2a',
    'surface-bright' : '#62573f',
    primary: '#5672B3',
    secondary: '#417F78',
    warning: '#E49A4E',
    error: '#DF6E52'
  }
}



export default createVuetify({
  locale: {
    message: {ko}
  },
  components: {
    VDateInput, VTreeview, VTimePicker
  },
  display: {
    mobileBreakpoint: "sm"
  },
  theme: {
    defaultTheme: 'CustomDark',
    themes: {
      CustomDark,
      CustomIvory,
      CustomBlue,
      CustomMint,
      CustomBrown,
      CustomGreen,
      CustomPink,
      CustomBlack
    }
  },

})
