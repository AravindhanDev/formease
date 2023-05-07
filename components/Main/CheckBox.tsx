import { ChangeEvent, useEffect, useState } from "react"
import CloseIcon from "@mui/icons-material/Close"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"

interface CheckBoxProps {
    item: string
    handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    index: number
    deleteItem: (id: number) => void
    checkBoxItems: string[]
    isResearcher: () => boolean
}

function CheckBox({
    item,
    handleChange,
    index,
    deleteItem,
    isResearcher
}: CheckBoxProps) {
    const currentTheme = useTheme()
    const [themeAccentClass, setThemeAccentClass] =
        useState("accent-purple-700")
    const [, setThemeBorderClass] = useState("border-purple-700")

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeAccentClass,
            setThemeBorderClass
        })
    }, [currentTheme])

    return (
        <div className="flex items-center mb-5">
            <input
                type="checkbox"
                className={`w-5 h-5 ${themeAccentClass} cursor-pointer`}
            />
            <input
                type="text"
                value={item}
                disabled={isResearcher() === false}
                onChange={(event) => handleChange(event, index)}
                className={`mx-5 ${
                    isResearcher() && "hover:border-gray-200"
                }  border-transparent w-5/6 border-b-2 disabled:bg-white focus:border-b-2 transition-colors duration-300 focus:outline-none !important`}
            />
            <div className="cursor-pointer" hidden={isResearcher() === false}>
                <CloseIcon
                    className="text-gray-500"
                    onClick={() => deleteItem(index)}
                />
            </div>
        </div>
    )
}

export default CheckBox
