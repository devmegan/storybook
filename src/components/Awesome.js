import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import LinkBtn from "./LinkBtn";

export default function Awesome() {
    // const [data, setData] = useState(null);

    // if (!data) {
    //     fetch('https://raw.githubusercontent.com/devmegan/awesome/main/README.md')
    //         .then(response => response.text())
    //         .then(data => setData(data))
    // }

    // useEffect(() => {
    //     if (data) {
    //         console.log(data)
    //     }
    // }, [data])

    return (
        <div className="bg-gray-300">
            <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-8 uppercase"><span className="mr-2">😎</span>Awesome List</h1>
                    <p className="max-w-md mb-8">
                        Want to see what tech I enjoy working with? Check out my{' '}
                            <a
                                className="link link-hover font-semibold underline hover:text-secondary-focus"
                                href="/blog" 
                            >
                                Awesome List
                            </a>.
                    </p>
                    <LinkBtn text="Go to list" chevron={true}/>
            </div>
        </div>
    )
}