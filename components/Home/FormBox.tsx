import Image from "next/image"

interface FormBoxProps {
    text: string
    imgSrc: string
}

function FormBox({ text, imgSrc }: FormBoxProps) {
    return (
        <div className="pt-3 mr-4 whitespace-normal" style={{ width: "180px" }}>
            <div className="rounded cursor-pointer box-custom p-5 bg-white shadow-lg border-t-4 border-green-600">
                <Image src={imgSrc} width={80} height={80} alt="" />
            </div>
            <p className="text-sm">{text}</p>
            <p className="text-sm underline text-green-700 cursor-pointer">
                Delete
            </p>
        </div>
    )
}

export default FormBox
