import { ChangeEvent } from "react"

interface InputProps {
    type: string
    size: string
}

function DatePickInput(props: InputProps) {
    return (
        <input
            className={`mb-4 ${props.size} border-b-2 text-gray-700 border-grey-200 w-full focus:outline-none transition-colors duration-500`}
            type={props.type}
        />
    )
}

export default DatePickInput
