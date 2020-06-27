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
            <table className="teams-table">
                <th className="teams-table-title">Team {teamOne}</th>
                {random.length === 0 ? null : (
                    <tr >

                        {random.map((footballer, index) => (
                            <td className="tr-list-teams" key={index}>
                                <span style={{ color: footballer.color }}>{footballer.name}</span>
                            </td>
                        ))}
                    </tr>
                )}
            </table>

            <table>
                <th className="teams-table-title">Team {teamTwo}</th>
                {b.length === 0 ? null : (
                    <tr >

                        {b.map((footballer, index) => (
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