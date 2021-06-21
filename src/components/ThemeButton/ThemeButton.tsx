import React, { useEffect } from 'react'
import { Theme, useTheme } from '../../ThemeContext'

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    theme === Theme.sepia ? setTheme(Theme.light) : setTheme(Theme.sepia)
    const bgUrl = theme.backgroundImage.toString()

    document.body.style.backgroundImage = `${bgUrl}`
  }

  /* Temporary */
  useEffect(() => {
    const bgUrl = theme.backgroundImage.toString()
    document.body.style.backgroundImage = `${bgUrl}`
  }, [theme])

  return (
    <button className="themeButton" onClick={handleClick}>
      {theme === Theme.sepia ? 'Light' : 'Sepia'}
    </button>
  )
}
