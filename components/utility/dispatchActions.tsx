import { v4 as uuid } from "uuid"

interface Question {
    id: string
    question: string
    element: string
    type: string
    required: boolean
    options?: string
    surveyId: string
}

export default async function createQuestion(
    questionType: string,
    surveyId: string,
    setQuestions: any
) {
    let question: Question = {
        id: uuid(),
        question: "",
        options: "",
        element: "input",
        type: "text",
        required: false,
        surveyId: surveyId
    }
    question.type = questionType
    if (question.type === "paragraph") {
        question.element = "textarea"
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(question)
    }
    const response = await fetch("/api/createQuestion", options)
    const res = await response.json()
    setQuestions((prevQuestions: any) => [...prevQuestions, res.data])
}
