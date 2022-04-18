import { useState } from "react";
import Terminal from "./Terminal";

export default function Repos(){
    const [projects, setProjects] = useState(null)

    fetch('https://api.github.com/users/devmegan/repos')
        .then(response => response.json())
        .then(data => setProjects(data));;

    if (!projects){
        return null;
    }
    
    return (
        <div className="p-4 text-lg">
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
        </div>
    )
}