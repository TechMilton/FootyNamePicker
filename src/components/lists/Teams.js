import React, { useContext } from "react";
import { AppContext } from "../../App";
import SVG from "../../imgs/Shirt";


const Teams = () => {

    const { state: { names } } = useContext(AppContext);

    const { state: { teamOne } } = useContext(AppContext);
    const { state: { teamTwo } } = useContext(AppContext);

    const { state: { teamOneNames } } = useContext(AppContext);
    const { state: { teamTwoNames } } = useContext(AppContext);

    const { state: { count } } = useContext(AppContext);

    if (names.length < count) {
        return null;
    }


    return (
        <>
            <table className="teams-table">
                <th className="teams-table-title">Team {teamOne}</th>
                {teamOneNames.length === 0 ? null : (
                    <tr >
                        {teamOneNames.map((footballer, index) => (
                            <td className="tr-list-teams" key={index}>
                                <span>{footballer.name}</span>
                                <SVG fill={footballer.color} />
                            </td>
                        ))}
                    </tr>
                )}
            </table>

            <table>
                <th className="teams-table-title">Team {teamTwo}</th>
                {teamTwoNames.length === 0 ? null : (
                    <tr >
                        {teamTwoNames.map((footballer, index) => (
                            <td className="tr-list-teams" key={index}>
                                <span>{footballer.name}</span>
                                <SVG className="football-shirt" fill={footballer.color} />
                            </td>
                        ))}
                    </tr>
                )}
            </table>
        </>
    )

}

export default Teams;