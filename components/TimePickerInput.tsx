import { ChangeEvent } from "react"

interface InputProps {
    type: string
    value: string | undefined
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    size: string
}

function TimePickerInput(props: InputProps) {
    return (
        <input
            className={`mb-4 ${props.size} text-gray-700 border-b-2 border-grey-200 w-full focus:outline-none focus:border-purple-600 transition-colors duration-500`}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default TimePickerInput
