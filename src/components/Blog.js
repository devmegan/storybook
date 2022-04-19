import { useState } from "react";
import Card from "./Card";

const post1 = {
    header: 'React Spectrum',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/post',
    src: 'https://picsum.photos/900/450?random=1',
    alt: 'alt',
    tags: ['react', 'accessibility']
}

const post2 = {
    header: 'Using RTK',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/post',
    src: 'https://picsum.photos/900/450?random=2',
    alt: 'alt',
    tags: ['react', 'rtk']
}

const post3 = {
    header: 'Django Wagtail',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/post',
    src: 'https://picsum.photos/900/450?random=3',
    alt: 'alt',
    tags: ['django', 'wagtail']
}

const post4 = {
    header: 'Tailwind CSS',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/post',
    src: 'https://picsum.photos/900/450?random=4',
    alt: 'alt',
    tags: ['css', 'tailwind']
}

export default function Blog(){
    const [posts, setPosts] = useState([post1, post2, post3, post4])

    return(
        <div>
            <div className="-mt-10 container mx-auto px-2" id="blog">
                <h1 className="text-5xl font-bold mb-8 uppercase"><span className="mr-2">⌨</span>Blog Posts</h1>
                <p className="max-w-md mb-8">
                    Here are the most recent posts from my{' '} 
                        <a
                            className="link link-hover font-semibold underline hover:text-secondary-focus"
                            href="/blog" 
                        >
                            Blog
                        </a>.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {posts.map((post, index) => 
                   <Card post={post} index={index} key={index} />
                )}
            </div>
            </div >
            <div className="md:-mt-10 lg:-mt-20 xl:-mt-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d1d5db" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,186.7C672,171,768,117,864,117.3C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
     
    )
}