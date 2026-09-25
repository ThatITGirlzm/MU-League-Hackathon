import { Link } from "react-router-dom";
import {
    ArrowRight,
    Search,
    Shield,
    MapPin,
} from "lucide-react";
import { useState } from "react";

const teams = [
    {
        name: "Lusaka Warriors",
        short: "LWA",
        city: "Lusaka",
        founded: "1987",
        position: 1,
        points: 18,
    },
    {
        name: "Copperbelt United",
        short: "CBU",
        city: "Kitwe",
        founded: "1992",
        position: 2,
        points: 16,
    },
    {
        name: "Zambia City FC",
        short: "ZCF",
        city: "Lusaka",
        founded: "2001",
        position: 3,
        points: 14,
    },
    {
        name: "Kabwe Stars",
        short: "KBS",
        city: "Kabwe",
        founded: "1995",
        position: 4,
        points: 13,
    },
    {
        name: "Ndola Lions",
        short: "NDL",
        city: "Ndola",
        founded: "1998",
        position: 5,
        points: 11,
    },
    {
        name: "Livingstone FC",
        short: "LIV",
        city: "Livingstone",
        founded: "2004",
        position: 6,
        points: 9,
    },
    {
        name: "Kitwe Rangers",
        short: "KTR",
        city: "Kitwe",
        founded: "1990",
        position: 7,
        points: 8,
    },
    {
        name: "Central United",
        short: "CEN",
        city: "Central Province",
        founded: "2006",
        position: 8,
        points: 6,
    },
];

function Teams() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="teams-page">

            {/* HERO */}
            <section className="teams-hero">
                <div className="teams-hero-content">
                    <span className="eyebrow">
                        2026 / 27 SEASON
                    </span>

                    <h1>Teams</h1>

                    <p>
                        Explore the clubs competing this season,
                        their locations and league positions.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="teams-content">

                <div className="teams-heading">

                    <div>
                        <span className="eyebrow">
                            CLUB DIRECTORY
                        </span>

                        <h2>League Teams</h2>
                    </div>

                    <div className="team-search">
                        <Search size={18} />

                        <input
                            type="text"
                            placeholder="Search teams..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                        />
                    </div>

                </div>

                {/* TEAM COUNT */}
                <div className="teams-summary">

                    <div>
                        <strong>{filteredTeams.length}</strong>
                        <span>Teams Found</span>
                    </div>

                    <div>
                        <strong>2026/27</strong>
                        <span>Current Season</span>
                    </div>

                    <div>
                        <strong>8</strong>
                        <span>League Clubs</span>
                    </div>

                </div>

                {/* TEAM GRID */}
                <div className="teams-grid">

                    {filteredTeams.map((team) => (
                        <Link
                            key={team.short}
                            to={`/teams/${team.short.toLowerCase()}`}
                            className="team-card"
                        >

                            <div className="team-card-top">

                                <span className="team-position">
                                    #{team.position}
                                </span>

                                <Shield size={18} />

                            </div>

                            <div className="large-team-logo">
                                {team.short}
                            </div>

                            <h3>{team.name}</h3>

                            <div className="team-location">
                                <MapPin size={14} />
                                {team.city}
                            </div>

                            <div className="team-card-footer">

                                <div>
                                    <small>FOUNDED</small>
                                    <strong>{team.founded}</strong>
                                </div>

                                <div>
                                    <small>POINTS</small>
                                    <strong>{team.points}</strong>
                                </div>

                                <span className="team-arrow">
                                    <ArrowRight size={17} />
                                </span>

                            </div>

                        </Link>
                    ))}

                </div>

                {filteredTeams.length === 0 && (
                    <div className="no-teams">
                        <Shield size={40} />

                        <h3>No teams found</h3>

                        <p>
                            Try searching with another team name.
                        </p>
                    </div>
                )}

            </section>

        </main>
    );
}

export default Teams;