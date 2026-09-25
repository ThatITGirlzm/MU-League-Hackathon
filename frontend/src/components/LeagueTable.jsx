function LeagueTable({ teams }) {
    return (
        <div className="table-wrapper">

            <table className="league-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Club</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                </thead>

                <tbody>

                    {teams.map((team) => {

                        const goalDifference = team.gf - team.ga;

                        return (
                            <tr key={team.position}>

                                <td>{team.position}</td>

                                <td className="club-name">
                                    {team.team}
                                </td>

                                <td>{team.played}</td>
                                <td>{team.won}</td>
                                <td>{team.drawn}</td>
                                <td>{team.lost}</td>
                                <td>{team.gf}</td>
                                <td>{team.ga}</td>

                                <td>
                                    {goalDifference > 0
                                        ? `+${goalDifference}`
                                        : goalDifference}
                                </td>

                                <td className="points">
                                    {team.points}
                                </td>

                            </tr>
                        );
                    })}

                </tbody>

            </table>

        </div>
    );
}

export default LeagueTable;