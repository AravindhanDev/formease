import React from "react"
import { ReactNode } from "react"

interface BoxLayoutProps {
    children: ReactNode
}

function SideBoxLayout({ children }: BoxLayoutProps) {
    return (
        <div className="mb-5 border-l-8 shadow-lg rounded-md border-purple-600 bg-white p-7">
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
