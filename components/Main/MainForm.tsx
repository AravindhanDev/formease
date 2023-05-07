import React from "react"
import CheckBoxGroup from "./CheckBoxGroup"
import Paragraph from "./Paragraph"
import RadioButtonGroup from "./RadioButtonGroup"
import ShortAnswer from "./ShortAnswer"
import DatePick from "./DatePick"
import TimePick from "./TimePick"

type MainFormProps = {
    questions: any
    deleteQuestion: (id: string) => void
}

function MainForm({ questions, deleteQuestion }: MainFormProps) {
    return (
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
                                options={question.options}
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
                                options={question.options}
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
    )
}

export default MainForm
