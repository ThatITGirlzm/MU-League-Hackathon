import { teams } from "../data/mockData";

function Teams() {
    return (
        <main className="page">

            <div className="page-container">

                <div className="page-title">
                    <p className="section-label">CLUBS</p>
                    <h1>Teams</h1>
                </div>

                <div className="teams-grid">

                    {teams.map((team) => (
                        <div className="team-card" key={team.id}>

                            <div className="team-logo">
                                {team.shortName}
                            </div>

                            <h3>{team.name}</h3>

                        </div>
                    ))}

                </div>

            </div>

        </main>
    );
}

export default Teams;