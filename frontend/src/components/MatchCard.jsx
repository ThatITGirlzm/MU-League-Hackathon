import { Link } from "react-router-dom";

function MatchCard({ match }) {
    return (
        <Link to={`/matches/${match.id}`} className="match-card">

            <div className="match-date">
                {match.date} • {match.time}
            </div>

            <div className="match-teams">

                <div className="team">
                    <strong>{match.homeTeam}</strong>
                </div>

                <div className="score">

                    {match.status === "FT" ? (
                        <>
                            <span>{match.homeScore}</span>
                            <span>-</span>
                            <span>{match.awayScore}</span>
                        </>
                    ) : (
                        <span>VS</span>
                    )}

                </div>

                <div className="team">
                    <strong>{match.awayTeam}</strong>
                </div>

            </div>

            <div className="match-status">
                {match.status === "FT" ? "FULL TIME" : "UPCOMING"}
            </div>

            <div className="stadium">
                {match.stadium}
            </div>

        </Link>
    );
}

export default MatchCard;