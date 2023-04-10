import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import RadioButton from "./RadioButton"
import { ReducerContext } from "../FormStateProvider"
import AddIcon from "@mui/icons-material/Add"
import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    ChangeEvent,
} from "react"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"
import RenderSwitch from "../switches/RenderSwitch"

interface RadioButtonGroupProps {
    index: number
    value: string
    required: boolean
    userAnswer: string
}

function RadioButtonGroup({
    index,
    value,
    required,
    userAnswer,
}: RadioButtonGroupProps) {
    const [isCheck, setCheck] = useState(required)
    const dispatch = useContext(ReducerContext)
    // const [answer, setAnswer] = useState("")
    const [radioButtonItems, setRadioButtonItems] = useState<string[]>([
        "New Option",
    ])
    const currentTheme = useTheme()
    const [themeTextClass, setThemeTextClass] = useState("text-purple-700")

    useEffect(() => {
        let formState: any = localStorage.getItem("formState")
        if (formState) {
            formState = JSON.parse(formState)
            if (
                formState?.questions?.length &&
                formState.questions[index]?.options
            ) {
                setRadioButtonItems(formState?.questions[index].options)
            }
        }
    }, [index])

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass,
        })
    }, [currentTheme])

    const updateRadioButtonState = useCallback(
        (value: string[]) => {
            dispatch({
                type: "UPDATE_QUESTION",
                payload: { index, key: "options", value },
            })
        },
        [dispatch, index]
    )

    const deleteQuestion = useCallback(() => {
        dispatch({ type: "DELETE_QUESTION", payload: { index } })
    }, [dispatch, index])

    useEffect(() => {
        updateRadioButtonState(radioButtonItems)
        if (radioButtonItems.length === 0) {
            deleteQuestion()
        }
    }, [deleteQuestion, radioButtonItems, updateRadioButtonState])

    function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
        setRadioButtonItems((prevItems: string[]) => {
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
        setRadioButtonItems((prevItems) => [...prevItems, "New Option"])
    }

    function deleteItem(id: number) {
        setRadioButtonItems((prevItems: string[]) => {
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
                    index={index}
                    placeholder={isCheck ? "Question *" : "Question"}
                />
            </div>

            <div className="mb-3">
                {radioButtonItems.map((item, id) => {
                    return (
                        <RadioButton
                            key={id}
                            id={id}
                            item={item}
                            handleChange={handleChange}
                            deleteItem={deleteItem}
                            index={index}
                            userAnswer={userAnswer}
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
                    className={`sm:inline hidden bg-gray-100 mx-2 p-2 xs:text-sm rounded-md ${themeTextClass} cursor-pointer font-normal`}
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

export default RadioButtonGroup
