import { useContext, ChangeEvent, useState, useEffect } from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import { ReducerContext } from "../FormStateProvider"
import TimePickInput from "../DatePickInput"

interface DateProps {
    index: number
    value: string
    required: boolean
}

function TimePick({ index, value, required }: DateProps) {
    const [isCheck, setCheck] = useState(required)
    const [answer, setAnswer] = useState("")
    const dispatch = useContext(ReducerContext)
    const [color, setColor] = useState(() => {
        return isCheck ? "red" : "purple"
    })

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
        <SideBoxLayout color={color}>
            <div>
                <InputVariant1
                    index={index}
                    value={value}
                    type="text"
                    placeholder={isCheck ? "Question *" : "Question"}
                />
            </div>
            <div>
                <TimePickInput
                    type="time"
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
                    <Switch
                        checked={isCheck}
                        onClick={() => {
                            setCheck((prev) => !prev)
                            setColor((prevColor: string) => {
                                return prevColor === "red" ? "purple" : "red"
                            })
                        }}
                        color="secondary"
                    />
                </span>
            </div>
        </SideBoxLayout>
    )
}

export default TimePick
