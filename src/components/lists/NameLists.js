import React, { useContext } from "react";
import { AppContext } from "../../App";

const NameList = () => {
    const { state: { names }, dispatch } = useContext(AppContext);

    return (
        <div>
            <h3>Names:</h3>
            {names.length === 0 ? null : (
                <ul className="ul-list-names">
                    {names.map((footballer, index) => (
                        <li className="li-list-names" style={{ backgroundImage: footballer.color }} key={index}>
                            <span> {footballer.name}</span>
                            <button className="remove-btn"
                                onClick={() => dispatch({ type: "REMOVE_NAME", index: index })}>
                                x
                                </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NameList;