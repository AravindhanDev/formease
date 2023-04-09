import { ChangeEvent, useEffect, useState } from "react"
import { useTheme, useThemeUpdate } from "./ThemeProvider"
import { setCurrentTheme } from "./utility/themeValidation"

interface InputProps {
    type: string
    placeholder: string
    value: string | undefined
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    size: string
}

function Input(props: InputProps) {
    return (
        <input
            className={`mb-4 ${props.size} border-b-2 border-grey-200 w-full  text-gray-700 focus:outline-none !important transition-colors duration-500`}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default Input
