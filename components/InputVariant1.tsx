import React, { ChangeEvent, useContext } from "react"
import { ReducerContext } from "./FormStateProvider"
import { updateSpecificQuestion } from "./utility/dispatchActions"

interface InputProps {
    index: number
    value: string | undefined
    type: string
    placeholder: string
}

function InputVariant1(props: InputProps) {
    const dispatch = useContext(ReducerContext)

    function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
        updateSpecificQuestion(dispatch, index, "question", event.target.value)
    }

    return (
        <input
            onChange={(event) => handleChange(event, props.index)}
            {...props}
            className="mb-4 focus:bg-purple-100 text-xl focus:border-b-2 focus:p-3 border-gray-300 w-full focus:outline-none focus:border-purple-600 transition-colors duration-500"
        />
    )
}

export default InputVariant1
