import { useEffect } from "react"

function AuthMediater() {
    useEffect(() => {
        location.href = "/forms"
    }, [])

    return <p>Redirected...</p>
}

export default AuthMediater
