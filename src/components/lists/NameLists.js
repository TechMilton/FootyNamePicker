import React, { useContext } from "react";
import { AppContext } from "../../App";

const NameList = () => {
    const { state: { names }, dispatch } = useContext(AppContext);

    return (
        <table className="names-table">
            <tr>
                <th className="names-table-title">Footballers:</th>
            </tr>
            {names.length === 0 ? null : (
                <tr className="tr-list-names">
                    {names.map((footballer, index) => (
                        <td className="td-list-names" style={{ backgroundImage: footballer.color }} key={index}>
                            <td> {footballer.name}</td>
                            <tr className="tr-list-names">
                                <button className="remove-btn"
                                    onClick={() => dispatch({ type: "REMOVE_NAME", index: index })}>
                                    x
                                </button>
                            </tr>

                        </td>
                    ))}
                </tr>
            )}
        </table>
    )
}

export default NameList;