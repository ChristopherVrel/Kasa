import "./Error.scss";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { error } from "../../data/error";

const Error = ({ defaultState }) => {
    const [state, setState] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (state) {
            navigate(`${state.status}-not-found`);
        }
    }, [state, navigate]);

    useEffect(() => {
        let errorStatus;

        if (location.state && error.find(e => e.status === location.state.status)) {
            errorStatus = error.find(e => e.status === location.state.status);

            setState(errorStatus);
        }
        else {
            errorStatus = error.find(e => e.status === defaultState.status);

            setState(errorStatus);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
        {
            (state) &&
            <div className="error-container">
                { state.status && <h1>{state.status}</h1> }
                { state.message && <p>{state.message}</p> }
                { state.message && <Link to={"./"}>Retourner sur la page d’accueil</Link> }
            </div>
        }
    </>
}
  
export default Error;