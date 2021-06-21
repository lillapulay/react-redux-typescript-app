import { createContext, useContext } from 'react'

/* Describes all themes that can be selected
Underlying type is represented as a string - easier to debug, but still type-safe */
export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

/* Represent what can be accessed from the context
Contains the 2 pieces of data from above */
export type ThemeContextType = {
  theme: Theme
  setTheme: (Theme: Theme) => void
}

/* Object used to provide context
Here is the type associated with this context declared as <ThemeContextType> and its default values
These default values are returned to consumers when there is no theme provider */
export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: (theme) => console.warn('no theme provider'),
})

/* Custom hook to make consuming the theme and its setter fonction more convenient */
export const useTheme = () => useContext(ThemeContext)
