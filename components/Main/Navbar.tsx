import { useState, useContext } from "react"
import PollIcon from "@mui/icons-material/Poll"
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined"
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded"
import Button from "../Button"
import InputOption from "@/pages/form/InputOption"
import { FormStateContext } from "@/components/FormStateProvider"

function Navbar() {
    const [current, setCurrent] = useState<number>(1)
    const [inputOption, setInputOption] = useState<boolean>(false)
    const state = useContext(FormStateContext)

    return (
        // fixed w-full
        <nav className="bg-white">
            <div className="p-4 flex justify-between">
                <div className="left text-3xl flex items-center sm:block xs:hidden">
                    <span>
                        <PollIcon className="text-4xl text-purple-700" />
                    </span>
                    <span className="px-2 text-xl font-medium text-gray-600">
                        {state?.title}
                    </span>
                </div>
                <div className="">
                    {inputOption && <InputOption />}

                    <span
                        className="mr-4 cursor-pointer"
                        tabIndex={0}
                        onFocus={() => setInputOption((prev) => !prev)}
                        onBlur={() => setInputOption((prev) => !prev)}
                    >
                        <AddCircleOutlineRoundedIcon />
                    </span>
                    <span className="mr-4 cursor-pointer">
                        <ColorLensOutlinedIcon />
                    </span>
                    <Button text="Send" />
                </div>
            </div>

            <div className="flex justify-center">
                <div
                    className={`text-sm ${
                        current === 1 && "border-b-4"
                    } pb-2 border-purple-700 cursor-pointer`}
                    onClick={() => setCurrent(1)}
                >
                    Questions
                </div>
                <div className="px-2"></div>
                <div
                    className={`text-sm ${
                        current === 2 && "border-b-4"
                    } pb-2 border-purple-700 cursor-pointer`}
                    onClick={() => setCurrent(2)}
                >
                    Responses
                </div>
            </div>
        </nav>
    )
}

export default Navbar
