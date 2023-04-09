import { useContext, useEffect } from "react"
import Header from "@/components/Main/Header"
import Navbar from "@/components/Main/Navbar"
import { FormStateContext } from "@/components/FormStateProvider"
import CheckBoxGroup from "@/components/Main/CheckBoxGroup"
import Paragraph from "@/components/Main/Paragraph"
import RadioButtonGroup from "@/components/Main/RadioButtonGroup"
import ShortAnswer from "@/components/Main/ShortAnswer"
import DatePick from "@/components/Main/DatePick"
import TimePick from "@/components/Main/TimePick"
import { DateInput, TimeInput } from "@/components/FormJson"
import { useThemeUpdate } from "@/components/ThemeProvider"

function Home() {
    const state = useContext(FormStateContext)
    const toggleTheme = useThemeUpdate()

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
                                    return (
                                        <ShortAnswer
                                            key={index}
                                            index={index}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                } else if (
                                    (question as RadioInput).type === "radio"
                                ) {
                                    return (
                                        <RadioButtonGroup
                                            key={index}
                                            index={index}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                } else if (
                                    (question as CheckBoxInput).type ===
                                    "checkbox"
                                ) {
                                    return (
                                        <CheckBoxGroup
                                            key={index}
                                            index={index}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                } else if (
                                    (question as DateInput).type === "date"
                                ) {
                                    return (
                                        <DatePick
                                            key={index}
                                            index={index}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                } else if (
                                    (question as TimeInput).type === "time"
                                ) {
                                    return (
                                        <TimePick
                                            key={index}
                                            index={index}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                }
                            } else {
                                return (
                                    <Paragraph
                                        key={index}
                                        index={index}
                                        value={question.question}
                                        required={question.required}
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
