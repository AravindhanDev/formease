import { ChangeEvent, useState, useEffect, useContext } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import TextArea from "../TextArea"
import { ReducerContext } from "../FormStateProvider"
import { useTheme, useThemeUpdate } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"
import RenderSwitch from "../switches/RenderSwitch"

interface ParagraphProps {
    index: number
    value: string
    required: boolean
}

function Paragraph({ index, value, required }: ParagraphProps) {
    const [isCheck, setCheck] = useState(required)
    const dispatch = useContext(ReducerContext)
    const [answer, setAnswer] = useState("")
    const currentTheme = useTheme()
    const [, setThemeTextClass] = useState("text-purple-700")
    const [, setThemeBorderClass] = useState("border-purple-700")
    const toggleTheme = useThemeUpdate()

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

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value)
    }

    function deleteQuestion() {
        dispatch({ type: "DELETE_QUESTION", payload: { index } })
    }

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    index={index}
                    type="text"
                    value={value}
                    placeholder={isCheck ? "Question *" : "Question"}
                />
            </div>

            <div>
                <TextArea
                    placeholder="Your answer"
                    value={undefined}
                    onChange={handleChange}
                ></TextArea>
            </div>

            <div className="text-right">
                <span
                    className="cursor-pointer border-r-4 px-2"
                    onClick={deleteQuestion}
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

export default Paragraph
