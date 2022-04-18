import { LINKS } from "../../Config";
import LOGO from "../assets/img/logo.png";

export default function Footer({ theme }){
    return (
        <footer 
            className="footer p-10 bg-base-200 text-base-content rounded-md" 
            data-theme={theme}
        >
            <div>
                <img 
                    alt="Logo"
                    className={`h-20 w-20 ${theme === 'light' && 'filter invert-25'}`} 
                    src={LOGO}
                 />
            </div>
            <div>
                <span className="footer-title">Useful Links</span> 
                { LINKS['useful'].map((link) => 
                    <a 
                        className="link link-hover" 
                        href={link.href} 
                        type={link.type}
                    >
                        {link.name}
                    </a> 
                )}
            </div> 
            <div>
                <span className="footer-title">Let's connect</span> 
                { LINKS['connect'].map((link) => 
                    <a 
                        className="link link-hover" 
                        href={link.href} 
                        type={link.type}
                    >
                        {link.name}
                    </a> 
                )}
            </div>
        </footer>
    )
}