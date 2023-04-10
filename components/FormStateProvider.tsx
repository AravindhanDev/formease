import { getFormInitialState, getFormReducer } from "./FormJson"

import { ReactNode, createContext, useEffect, useReducer } from "react"

export const FormStateContext = createContext<any>(null)

export const ReducerContext = createContext<any>(null)

interface FormStateProps {
    children: ReactNode
}

function FormStateProvider({ children }: FormStateProps) {
    const initialState = getFormInitialState()
    const reducer = getFormReducer()
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <FormStateContext.Provider value={state}>
            <ReducerContext.Provider value={dispatch}>
                {children}
            </ReducerContext.Provider>
        </FormStateContext.Provider>
    )
}

export default FormStateProvider
