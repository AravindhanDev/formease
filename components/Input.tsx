import { ChangeEvent } from "react"
import { useState, useEffect } from "react"

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
    const [isDisabled, setDisabled] = useState(false)

    useEffect(() => {
        setDisabled(disabled)
    }, [disabled, isDisabled])

    return (
        <input
            className={`mb-4 ${size} disabled:bg-white border-b-2 border-grey-200 w-full  text-gray-700 focus:outline-none !important transition-colors duration-500`}
            type={type}
            value={value}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Input
