import React from "react";
import { useHistory } from 'react-router-dom';


const Button = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        //prevents the page from refreshing on submit
        history.push("/teams");
    };

    return (
        <>
            <div className="btn-teams">
                <p className="input-label">Generate Teams</p>
                <button className="btn-link" onClick={handleSubmit}>Generate Teams</button>
            </div>
        </>
    )
}

export default Button;