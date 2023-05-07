import { useState, useEffect } from "react"
import PollIcon from "@mui/icons-material/Poll"
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined"
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded"
import Button from "../Button"
import InputOption from "@/pages/forms/InputOption"
import { setCurrentTheme } from "../utility/themeValidation"
import { useTheme } from "../ThemeProvider"
import ColorBox from "../ColorBox"

type NavbarProps = {
    title: string
    setQuestions: any
    isResearcher: boolean
}

function Navbar({ title, setQuestions, isResearcher }: NavbarProps) {
    const [current, setCurrent] = useState<number>(1)
    const [inputOption, setInputOption] = useState<boolean>(false)
    const [colorBox, setColorBox] = useState<boolean>(false)
    const currentTheme = useTheme()
    const [themeTextClass, setThemeTextClass] = useState("text-purple-700")
    const [themeBorderClass, setThemeBorderClass] =
        useState("border-purple-700")
    const [researcher, setResearcher] = useState(false)

    useEffect(() => {
        setResearcher(isResearcher)
    }, [isResearcher])

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass,
            setThemeBorderClass
        })
    }, [currentTheme])

    return (
        <nav className="bg-white shadow-sm">
            <div className="p-4 flex justify-between">
                <div className="left text-3xl flex items-center sm:block xs:hidden">
                    <span>
                        <PollIcon className={`text-4xl ${themeTextClass}`} />
                    </span>
                    <span className="px-2 text-lg font-medium text-gray-600">
                        {title === "" ? "Untitled Form" : title}
                    </span>
                </div>
                <div hidden={researcher === false}>
                    {inputOption && <InputOption setQuestions={setQuestions} />}
                    {colorBox && <ColorBox />}
                    <span
                        className="mr-4 cursor-pointer"
                        tabIndex={0}
                        onFocus={() => setInputOption((prev) => !prev)}
                        onBlur={() => setInputOption((prev) => !prev)}
                    >
                        <AddCircleOutlineRoundedIcon />
                    </span>
                    <span
                        tabIndex={0}
                        onFocus={() => setColorBox((prev) => !prev)}
                        onBlur={() => setColorBox((prev) => !prev)}
                        className="mr-4 cursor-pointer"
                    >
                        <ColorLensOutlinedIcon />
                    </span>
                    <Button text="Send" />
                </div>
            </div>

            <div className="flex justify-center">
                <div
                    className={`text-sm ${
                        current === 1 && "border-b-4"
                    } pb-2 ${themeBorderClass} cursor-pointer`}
                    onClick={() => setCurrent(1)}
                >
                    Questions
                </div>
                <div className="px-2"></div>
                <div
                    className={`text-sm ${
                        current === 2 && "border-b-4"
                    } pb-2 ${themeBorderClass}  cursor-pointer`}
                    onClick={() => setCurrent(2)}
                >
                    Responses
                </div>
                <div
                    className={`mx-3 text-sm ${
                        current === 3 && "border-b-4"
                    } pb-2 ${themeBorderClass}  cursor-pointer`}
                    onClick={() => setCurrent(3)}
                >
                    Settings
                </div>
            </div>
        </nav>
    )
}

export default Navbar
