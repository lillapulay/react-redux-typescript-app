import * as React from 'react'

import { ThemeContext, Theme } from './ThemeContext'
import Routes from './Routes'

export default function App() {
  const [theme, setTheme] = React.useState(Theme.Light)

  return (
    /* Article wrapped the App component with the provider, 
    so the theme should be accessible anywhere in the app
    The entire app is re-rendered if the values in the theme context change,
    so variables shouldn't change too frequently */
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes />
    </ThemeContext.Provider>
  )
}
