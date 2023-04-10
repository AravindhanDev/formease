export interface RadioInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    options: string[]
    answer: string
}

export interface CheckBoxInput {
    index: number
    element: string
    type: string
    question: string
    required: boolean
    options: string[]
    answer: string[]
}

export interface TextInput {
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

export interface TextArea {
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

export interface FormInitialState {
    title: string
    description: string
    questionCount: number
    questions: (
        | TextInput
        | TextArea
        | RadioInput
        | CheckBoxInput
        | DateInput
        | TimeInput
    )[]
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
              question: (
                  | TextInput
                  | TextArea
                  | RadioInput
                  | CheckBoxInput
                  | DateInput
                  | TimeInput
              )[]
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
    | {
          type: "LOAD_FORM"
      }
    | {
          type: "SAVE_FORM"
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

        case "LOAD_FORM": {
            let value = localStorage.getItem("formState")
            return value !== null ? JSON.parse(value) : initialState
        }

        case "SAVE_FORM":
            localStorage.setItem("formState", JSON.stringify(state))
            return state

        case "SET_FORM_STATE":
            return {
                title: action.payload.title,
                description: action.payload.description,
                questionCount: action.payload.questionCount,
                questions: action.payload.questions,
            }

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
