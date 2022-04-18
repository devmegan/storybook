import { useState } from "react";

export default function Repos(){
    const [projects, setProjects] = useState(null)

    fetch('https://api.github.com/users/devmegan/repos')
        .then(response => response.json())
        .then(data => setProjects(data));;

    if (!projects){
        return null;
    }
    return (
        <div className="p-4 bg-base-100 text-center">
           {projects.map((project) =>
                <a 
                    className="link block"
                    href={project.html_url}
                    key={project.name}
                    rel="noreferrer"
                    target="_blank"
                >{project.name}</a>
           )}
        </div>
    )
}