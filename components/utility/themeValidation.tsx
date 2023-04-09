import { Dispatch, SetStateAction } from "react"

interface CurrentThemeProps {
    currentTheme: string
    setThemeTextClass?: Dispatch<SetStateAction<string>>
    setThemeBorderClass?: Dispatch<SetStateAction<string>>
    setThemeBgClass?: Dispatch<SetStateAction<string>>
    setThemeAccentClass?: Dispatch<SetStateAction<string>>
}

export function setCurrentTheme(props: CurrentThemeProps) {
    if (props.currentTheme === "purple") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-purple-700")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-purple-700")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-purple-700")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-purple-700")
        }
    }
    if (props.currentTheme === "blue") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-blue-700")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-blue-700")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-blue-700")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-blue-700")
        }
    }
    if (props.currentTheme === "orange") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-orange-500")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-orange-500")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-orange-500")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-orange-500")
        }
    }
    if (props.currentTheme === "yellow") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-yellow-400")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-yellow-400")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-yellow-400")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-yellow-400")
        }
    }
    if (props.currentTheme === "pink") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-pink-500")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-pink-500")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-pink-500")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-pink-500")
        }
    }
    if (props.currentTheme === "green") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-green-600")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-green-600")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-green-600")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-green-600")
        }
    }
    if (props.currentTheme === "gray") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-gray-700")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-gray-700")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-gray-700")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-gray-700")
        }
    }
    if (props.currentTheme === "red") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-red-600")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-red-600")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-red-600")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-red-700")
        }
    }
    if (props.currentTheme === "indigo") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-indigo-600")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-indigo-600")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-indigo-600")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-indigo-700")
        }
    }
    if (props.currentTheme === "cyan") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-cyan-600")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-cyan-600")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-cyan-600")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-cyan-700")
        }
    }
    if (props.currentTheme === "teal") {
        if (props.setThemeTextClass) {
            props.setThemeTextClass("text-teal-600")
        }
        if (props.setThemeBorderClass) {
            props.setThemeBorderClass("border-teal-600")
        }
        if (props.setThemeBgClass) {
            props.setThemeBgClass("bg-teal-600")
        }
        if (props.setThemeAccentClass) {
            props.setThemeAccentClass("accent-teal-700")
        }
    }
}
