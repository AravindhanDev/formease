import { useContext } from "react"
import SubjectIcon from "@mui/icons-material/Subject"
import NotesIcon from "@mui/icons-material/Notes"
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined"
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined"
import { ReducerContext } from "@/components/FormStateProvider"
import {
    addShortAnswer,
    addParagraph,
    addRadioButton,
    addCheckBox,
} from "@/components/utility/dispatchActions"

function InputOption() {
    const dispatch = useContext(ReducerContext)

    return (
        <div className="absolute right-40 top-12 bg-white p-4 rounded shadow-lg">
            <ul className="text-gray-600">
                <li
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        addShortAnswer(dispatch)
                    }}
                    className="text-lg py-3 px-5 cursor-pointer hover:bg-gray-100"
                >
                    <NotesIcon />
                    <span className="pl-2">Short answer</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        addParagraph(dispatch)
                        event?.stopPropagation()
                    }}
                    className="text-lg py-3 px-5 cursor-pointer hover:bg-gray-100"
                >
                    <SubjectIcon />
                    <span className="pl-2">Paragraph</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        addCheckBox(dispatch)
                        event?.stopPropagation()
                    }}
                    className="text-lg py-3 px-5 cursor-pointer hover:bg-gray-100"
                >
                    <CheckBoxOutlinedIcon />
                    <span className="pl-2">Checkboxes</span>
                </li>
                <li
                    onMouseDown={(event) => {
                        addRadioButton(dispatch)
                        event?.stopPropagation()
                    }}
                    className="text-lg py-3 px-5 cursor-pointer hover:bg-gray-100"
                >
                    <RadioButtonCheckedOutlinedIcon />
                    <span className="pl-2">Multiple choice</span>
                </li>
            </ul>
        </div>
    )
}

export default InputOption
