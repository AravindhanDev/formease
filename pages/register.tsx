import { FormEventHandler, useEffect, useRef } from "react"
import Image from "next/image"
import abstract from "@/public/abstract.jpg"
import Link from "next/link"

function Register() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        document.body.style.display = "block"
        document.documentElement.style.visibility = "visible"
    }, [])

    async function handleClick(event: { preventDefault: () => void }) {
        event.preventDefault()
        const responseObj = {
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value,
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(responseObj),
        }
        console.log(options)
        // const response = await fetch("/api/register", options)
        // const res = await response.json()
        // console.log(res)
    }

    return (
        <>
            <div className="flex bg-gray-50">
                <div className="sm:w-2/3 hidden sm:block p-4 h-screen">
                    <Image
                        src={abstract}
                        alt="abstract"
                        className="rounded-md object-cover h-full"
                    />
                </div>
                <div className="xl:w-1/3 md:w-1/2 xs:w-full p-4 mt-3">
                    <form>
                        <div>
                            <p>Get Started</p>
                            <h2 className="text-2xl font-bold">
                                Create new account .
                            </h2>
                        </div>
                        <div className="mt-5">
                            <label
                                htmlFor="email"
                                className="text-md font-medium"
                            >
                                Email
                            </label>
                            <br />
                            <input
                                type="text"
                                ref={emailRef}
                                id="email"
                                placeholder="developer@gmail.com"
                                className="border-2 border-gray-200 rounded p-3 outline-none w-full sm:w-96 focus:border-green-500"
                            />
                        </div>
                        <div className="mt-5">
                            <label
                                htmlFor="password"
                                className="text-md font-medium"
                            >
                                Password
                            </label>
                            <br />
                            <input
                                type="password"
                                ref={passwordRef}
                                id="password"
                                placeholder="************"
                                className="border-2 border-gray-200 rounded p-3 outline-none w-full sm:w-96 focus:border-green-500"
                            />
                        </div>
                        <div className="mt-6 sm:w-96">
                            <button
                                className="w-full py-3 text-white font-medium text-center bg-green-500"
                                onClick={handleClick}
                            >
                                Register
                            </button>
                        </div>
                        <div className="mt-6">
                            <Link
                                href="/login"
                                className="hover:text-green-600 font-semi-bold cursor-pointer duration-75"
                            >
                                Already have an account?
                            </Link>
                        </div>
                        <div className="mt-6 w-72 text-sm">
                            <p>
                                By creating an account, you agreeing to our
                                privacy policy.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
