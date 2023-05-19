import "./Accordion.scss";
import { useContext, useEffect, useRef, useState } from "react";
import dropdownIcon from "../../assets/img/arrow_down_icon.svg";
import { DataContext } from "../../pages/About/About";
import List from "../List/List";

const Accordion = ({ index, title, text, list }) => {
    const [isActive, setIsActive] = useState(false);
    const collapse = useRef();
    const data = useContext(DataContext);

    // update element height when active
    useEffect(() => {
        if (isActive) {
            collapse.current.style.height = `${collapse.current.children[0].getBoundingClientRect().height}px`;
        }
        else {
            collapse.current.removeAttribute("style");
        }
    }, [isActive]);

    // reset opened element when shared index change
    useEffect(() => {
        if (data.activeAccordion !== index) {
            collapse.current.removeAttribute("style");
            setIsActive(false);
        }
    }, [data.activeAccordion, index]);

    const handleClick = () => {
        // if index is undefined it's mean there is no shared index so it's an unique component
        if (index === undefined) {
            setIsActive(!isActive);
        }
        else {
            if (index === data.activeAccordion) {
                setIsActive(false);
                data.setActiveAccordion(null);
            }
            else {
                setIsActive(true);
                data.setActiveAccordion(index);
            }
        }
    }

    return <>
        <div className="accordion">
            <div className="accordion-header" onClick={() => handleClick()}>
                <div className="accordion-title">{title}</div>
                <img className={(isActive) ? "open" : undefined} src={dropdownIcon} alt="Dropdown icon" />
            </div>
            <div ref={collapse} className="collapse">
                <div className="collapse-content">
                    {
                        (text && !list) ? text 
                        : (!text && list) && <List list={list}></List>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Accordion;