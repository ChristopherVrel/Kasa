import "./Banner.scss";
import { useState } from "react";

const Banner = ({ img, filterColor, title}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return <>
        <div className="banner">
            { (!isLoaded) && <div className="banner-overlay-loader"></div> }

            { (img) && <img  onLoad={() => setIsLoaded(true)} src={img} alt="banner"/> }
            
            <div className="banner-overlay" style={(filterColor) ? {background: filterColor} : undefined}>
                {(title) && <h1>{title}</h1>}
            </div>
        </div>
    </>
}
  
export default Banner;