import "./Property.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { logements } from "../../data/logements";
import Carousel from "../../components/Carousel/Carousel";
import Accordion from "../../components/Accordion/Accordion";

const Property = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect(() => {
        const result = logements.find(e => e.id === id);
        
        if (!result) {
            let status = 404;

            navigate(`/${status}-not-found`, { state: {status: status} });
        }
        else {
            setData(result);
        }
    }, []);

    return <>
        <div className="property-container">
            <Carousel pictures={(data && data.hasOwnProperty("pictures")) ? data.pictures : null}></Carousel>

            <div className="property">
                <div className="property-infos">
                    <div className="property-left">
                        <h1>
                            {(data && data.hasOwnProperty("title")) ? data.title : "Titre de la propriété"}
                        </h1>
                        <div className="property-left-location">
                            {(data && data.hasOwnProperty("location")) ? data.location : "Emplacement de la propriété"}
                        </div>
                        <div className="property-left-tags">
                            {
                                (data && data.hasOwnProperty("tags")) &&
                                data.tags.map((e, i) => {
                                    return (
                                        <span key={i}>{e}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="host">
                        <div className="host-profile">
                            <div className="host-profile-name">
                                {(data && data.hasOwnProperty("host") && data.host.hasOwnProperty("name")) ? data.host.name : "Nom de l'hébergeur"}
                            </div>
                            <div className="host-profile-image">
                                {
                                    (data && data.hasOwnProperty("host") && data.host.hasOwnProperty("picture")) &&
                                    <img src={data.host.picture} alt="profile" />
                                }
                            </div>
                        </div>
                        <div className="host-rating">
                            {
                                [...Array(5)].map((_, i) => {
                                    return (
                                        <span key={i} className={`host-rating-star${(data && data.hasOwnProperty("rating") && i < parseInt(data.rating)) ? " checked" : ""}`}></span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="property-description">
                    {
                        (data && data.hasOwnProperty("description")) &&
                        <Accordion title={"Description"} text={data.description}></Accordion>
                    }
                    {
                        (data && data.hasOwnProperty("equipments") && data.equipments.length > 0) &&
                        <Accordion title={"Équipements"} list={data.equipments}></Accordion>
                    }
                </div>
            </div>
        </div>
    </>
}
  
export default Property;