import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import RadioButton from "./RadioButton"
import { FormStateContext, ReducerContext } from "../FormStateProvider"
import AddIcon from "@mui/icons-material/Add"
import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    ChangeEvent,
} from "react"

interface RadioButtonGroupProps {
    index: number
    value: string
    required: boolean
}

function RadioButtonGroup({ index, value, required }: RadioButtonGroupProps) {
    const [isCheck, setCheck] = useState(required)
    const state = useContext(FormStateContext)
    const dispatch = useContext(ReducerContext)
    const [color, setColor] = useState(() => {
        return isCheck ? "red" : "purple"
    })
    const [answer, setAnswer] = useState("")
    const [radioButtonItems, setRadioButtonItems] = useState<string[]>([
        "New Option",
    ])

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

    const updateRadioButtonState = useCallback(
        (value: string[]) => {
            dispatch({
                type: "UPDATE_QUESTION",
                payload: { index, key: "options", value },
            })
        },
        [dispatch, index]
    )

    useEffect(() => {
        updateRadioButtonState(radioButtonItems)
    }, [radioButtonItems, updateRadioButtonState])

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

    function deleteQuestion() {
        dispatch({ type: "DELETE_QUESTION", payload: { index } })
    }

    return (
        <SideBoxLayout color={color}>
            <div>
                <InputVariant1
                    type="text"
                    value={value}
                    index={index}
                    placeholder={isCheck ? "Question *" : "Question"}
                />
            </div>

            <div className="mb-3">
                {radioButtonItems.map((item, index) => {
                    return (
                        <RadioButton
                            key={index}
                            item={item}
                            handleChange={handleChange}
                            deleteItem={deleteItem}
                            index={index}
                            answer={answer}
                            setAnswer={setAnswer}
                        />
                    )
                })}
                <a
                    onClick={addOption}
                    className="inline sm:hidden bg-purple-100 p-2 xs:text-sm rounded-md mx-2 text-purple-700 cursor-pointer font-normal"
                >
                    <AddIcon /> <span>option</span>
                </a>
            </div>

            <hr />

            <div className="mt-5 sm:mt-3 text-right">
                <a
                    onClick={addOption}
                    className="sm:inline hidden bg-purple-100 sm:p-2 xs:p-1  xs:text-sm rounded-md mx-2 text-purple-700 cursor-pointer font-normal"
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
                    <Switch
                        checked={isCheck}
                        onClick={() => {
                            setCheck((prev) => !prev)
                            setColor((prevColor) =>
                                prevColor === "purple" ? "red" : "purple"
                            )
                        }}
                        color="secondary"
                    />
                </span>
            </div>
        </SideBoxLayout>
    )
}

export default RadioButtonGroup
