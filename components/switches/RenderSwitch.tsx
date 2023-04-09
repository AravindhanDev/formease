import { Switch } from "@mui/material"
import React, { Dispatch, SetStateAction } from "react"
import YellowSwitch from "./YellowSwitch"
import PinkSwitch from "./PinkSwitch"
import RedSwitch from "./RedSwitch"

type RenderSwitchProps = {
    currentTheme: string
    isCheck: boolean
    setCheck: Dispatch<SetStateAction<boolean>>
}

function RenderSwitch({ currentTheme, isCheck, setCheck }: RenderSwitchProps) {
    return (
        <>
            {currentTheme === "purple" && (
                <Switch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                    color="secondary"
                />
            )}

            {currentTheme === "blue" && (
                <Switch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                />
            )}

            {currentTheme === "orange" && (
                <Switch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                    color="warning"
                />
            )}

            {currentTheme === "yellow" && (
                <YellowSwitch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                />
            )}

            {currentTheme === "pink" && (
                <PinkSwitch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                />
            )}

            {currentTheme === "green" && (
                <Switch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                    color="success"
                />
            )}

            {currentTheme === "gray" && (
                <Switch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                    color="default"
                />
            )}

            {currentTheme === "red" && (
                <RedSwitch
                    checked={isCheck}
                    onClick={() => {
                        setCheck((prev: boolean) => !prev)
                    }}
                />
            )}
        </>
    )
}

export default RenderSwitch
