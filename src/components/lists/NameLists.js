import React, { useContext } from "react";
import { AppContext } from "../../App";

const NameList = () => {
    const { state: { names }, dispatch } = useContext(AppContext);

    return (

        <table className="names-table">
            <thead>
                <tr>
                    <th className="names-table-title">Footballers: </th>
                </tr>
            </thead>
            <tbody>
                {names.length === 0 ? null : (
                    <tr className="tr-list-names">
                        {names.map((footballer, index) => (
                            <td className="td-list-names" style={{ backgroundImage: footballer.color }} key={index}>
                                <span> {footballer.name}</span>
                                <span className="tr-list-names">
                                    <button className="remove-btn"
                                        onClick={() => dispatch({ type: "REMOVE_NAME", index: index })}>
                                        x
                                </button>
                                </span>
                            </td>
                        ))}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default NameList;