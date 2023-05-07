import { useTheme } from "./ThemeProvider"
import { useEffect, useState } from "react"
import { setCurrentTheme } from "./utility/themeValidation"

type ButtonProps = {
    text: string
}

function GhostButton({ text }: ButtonProps) {
    const [themeTextClass, setThemeTextClass] =
        useState<string>("text-purple-700")
    const currentTheme = useTheme()

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass
        })
    }, [currentTheme])

    return (
        <button
            className={`hover:bg-white hover:shadow-md duration-300 cursor-pointer px-4 py-1 rounded ${themeTextClass} font-bold text-sm`}
        >
            {text}
        </button>
    )
}

export default GhostButton
