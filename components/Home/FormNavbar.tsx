import PollIcon from "@mui/icons-material/Poll"
import PersonIcon from "@mui/icons-material/Person"
import Fab from "@mui/material/Fab"

function FormNavbar() {
    return (
        <nav className="flex pl-2 pr-7 justify-between items-center h-16 bg-white">
            <div className="left text-3xl flex items-center sm:block xs:hidden">
                <span>
                    <PollIcon className="text-4xl text-green-600" />
                </span>
                <span className="px-2 text-2xl font-semibold text-gray-600">
                    Forms
                </span>
            </div>
            <div className="sm:w-1/2 xs:w-4/5 search-bar">
                <input
                    type="text"
                    className="px-5 w-full p-3 outline-none rounded border-t-4 shadow-md border-green-700"
                    placeholder="Search"
                />
            </div>
            <div className="right">
                <div className="w-11 h-11 bg-green-100 text-green-800 cursor-pointer rounded flex justify-center items-center">
                    <PersonIcon />
                </div>
            </div>
        </nav>
    )
}

export default FormNavbar
