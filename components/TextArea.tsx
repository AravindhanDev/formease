import { ChangeEvent, useState } from "react"

interface TextAreaProps {
    placeholder: string
    value: string
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

function TextArea({ value, placeholder, handleChange }: TextAreaProps) {
    const [isFocused, setFocused] = useState<boolean>(false)

    return (
        <textarea
            rows={isFocused ? 3 : 1}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="text-base resize-none border-b-2 text-gray-700 border-grey-200 w-full focus:outline-none transition-colors duration-500"
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
        ></textarea>
    )
}

export default TextArea
