import { useContext, useEffect } from "react"
import Header from "@/components/Main/Header"
import Navbar from "@/components/Main/Navbar"
import {
    FormStateContext,
    ReducerContext,
} from "@/components/FormStateProvider"
import CheckBoxGroup from "@/components/Main/CheckBoxGroup"
import Paragraph from "@/components/Main/Paragraph"
import RadioButtonGroup from "@/components/Main/RadioButtonGroup"
import ShortAnswer from "@/components/Main/ShortAnswer"
import DatePick from "@/components/Main/DatePick"
import TimePick from "@/components/Main/TimePick"
import { DateInput, TimeInput } from "@/components/FormJson"
import { checkState } from "@/components/utility/changeBg"
import { useTheme } from "@/components/ThemeProvider"
import { useRouter } from "next/router"

function Home() {
    const state = useContext(FormStateContext)
    const dispatch = useContext(ReducerContext)
    const currentTheme = useTheme()
    const router = useRouter()

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
    }, [])

    useEffect(() => {
        localStorage.setItem("currentTheme", currentTheme)
        checkState(currentTheme)
    }, [currentTheme])

    useEffect(() => {
        dispatch({ type: "LOAD_FORM" })
    }, [dispatch])

    useEffect(() => {
        console.log(state)
        dispatch({ type: "SAVE_FORM" })
    }, [state, dispatch])

    return (
        <>
            <Navbar />
            <main className="flex justify-center mt-5 xs:p-2">
                <div className="lg:w-3/5 md:w-4/5 sm:w-full xs:w-full">
                    <Header />
                    {state.questions.map(
                        (question: Questions, index: number) => {
                            if (question.element === "input") {
                                if ((question as TextInput).type === "text") {
                                    const textInput = question as TextInput
                                    return (
                                        <ShortAnswer
                                            key={index}
                                            index={index}
                                            value={textInput.question}
                                            required={textInput.required}
                                            userAnswer={textInput?.answer}
                                        />
                                    )
                                } else if (
                                    (question as RadioInput).type === "radio"
                                ) {
                                    const radioInput = question as RadioInput
                                    return (
                                        <RadioButtonGroup
                                            key={index}
                                            index={index}
                                            value={radioInput.question}
                                            required={radioInput.required}
                                            userAnswer={radioInput?.answer}
                                        />
                                    )
                                } else if (
                                    (question as CheckBoxInput).type ===
                                    "checkbox"
                                ) {
                                    const checkBoxInput =
                                        question as CheckBoxInput
                                    return (
                                        <CheckBoxGroup
                                            key={index}
                                            index={index}
                                            value={checkBoxInput.question}
                                            required={checkBoxInput.required}
                                            userAnswer={checkBoxInput?.answer}
                                        />
                                    )
                                } else if (
                                    (question as DateInput).type === "date"
                                ) {
                                    const dateInput = question as DateInput
                                    return (
                                        <DatePick
                                            key={index}
                                            index={index}
                                            value={dateInput.question}
                                            required={dateInput.required}
                                            userAnswer={dateInput?.answer}
                                        />
                                    )
                                } else if (
                                    (question as TimeInput).type === "time"
                                ) {
                                    const timeInput = question as TimeInput

                                    return (
                                        <TimePick
                                            key={index}
                                            index={index}
                                            value={timeInput.question}
                                            required={timeInput.required}
                                            userAnswer={timeInput?.answer}
                                        />
                                    )
                                }
                            } else {
                                const textArea = question as TextArea

                                return (
                                    <Paragraph
                                        key={index}
                                        index={index}
                                        value={textArea.question}
                                        required={textArea.required}
                                        userAnswer={textArea?.answer}
                                    />
                                )
                            }
                        }
                    )}
                </div>
            </main>
        </>
    )
}

export default Home
