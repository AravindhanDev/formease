import Input from "../Input"
import TextArea from "../TextArea"
import { TopBoxLayout } from "./BoxLayout"
import { ChangeEvent } from "react"

type HeaderProps = {
    headerDetails: any
    setHeaderDetails: any
}

function Header({ headerDetails, setHeaderDetails }: HeaderProps) {
    function setTitle(event: ChangeEvent<HTMLInputElement>) {
        setHeaderDetails((prevDetails: any) => {
            return {
                ...prevDetails,
                title: event.target.value
            }
        })
    }

    function setDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        setHeaderDetails((prevDetails: any) => {
            return {
                ...prevDetails,
                description: event.target.value
            }
        })
    }

    return (
        <TopBoxLayout>
            <Input
                type="text"
                value={headerDetails.title}
                placeholder="Form title"
                size={"text-xl"}
                handleChange={setTitle}
            />
            <TextArea
                handleChange={setDescription}
                value={headerDetails.description}
                placeholder="Form Description"
            />
        </TopBoxLayout>
    )
}

export default Header
