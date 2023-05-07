import { useContext, ChangeEvent, useState, useEffect } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { ReducerContext } from "../FormStateProvider"
import TimePickInput from "../DatePickInput"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"
import RenderSwitch from "../switches/RenderSwitch"
import Cookie from "js-cookie"

interface DateProps {
    index: string
    value: string
    required: boolean
    deleteQuestion: (id: string) => void
}

function TimePick({ index, value, required, deleteQuestion }: DateProps) {
    const [isCheck, setCheck] = useState(required)
    const dispatch = useContext(ReducerContext)
    const currentTheme = useTheme()
    const [, setThemeTextClass] = useState("text-purple-700")
    const [, setThemeBorderClass] = useState("border-purple-700")
    function isResearcher() {
        let auth = Cookie.get("auth")
        if (auth !== undefined) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass,
            setThemeBorderClass
        })
    }, [currentTheme])

    useEffect(() => {
        dispatch({
            type: "UPDATE_QUESTION",
            payload: {
                index: index,
                key: "required",
                value: isCheck
            }
        })
    }, [isCheck, dispatch, index])

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value
        dispatch({
            type: "UPDATE_QUESTION",
            payload: {
                index,
                key: "answer",
                value: answer
            }
        })
    }

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    disabled={isResearcher() === false}
                    index={index}
                    value={value}
                    type="text"
                    placeholder={isCheck ? "Question *" : "Question"}
                />
            </div>
            <div>
                <TimePickInput type="time" size={"text-base"} />
            </div>
            <div className="text-right" hidden={isResearcher() === false}>
                <span
                    className="cursor-pointer border-r-4 px-2"
                    onClick={() => deleteQuestion(index)}
                >
                    <DeleteOutlinedIcon className="text-gray-500 text-3xl" />
                </span>

                <span className="mx-2 px-2">
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

export default TimePick
