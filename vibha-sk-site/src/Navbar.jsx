import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="vibha-title">
            Vibha Sathish Kumar
        </Link>
        <ul className="items">
            <CustomLink to="/research">Research</CustomLink>
            <CustomLink to="/leadership">Leadership</CustomLink>  
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)    
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}