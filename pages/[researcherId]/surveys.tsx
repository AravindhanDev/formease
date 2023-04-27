import FormNavbar from "@/components/Home/FormNavbar"
import { useEffect, useState } from "react"
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha"
import PollOutlinedIcon from "@mui/icons-material/PollOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import Cookie from "js-cookie"

type Auth = {
    sessionId: string
    userId: string
}

function Forms() {
    const [surveys, setSurveys] = useState<any[]>([])

    async function renderSurveys() {
        const response = await fetch("/api/getSurveys")
        const res = await response.json()
        setSurveys(res.data)
    }

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
        let auth = Cookie.get("auth")
        if (auth === undefined) {
            location.href = "/login"
        }
        renderSurveys()
    }, [])

    async function deleteSurvey(surveyId: string) {
        const response = await fetch(`/api/deleteSurvey?surveyId=${surveyId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        await response.json()
        renderSurveys()
    }

    async function handleClick() {
        let authCookie = Cookie.get("auth")
        if (authCookie === undefined) return
        let auth: Auth = JSON.parse(authCookie)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                researcherId: auth.userId,
            }),
        }
        const response = await fetch("/api/createSurvey", options)
        const res = await response.json()
        console.log(res)
        renderSurveys()
        location.href = `/forms/${res.data.id}`
    }

    function goToSurvey(surveyId: string) {
        location.href = `/forms/${surveyId}`
    }

    return (
        <>
            <FormNavbar />
            <section className="mt-5 flex flex-wrap">
                <div className="sm:p-4 xs:p-4 sm:w-full xs:w-full flex flex-col">
                    <div className="mt-5 flex justify-between border-green-700">
                        <div
                            onClick={handleClick}
                            className="font-medium text-green-600 hover:underline cursor-pointer"
                        >
                            + New Survey
                        </div>
                        <div className="px-3">
                            <span>Last opened by me</span>
                            <span className="pl-7">
                                <SortByAlphaIcon />
                            </span>
                        </div>
                    </div>
                    <div className="mt-5 bg-gray-50 p-3 py-4">
                        {surveys.length === 0 && (
                            <div className="text-center">
                                <em>No Surveys</em>
                            </div>
                        )}
                        {surveys.map((survey) => (
                            <div
                                onClick={() => goToSurvey(survey.id)}
                                key={survey.id}
                                className="py-3 px-2 cursor-pointer hover:bg-green-100 flex justify-between"
                            >
                                <div>
                                    <span className="pr-5">
                                        <PollOutlinedIcon color="success" />
                                    </span>
                                    <span>
                                        {survey.title || "Untitled Form"}
                                    </span>
                                </div>
                                <div>
                                    <span className="pr-6">
                                        {survey.created_at}
                                    </span>
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            deleteSurvey(survey.id)
                                        }}
                                    >
                                        <DeleteOutlinedIcon />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forms

// <div className="flex py-3 pr-2 cursor-pointer hover:bg-green-100 justify-between">
//                             <div>
//                                 <span className="pr-5">
//                                     <PollOutlinedIcon color="success" />
//                                 </span>
//                                 <span>Contact Information</span>
//                             </div>
//                             <div>
//                                 <span className="pr-6">Apr 9, 2023</span>
//                                 <span>
//                                     <DeleteOutlinedIcon />
//                                 </span>
//                             </div>
//  </div>
