import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import bannerImage from "../../assets/img/banner_home.png";
import { useEffect, useState } from "react";

const Home = () => {
    const [logements, setLogements] = useState();

    useEffect(() => {
        (async() => {
            await fetch(`${window.location.origin}/logements.json`)
                .then(response => response.json())
                .then(result => setLogements(result));
                
        })();
    }, []);


    return <>
        <Banner img={bannerImage} title={`Chez vous,
        partout et ailleurs`}></Banner>
        
        <div className="card-container">
            {
                logements?.map((e, i) => {
                    return (
                        <Card key={i} item={e}></Card>
                    )
                })
            }
        </div>
    </>
}
  
export default Home;