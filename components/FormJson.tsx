interface RadioInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    options: string[]
    answer: string
}

interface CheckBoxInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    options: string[]
    answer: string[]
}

interface TextInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    answer: string
}

export interface DateInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    answer: string
}

export interface TimeInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    answer: string
}

interface TextArea {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    answer: string
}

type Questions =
    | TextInput
    | TextArea
    | RadioInput
    | CheckBoxInput
    | DateInput
    | TimeInput

interface FormInitialState {
    title: string
    description: string
    questionCount: number
    questions: Questions[]
}

export type FormAction =
    | {
          type: "SET_TITLE"
          payload: {
              title: string
          }
      }
    | {
          type: "SET_DESCRIPTION"
          payload: {
              description: string
          }
      }
    | {
          type: "ADD_QUESTION"
          payload: {
              question: Questions
          }
      }
    | {
          type: "UPDATE_QUESTION"
          payload: {
              index: number
              key: string
              value: string
          }
      }

const initialState: FormInitialState = {
    title: "Untitled form",
    description: "",
    questionCount: 0,
    questions: [],
}

function reducer(state: any, action: any) {
    switch (action.type) {
        case "SET_TITLE":
            return { ...state, title: action.payload.title }

        case "SET_DESCRIPTION":
            return { ...state, description: action.payload.description }

        case "ADD_QUESTION":
            const question = {
                ...action.payload.question,
                index: state.questionCount + 1,
            }
            return {
                ...state,
                questionCount: state.questionCount + 1,
                questions: [...state.questions, question],
            }

        case "DELETE_QUESTION":
            const questions = state.questions.filter(
                (question: Questions, index: number) => {
                    return index !== action.payload.index
                }
            )

            console.log(questions)

            return {
                ...state,
                questionCount: state.questionCount - 1,
                questions,
            }

        case "UPDATE_QUESTION":
            const {
                payload: { index, key, value },
            } = action
            const updatedQuestions = state.questions.map(
                (question: Questions, id: number) => {
                    if (index === id) {
                        return { ...question, [key]: value }
                    }
                    return question
                }
            )
            return { ...state, questions: updatedQuestions }

        default:
            return state
    }
}

export function getFormInitialState() {
    return initialState
}

export function getFormReducer() {
    return reducer
}

// interface FormInitialState {
//     title: string
//     description: string
//     questionCount: number
//     questions: Questions[]
//     setTitle?: (title: string) => void
//     setDescription?: (description: string) => void
//     addQuestion?: (question: Questions) => void
//     updateQuestion?: (
//         index: number,
//         type: string,
//         key: string,
//         value: string
//     ) => void
// }

// class FormState implements FormInitialState {
//     title: string = ""
//     description: string = ""
//     questionCount: number = 0
//     questions: Questions[] = []

//     setTitle(title: string): void {
//         this.title = title
//     }

//     setDescription(description: string): void {
//         this.description = description
//     }

//     addQuestion(question: Questions): void {
//         this.questions.push(question)
//         this.questionCount++
//     }

//     updateQuestion(
//         index: number,
//         type: string | null = null,
//         key: string,
//         value: string
//     ): void {
//         const question: Questions = this.questions[index]
//         question[key] = value
//     }
// }
