import { useContext, ChangeEvent, useState, useEffect } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import Input from "../Input"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import { ReducerContext } from "../FormStateProvider"

interface ShortAnswerProps {
    index: number
    value: string
}

function ShortAnswer({ index, value }: ShortAnswerProps) {
    const [isCheck, setCheck] = useState(false)
    const [answer, setAnswer] = useState("")
    const dispatch = useContext(ReducerContext)

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

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    index={index}
                    value={value}
                    type="text"
                    placeholder="Question"
                />
            </div>
            <div>
                <Input
                    type="text"
                    placeholder="Yout answer"
                    value={undefined}
                    size={"text-base"}
                    onChange={handleChange}
                />
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

export default ShortAnswer
