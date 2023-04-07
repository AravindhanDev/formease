import { ChangeEvent, useState, useEffect, useContext } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import TextArea from "../TextArea"
import { ReducerContext } from "../FormStateProvider"

interface ParagraphProps {
    index: number
    value: string
}

function Paragraph({ index, value }: ParagraphProps) {
    const [isCheck, setCheck] = useState(false)
    const dispatch = useContext(ReducerContext)
    const [answer, setAnswer] = useState("")

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

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    placeholder="Question"
                    index={index}
                    type="text"
                    value={value}
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
                <span className="cursor-pointer border-r-4 px-2">
                    <DeleteOutlinedIcon className="text-gray-500 text-3xl" />
                </span>

                <span className="mx-2 px-2">
                    Required
                    <Switch
                        onClick={() => setCheck((prev) => !prev)}
                        color="default"
                    />
                </span>
            </div>
        </SideBoxLayout>
    )
}

export default Paragraph
