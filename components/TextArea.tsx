import { ChangeEvent, useState } from "react"

interface TextAreaProps {
    placeholder: string
    value: string
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    disabled: boolean
}

function TextArea({
    value,
    placeholder,
    handleChange,
    disabled
}: TextAreaProps) {
    const [isFocused, setFocused] = useState<boolean>(false)

    return (
        <textarea
            disabled={disabled}
            rows={isFocused ? 3 : 1}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="text-base disabled:bg-white resize-none border-b-2 text-gray-700 border-grey-200 w-full focus:outline-none transition-colors duration-500"
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
        ></textarea>
    )
}

export default TextArea
