import { LANGUAGE_COLOURS } from "../LangaugeColours";

export default function Terminal({ project }) {
    return (
        <div className="mockup-code" key={project.name}>
            <pre data-prefix="$">
                <code>
                    <a
                        className="link hover:text-accent"
                        href={project.html_url}
                        key={project.name}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {project.full_name}
                    </a>
                </code>
            </pre>
            <pre data-prefix=">">
                <code 
                    className={`
                        text-base 
                        ${LANGUAGE_COLOURS[project.language] ?? 'text-[#e44b23]'}
                    `}>
                        {project.language ?? 'Markdown'}
                    </code>
            </pre>
            <pre data-prefix=">">
                <code className="text-base">
                    {project.description}
                </code>
            </pre>
        </div>
    )
}