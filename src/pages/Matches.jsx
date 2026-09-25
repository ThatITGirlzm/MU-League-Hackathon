import { matches } from "../data/mockData";
import MatchCard from "../components/MatchCard";

function Matches() {
    const upcoming = matches.filter(
        (match) => match.status === "UPCOMING"
    );

    const completed = matches.filter(
        (match) => match.status === "FT"
    );

    return (
        <main className="page">

            <div className="page-container">

                <div className="page-title">

                    <p className="section-label">
                        FIXTURES & RESULTS
                    </p>

                    <h1>Matches</h1>

                    <p>
                        Follow upcoming fixtures and completed
                        matches.
                    </p>

                </div>


                <section>

                    <h2>Upcoming Matches</h2>

                    <div className="matches-grid">

                        {upcoming.map((match) => (
                            <MatchCard
                                key={match.id}
                                match={match}
                            />
                        ))}

                    </div>

                </section>


                <section className="results-section">

                    <h2>Final Scores</h2>

                    <div className="matches-grid">

                        {completed.map((match) => (
                            <MatchCard
                                key={match.id}
                                match={match}
                            />
                        ))}

                    </div>

                </section>

            </div>

        </main>
    );
}

export default Matches;