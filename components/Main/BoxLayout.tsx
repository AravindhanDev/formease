import React, { useEffect, useState } from "react"
import { ReactNode } from "react"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"

interface BoxLayoutProps {
    children: ReactNode
}

interface SideBoxLayoutProps {
    children: ReactNode
}

function SideBoxLayout({ children }: SideBoxLayoutProps) {
    const currentTheme = useTheme()
    const [themeBorderClass, setThemeBorderClass] =
        useState("border-purple-700")

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeBorderClass
        })
    }, [currentTheme])

    return (
        <div
            className={`mb-5 border-l-8 shadow-lg rounded-md ${themeBorderClass} relative bg-white p-5 sm:p-7`}
        >
            {children}
        </div>
    )
}

function TopBoxLayout({ children }: BoxLayoutProps) {
    const currentTheme = useTheme()
    const [themeBorderClass, setThemeBorderClass] =
        useState("border-purple-700")

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeBorderClass
        })
    }, [currentTheme])

    return (
        <div
            className={`mb-5 border-t-8 shadow-lg rounded-md ${themeBorderClass} bg-white p-7`}
        >
            {children}
        </div>
    )
}

export { TopBoxLayout, SideBoxLayout }
