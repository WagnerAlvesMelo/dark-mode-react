const light = {
  bg: {
    primary: '#fafafa',
    elements: '#ffffff',
    input: '#858585'
  },
  text: {
    primary: '#111517'
  }
}

const dark = {
  bg: {
    primary: '#202c37',
    elements: '#2b3945',
    input: '#ffffff'
  },
  text: {
    primary: '#ffffff'
  }
}

const defaultTheme = {
  fontSizes: {
    small: '1.4rem',
    regular: '1.6rem'
  },
  fontWeights: {
    body: 300,
    bold: 600,
    heading: 800
  }
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }

export type theme = {
  bg: {
    primary: string
    elements: string
    input: string
  }
  text: {
    primary: string
  }
  fontSizes: {
    small: string
    regular: string
  }
  fontWeights: {
    body: number
    bold: number
    heading: number
  }
}
