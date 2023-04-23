import { useEffect } from "react"

function NoAuthMediater() {
    useEffect(() => {
        const auth = localStorage.getItem("auth")
        if (auth === null) return
        if (JSON.parse(auth)) {
            location.href = "/forms"
        } else {
            location.href = "/login"
        }
    }, [])

    return <div>redirecting...</div>
}

export default NoAuthMediater
