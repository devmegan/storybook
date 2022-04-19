export default function Nav(){
    return (
        <div class="navbar px-0 bg-base-100 rounded-md mb-20 md:mb-40">
            <div class="flex-1">
                <a class="btn btn-secondary normal-case text-2xl" href="/">M</a>
            </div>
            <div class="flex-none hidden sm:block">
                <ul class="menu menu-horizontal p-0 font-medium">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}