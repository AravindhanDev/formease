import { ChangeEvent } from "react"

interface InputProps {
    type: string
    placeholder: string
    size: string
    value: string
    disabled: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({
    type,
    value,
    size,
    placeholder,
    handleChange,
    disabled
}: InputProps) {
    return (
        <input
            className={`mb-4 ${size} disabled:bg-white border-b-2 border-grey-200 w-full  text-gray-700 focus:outline-none !important transition-colors duration-500`}
            type={type}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Input
