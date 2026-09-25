import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    MapPin,
    CalendarDays,
    Trophy,
    Users,
    BarChart3,
    ArrowRight,
} from "lucide-react";

const teams = {
    lwa: {
        name: "Lusaka Warriors",
        short: "LWA",
        city: "Lusaka",
        founded: "1987",
        position: 1,
        points: 18,
        played: 8,
        wins: 5,
        draws: 3,
        losses: 0,
        goalsFor: 16,
        goalsAgainst: 7,
        colors: "Green & Navy",
    },

    cbu: {
        name: "Copperbelt United",
        short: "CBU",
        city: "Kitwe",
        founded: "1992",
        position: 2,
        points: 16,
        played: 8,
        wins: 5,
        draws: 1,
        losses: 2,
        goalsFor: 15,
        goalsAgainst: 9,
        colors: "Blue & White",
    },

    zcf: {
        name: "Zambia City FC",
        short: "ZCF",
        city: "Lusaka",
        founded: "2001",
        position: 3,
        points: 14,
        played: 8,
        wins: 4,
        draws: 2,
        losses: 2,
        goalsFor: 13,
        goalsAgainst: 10,
        colors: "Red & White",
    },

    kbs: {
        name: "Kabwe Stars",
        short: "KBS",
        city: "Kabwe",
        founded: "1995",
        position: 4,
        points: 13,
        played: 8,
        wins: 4,
        draws: 1,
        losses: 3,
        goalsFor: 12,
        goalsAgainst: 11,
        colors: "Yellow & Navy",
    },

    ndl: {
        name: "Ndola Lions",
        short: "NDL",
        city: "Ndola",
        founded: "1998",
        position: 5,
        points: 11,
        played: 8,
        wins: 3,
        draws: 2,
        losses: 3,
        goalsFor: 11,
        goalsAgainst: 10,
        colors: "Orange & Black",
    },

    liv: {
        name: "Livingstone FC",
        short: "LIV",
        city: "Livingstone",
        founded: "2004",
        position: 6,
        points: 9,
        played: 8,
        wins: 2,
        draws: 3,
        losses: 3,
        goalsFor: 9,
        goalsAgainst: 11,
        colors: "Blue & White",
    },

    ktr: {
        name: "Kitwe Rangers",
        short: "KTR",
        city: "Kitwe",
        founded: "1990",
        position: 7,
        points: 8,
        played: 8,
        wins: 2,
        draws: 2,
        losses: 4,
        goalsFor: 8,
        goalsAgainst: 12,
        colors: "Red & Black",
    },

    cen: {
        name: "Central United",
        short: "CEN",
        city: "Central Province",
        founded: "2006",
        position: 8,
        points: 6,
        played: 8,
        wins: 1,
        draws: 3,
        losses: 4,
        goalsFor: 7,
        goalsAgainst: 13,
        colors: "White & Green",
    },
};

const players = [
    {
        number: 1,
        name: "Daniel Mwansa",
        position: "Goalkeeper",
    },
    {
        number: 4,
        name: "Patrick Banda",
        position: "Defender",
    },
    {
        number: 5,
        name: "Andrew Phiri",
        position: "Defender",
    },
    {
        number: 8,
        name: "Joseph Tembo",
        position: "Midfielder",
    },
    {
        number: 10,
        name: "Brian Zulu",
        position: "Midfielder",
    },
    {
        number: 11,
        name: "Kelvin Mumba",
        position: "Forward",
    },
];

function TeamDetails() {
    const { teamId } = useParams();

    console.log("TEAM ID FROM URL:", teamId);

    const team = teams[teamId];

    // Prevent a blank page if an invalid team URL is opened.
    if (!team) {
        return (
            <main className="team-not-found">
                <div>
                    <Trophy size={50} />

                    <h1>Team Not Found</h1>

                    <p>
                        We could not find the team you are looking for.
                    </p>

                    <Link to="/teams">
                        <ArrowLeft size={17} />
                        Back to Teams
                    </Link>
                </div>
            </main>
        );
    }

    const goalDifference =
        team.goalsFor - team.goalsAgainst;

    return (
        <main className="team-details-page">

            {/* TEAM HERO */}

            <section className="team-details-hero">

                <div className="team-details-container">

                    <Link
                        to="/teams"
                        className="team-back-link"
                    >
                        <ArrowLeft size={17} />
                        Back to Teams
                    </Link>

                    <div className="team-profile">

                        <div className="team-profile-logo">
                            {team.short}
                        </div>

                        <div className="team-profile-info">

                            <span className="team-competition">
                                FOOTBALL HUB CHAMPIONSHIP
                            </span>

                            <h1>{team.name}</h1>

                            <div className="team-meta">

                                <span>
                                    <MapPin size={15} />
                                    {team.city}
                                </span>

                                <span>
                                    <CalendarDays size={15} />
                                    Founded {team.founded}
                                </span>

                                <span>
                                    <Trophy size={15} />
                                    Position #{team.position}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* TABS */}

            <nav className="team-tabs">

                <div className="team-details-container">

                    <a href="#overview" className="team-tab active">
                        Overview
                    </a>

                    <a href="#squad" className="team-tab">
                        Squad
                    </a>

                    <a href="#results" className="team-tab">
                        Results
                    </a>

                    <a href="#fixtures" className="team-tab">
                        Fixtures
                    </a>

                </div>

            </nav>

            {/* CONTENT */}

            <section
                className="team-details-content"
                id="overview"
            >

                {/* STATISTICS */}

                <div className="team-stat-grid">

                    <div className="team-stat-card">
                        <span>POSITION</span>
                        <strong>#{team.position}</strong>
                        <small>League position</small>
                    </div>

                    <div className="team-stat-card highlight">
                        <span>POINTS</span>
                        <strong>{team.points}</strong>
                        <small>Current points</small>
                    </div>

                    <div className="team-stat-card">
                        <span>PLAYED</span>
                        <strong>{team.played}</strong>
                        <small>Total matches</small>
                    </div>

                    <div className="team-stat-card">
                        <span>GOAL DIFFERENCE</span>
                        <strong>
                            {goalDifference >= 0
                                ? `+ ${goalDifference} `
                                : goalDifference}
                        </strong>
                        <small>
                            {team.goalsFor} scored ·{" "}
                            {team.goalsAgainst} conceded
                        </small>
                    </div>

                </div>

                {/* ABOUT + RECORD */}

                <div className="team-overview-grid">

                    <div className="team-about-card">

                        <span className="section-label">
                            ABOUT THE CLUB
                        </span>

                        <h2>{team.name}</h2>

                        <p>
                            {team.name} is one of the clubs competing
                            in the Football Hub Championship during
                            the 2026 / 27 season.
                        </p>

                        <div className="club-details">

                            <div>
                                <small>LOCATION</small>
                                <strong>{team.city}</strong>
                            </div>

                            <div>
                                <small>FOUNDED</small>
                                <strong>{team.founded}</strong>
                            </div>

                            <div>
                                <small>COLORS</small>
                                <strong>{team.colors}</strong>
                            </div>

                        </div>

                    </div>

                    <div className="team-record-card">

                        <div className="record-heading">
                            <div>
                                <span className="section-label">
                                    SEASON RECORD
                                </span>

                                <h2>Performance</h2>
                            </div>

                            <BarChart3 size={21} />
                        </div>

                        <div className="record-row">
                            <span>Wins</span>
                            <strong>{team.wins}</strong>
                        </div>

                        <div className="record-row">
                            <span>Draws</span>
                            <strong>{team.draws}</strong>
                        </div>

                        <div className="record-row">
                            <span>Losses</span>
                            <strong>{team.losses}</strong>
                        </div>

                        <div className="record-row">
                            <span>Goals Scored</span>
                            <strong>{team.goalsFor}</strong>
                        </div>

                        <div className="record-row">
                            <span>Goals Conceded</span>
                            <strong>{team.goalsAgainst}</strong>
                        </div>

                    </div>

                </div>

                {/* SQUAD */}

                <section
                    className="team-section"
                    id="squad"
                >

                    <div className="team-section-title">

                        <div>
                            <span className="section-label">
                                FIRST TEAM
                            </span>

                            <h2>Squad</h2>
                        </div>

                        <Users size={22} />

                    </div>

                    <div className="squad-grid">

                        {players.map((player) => (
                            <div
                                className="player-card"
                                key={player.number}
                            >

                                <span className="player-number">
                                    {player.number}
                                </span>

                                <div className="player-avatar">
                                    {player.name
                                        .split(" ")
                                        .map((name) => name[0])
                                        .join("")}
                                </div>

                                <div className="player-info">
                                    <strong>{player.name}</strong>
                                    <span>{player.position}</span>
                                </div>

                            </div>
                        ))}

                    </div>

                </section>

                {/* RESULTS */}

                <section
                    className="team-section"
                    id="results"
                >

                    <div className="team-section-title">

                        <div>
                            <span className="section-label">
                                RECENT FORM
                            </span>

                            <h2>Latest Results</h2>
                        </div>

                        <Link to="/matches">
                            View all
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                    <div className="team-match-list">

                        <div className="team-match-row">

                            <div>
                                <small>HOME</small>
                                <strong>{team.name}</strong>
                            </div>

                            <strong className="match-score">
                                2 - 1
                            </strong>

                            <div>
                                <small>AWAY</small>
                                <strong>Copperbelt United</strong>
                            </div>

                            <span className="result-win">
                                W
                            </span>

                        </div>

                        <div className="team-match-row">

                            <div>
                                <small>AWAY</small>
                                <strong>{team.name}</strong>
                            </div>

                            <strong className="match-score">
                                1 - 1
                            </strong>

                            <div>
                                <small>HOME</small>
                                <strong>Kabwe Stars</strong>
                            </div>

                            <span className="result-draw">
                                D
                            </span>

                        </div>

                    </div>

                </section>

                {/* FIXTURES */}

                <section
                    className="team-section"
                    id="fixtures"
                >

                    <div className="team-section-title">

                        <div>
                            <span className="section-label">
                                UPCOMING
                            </span>

                            <h2>Next Fixtures</h2>
                        </div>

                        <Link to="/matches">
                            All matches
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                    <div className="next-fixture">

                        <div className="fixture-date-box">
                            <strong>30</strong>
                            <span>SEP</span>
                        </div>

                        <div className="fixture-information">

                            <span>15:00 · NATIONAL STADIUM</span>

                            <h3>
                                {team.name}
                                <span>VS</span>
                                Zambia City FC
                            </h3>

                        </div>

                        <Link
                            to="/matches"
                            className="fixture-button"
                        >
                            Match Centre
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                </section>

            </section>

        </main>
    );
}

export default TeamDetails;