"use client";

import Image from "next/image"
import errorImage from "../../public/error.jpg"
export default function NotFound({error}: {error: Error}) {
    return (
        <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
            <Image src={errorImage} alt="error" className="w-56 mb-8"/>
            <div className="bg-white p-9 py-14 shadow rounded">
                <h3 className="text-3xl font-bold">We didn't find the page</h3>
                <p className="text-reg font-bold">{error.message}</p>
            </div>
        </div>
    )
}
