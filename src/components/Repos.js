import { useState } from "react";
import { GITHUB_LINK } from "../Config";
import CTAbtn from "./LinkBtn";
import Terminal from "./Terminal";
const project = {
    description: 'test project',
    full_name: 'devmegan/test',
    html_url: '/test',
    language: 'Python',
    name: 'test',
}

export default function Repos(){
    const [projects, setProjects] = useState([project, project, project, project, project, project, project, project, project])

    // fetch('https://api.github.com/users/devmegan/repos?sort=pushed&direction=desc')
    //     .then(response => response.json())
    //     .then(data => setProjects(data));;

    // if (!projects){
    //     return null;
    // }

    return (
        <div className="text-lg" id="projects">
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
                <CTAbtn 
                    chevron={true} 
                    href={GITHUB_LINK} 
                    rel="noreferrer"
                    target="_blank" 
                    text="View all" 
                />
            </div>
        </div>
    )
}