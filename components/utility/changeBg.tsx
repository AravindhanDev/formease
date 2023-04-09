function setBackgroundColor(color: string) {
    console.log(document.documentElement.style.getPropertyValue(`--bg-color`))
    document.documentElement.style.setProperty(`--bg-color`, color)
}

export function checkState(currentTheme: string) {
    if (currentTheme === "purple") {
        setBackgroundColor("#F3E8FF")
    }
    if (currentTheme === "blue") {
        setBackgroundColor("#EFF6FF")
    }
    if (currentTheme === "orange") {
        setBackgroundColor("#FFF7ED")
    }
    if (currentTheme === "yellow") {
        setBackgroundColor("#FEFCE8")
    }
    if (currentTheme === "pink") {
        setBackgroundColor("#FDF2F8")
    }
    if (currentTheme === "green") {
        setBackgroundColor("#f0fdf4")
    }
    if (currentTheme === "gray") {
        setBackgroundColor("#f3f4f6")
    }
    if (currentTheme === "red") {
        setBackgroundColor("#fef2f2")
    }
    if (currentTheme === "indigo") {
        setBackgroundColor("#eef2ff")
    }
    if (currentTheme === "teal") {
        setBackgroundColor("#f0fdfa")
    }
    if (currentTheme === "cyan") {
        setBackgroundColor("#ecfeff")
    }
}
