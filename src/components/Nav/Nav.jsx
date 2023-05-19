import "./Nav.scss";
import { Link } from "react-router-dom";
import brandImage from "../../assets/img/brand_logo.svg";
import { useState } from "react";

const Nav = () => {
    const [isSelected, setIsSelected] = useState("/");
    const navLink = [
        { path: "/", text: "Accueil" },
        { path: "/about", text: "A Propos" }
    ];

    return <>
        <div className="nav">
            <div className="nav-brand-container">
                <Link to={`./`} onClick={() => setIsSelected("/")}>
                    <img src={brandImage} alt="" />
                </Link>
            </div>
            <div className="nav-link-container">
                {
                    navLink?.map((e, i) => {
                        return (
                            <Link
                                className={(isSelected === e.path) ? "nav-link-selected" : null} 
                                to={`.${e.path}`}
                                onClick={() => setIsSelected(e.path)}
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