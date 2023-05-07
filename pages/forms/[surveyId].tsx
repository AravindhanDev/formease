import { useCallback, useEffect, useState } from "react"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import { checkState } from "@/components/utility/changeBg"
import { useTheme } from "@/components/ThemeProvider"
import MainForm from "@/components/Main/MainForm"
import Cookie from "js-cookie"

export type HeaderDetails = {
    title: string
    description: string
}

function Home() {
    const currentTheme = useTheme()
    const [headerDetails, setHeaderDetails] = useState({
        title: "",
        description: ""
    })
    const [questions, setQuestions] = useState([])
    const [isResearcher, setResearcher] = useState(() => {
        let auth = Cookie.get("auth")
        if (auth) {
            return true
        } else {
            return false
        }
    })

    const getSurveyDetails = useCallback(async () => {
        const response = await fetch(
            `/api/getSurveyDetails?surveyId=${getSurveyId()}`
        )
        const res = await response.json()
        setHeaderDetails(res.data)
    }, [])

    const saveSurveyHeaderDetails = useCallback(async () => {
        if (headerDetails.title === "" && headerDetails.description === "") {
            return
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: headerDetails.title,
                description: headerDetails.description,
                surveyId: getSurveyId()
            })
        }
        const response = await fetch(`/api/saveSurveyHeaderDetails`, options)
        const res = await response.json()
    }, [headerDetails])

    function getSurveyId(): string {
        let url = location.href
        let surveyId = url.replace("http://localhost:3000/forms/", "")
        return surveyId
    }

    const getQuestions = useCallback(async () => {
        const response = await fetch(
            `/api/getQuestions?surveyId=${getSurveyId()}`
        )
        const res = await response.json()
        setQuestions(res.data)
    }, [])

    useEffect(() => {
        saveSurveyHeaderDetails()
    }, [headerDetails, saveSurveyHeaderDetails])

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
        getSurveyDetails()
        getQuestions()
    }, [getQuestions, getSurveyDetails])

    useEffect(() => {
        localStorage.setItem("currentTheme", currentTheme)
        checkState(currentTheme)
    }, [currentTheme])

    function deleteItem(id: string) {
        setQuestions((prevQuestions) => {
            return prevQuestions.filter((question: any) => question.id !== id)
        })
    }

    async function deleteQuestion(id: string) {
        let options = {
            method: "DELETE"
        }
        const response = await fetch(`/api/deleteQuestion?id=${id}`, options)
        const res = await response.json()
        console.log(res)
        if (res) {
            deleteItem(id)
        }
    }

    return (
        <>
            <Navbar
                isResearcher={isResearcher}
                title={headerDetails.title}
                setQuestions={setQuestions}
            />
            <main className="flex justify-center mt-5 xs:p-2">
                <div className="lg:w-3/5 md:w-4/5 sm:w-full xs:w-full">
                    <Header
                        isResearcher={isResearcher}
                        headerDetails={headerDetails}
                        setHeaderDetails={setHeaderDetails}
                    />
                    <MainForm
                        isResearcher={isResearcher}
                        questions={questions}
                        deleteQuestion={deleteQuestion}
                    />
                </div>
            </main>
        </>
    )
}

export default Home
