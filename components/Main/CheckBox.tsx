import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState
} from "react"
import CloseIcon from "@mui/icons-material/Close"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"

interface CheckBoxProps {
    item: string
    handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    index: number
    deleteItem: (id: number) => void
    checkBoxItems: string[]
}

function CheckBox({ item, handleChange, index, deleteItem }: CheckBoxProps) {
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
