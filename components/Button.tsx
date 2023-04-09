import { useTheme } from "./ThemeProvider"
import { useEffect, useState } from "react"
import { setCurrentTheme } from "./utility/themeValidation"

type ButtonProps = {
    text: string
}

function Button({ text }: ButtonProps) {
    const [themeBgClass, setThemeBgClass] = useState<string>("text-purple-700")
    const currentTheme = useTheme()

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeBgClass,
        })
    }, [currentTheme])

    return (
        <button
            className={`cursor-pointer px-5 py-1.5 rounded text-white  ${themeBgClass} font-medium`}
        >
            {text}
        </button>
    )
}

export default Button
