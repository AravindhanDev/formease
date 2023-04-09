import "@/styles/globals.css"
import type { AppProps } from "next/app"
import FormStateProvider from "@/components/FormStateProvider"
import ThemeProvider from "@/components/ThemeProvider"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <FormStateProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </FormStateProvider>
    )
}
