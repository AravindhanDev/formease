import { Switch } from "@mui/material"
import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react"
import YellowSwitch from "./YellowSwitch"
import PinkSwitch from "./PinkSwitch"
import RedSwitch from "./RedSwitch"
import IndigoSwitch from "./IndigoSwitch"
import TealSwitch from "./TealSwitch"
import CyanSwitch from "./CyanSwitch"

type RenderSwitchProps = {
    index: string
    currentTheme: string
    isCheck: boolean
    setCheck: Dispatch<SetStateAction<boolean>>
}

function RenderSwitch({
    index,
    currentTheme,
    isCheck,
    setCheck
}: RenderSwitchProps) {
    const updateRequired = useCallback(async () => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: index,
                required: isCheck
            })
        }
        const response = await fetch("/api/updateRequired", options)
        const res = await response.json()
    }, [index, isCheck])

    useEffect(() => {
        updateRequired()
    }, [isCheck, index, updateRequired])

    function handleCheck() {
        setCheck((prevCheck: boolean) => !prevCheck)
    }

    return (
        <>
            {currentTheme === "purple" && (
                <Switch
                    checked={isCheck}
                    onClick={handleCheck}
                    color="secondary"
                />
            )}

            {currentTheme === "blue" && (
                <Switch checked={isCheck} onClick={handleCheck} />
            )}

            {currentTheme === "orange" && (
                <Switch
                    checked={isCheck}
                    onClick={handleCheck}
                    color="warning"
                />
            )}

            {currentTheme === "yellow" && (
                <YellowSwitch checked={isCheck} onClick={handleCheck} />
            )}

            {currentTheme === "pink" && (
                <PinkSwitch checked={isCheck} onClick={handleCheck} />
            )}

            {currentTheme === "green" && (
                <Switch
                    checked={isCheck}
                    onClick={handleCheck}
                    color="success"
                />
            )}

            {currentTheme === "gray" && (
                <Switch
                    checked={isCheck}
                    onClick={handleCheck}
                    color="default"
                />
            )}

            {currentTheme === "red" && (
                <RedSwitch checked={isCheck} onClick={handleCheck} />
            )}

            {currentTheme === "indigo" && (
                <IndigoSwitch checked={isCheck} onClick={handleCheck} />
            )}

            {currentTheme === "teal" && (
                <TealSwitch checked={isCheck} onClick={handleCheck} />
            )}

            {currentTheme === "cyan" && (
                <CyanSwitch checked={isCheck} onClick={handleCheck} />
            )}
        </>
    )
}

export default RenderSwitch
