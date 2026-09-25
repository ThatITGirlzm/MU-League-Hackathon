import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, TrendingUp } from "lucide-react";

const teams = [
    {
        position: 1,
        team: "Lusaka Warriors",
        short: "LWA",
        played: 8,
        wins: 5,
        draws: 3,
        losses: 0,
        gf: 16,
        ga: 7,
        points: 18,
        form: ["W", "W", "D", "W", "D"],
    },
    {
        position: 2,
        team: "Copperbelt United",
        short: "CBU",
        played: 8,
        wins: 5,
        draws: 1,
        losses: 2,
        gf: 15,
        ga: 9,
        points: 16,
        form: ["W", "L", "W", "W", "D"],
    },
    {
        position: 3,
        team: "Zambia City FC",
        short: "ZCF",
        played: 8,
        wins: 4,
        draws: 2,
        losses: 2,
        gf: 13,
        ga: 10,
        points: 14,
        form: ["W", "D", "W", "L", "W"],
    },
    {
        position: 4,
        team: "Kabwe Stars",
        short: "KBS",
        played: 8,
        wins: 4,
        draws: 1,
        losses: 3,
        gf: 12,
        ga: 11,
        points: 13,
        form: ["L", "W", "W", "D", "W"],
    },
    {
        position: 5,
        team: "Ndola Lions",
        short: "NDL",
        played: 8,
        wins: 3,
        draws: 2,
        losses: 3,
        gf: 11,
        ga: 10,
        points: 11,
        form: ["D", "W", "L", "W", "L"],
    },
    {
        position: 6,
        team: "Livingstone FC",
        short: "LIV",
        played: 8,
        wins: 2,
        draws: 3,
        losses: 3,
        gf: 9,
        ga: 11,
        points: 9,
        form: ["D", "L", "W", "D", "L"],
    },
    {
        position: 7,
        team: "Kitwe Rangers",
        short: "KTR",
        played: 8,
        wins: 2,
        draws: 2,
        losses: 4,
        gf: 8,
        ga: 12,
        points: 8,
        form: ["L", "D", "W", "L", "D"],
    },
    {
        position: 8,
        team: "Central United",
        short: "CEN",
        played: 8,
        wins: 1,
        draws: 3,
        losses: 4,
        gf: 7,
        ga: 13,
        points: 6,
        form: ["D", "L", "L", "D", "W"],
    },
];

function Table() {
    return (
        <main className="table-page">

            <section className="table-hero">
                <div className="table-hero-content">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={17} />
                        Back to Home
                    </Link>

                    <span className="eyebrow">2026 / 27 SEASON</span>

                    <h1>League Table</h1>

                    <p>
                        Follow the latest standings, team records and
                        league form throughout the season.
                    </p>
                </div>
            </section>

            <section className="table-content">

                <div className="table-title-row">
                    <div>
                        <span className="eyebrow">STANDINGS</span>
                        <h2>Championship Table</h2>
                    </div>

                    <div className="table-season">
                        <Trophy size={17} />
                        2026 / 27
                    </div>
                </div>

                <div className="standings-card">

                    <div className="standings-header">
                        <span>#</span>
                        <span>TEAM</span>
                        <span>P</span>
                        <span>W</span>
                        <span>D</span>
                        <span>L</span>
                        <span>GF</span>
                        <span>GA</span>
                        <span>GD</span>
                        <span>PTS</span>
                        <span>FORM</span>
                    </div>

                    {teams.map((team) => {
                        const goalDifference = team.gf - team.ga;

                        return (
                            <div
                                className={`standings-row ${team.position === 1 ? "first-place" : ""
                                    }`}
                                key={team.team}
                            >
                                <div className="position">
                                    {team.position}
                                </div>

                                <div className="table-team">
                                    <div className="team-logo-small">
                                        {team.short}
                                    </div>

                                    <strong>{team.team}</strong>
                                </div>

                                <span>{team.played}</span>
                                <span>{team.wins}</span>
                                <span>{team.draws}</span>
                                <span>{team.losses}</span>
                                <span>{team.gf}</span>
                                <span>{team.ga}</span>

                                <span
                                    className={
                                        goalDifference >= 0
                                            ? "positive"
                                            : "negative"
                                    }
                                >
                                    {goalDifference > 0
                                        ? `+${goalDifference}`
                                        : goalDifference}
                                </span>

                                <strong className="points">
                                    {team.points}
                                </strong>

                                <div className="form">
                                    {team.form.map((result, index) => (
                                        <span
                                            key={index}
                                            className={`form-${result.toLowerCase()}`}
                                        >
                                            {result}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                </div>

                <div className="table-legend">
                    <div>
                        <span className="legend-dot champion"></span>
                        <span>Top position</span>
                    </div>

                    <div>
                        <span className="legend-dot positive-dot"></span>
                        <span>Positive goal difference</span>
                    </div>

                    <div>
                        <span className="legend-dot negative-dot"></span>
                        <span>Negative goal difference</span>
                    </div>
                </div>

                <div className="table-info-card">
                    <div className="table-info-icon">
                        <TrendingUp size={22} />
                    </div>

                    <div>
                        <h3>How the table works</h3>

                        <p>
                            Teams receive three points for a win, one point
                            for a draw and no points for a loss. Goal
                            difference is calculated by subtracting goals
                            conceded from goals scored.
                        </p>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Table;
