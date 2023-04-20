import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
    }, [])

    return <></>
}
