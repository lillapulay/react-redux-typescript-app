import React from 'react'
import { Theme, useTheme } from '../../ThemeContext'

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const handleClick = () => {
    theme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark)
    //setTheme(Theme.Dark)
    console.log(theme)
  }

  return (
    <button className="themeButton" onClick={handleClick}>
      Switch Theme
    </button>
  )
}
