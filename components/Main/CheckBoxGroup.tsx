import {
    useState,
    useEffect,
    useContext,
    ChangeEvent,
    useCallback,
} from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import CheckBox from "./CheckBox"
import { ReducerContext } from "../FormStateProvider"
import AddIcon from "@mui/icons-material/Add"
import { setCurrentTheme } from "../utility/themeValidation"
import { useTheme } from "../ThemeProvider"
import RenderSwitch from "../switches/RenderSwitch"

interface CheckBoxGroupProps {
    index: number
    value: string
    required: boolean
}

function CheckBoxGroup({ index, value, required }: CheckBoxGroupProps) {
    const dispatch = useContext(ReducerContext)
    const [isCheck, setCheck] = useState(required)
    const [answers, setAnswers] = useState<string[]>([])
    const [checkBoxItems, setCheckBoxItems] = useState<string[]>(["New Option"])
    const currentTheme = useTheme()
    const [themeTextClass, setThemeTextClass] = useState("text-purple-700")
    const [, setThemeBorderClass] = useState("border-purple-700")

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass,
            setThemeBorderClass,
        })
    }, [currentTheme])

    useEffect(() => {
        dispatch({
            type: "UPDATE_QUESTION",
            payload: {
                index,
                key: "answers",
                value: answers,
            },
        })
    }, [answers, dispatch, index])

    const updateCheckBoxState = useCallback(
        (value: string[]) => {
            dispatch({
                type: "UPDATE_QUESTION",
                payload: { index, key: "options", value },
            })
        },
        [dispatch, index]
    )

    useEffect(() => {
        updateCheckBoxState(checkBoxItems)
        if (checkBoxItems.length === 0) {
            deleteQuestion()
        }
    }, [checkBoxItems, updateCheckBoxState])

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

    function deleteQuestion() {
        dispatch({ type: "DELETE_QUESTION", payload: { index } })
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
                            item={item}
                            handleChange={handleChange}
                            deleteItem={deleteItem}
                            key={index}
                            index={index}
                            answers={answers}
                            setAnswers={setAnswers}
                            checkBoxItems={checkBoxItems}
                        />
                    )
                })}
                <a
                    onClick={addOption}
                    className={`inline sm:hidden bg-gray-100 p-2 xs:text-sm rounded-md ${themeTextClass} cursor-pointer font-normal`}
                >
                    <AddIcon /> <span>option</span>
                </a>
            </div>

            <hr />

            <div className="mt-5 sm:mt-3 text-right">
                <a
                    onClick={addOption}
                    className={`sm:inline hidden bg-gray-100 p-2 xs:text-sm rounded-md mx-2 ${themeTextClass} cursor-pointer font-normal`}
                >
                    <AddIcon /> <span>option</span>
                </a>

                <span
                    className="cursor-pointer border-x-4 px-2"
                    onClick={deleteQuestion}
                >
                    <DeleteOutlinedIcon className="text-gray-500 sm:text-3xl xs:text-2xl" />
                </span>

                <span className="mx-2 px-2 xs:text-sm">
                    Required
                    <RenderSwitch
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
