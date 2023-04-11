import { ReactNode, createContext, useContext, useState } from "react"

const ThemeContext = createContext<any>(null)
const ThemeUpdateContext = createContext<any>(null)

type ThemeProviderProps = {
    children: ReactNode
}

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("currentTheme")
            return storedTheme || "purple"
        } else {
            return "purple"
        }
    })

    function toggleTheme(theme: string) {
        setTheme(theme)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
