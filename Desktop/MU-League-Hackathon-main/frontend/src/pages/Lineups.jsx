import { useState } from "react";
import { ArrowLeft, Shirt, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const lineupData = {
    1: {
        home: {
            name: "Lusaka Warriors",
            short: "LWA",
            formation: "4-3-3",
            players: [
                { number: 1, name: "Daniel Phiri", position: "GK", x: 50, y: 90 },
                { number: 2, name: "Moses Banda", position: "DEF", x: 15, y: 70 },
                { number: 4, name: "John Zulu", position: "DEF", x: 38, y: 70 },
                { number: 5, name: "Patrick Tembo", position: "DEF", x: 62, y: 70 },
                { number: 3, name: "Simon Mwila", position: "DEF", x: 85, y: 70 },
                { number: 8, name: "Kelvin Bwalya", position: "MID", x: 25, y: 48 },
                { number: 6, name: "Andrew Lungu", position: "MID", x: 50, y: 48 },
                { number: 10, name: "Brian Mwansa", position: "MID", x: 75, y: 48 },
                { number: 11, name: "Kelvin Tembo", position: "ATT", x: 18, y: 22 },
                { number: 9, name: "Charles Phiri", position: "ATT", x: 50, y: 18 },
                { number: 7, name: "Martin Zulu", position: "ATT", x: 82, y: 22 },
            ],
            substitutes: [
                "Peter Chanda",
                "Joseph Mulenga",
                "Isaac Banda",
                "David Mwape",
                "Collins Phiri",
            ],
        },

        away: {
            name: "Copperbelt United",
            short: "CBU",
            formation: "4-4-2",
            players: [
                { number: 1, name: "James Mulenga", position: "GK", x: 50, y: 90 },
                { number: 2, name: "Peter Chanda", position: "DEF", x: 15, y: 70 },
                { number: 5, name: "Andrew Phiri", position: "DEF", x: 38, y: 70 },
                { number: 4, name: "Michael Zulu", position: "DEF", x: 62, y: 70 },
                { number: 3, name: "John Banda", position: "DEF", x: 85, y: 70 },
                { number: 7, name: "David Phiri", position: "MID", x: 15, y: 48 },
                { number: 8, name: "Kelvin Mwape", position: "MID", x: 38, y: 48 },
                { number: 6, name: "Patrick Zulu", position: "MID", x: 62, y: 48 },
                { number: 11, name: "Simon Banda", position: "MID", x: 85, y: 48 },
                { number: 9, name: "George Lungu", position: "ATT", x: 35, y: 22 },
                { number: 10, name: "Isaac Tembo", position: "ATT", x: 65, y: 22 },
            ],
            substitutes: [
                "Brian Chanda",
                "Moses Lungu",
                "Victor Banda",
                "Christopher Mwila",
                "Daniel Zulu",
            ],
        },
    },
};

function FootballPitch({ team }) {
    return (
        <div className="football-pitch">
            <div className="pitch-lines">
                <div className="centre-line"></div>
                <div className="centre-circle"></div>
                <div className="penalty-area top"></div>
                <div className="penalty-area bottom"></div>
                <div className="goal-area top"></div>
                <div className="goal-area bottom"></div>
            </div>

            {team.players.map((player) => (
                <div
                    className="pitch-player"
                    key={player.number}
                    style={{
                        left: `${player.x}%`,
                        top: `${player.y}%`,
                    }}
                >
                    <div className="player-shirt">
                        <Shirt size={17} />
                        <span>{player.number}</span>
                    </div>

                    <strong>{player.name}</strong>
                    <small>{player.position}</small>
                </div>
            ))}
        </div>
    );
}

function PlayerList({ team }) {
    return (
        <div className="player-list">
            {team.players.map((player) => (
                <div className="player-list-item" key={player.number}>
                    <span className="player-number">{player.number}</span>

                    <div className="player-list-icon">
                        <Shirt size={16} />
                    </div>

                    <div>
                        <strong>{player.name}</strong>
                        <span>{player.position}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Lineups() {
    const { id } = useParams();
    const [activeTeam, setActiveTeam] = useState("home");

    const match = lineupData[id] || lineupData[1];

    const team =
        activeTeam === "home" ? match.home : match.away;

    return (
        <main className="lineups-page">
            <section className="lineups-header">
                <div className="lineups-header-content">
                    <Link to={`/matches/${id}`} className="back-link">
                        <ArrowLeft size={17} />
                        Back to Match
                    </Link>

                    <span className="eyebrow">MATCH CENTRE</span>

                    <h1>Line-ups</h1>

                    <p>
                        Starting XI, formations and substitutes for both teams.
                    </p>
                </div>
            </section>

            <section className="section lineups-section">
                <div className="lineup-team-selector">
                    <button
                        className={activeTeam === "home" ? "active" : ""}
                        onClick={() => setActiveTeam("home")}
                    >
                        <span>{match.home.short}</span>
                        {match.home.name}
                    </button>

                    <button
                        className={activeTeam === "away" ? "active" : ""}
                        onClick={() => setActiveTeam("away")}
                    >
                        <span>{match.away.short}</span>
                        {match.away.name}
                    </button>
                </div>

                <div className="lineup-title-row">
                    <div>
                        <span className="eyebrow">STARTING XI</span>
                        <h2>{team.name}</h2>
                    </div>

                    <div className="formation-badge">
                        Formation
                        <strong>{team.formation}</strong>
                    </div>
                </div>

                <div className="pitch-wrapper">
                    <FootballPitch team={team} />
                </div>

                <div className="lineup-bottom-grid">
                    <div className="lineup-panel">
                        <div className="panel-heading">
                            <div>
                                <span className="eyebrow">STARTING XI</span>
                                <h3>Players</h3>
                            </div>

                            <Users size={22} />
                        </div>

                        <PlayerList team={team} />
                    </div>

                    <div className="lineup-panel">
                        <div className="panel-heading">
                            <div>
                                <span className="eyebrow">BENCH</span>
                                <h3>Substitutes</h3>
                            </div>

                            <Users size={22} />
                        </div>

                        <div className="substitute-list">
                            {team.substitutes.map((player, index) => (
                                <div className="substitute" key={player}>
                                    <span>{index + 12}</span>
                                    <Shirt size={17} />
                                    <strong>{player}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Lineups;