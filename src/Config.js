const LINKS = {
    useful: [
        {
            name: 'Blog',
            href: '/blog',
            type: '',
        },
        {
            name: 'Contact',
            href: '/contact',
            type: 'author',
        }
    ],
    connect: [
        {
            name: 'Twitter',
            href: 'https://twitter.com/devmegan_/',
            type: 'external',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/devmegan/',
            type: 'external',
        },
    ]
}

const GITHUB_LINK = 'https://github.com/devmegan';

const HERO_CONTENT = {
    header: <>Hi, I'm <strong>Megan</strong>. A Web Developer with:</>,
    list: [
        'Hands-on, full-stack experience across public, private and third sector projects.',
        <>A <a className="link link-hover font-semibold underline text-secondary hover:text-secondary-focus" href="/">GitHub</a> account.</>,    
        <>A downloadable <a className="link link-hover font-semibold underline text-secondary hover:text-secondary-focus" href="/">CV</a>.</>,        
    ],
    CTA: <>Want to see what tech I enjoy working with? Check out my <a className="link link-hover font-semibold underline text-secondary hover:text-secondary-focus" href="https://github.com/devmegan/awesome" target="_blank" rel="noreferrer">awesome list</a>. 😎</>
}
export { LINKS, HERO_CONTENT, GITHUB_LINK };