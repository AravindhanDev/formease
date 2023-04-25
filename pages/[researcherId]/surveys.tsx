import FormNavbar from "@/components/Home/FormNavbar"
import { useRouter } from "next/router"
import { useEffect } from "react"
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha"
import PollOutlinedIcon from "@mui/icons-material/PollOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useState } from "react"

function Forms() {
    const [surveys, setSurveys] = useState<any[]>([])
    const router = useRouter()

    async function isAuthed(researcherId: any) {
        const isAuth = await fetch(`/api/isAuth?researcherId=${researcherId}`)
        const response = await isAuth.json()
        if (!response.isAuth) {
            router.replace("/login")
        }
    }

    async function renderSurveys() {
        const response = await fetch("/api/getSurveys")
        const res = await response.json()
        setSurveys(res.data)
    }

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
        const { researcherId } = router.query
        isAuthed(researcherId)
        renderSurveys()
    }, [])

    async function deleteSurvey(surveyId: string) {
        const response = await fetch(`/api/deleteSurvey?surveyId=${surveyId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const res = await response.json()
        console.log(res)
        renderSurveys()
    }

    async function handleClick() {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                researcherId: router.query.researcherId,
            }),
        }
        const response = await fetch("/api/createSurvey", options)
        const res = await response.json()
        renderSurveys()
        router.replace("/form")
    }

    return (
        <>
            <FormNavbar />
            <section className="mt-5 flex flex-wrap">
                <div className="sm:p-5 xs:p-5 sm:w-full xs:w-full flex flex-col">
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
                                key={survey.id}
                                className="py-3 pr-2 cursor-pointer hover:bg-green-100 flex justify-between"
                            >
                                <div>
                                    <span className="pr-5">
                                        <PollOutlinedIcon color="success" />
                                    </span>
                                    <span>{survey.title}</span>
                                </div>
                                <div>
                                    <span className="pr-6">
                                        {survey.created_at}
                                    </span>
                                    <span
                                        onClick={() => deleteSurvey(survey.id)}
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
