import Input from "./Input"
import TextArea from "./TextArea"
import { TopBoxLayout } from "./Main/BoxLayout"
import { ChangeEvent, useState } from "react"
import Cookies from "js-cookie"

export type HeaderProps = {
    headerDetails: any
    setHeaderDetails: any
    isResearcher: boolean
}

function Header({ headerDetails, setHeaderDetails }: HeaderProps) {
    const [isDisabled, setDisabled] = useState(() => {
        return Cookies.get("auth") === undefined
    })

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
                disabled={isDisabled}
                type="text"
                value={headerDetails.title}
                placeholder="Form title"
                size={"text-xl"}
                handleChange={setTitle}
            />
            <TextArea
                disabled={isDisabled}
                handleChange={setDescription}
                value={headerDetails.description}
                placeholder="Form Description"
            />
        </TopBoxLayout>
    )
}

export default Header
