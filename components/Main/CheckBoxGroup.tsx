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
import { FormStateContext, ReducerContext } from "../FormStateProvider"

interface CheckBoxGroupProps {
    index: number
    value: string
}

function CheckBoxGroup({ index, value }: CheckBoxGroupProps) {
    const dispatch = useContext(ReducerContext)
    const [isCheck, setCheck] = useState(false)
    const [answers, setAnswers] = useState<string[]>([])
    const [checkBoxItems, setCheckBoxItems] = useState<string[]>(["New Option"])

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

    function deleteItem(id: number) {
        setCheckBoxItems((prevItems: string[]) => {
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

                <a
                    onClick={addOption}
                    className="text-purple-700 cursor-pointer font-normal"
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

export default CheckBoxGroup
