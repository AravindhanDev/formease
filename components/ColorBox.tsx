import { useThemeUpdate } from "./ThemeProvider"

function ColorBox() {
    const toggleTheme = useThemeUpdate()

    return (
        <div className="absolute sm:right-28 w-64 top-12 bg-white xs:p-5 rounded shadow-lg">
            <p className="mb-3 font-medium">Pick a color</p>
            <div className="flex gap-2 flex-wrap">
                <div
                    className="cursor-pointer text-white px-3 py-1 rounded font-medium bg-purple-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("purple")
                    }}
                >
                    #Purple
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointe bg-blue-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("blue")
                    }}
                >
                    #Blue
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-orange-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("orange")
                    }}
                >
                    #Orange
                </div>
                <div
                    className="cursor-pointer text-white rounded px-4 py-1 bg-yellow-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("yellow")
                    }}
                >
                    #Yellow
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-pink-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("pink")
                    }}
                >
                    #Pink
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-green-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("green")
                    }}
                >
                    #Green
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-gray-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("gray")
                    }}
                >
                    #Gray
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-red-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("red")
                    }}
                >
                    #Red
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-indigo-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("indigo")
                    }}
                >
                    #Indigo
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-teal-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("teal")
                    }}
                >
                    #Teal
                </div>
                <div
                    className="text-white rounded px-4 py-1 cursor-pointer bg-cyan-500"
                    onMouseDown={(event) => {
                        event?.stopPropagation()
                        toggleTheme("cyan")
                    }}
                >
                    #Cyan
                </div>
            </div>
        </div>
    )
}

export default ColorBox
