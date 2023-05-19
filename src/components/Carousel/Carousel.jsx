import "./Carousel.scss";
import { useEffect, useState } from "react";
import arrowIcon from "../../assets/img/arrow_icon.svg";
import { SpinnerRing } from "../Spinner/Spinner";

const Carousel = ({ pictures }) => {
    const [picIndex, setPicIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (pictures && picIndex < 0) {
            setPicIndex(pictures.length - 1);
        }
        
        if (pictures && picIndex >= pictures.length) {
            setPicIndex(0);
        }

        setIsLoaded(false);
    }, [picIndex, pictures]);

    return <>
        <div className="carousel">
            {
                (pictures && pictures.length > 1) && 
                <div className="carousel-arrow-left" onClick={() => setPicIndex(picIndex - 1)}>
                    <img src={arrowIcon} alt="arrow left" />
                </div>
            }
            {
                (!isLoaded) &&
                <div className="carousel-spinner">
                    <SpinnerRing />
                </div> 
            }
            {
                (pictures) && 
                <img onLoad={() => setIsLoaded(true)} className="carousel-img" src={pictures[picIndex]} alt={`property-${picIndex + 1}`} />
                
            }
            {
                (pictures && pictures.length > 1) && 
                <div className="carousel-arrow-right" onClick={() => setPicIndex(picIndex + 1)}>
                    <img src={arrowIcon} alt="arrow right" />
                </div>
            }
        </div>
    </>
}
  
export default Carousel;