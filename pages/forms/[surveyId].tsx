import { useCallback, useEffect, useState } from "react"
import Header from "@/components/Main/Header"
import Navbar from "@/components/Main/Navbar"
import CheckBoxGroup from "@/components/Main/CheckBoxGroup"
import Paragraph from "@/components/Main/Paragraph"
import RadioButtonGroup from "@/components/Main/RadioButtonGroup"
import ShortAnswer from "@/components/Main/ShortAnswer"
import DatePick from "@/components/Main/DatePick"
import TimePick from "@/components/Main/TimePick"
import { checkState } from "@/components/utility/changeBg"
import { useTheme } from "@/components/ThemeProvider"

export type HeaderDetails = {
    title: string
    description: string
}

function Home() {
    const currentTheme = useTheme()
    const [headerDetails, setHeaderDetails] = useState({
        title: "",
        description: ""
    })
    const [questions, setQuestions] = useState([])

    const getSurveyDetails = useCallback(async () => {
        const response = await fetch(
            `/api/getSurveyDetails?surveyId=${getSurveyId()}`
        )
        const res = await response.json()
        setHeaderDetails(res.data)
    }, [])

    const saveSurveyHeaderDetails = useCallback(async () => {
        if (headerDetails.title === "" && headerDetails.description === "") {
            return
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: headerDetails.title,
                description: headerDetails.description,
                surveyId: getSurveyId()
            })
        }
        const response = await fetch(`/api/saveSurveyHeaderDetails`, options)
        const res = await response.json()
    }, [headerDetails])

    function getSurveyId(): string {
        let url = location.href
        let surveyId = url.replace("http://localhost:3000/forms/", "")
        return surveyId
    }

    const getQuestions = useCallback(async () => {
        const response = await fetch(
            `/api/getQuestions?surveyId=${getSurveyId()}`
        )
        const res = await response.json()
        setQuestions(res.data)
    }, [])

    useEffect(() => {
        console.log(questions)
    }, [questions])

    useEffect(() => {
        saveSurveyHeaderDetails()
    }, [headerDetails, saveSurveyHeaderDetails])

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
        getSurveyDetails()
        getQuestions()
    }, [getQuestions, getSurveyDetails])

    useEffect(() => {
        localStorage.setItem("currentTheme", currentTheme)
        checkState(currentTheme)
    }, [currentTheme])

    function deleteItem(id: string) {
        setQuestions((prevQuestions) => {
            return prevQuestions.filter((question: any) => question.id !== id)
        })
    }

    async function deleteQuestion(id: string) {
        let options = {
            method: "DELETE"
        }
        const response = await fetch(`/api/deleteQuestion?id=${id}`, options)
        const res = await response.json()
        console.log(res)
        if (res) {
            deleteItem(id)
        }
    }

    return (
        <>
            <Navbar
                title={headerDetails.title}
                questions={questions}
                setQuestions={setQuestions}
            />
            <main className="flex justify-center mt-5 xs:p-2">
                <div className="lg:w-3/5 md:w-4/5 sm:w-full xs:w-full">
                    <Header
                        headerDetails={headerDetails}
                        setHeaderDetails={setHeaderDetails}
                    />
                    <div>
                        {questions.map((question: any, index: number) => {
                            if (question.element === "input") {
                                if (question.type === "text") {
                                    return (
                                        <ShortAnswer
                                            deleteQuestion={deleteQuestion}
                                            key={question.id}
                                            index={question.id}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                }
                                if (question.type === "date") {
                                    return (
                                        <DatePick
                                            deleteQuestion={deleteQuestion}
                                            key={question.id}
                                            index={question.id}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                }
                                if (question.type === "time") {
                                    return (
                                        <TimePick
                                            deleteQuestion={deleteQuestion}
                                            key={question.id}
                                            index={question.id}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                }
                                if (question.type === "radio") {
                                    return (
                                        <RadioButtonGroup
                                            deleteQuestion={deleteQuestion}
                                            key={question.id}
                                            index={question.id}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                }
                                if (question.type === "checkbox") {
                                    return (
                                        <CheckBoxGroup
                                            deleteQuestion={deleteQuestion}
                                            key={question.id}
                                            index={question.id}
                                            value={question.question}
                                            required={question.required}
                                        />
                                    )
                                }
                            } else {
                                return (
                                    <Paragraph
                                        deleteQuestion={deleteQuestion}
                                        key={question.id}
                                        index={question.id}
                                        value={question.question}
                                        required={question.required}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home

{
    /* {state?.questions?.map((question: any, index: number) => {
                        if (question.element === "input") {
                            if ((question as TextInput).type === "text") {
                                const textInput = question as TextInput
                                return (
                                    <ShortAnswer
                                        key={index}
                                        index={index}
                                        value={textInput.question}
                                        required={textInput.required}
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
                                    />
                                )
                            } else if (
                                (question as CheckBoxInput).type === "checkbox"
                            ) {
                                const checkBoxInput = question as CheckBoxInput
                                return (
                                    <CheckBoxGroup
                                        key={index}
                                        index={index}
                                        value={checkBoxInput.question}
                                        required={checkBoxInput.required}
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
                                />
                            )
                        }
                    })} */
}
