import CloseIcon from "@mui/icons-material/Close"
import { ChangeEvent } from "react"

interface RadioButtonProps {
    item: string
    handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    index: number
    deleteItem: (id: number) => void
    answer: string
    setAnswer: React.Dispatch<React.SetStateAction<string>>
}

function RadioButton({
    item,
    handleChange,
    index,
    deleteItem,
    answer,
    setAnswer,
}: RadioButtonProps) {
    function handleClick(item: string) {
        setAnswer(item)
    }

    return (
        <div className="flex items-center mb-5">
            <input
                type="radio"
                name="title"
                onClick={() => handleClick(item)}
                className="w-5 h-5 accent-purple-600 cursor-pointer"
            />
            <input
                type="text"
                value={item}
                onChange={(event) => handleChange(event, index)}
                className="mx-5 w-5/6 border-transparent border-b-2 focus:border-b-2 hover:border-gray-200 focus:border-purple-600 transition-colors duration-300 focus:outline-none"
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

export default RadioButton
