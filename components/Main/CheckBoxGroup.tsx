import {
    useState,
    useEffect,
    useContext,
    ChangeEvent,
    useCallback,
} from "react"
import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Switch from "@mui/material/Switch"
import CheckBox from "./CheckBox"
import { ReducerContext } from "../FormStateProvider"
import AddIcon from "@mui/icons-material/Add"

interface CheckBoxGroupProps {
    index: number
    value: string
    required: boolean
}

function CheckBoxGroup({ index, value, required }: CheckBoxGroupProps) {
    const dispatch = useContext(ReducerContext)
    const [isCheck, setCheck] = useState(required)
    const [answers, setAnswers] = useState<string[]>([])
    const [checkBoxItems, setCheckBoxItems] = useState<string[]>(["New Option"])
    const [color, setColor] = useState(() => {
        return isCheck ? "red" : "purple"
    })

    useEffect(() => {
        dispatch({
            type: "UPDATE_QUESTION",
            payload: {
                index,
                key: "answers",
                value: answers,
            },
        })
    }, [answers, dispatch, index])

    const updateCheckBoxState = useCallback(
        (value: string[]) => {
            dispatch({
                type: "UPDATE_QUESTION",
                payload: { index, key: "options", value },
            })
        },
        [dispatch, index]
    )

    useEffect(() => {
        updateCheckBoxState(checkBoxItems)
    }, [checkBoxItems, updateCheckBoxState])

    function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
        setCheckBoxItems((prevItems: string[]) => {
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
        setCheckBoxItems((prevItems) => [...prevItems, "New Option"])
    }

    function deleteQuestion() {
        dispatch({ type: "DELETE_QUESTION", payload: { index } })
    }

    function deleteItem(id: number) {
        setCheckBoxItems((prevItems: string[]) => {
            return prevItems.filter(
                (item: string, index: number) => id !== index
            )
        })
    }

    return (
        <SideBoxLayout color={color}>
            <div>
                <InputVariant1
                    type="text"
                    value={value}
                    placeholder={isCheck ? "Question *" : "Question"}
                    index={index}
                />
            </div>

            <div className="mb-3">
                {checkBoxItems.map((item, index) => {
                    return (
                        <CheckBox
                            item={item}
                            handleChange={handleChange}
                            deleteItem={deleteItem}
                            key={index}
                            index={index}
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    )
                })}
            </div>

            <hr />

            <div className="mt-3 text-right">
                <a
                    onClick={addOption}
                    className="bg-purple-100 p-2 rounded-md mx-2 text-purple-700 cursor-pointer font-normal"
                >
                    <AddIcon /> option
                </a>

                <span
                    className="cursor-pointer border-x-4 px-2"
                    onClick={deleteQuestion}
                >
                    <DeleteOutlinedIcon className="text-gray-500 text-3xl" />
                </span>

                <span className="mx-2 px-2">
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

export default CheckBoxGroup
function setRadioButtonItems(arg0: (prevItems: string[]) => string[]) {
    throw new Error("Function not implemented.")
}
