import React, { useContext } from "react";
import { AppContext } from "../../App";


const Teams = () => {

    const { state: { names } } = useContext(AppContext);
    const { state: { teamOne } } = useContext(AppContext);
    const { state: { teamTwo } } = useContext(AppContext);

    //Will move this to a reducer
    let random = [...names]
    let average = random.length / 2
    let b = random.splice(0, average);

    return (
        <>
            <div>
                <h3>{teamOne}</h3>
                {random.length === 0 ? null : (
                    <ul className="ul-list-names">

                        {random.map((footballer, index) => (
                            <li className="li-list-names" key={index}>
                                <span style={{ color: footballer.color }}>{footballer.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h3>{teamTwo}</h3>
                {b.length === 0 ? null : (
                    <ul className="ul-list-names">

                        {b.map((footballer, index) => (
                            <li className="li-list-names" key={index}>
                                <span style={{ color: footballer.color }}>{footballer.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )

}

export default Teams;