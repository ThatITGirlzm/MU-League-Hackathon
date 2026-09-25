import { matches, standings, news } from "../data/mockData";

import MatchCard from "../components/MatchCard";
import LeagueTable from "../components/LeagueTable";

function Home() {
    const upcomingMatches = matches.filter(
        (match) => match.status === "UPCOMING"
    );

    return (
        <main>

            {/* HERO */}

            <section className="hero">

                <div className="hero-content">

                    <p className="hero-label">
                        WELCOME TO MUSU LEAGUE
                    </p>

                    <h1>
                        THE HOME OF
                        <br />
                        FOOTBALL
                    </h1>

                    <p>
                        Follow fixtures, results, teams, players and
                        everything happening in the league.
                    </p>

                    <button>
                        View Matches
                    </button>

                </div>

            </section>


            {/* CONTENT */}

            <section className="page-container">

                <div className="section-heading">
                    <div>
                        <p className="section-label">FIXTURES</p>
                        <h2>Next Matches</h2>
                    </div>
                </div>


                <div className="matches-grid">

                    {upcomingMatches.map((match) => (
                        <MatchCard
                            key={match.id}
                            match={match}
                        />
                    ))}

                </div>


                <div className="home-grid">

                    <section>

                        <div className="section-heading">
                            <div>
                                <p className="section-label">
                                    STANDINGS
                                </p>

                                <h2>League Table</h2>
                            </div>
                        </div>

                        <LeagueTable teams={standings} />

                    </section>


                    <section>

                        <div className="section-heading">

                            <div>
                                <p className="section-label">
                                    LATEST
                                </p>

                                <h2>News</h2>
                            </div>

                        </div>

                        <div className="news-list">

                            {news.map((item) => (

                                <article
                                    className="news-card"
                                    key={item.id}
                                >

                                    <div className="news-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="news-content">

                                        <small>
                                            {item.category}
                                        </small>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.date}
                                        </p>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </section>

                </div>

            </section>

        </main>
    );
}

export default Home;