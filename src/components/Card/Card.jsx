import "./Card.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SpinnerRipple } from "../Spinner/Spinner";

const Card = ({ item }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        let navUnderline = document.querySelector(".nav-link-selected");

        if (navUnderline) {
            navUnderline.classList.remove("nav-link-selected");
        }
    }

    return <> 
        <div className="card">
            <Link to={`property/${item.id}`} onClick={() => handleClick()}>
                {
                    (!isLoaded) &&
                    <div className="card-spinner">
                        <SpinnerRipple />
                    </div> 
                }
                <img onLoad={() => setIsLoaded(true)} src={item.pictures[0]} alt="property card" />
                <div className="card-overlay">
                    <div className="card-title">
                        <p>
                            {
                                (item.hasOwnProperty("title") && item.title.length > 0) ?
                                    item.title : "Titre de la location"
                            }
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    </>
}

export default Card;