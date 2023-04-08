export function updateSpecificQuestion(
    dispatch: any,
    index: number,
    key: string,
    value: string
) {
    dispatch({
        type: "UPDATE_QUESTION",
        payload: {
            index,
            key,
            value,
        },
    })
}

function addShortAnswer(dispatch: any) {
    dispatch({
        type: "ADD_QUESTION",
        payload: {
            question: {
                index: 0,
                element: "input",
                type: "text",
                question: "",
                required: false,
            },
        },
    })
}

function addDatePicker(dispatch: any) {
    dispatch({
        type: "ADD_QUESTION",
        payload: {
            question: {
                index: 0,
                element: "input",
                type: "date",
                question: "",
                required: false,
            },
        },
    })
}

function addTimePicker(dispatch: any) {
    dispatch({
        type: "ADD_QUESTION",
        payload: {
            question: {
                index: 0,
                element: "input",
                type: "time",
                question: "",
                required: false,
            },
        },
    })
}

function addParagraph(dispatch: any) {
    dispatch({
        type: "ADD_QUESTION",
        payload: {
            question: {
                index: 0,
                element: "textarea",
                type: "textarea",
                question: "",
                required: false,
            },
        },
    })
}

function addCheckBox(dispatch: any) {
    dispatch({
        type: "ADD_QUESTION",
        payload: {
            question: {
                index: 0,
                element: "input",
                type: "checkbox",
                question: "",
                options: [],
                required: false,
            },
        },
    })
}

function addRadioButton(dispatch: any) {
    dispatch({
        type: "ADD_QUESTION",
        payload: {
            question: {
                index: 0,
                element: "input",
                type: "radio",
                question: "",
                options: [],
                required: false,
            },
        },
    })
}

export {
    addShortAnswer,
    addParagraph,
    addCheckBox,
    addRadioButton,
    addDatePicker,
    addTimePicker,
}
