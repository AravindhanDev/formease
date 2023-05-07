import InputVariant1 from "../InputVariant1"
import { SideBoxLayout } from "./BoxLayout"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import RadioButton from "./RadioButton"
import AddIcon from "@mui/icons-material/Add"
import React, { useState, useEffect, useCallback, ChangeEvent } from "react"
import { useTheme } from "../ThemeProvider"
import { setCurrentTheme } from "../utility/themeValidation"
import RenderSwitch from "../switches/RenderSwitch"
import Cookie from "js-cookie"

interface RadioButtonGroupProps {
    index: string
    value: string
    required: boolean
    options: string
    deleteQuestion: (id: string) => void
    isResearcher: boolean
}

function RadioButtonGroup({
    index,
    value,
    required,
    options,
    deleteQuestion,
    isResearcher
}: RadioButtonGroupProps) {
    const [isCheck, setCheck] = useState(required)
    const currentTheme = useTheme()
    const [themeTextClass, setThemeTextClass] = useState("text-purple-700")
    const [radioButtonItems, setRadioButtonItems] = useState<string[]>(() =>
        options.split(", ")
    )

    const updateOptions = useCallback(async () => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: index,
                options: radioButtonItems.join(", ")
            })
        }
        const response = await fetch("/api/updateOptions", options)
        const res = await response.json()
    }, [index, radioButtonItems])

    useEffect(() => {
        updateOptions()
    }, [radioButtonItems, updateOptions])

    useEffect(() => {
        setCurrentTheme({
            currentTheme,
            setThemeTextClass
        })
    }, [currentTheme])

    useEffect(() => {
        if (radioButtonItems.length === 0) {
            deleteQuestion(index)
        }
    }, [deleteQuestion, index, radioButtonItems])

    function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
        setRadioButtonItems((prevItems: string[]) => {
            return prevItems.map((item: string, id: number) => {
                if (id === index) {
                    return event.target.value
                } else {
                    return item
                }
            })
        })
    }

    function addOption() {
        setRadioButtonItems((prevItems) => [...prevItems, "New Option"])
    }

    function deleteItem(id: number) {
        setRadioButtonItems((prevItems: string[]) => {
            return prevItems.filter(
                (item: string, index: number) => id !== index
            )
        })
    }

    return (
        <SideBoxLayout>
            <span
                className="absolute top-2 sm:top-4 left-4 font-medium text-red-400"
                hidden={isCheck === false}
            >
                *
            </span>
            <div>
                <InputVariant1
                    isCheck={isCheck}
                    disabled={isResearcher === false}
                    type="text"
                    value={value}
                    index={index}
                    placeholder={isCheck ? "Question" : "Question (Optional)"}
                />
            </div>

            <div className="mb-3">
                {radioButtonItems.map((item, id) => {
                    return (
                        <RadioButton
                            isResearcher={isResearcher}
                            key={id}
                            id={id}
                            item={item}
                            handleChange={handleChange}
                            deleteItem={deleteItem}
                            index={index}
                        />
                    )
                })}

                <a
                    onClick={addOption}
                    className={`${
                        isResearcher === true ? "inline" : "hidden"
                    } sm:hidden bg-gray-100 p-2 xs:text-sm rounded-md ${themeTextClass} cursor-pointer font-normal`}
                >
                    <AddIcon /> <span>option</span>
                </a>
            </div>

            <hr hidden={isResearcher === false} />

            <div
                className="mt-5 sm:mt-3 text-right"
                hidden={isResearcher === false}
            >
                <a
                    onClick={addOption}
                    className={`sm:inline hidden bg-gray-100 mx-2 p-2 xs:text-sm rounded-md ${themeTextClass} cursor-pointer font-normal`}
                >
                    <AddIcon /> <span>option</span>
                </a>
                <span
                    className="cursor-pointer border-x-4 px-2"
                    onClick={() => deleteQuestion(index)}
                >
                    <DeleteOutlinedIcon className="text-gray-500 sm:text-3xl xs:text-2xl" />
                </span>

                <span className="mx-2 px-2 xs:text-sm">
                    Required
                    <RenderSwitch
                        index={index}
                        currentTheme={currentTheme}
                        isCheck={isCheck}
                        setCheck={setCheck}
                    />
                </span>
            </div>
        </SideBoxLayout>
    )
}

export default RadioButtonGroup
