import "@/styles/globals.css"
import type { AppProps } from "next/app"
import FormStateProvider from "@/components/FormStateProvider"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <FormStateProvider>
            <Component {...pageProps} />
        </FormStateProvider>
    )
}
