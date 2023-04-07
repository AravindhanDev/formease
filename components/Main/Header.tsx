import Input from "../Input"
import TextArea from "../TextArea"
import {
    FormStateContext,
    ReducerContext,
} from "@/components/FormStateProvider"
import { ChangeEvent, useContext } from "react"
import { TopBoxLayout } from "./BoxLayout"

function Header() {
    const state = useContext(FormStateContext)
    const dispatch = useContext(ReducerContext)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_TITLE", payload: { title: event.target.value } })
    }

    function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch({
            type: "SET_DESCRIPTION",
            payload: { description: event.target.value },
        })
    }

    return (
        <TopBoxLayout>
            <Input
                type="text"
                placeholder="Form title"
                value={state?.title}
                onChange={handleChange}
                size={"text-xl"}
            />
            <TextArea
                value={state?.description}
                onChange={handleTextAreaChange}
                placeholder="Form Description"
            />
        </TopBoxLayout>
    )
}

export default Header
