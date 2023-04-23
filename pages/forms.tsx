import Form from "@/components/Home/Form"
import FormBox from "@/components/Home/FormBox"
import FormNavbar from "@/components/Home/FormNavbar"
import { useRouter } from "next/router"
import { useEffect } from "react"

function Forms() {
    const router = useRouter()

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
        const auth = localStorage.getItem("auth")
        if (auth === null) {
            router.replace("/login")
        }
    }, [])

    return (
        <>
            <FormNavbar />
            <section className="mt-5 flex flex-wrap">
                <div className="w-3/5 md:w-4/5 sm:p-5 xs:p-5 sm:w-full xs:w-full flex flex-col">
                    <h3 className="font-medium">Start a new form</h3>
                    <div className="flex flex-wrap">
                        <FormBox text="Blank Survey" imgSrc="/add.png" />
                        <FormBox
                            text="Typescript Survey"
                            imgSrc="/survey.png"
                        />
                    </div>
                </div>
            </section>
            {/* <section className="my-7 flex justify-center bg-gray-100">
                <div className="w-3/5 md:w-4/5 sm:p-5 xs:p-5 sm:w-full xs:w-full flex flex-col">
                    <h3 className="font-medium">Start a new form</h3>
                    <div className="flex flex-wrap">
                        <FormBox text="Blank Survey" imgSrc="/graph.png" />
                        <FormBox
                            text="Blank Questionary"
                            imgSrc="/question.png"
                        />
                    </div>
                </div>
            </section>
            <section className="py-6 my-7 flex justify-center bg-white">
                <div className="w-3/5 md:w-4/5 sm:p-5 xs:p-5 sm:w-full xs:w-full flex flex-col">
                    <h3 className="font-medium">Recent forms</h3>
                    <div className="flex flex-wrap">
                        <Form
                            title="Contact Information"
                            opened="Opened 4:30PM"
                        />
                        <Form title="Party Invite" opened="Opened 12:20PM" />
                        <Form title="Title1" opened="Opened 1:20PM" />
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Forms
