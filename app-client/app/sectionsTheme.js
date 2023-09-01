import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define styles for custom variant
const colorfulVariant = defineStyle((props) => {
  const { colorScheme: c } = props // add color scheme as a prop
  return {
    _light: {
      bg: `${c}.200`,
      color: `${c}.800`,
    },
    _dark: {
      bg: `${c}.700`,
      color: `${c}.200`,
    },
  }
})

const boldVariant = defineStyle((props) => {
  return {
    borderRadius: 'none',
    border: '2px solid',
    fontFamily: 'mono',
    _light: {
      bg: 'white',
      color: `black`,
    },
    _dark: {
      bg: 'black',
      color: 'white',
    },
  }
})

// define custom variants
const variants = {
  colorful: colorfulVariant,
  bold: boldVariant,
}

// export the component theme
export const containerTheme = defineStyleConfig({ variants })