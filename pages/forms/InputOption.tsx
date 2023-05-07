import SubjectIcon from "@mui/icons-material/Subject"
import NotesIcon from "@mui/icons-material/Notes"
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined"
import DateRangeIcon from "@mui/icons-material/DateRange"
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import createQuestion from "@/components/utility/dispatchActions"
import { useRouter } from "next/router"

type InputOptionProps = {
    setQuestions: any
}

function InputOption({ setQuestions }: InputOptionProps) {
    const router = useRouter()

    function sendApiRequest(type: string) {
        if (router.query) {
            if (typeof router.query.surveyId === "string") {
                createQuestion(type, router.query.surveyId, setQuestions)
            }
        }
    }

    return (
        <div className="absolute sm:right-40 w-52 top-12 bg-white p-4 xs:p-2 rounded shadow-lg">
            <ul className="text-gray-600">
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        sendApiRequest("text")
                    }}
                    className="text-lg xs:text-base py-3 px-5 cursor-pointer hover:bg-gray-100"
                >
                    <NotesIcon />
                    <span className="pl-2">Short answer</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        sendApiRequest("paragraph")
                    }}
                    className="text-lg py-3 xs:text-base px-5 cursor-pointer hover:bg-gray-100"
                >
                    <SubjectIcon />
                    <span className="pl-2">Paragraph</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        sendApiRequest("checkbox")
                    }}
                    className="text-lg py-3 xs:text-base px-5 cursor-pointer hover:bg-gray-100"
                >
                    <CheckBoxOutlinedIcon />
                    <span className="pl-2">Checkboxes</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        sendApiRequest("radio")
                    }}
                    className="text-lg py-3 xs:text-base px-5 cursor-pointer hover:bg-gray-100"
                >
                    <RadioButtonCheckedOutlinedIcon />
                    <span className="pl-2">RadioButton</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        sendApiRequest("date")
                    }}
                    className="text-lg py-3 px-5 xs:text-base cursor-pointer hover:bg-gray-100"
                >
                    <DateRangeIcon />
                    <span className="pl-2">Date Picker</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        sendApiRequest("time")
                    }}
                    className="text-lg py-3 px-5 xs:text-base cursor-pointer hover:bg-gray-100"
                >
                    <AccessTimeIcon />
                    <span className="pl-2">Time Picker</span>
                </li>
            </ul>
        </div>
    )
}

export default InputOption
