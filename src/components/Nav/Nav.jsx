import "./Nav.scss";
import { Link } from "react-router-dom";
import brandImage from "../../assets/img/brand_logo.svg";
import { useRef, useState } from "react";

const Nav = () => {
    const linkRef = useRef([]);
    const [isSelected, setIsSelected] = useState("/");
    const navLink = [
        { path: "/", text: "Accueil" },
        { path: "/about", text: "A Propos" }
    ];

    const handleClick = (i, path) => {
        let current = linkRef.current[i];

        if (isSelected === path && !current.classList.contains("nav-link-selected")) {
            current.classList.add("nav-link-selected");
        }
        
        setIsSelected(path);
    }

    return <>
        <div className="nav">
            <div className="nav-brand-container">
                <Link to={`./`} onClick={() => handleClick(0, "/")}>
                    <img src={brandImage} alt="" />
                </Link>
            </div>
            <div className="nav-link-container">
                {
                    navLink?.map((e, i) => {
                        return (
                            <Link
                                ref={(e) => linkRef.current[i] = e}
                                className={(isSelected === e.path) ? "nav-link-selected" : null} 
                                to={`.${e.path}`}
                                onClick={() => handleClick(i, e.path)}
                                key={i}>
                                {e.text}
                            </Link>
                        )
                    })
                }
            </div>
        </div>  
    </>
}
  
export default Nav;