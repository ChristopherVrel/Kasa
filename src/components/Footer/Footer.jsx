import './Footer.scss';
import { Link } from 'react-router-dom';
import brandImage from "../../assets/img/brand_logo_w.svg";

const Footer = () => {
    return <>
        <div className="footer-container">
            <div className="footer-brand-container">
                <Link to={`./`}>
                    <img src={brandImage} alt="Kasa logo" />
                </Link>
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </>
}

export default Footer;