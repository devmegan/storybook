import { useState } from "react";
import { GITHUB_LINK } from "../Config";
import CTAbtn from "./LinkBtn";
import Terminal from "./Terminal";

const project = {
    description: 'test project',
    full_name: 'crtmegan/test',
    html_url: '/test',
    language: 'Python',
    name: 'test',
}
const project2 = {
    description: 'test project',
    full_name: 'crtmegan/test',
    html_url: '/test',
    language: 'JavaScript',
    name: 'test',
}

const project3 = {
    description: 'test project',
    full_name: 'crtmegan/test',
    html_url: '/test',
    language: null,
    name: 'test',
}

const project4 = {
    description: 'test project',
    full_name: 'crtmegan/test',
    html_url: '/test',
    language: 'PHP',
    name: 'test',
}

export default function Repos(){
    const [projects, setProjects] = useState([project, project2, project, project3, project2, project4, project, project, project])

    // fetch('https://api.github.com/users/devmegan/repos?sort=pushed&direction=desc')
    //     .then(response => response.json())
    //     .then(data => setProjects(data));;

    // if (!projects){
    //     return null;
    // }

    return (
        <div className="text-lg bg-gray-300 -mt-4" id="projects">
            <div className="mt-10 container mx-auto px-2">
                <h1 className="text-5xl font-bold mb-8 uppercase"><span className="mr-2">👩‍💻</span>Projects</h1>
                <p className="max-w-md mb-8">
                    Here are the most recently updated projects fetched from my{' '}
                    <a
                        className="link link-hover font-semibold underline hover:text-secondary-focus"
                        href={GITHUB_LINK} 
                        rel="noreferrer"
                        target="_blank" 
                    >
                        GitHub account
                    </a>.
                </p>
             <div className="sm:hidden grid grid-cols-1 gap-6">
                {projects.slice(0,4).map((project) =>
                    <Terminal project={project} key={project.name} />
                )}
            </div>
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
                {projects.slice(0,6).map((project) =>
                    <Terminal project={project} key={project.name} />
                )}
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-6">
                {projects.slice(0,9).map((project) =>
                    <Terminal project={project} key={project.name} />
                )}
            </div>
            <div className="text-center mt-6">
            </div>
            </div>
            <div className="md:-mt-10 lg:-mt-20 xl:-mt-36">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}