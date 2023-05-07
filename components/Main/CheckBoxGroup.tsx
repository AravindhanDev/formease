import {
    useState,
    useEffect,
    useContext,
    ChangeEvent,
    useCallback
} from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import CheckBox from "./CheckBox"
import AddIcon from "@mui/icons-material/Add"
import { setCurrentTheme } from "../utility/themeValidation"
import { useTheme } from "../ThemeProvider"
import RenderSwitch from "../switches/RenderSwitch"
import Cookie from "js-cookie"

interface CheckBoxGroupProps {
    index: string
    value: string
    required: boolean
    options: string
    deleteQuestion: (id: string) => void
}

function CheckBoxGroup({
    index,
    value,
    required,
    options,
    deleteQuestion
}: CheckBoxGroupProps) {
    const [isCheck, setCheck] = useState(required)
    const currentTheme = useTheme()
    const [themeTextClass, setThemeTextClass] = useState("text-purple-700")
    const [, setThemeBorderClass] = useState("border-purple-700")
    const [checkBoxItems, setCheckBoxItems] = useState<string[]>(() =>
        options.split(", ")
    )
    function isResearcher() {
        let auth = Cookie.get("auth")
        if (auth !== undefined) {
            return true
        } else {
            return false
        }
    }

    const updateOptions = useCallback(async () => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: index,
                options: checkBoxItems.join(", ")
            })
        }
        const response = await fetch("/api/updateOptions", options)
        const res = await response.json()
    }, [index, checkBoxItems])

    useEffect(() => {
        updateOptions()
    }, [checkBoxItems, updateOptions])

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass,
            setThemeBorderClass
        })
    }, [currentTheme])

    useEffect(() => {
        if (checkBoxItems.length === 0) {
            deleteQuestion(index)
        }
    }, [checkBoxItems, deleteQuestion, index])

    function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
        setCheckBoxItems((prevItems: string[]) => {
            return prevItems.map((item: string, id: number) => {
                if (id === index) {
                    return event.target.value
                } else {
                    return item
                }
            })
        })
    }

    function addOption() {
        setCheckBoxItems((prevItems) => [...prevItems, "New Option"])
    }

    function deleteItem(id: number) {
        setCheckBoxItems((prevItems: string[]) => {
            return prevItems.filter(
                (item: string, index: number) => id !== index
            )
        })
    }

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    disabled={isResearcher() === false}
                    type="text"
                    value={value}
                    placeholder={isCheck ? "Question *" : "Question"}
                    index={index}
                />
            </div>

            <div className="mb-3">
                {checkBoxItems.map((item, index) => {
                    return (
                        <CheckBox
                            isResearcher={isResearcher}
                            key={index}
                            item={item}
                            index={index}
                            handleChange={handleChange}
                            deleteItem={deleteItem}
                            checkBoxItems={checkBoxItems}
                        />
                    )
                })}
                <a
                    onClick={addOption}
                    className={`sm:hidden ${
                        isResearcher() === true ? "inline" : "hidden"
                    } bg-gray-100 p-2 xs:text-sm rounded-md ${themeTextClass} cursor-pointer font-normal`}
                >
                    <AddIcon /> <span>option</span>
                </a>
            </div>

            <hr hidden={isResearcher() === false} />

            <div
                className="mt-5 sm:mt-3 text-right"
                hidden={isResearcher() === false}
            >
                <a
                    onClick={addOption}
                    className={`sm:inline hidden bg-gray-100 p-2 xs:text-sm rounded-md mx-2 ${themeTextClass} cursor-pointer font-normal`}
                >
                    <AddIcon /> <span>option</span>
                </a>

                <span
                    className="cursor-pointer border-x-4 px-2"
                    onClick={() => deleteQuestion(index)}
                >
                    <DeleteOutlinedIcon className="text-gray-500 sm:text-3xl xs:text-2xl" />
                </span>

                <span className="mx-2 px-2 xs:text-sm">
                    Required
                    <RenderSwitch
                        index={index}
                        currentTheme={currentTheme}
                        isCheck={isCheck}
                        setCheck={setCheck}
                    />
                </span>
            </div>
        </SideBoxLayout>
    )
}

export default CheckBoxGroup
