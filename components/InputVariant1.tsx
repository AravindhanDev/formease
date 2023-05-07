import { ChangeEvent, useEffect, useState, useCallback, useRef } from "react"

interface InputProps {
    index: string
    value: string
    type: string
    placeholder: string
    disabled: boolean
    isCheck: boolean
}

function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

function InputVariant1({
    value,
    index,
    type,
    placeholder,
    disabled,
    isCheck
}: InputProps) {
    const [question, setQuestion] = useState(value)
    const debouncedQuestion = useDebounce(question, 500)

    const saveQuestion = useCallback(async () => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: index,
                question: debouncedQuestion
            })
        }
        const response = await fetch("/api/updateQuestion", options)
        const res = await response.json()
    }, [debouncedQuestion, index])

    useEffect(() => {
        saveQuestion()
    }, [debouncedQuestion, saveQuestion])

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setQuestion(event.target.value)
    }

    return (
        <input
            onChange={handleChange}
            value={question}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className="mb-4 focus:bg-purple-100 disabled:bg-white font-medium focus:font-normal text-md focus:border-b-2 focus:p-3 border-gray-300 w-full focus:outline-none transition-colors duration-500"
        />
    )
}

export default InputVariant1
