type ButtonProps = {
    text: string
}

function Button({ text }: ButtonProps) {
    return (
        <button className="cursor-pointer px-5 py-1.5 rounded text-white bg-purple-700 font-medium hover:bg-purple-600">
            {text}
        </button>
    )
}

export default Button
