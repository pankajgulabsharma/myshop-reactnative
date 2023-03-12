// import React, { useEffect } from 'react'
// import { colors } from '../colors'
// import { typography } from '../typography'
// import { shape } from '../shape'
// import { getTheme, storeTheme } from '../../services/localStorage'

// export const ThemeContext = React.createContext()

// const ThemeProvider = ({ children }) => {
//   const [isLightTheme, setLightTheme] = React.useState(false)
//   const toggleTheme = () => {
//     storeTheme(isLightTheme ? 'dark' : 'light')
//     setLightTheme((previousState) => !previousState)
//   }

//   useEffect(() => {
//     setThemeFromLocal()
//   }, [])

//   const setThemeFromLocal = async () => {
//     const theme = await getTheme()
//     if (theme && theme === 'light') {
//       setLightTheme(true)
//     } else {
//       setLightTheme(false)
//     }
//   }

//   const theme = {
//     colors: isLightTheme ? colors.light : colors.dark,
//     typography,
//     toggleTheme,
//     isLightTheme,
//     shape,
//   }
//   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
// }

// export default ThemeProvider
