import { ChangeEvent, useState, useEffect, useContext } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import TextArea from "../TextArea"
import { ReducerContext } from "../FormStateProvider"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"
import RenderSwitch from "../switches/RenderSwitch"
import Cookie from "js-cookie"

interface ParagraphProps {
    index: string
    value: string
    required: boolean
    deleteQuestion: (id: string) => void
    isResearcher: boolean
}

function Paragraph({
    index,
    value,
    required,
    deleteQuestion,
    isResearcher
}: ParagraphProps) {
    const [isCheck, setCheck] = useState(required)
    const dispatch = useContext(ReducerContext)
    const currentTheme = useTheme()
    const [, setThemeTextClass] = useState("text-purple-700")
    const [, setThemeBorderClass] = useState("border-purple-700")

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

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        let answer = event.target.value
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
            <span
                className="absolute top-2 sm:top-4 left-4 font-medium text-red-400"
                hidden={isCheck === false}
            >
                *
            </span>
            <div>
                <InputVariant1
                    isCheck={isCheck}
                    disabled={isResearcher === false}
                    index={index}
                    value={value}
                    type="text"
                    placeholder={isCheck ? "Question" : "Question (Optional)"}
                />
            </div>

            <div>
                <TextArea
                    disabled={false}
                    placeholder="Your answer"
                    value={""}
                    handleChange={function (
                        e: ChangeEvent<HTMLTextAreaElement>
                    ): void {
                        throw new Error("Function not implemented.")
                    }}
                ></TextArea>
            </div>

            <div className="text-right" hidden={isResearcher === false}>
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

export default Paragraph
