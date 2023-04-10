import {
    useState,
    useContext,
    createContext,
    ChangeEvent,
    ReactNode,
} from "react"
import { FormAction, FormInitialState } from "./FormJson"

const TitleContext = createContext<string | undefined>(undefined)
const TitleUpdateContext = createContext<
    (event: ChangeEvent<HTMLInputElement>) => void
>(() => {})

const FormStateContext = createContext<FormInitialState | undefined>(undefined)
const ReducerContext = createContext<
    | ((state: FormInitialState, action: FormAction) => FormInitialState)
    | undefined
>(undefined)

export function useTitle() {
    return useContext(TitleContext)
}

export function useTitleUpdate() {
    return useContext(TitleUpdateContext)
}

interface TitleProps {
    children: ReactNode
}

function TitleProvider({ children }: TitleProps) {
    const [title, setTitle] = useState<string>("Untitled Title")

    function updateTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <TitleContext.Provider value={title}>
            <TitleUpdateContext.Provider value={updateTitle}>
                {children}
            </TitleUpdateContext.Provider>
        </TitleContext.Provider>
    )
}

export default TitleProvider
