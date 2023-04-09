import { useThemeUpdate } from "./ThemeProvider"

function ColorBox() {
    const toggleTheme = useThemeUpdate()

    return (
        <div className="absolute sm:right-28 w-64 top-12 bg-white xs:p-5 rounded shadow-lg">
            <p className="font-semibold mb-3">Color</p>
            <div className="flex gap-2 flex-wrap">
                <div
                    className="cursor-pointer w-6 h-6 bg-purple-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("purple")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-blue-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("blue")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-orange-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("orange")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-yellow-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("yellow")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-pink-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("pink")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-green-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("green")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-gray-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("gray")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-red-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("red")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-indigo-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("indigo")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-teal-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("teal")
                    }}
                ></div>
                <div
                    className="cursor-pointer w-6 h-6 bg-cyan-500 rounded-full"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("cyan")
                    }}
                ></div>
            </div>
        </div>
    )
}

export default ColorBox
