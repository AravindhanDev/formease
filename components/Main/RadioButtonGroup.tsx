import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import RadioButton from "./RadioButton"
import { FormStateContext, ReducerContext } from "../FormStateProvider"
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
}

function RadioButtonGroup({ index, value }: RadioButtonGroupProps) {
    const state = useContext(FormStateContext)
    const dispatch = useContext(ReducerContext)
    const [answer, setAnswer] = useState("")
    const [isCheck, setCheck] = useState(false)
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

    return (
        <SideBoxLayout>
            <div>
                <InputVariant1
                    type="text"
                    value={value}
                    placeholder="Question"
                    index={index}
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
                    className="text-purple-700 cursor-pointer font-normal"
                    onClick={addOption}
                >
                    Add option
                </a>
            </div>

            <hr />

            <div className="mt-3 text-right">
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

export default RadioButtonGroup
