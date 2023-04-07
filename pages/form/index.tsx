import { FormStateContext } from "@/components/FormStateProvider"
import CheckBoxGroup from "@/components/Main/CheckBoxGroup"
import Header from "@/components/Main/Header"
import Navbar from "@/components/Main/Navbar"
import Paragraph from "@/components/Main/Paragraph"
import RadioButtonGroup from "@/components/Main/RadioButtonGroup"
import ShortAnswer from "@/components/Main/ShortAnswer"
import { useContext, useEffect } from "react"

function Home() {
    const state = useContext(FormStateContext)

    useEffect(() => {
        console.log(state)
    }, [state])

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
                                        />
                                    )
                                }
                            } else {
                                return (
                                    <Paragraph
                                        key={index}
                                        index={index}
                                        value={question.question}
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

{
    /* <ShortAnswer />
                    <Paragraph />
                    <CheckBoxGroup />
                    <RadioButtonGroup /> */
}
