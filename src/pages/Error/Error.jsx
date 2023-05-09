import "./Error.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { error } from "../../data/error";

const Error = ({ state }) => {
    const [err, setErr] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            navigate(`${state.status}-not-found`, { status : state.status });

            const errorStatus = error.find(e => e.status === state.status);

            setErr(errorStatus);
        }
    }, [state, navigate]);

    return <>
        {
            (err) &&
            <div className="error-container">
                { err.status && <h1>{err.status}</h1> }
                { err.message && <p>{err.message}</p> }
                { err.message && <Link to={"./"}>Retourner sur la page d’accueil</Link> }
            </div>
        }
    </>
}
  
export default Error;