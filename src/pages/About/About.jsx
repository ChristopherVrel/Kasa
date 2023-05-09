import "./About.scss";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/img/banner_about.png";
import Accordion from "../../components/Accordion/Accordion";
import { createContext, useMemo, useState } from "react";
import { accordions } from "../../data/accordions";

const DataContext = createContext({});

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const globalData = useMemo(() => {
        return { activeAccordion, setActiveAccordion };
    }, [activeAccordion, setActiveAccordion]);

    return <>
        <DataContext.Provider value={globalData}>
            <Banner img={bannerImage}></Banner>

            <div className="accordion-container">
                {
                    accordions?.map((e, i) => {
                        return (
                            <Accordion key={i} index={i} title={e.title} text={e.text}></Accordion>
                        )
                    })
                }
            </div>
        </DataContext.Provider>
    </>
}
  
export { About, DataContext };