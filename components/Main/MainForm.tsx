import React, { useEffect, useState } from "react"
import CheckBoxGroup from "./CheckBoxGroup"
import Paragraph from "./Paragraph"
import RadioButtonGroup from "./RadioButtonGroup"
import ShortAnswer from "./ShortAnswer"
import DatePick from "./DatePick"
import TimePick from "./TimePick"
import Button from "../Button"
import GhostButton from "../GhostButton"

type MainFormProps = {
    questions: any
    deleteQuestion: (id: string) => void
    isResearcher: boolean
}

function MainForm({ questions, deleteQuestion, isResearcher }: MainFormProps) {
    const [researcher, setResearcher] = useState(false)

    useEffect(() => {
        setResearcher(isResearcher)
    }, [isResearcher])

    return (
        <div>
            {questions.map((question: any) => {
                if (question.element === "input") {
                    if (question.type === "text") {
                        return (
                            <ShortAnswer
                                isResearcher={isResearcher}
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
                                isResearcher={isResearcher}
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
                                isResearcher={isResearcher}
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
                                isResearcher={isResearcher}
                                deleteQuestion={deleteQuestion}
                                key={question.id}
                                index={question.id}
                                value={question.question}
                                options={question.options}
                                required={question.required}
                            />
                        )
                    }
                    if (question.type === "checkbox") {
                        return (
                            <CheckBoxGroup
                                isResearcher={isResearcher}
                                deleteQuestion={deleteQuestion}
                                key={question.id}
                                index={question.id}
                                value={question.question}
                                options={question.options}
                                required={question.required}
                            />
                        )
                    }
                } else {
                    return (
                        <Paragraph
                            isResearcher={isResearcher}
                            deleteQuestion={deleteQuestion}
                            key={question.id}
                            index={question.id}
                            value={question.question}
                            required={question.required}
                        />
                    )
                }
            })}
            <div
                className={`py-3  ${
                    researcher ? "hidden" : "flex justify-between"
                }`}
            >
                <Button text="Submit" />
                <GhostButton text="Clear form" />
            </div>
        </div>
    )
}

export default MainForm
