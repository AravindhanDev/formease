import { useContext, ChangeEvent, useState, useEffect } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { ReducerContext } from "../FormStateProvider"
import DatePickInput from "../DatePickInput"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"
import RenderSwitch from "../switches/RenderSwitch"

interface DateProps {
    index: number
    value: string
    required: boolean
}

function DatePick({ index, value, required }: DateProps) {
    const [isCheck, setCheck] = useState(required)
    const [answer, setAnswer] = useState("")
    const dispatch = useContext(ReducerContext)
    const currentTheme = useTheme()
    const [, setThemeTextClass] = useState("text-purple-700")
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
                index: index,
                key: "required",
                value: isCheck,
            },
        })
    }, [isCheck, dispatch, index])

    useEffect(() => {
        dispatch({
            type: "UPDATE_QUESTION",
            payload: {
                index,
                key: "answers",
                value: answer,
            },
        })
    }, [answer, dispatch, index])

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value)
    }

    function deleteItem() {
        dispatch({ type: "DELETE_QUESTION", payload: { index } })
    }

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    index={index}
                    value={value}
                    type="text"
                    placeholder={isCheck ? "Question *" : "Question"}
                />
            </div>
            <div>
                <DatePickInput
                    type="date"
                    value={undefined}
                    size={"text-base"}
                    onChange={handleChange}
                />
            </div>
            <div className="text-right">
                <span
                    className="cursor-pointer border-r-4 px-2"
                    onClick={deleteItem}
                >
                    <DeleteOutlinedIcon className="text-gray-500 text-3xl" />
                </span>

                <span className="mx-2 px-2">
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

export default DatePick
