import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { logements } from "../../data/logements";
import bannerImage from "../../assets/img/banner_home.png";

const Home = () => {
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