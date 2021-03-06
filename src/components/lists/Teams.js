import React, { useContext } from "react";
import { AppContext } from "../../App";
import SVG from "../../imgs/Shirt";


const Teams = () => {

    //initialize context so that you can reach the data
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
            <table className="team-one-table">
                <thead>
                    <tr>
                        <th className="teams-table-title">Team {teamOne}</th>
                    </tr>
                </thead>
                <tbody>
                    {teamOneNames.length === 0 ? null : (
                        <tr >
                            {teamOneNames.map((footballer, index) => (
                                <td className="tr-list-teams" key={index}>
                                    <span className="footballer-name">{footballer.name}</span>
                                    <SVG fill={footballer.color} />
                                </td>
                            ))}
                        </tr>
                    )}
                </tbody>
            </table>

            <table className="team-two-table">
                <thead>
                    <tr>
                        <th className="teams-table-title">Team {teamTwo}</th>
                    </tr>
                </thead>
                <tbody>
                    {teamTwoNames.length === 0 ? null : (
                        <tr >
                            {teamTwoNames.map((footballer, index) => (
                                <td className="tr-list-teams" key={index}>
                                    <span className="footballer-name">{footballer.name}</span>
                                    <SVG fill={footballer.color} />
                                </td>
                            ))}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}

export default Teams;