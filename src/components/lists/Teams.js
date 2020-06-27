import React, { useContext } from "react";
import { AppContext } from "../../App";


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
                                <span style={{ color: footballer.color }}>{footballer.name}</span>
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
                                <span style={{ color: footballer.color }}>{footballer.name}</span>
                            </td>
                        ))}
                    </tr>
                )}
            </table>
        </>
    )

}

export default Teams;