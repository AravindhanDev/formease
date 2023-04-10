interface RadioInput {
    index: number
    answer: string
    element: string
    type: string
    question: string
    options: string[]
    required: boolean
}

interface CheckBoxInput {
    element: string
    type: string
    question: string
    options: string[]
    required: boolean

}

interface TextInput {
    index: number
    answer: string
    element: string
    type: string
    question: string
    required: boolean

}

interface TextArea {
    answer: string
    element: string
    question: string
    required: boolean
}   

type Questions = TextInput | TextArea | RadioInput | CheckBoxInput

interface Form {
    title: string
    description: string
    questionCount: number
    questions: Questions[]
}

const form: Form = {
    title: 'Web Development',
    description: "It is best technology",
    questionCount: 4,
    questions: [
        {element: 'textarea', question: 'Explain about blockchain', required: true},
        {element: 'input', type: 'text', question: 'Who invented python', required: true},
        {element: 'input', type: 'radio', question: 'choose any two', options: ['1', '2','3', '4'], required: true}
    ]
}

console.log(form)


/* 
[
        {
            element: "input",
            type: "radio button", 
            question: 'What is favorite programming language',
            options: ['java', 'python', 'scala', 'ruby']
        },
        {
            element: "input",
            type: "text",
            question: 'Who invented typescript?',
        },
        {
            element: "input",
            type: 'checkbox',
            question: 'Select any two for extra-credit course',
            options: ['blockchain', 'big data', 'machine learning']
        },
        {
            element: "textarea",
            question: 'Breifly explain about object oriented programming'
        },
        {
            element: 'input',
            type: 'date',
            question: 'Date of birth'
        },
        {
            element: 'input',
            type: 'time',
            question: 'Finished time'
        },
        {
            element: 'input',
            type: 'file',
            question: 'Upload Resume'
        }
    ]
*/