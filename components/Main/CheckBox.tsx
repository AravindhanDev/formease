import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react"
import CloseIcon from "@mui/icons-material/Close"
import { useTheme, useThemeUpdate } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"

interface CheckBoxProps {
    item: string
    handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    index: number
    deleteItem: (id: number) => void
    setAnswers: Dispatch<SetStateAction<string[]>>
    answers: string[]
}

function CheckBox({
    item,
    handleChange,
    index,
    deleteItem,
    setAnswers,
}: CheckBoxProps) {
    const currentTheme = useTheme()
    const [themeAccentClass, setThemeAccentClass] =
        useState("accent-purple-700")
    const [themeBorderClass, setThemeBorderClass] =
        useState("border-purple-700")
    const toggleTheme = useThemeUpdate()

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeAccentClass,
            setThemeBorderClass,
        })
    }, [currentTheme])

    function handleClick(item: string) {
        setAnswers((prevAnswers) => {
            const res: string | undefined = prevAnswers.find(
                (prevItem) => prevItem === item
            )
            if (res !== undefined) {
                return prevAnswers.filter((prevItem) => prevItem !== item)
            } else {
                return [...prevAnswers, item]
            }
        })
    }

    return (
        <div className="flex items-center mb-5">
            <input
                type="checkbox"
                className={`w-5 h-5 ${themeAccentClass} cursor-pointer`}
                onClick={() => handleClick(item)}
            />
            <input
                type="text"
                value={item}
                onChange={(event) => handleChange(event, index)}
                className={`mx-5 hover:border-gray-300 border-transparent w-5/6 border-b-2 focus:border-b-2 transition-colors duration-300 focus:outline-none !important`}
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

export default CheckBox
