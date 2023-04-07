import Image, { StaticImageData } from "next/image"
import DeleteIcon from "@mui/icons-material/Delete"
import thumnail1 from "@/public/thumbnail_1.jpg"
import thumnail2 from "@/public/thumbnail_2.jpg"
import thumnail3 from "@/public/thumbnail_3.jpg"
import thumnail4 from "@/public/thumbnail_4.jpg"
import thumnail5 from "@/public/thumbnail_5.jpg"

interface FormProps {
    title: string
    opened: string
}

function getRandomImage(): StaticImageData {
    const imageArray: StaticImageData[] = [
        thumnail1,
        thumnail2,
        thumnail3,
        thumnail4,
        thumnail5,
    ]
    const randomIndex = Math.floor(Math.random() * 5)
    return imageArray[randomIndex]
}

function Form({ title, opened }: FormProps) {
    const image = getRandomImage()

    return (
        <div className="pt-3 mr-3">
            <div className="inline-block rounded cursor-pointer form-custom bg-white border border-gray-300 hover:border-purple-500">
                <div className="relative w-60 xs:w-50 h-40">
                    <Image fill src={image} priority alt="" />
                </div>
                <div className="description flex justify-between">
                    <div className="left">
                        <p className="text-sm font-normal px-2 pt-2">{title}</p>
                        <p className="text-sm font-normal px-2 pb-4">
                            {opened}
                        </p>
                    </div>
                    <div className="right p-2">
                        <DeleteIcon className="text-purple-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
