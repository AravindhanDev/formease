import { ChangeEvent, Dispatch, SetStateAction } from "react"
import CloseIcon from "@mui/icons-material/Close"

interface CheckBoxProps {
    item: string
    handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    index: number
    deleteItem: (id: number) => void
    setAnswers: Dispatch<SetStateAction<string[]>>
    answers: string[]
}

function CheckBox({
    item,
    handleChange,
    index,
    deleteItem,
    setAnswers,
    answers,
}: CheckBoxProps) {
    function handleClick(item: string) {
        setAnswers((prevAnswers) => {
            const res: string | undefined = prevAnswers.find(
                (prevItem) => prevItem === item
            )
            if (res !== undefined) {
                return prevAnswers.filter((prevItem) => prevItem !== item)
            } else {
                return [...prevAnswers, item]
            }
        })
    }

    return (
        <div className="flex items-center mb-5">
            <input
                type="checkbox"
                className="w-5 h-5 accent-purple-600 cursor-pointer"
                onClick={() => handleClick(item)}
            />
            <input
                type="text"
                value={item}
                onChange={(event) => handleChange(event, index)}
                className="text-gray-700 mx-5 w-5/6 border-transparent border-b-2 focus:border-b-2 hover:border-gray-200 focus:border-purple-600 transition-colors duration-300 focus:outline-none"
            />
            <div className="cursor-pointer">
                <CloseIcon
                    className="text-gray-500"
                    onClick={() => deleteItem(index)}
                />
            </div>
        </div>
    )
}

export default CheckBox
