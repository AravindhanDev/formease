import React, { useEffect } from "react"
import { ReactNode } from "react"

interface BoxLayoutProps {
    children: ReactNode
}

interface SideBoxLayoutProps {
    children: ReactNode
    color: string
}

function SideBoxLayout({ children, color }: SideBoxLayoutProps) {
    return (
        <div
            className={`mb-5 border-l-8 shadow-lg rounded-md border-${color}-600 bg-white p-7`}
            style={{ borderColor: color === "red" ? "#ED4444" : "#9333EA" }}
        >
            {children}
        </div>
    )
}

function TopBoxLayout({ children }: BoxLayoutProps) {
    return (
        <div className="mb-5 border-t-8 shadow-lg rounded-md border-purple-600 bg-white p-7">
            {children}
        </div>
    )
}

export { TopBoxLayout, SideBoxLayout }
