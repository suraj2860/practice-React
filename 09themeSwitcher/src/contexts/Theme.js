import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider 

export const useTheme = () => {
    return useContext(ThemeContext)
}