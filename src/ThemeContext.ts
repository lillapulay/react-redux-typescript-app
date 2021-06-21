import { createContext, useContext } from "react";

/* Leaving these here for now - I couldn't figure how to set a local file instead of an external link as backgroundImage, 
not even with require - what would be the right way to do it? Both images are in the src folder */
import backgroundLight from './background.jpg';
import backgroundDark from './darkbackground.jpg';

/* Describes all themes that can be selected
Underlying type is represented as a string - easier to debug, but still type-safe */

export const Theme: any = {
  sepia: {
    color: "red",
    backgroundImage: `url("https://wallpapercave.com/wp/wp3294030.jpg")`
  },
  light: {
    color: "green",
    backgroundImage: `url("https://www.wonderwall.co.uk/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59994506/Watercolor-world-map-WW-69915049.jpeg")`
  }
}

/* Represent what can be accessed from the context
Contains the 2 pieces of data from above */
export type ThemeContextType = {
  theme: typeof Theme;
  setTheme: (Theme: any) => void;
}

/* Object used to provide context
Here is the type associated with this context declared as <ThemeContextType> and its default values
These default values are returned to consumers when there is no theme provider */
export const ThemeContext = createContext<ThemeContextType>(
  { 
    theme: Theme.sepia, 
		setTheme: theme => console.warn('no theme provider')
	}
);

/* Custom hook to make consuming the theme and its setter function more convenient */
export const useTheme = () => useContext(ThemeContext);