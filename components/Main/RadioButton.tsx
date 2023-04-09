import CloseIcon from "@mui/icons-material/Close"
import { ChangeEvent, useEffect } from "react"
import { useState } from "react"
import { setCurrentTheme } from "../utility/themeValidation"
import { useTheme } from "../ThemeProvider"

interface RadioButtonProps {
    item: string
    handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    index: number
    deleteItem: (id: number) => void
    answer: string
    setAnswer: React.Dispatch<React.SetStateAction<string>>
}

function RadioButton({
    item,
    handleChange,
    index,
    deleteItem,
    answer,
    setAnswer,
}: RadioButtonProps) {
    const currentTheme = useTheme()
    const [themeAccentClass, setThemeAccentClass] =
        useState("accent-purple-700")

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeAccentClass,
        })
    }, [currentTheme])

    function handleClick(item: string) {
        setAnswer(item)
    }

    return (
        <div className="flex items-center mb-5">
            <input
                type="radio"
                name="title"
                onClick={() => handleClick(item)}
                className={`w-5 h-5 ${themeAccentClass} cursor-pointer`}
            />
            <input
                type="text"
                value={item}
                onChange={(event) => handleChange(event, index)}
                className="text-gray-700 mx-5 w-5/6 border-transparent border-b-2 focus:border-b-2 hover:border-gray-200  transition-colors duration-300 focus:outline-none"
            />
            <div className="cursor-pointer">
                <CloseIcon
                    className="text-gray-500"
                    onClick={() => deleteItem(index)}
                />
            </div>
        </div>
    )
}

export default RadioButton
