import {
    ArrowLeft,
    CalendarDays,
    Clock3,
    MapPin,
    Trophy,
    CircleDot,
    Shirt,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const matchData = {
    1: {
        competition: "Premier Division",
        date: "28 Sep 2026",
        time: "15:00",
        status: "LIVE",
        venue: "National Heroes Stadium",
        referee: "Joseph Banda",
        attendance: "32,450",

        home: {
            name: "Lusaka Warriors",
            short: "LWA",
            score: 2,
        },

        away: {
            name: "Copperbelt United",
            short: "CBU",
            score: 1,
        },

        events: [
            {
                minute: "18'",
                type: "goal",
                team: "home",
                player: "Brian Mwansa",
                description: "Goal",
            },
            {
                minute: "34'",
                type: "yellow",
                team: "away",
                player: "Peter Chanda",
                description: "Yellow Card",
            },
            {
                minute: "52'",
                type: "goal",
                team: "away",
                player: "Andrew Phiri",
                description: "Goal",
            },
            {
                minute: "71'",
                type: "goal",
                team: "home",
                player: "Kelvin Tembo",
                description: "Goal",
            },
        ],
    },

    2: {
        competition: "Premier Division",
        date: "30 Sep 2026",
        time: "15:00",
        status: "UPCOMING",
        venue: "Nkoloma Stadium",
        referee: "To be confirmed",
        attendance: "To be confirmed",

        home: {
            name: "Zambia City FC",
            short: "ZCF",
            score: null,
        },

        away: {
            name: "Kabwe Stars",
            short: "KBS",
            score: null,
        },

        events: [],
    },

    4: {
        competition: "Premier Division",
        date: "25 Sep 2026",
        time: "15:00",
        status: "FINISHED",
        venue: "Woodlands Stadium",
        referee: "Patrick Mulenga",
        attendance: "18,220",

        home: {
            name: "Kabwe Stars",
            short: "KBS",
            score: 2,
        },

        away: {
            name: "Ndola Lions",
            short: "NDL",
            score: 0,
        },

        events: [
            {
                minute: "23'",
                type: "goal",
                team: "home",
                player: "Michael Zulu",
                description: "Goal",
            },
            {
                minute: "67'",
                type: "yellow",
                team: "away",
                player: "James Phiri",
                description: "Yellow Card",
            },
            {
                minute: "81'",
                type: "goal",
                team: "home",
                player: "David Banda",
                description: "Goal",
            },
        ],
    },
};

function MatchDetails() {
    const { id } = useParams();

    const match = matchData[id] || matchData[1];

    return (
        <main className="match-details-page">
            <section className="match-centre-hero">
                <div className="match-centre-content">
                    <Link to="/matches" className="back-link">
                        <ArrowLeft size={17} />
                        Back to Matches
                    </Link>

                    <div className="match-centre-label">
                        <Trophy size={15} />
                        {match.competition}
                    </div>

                    <div className="match-meta">
                        <span>
                            <CalendarDays size={15} />
                            {match.date}
                        </span>

                        <span>
                            <Clock3 size={15} />
                            {match.time}
                        </span>

                        <span>
                            <MapPin size={15} />
                            {match.venue}
                        </span>
                    </div>

                    <div className="match-scoreboard">
                        <div className="score-team">
                            <div className="score-team-badge">
                                {match.home.short}
                            </div>

                            <h1>{match.home.name}</h1>
                        </div>

                        <div className="centre-score">
                            {match.status === "UPCOMING" ? (
                                <strong>VS</strong>
                            ) : (
                                <>
                                    <div className="score-numbers">
                                        <strong>{match.home.score}</strong>
                                        <span>-</span>
                                        <strong>{match.away.score}</strong>
                                    </div>
                                </>
                            )}

                            <span className={`centre-status ${match.status.toLowerCase()}`}>
                                {match.status === "LIVE" && (
                                    <i className="live-dot"></i>
                                )}
                                {match.status}
                            </span>
                        </div>

                        <div className="score-team">
                            <div className="score-team-badge">
                                {match.away.short}
                            </div>

                            <h1>{match.away.name}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section match-content">
                <div className="match-info-grid">
                    <div className="match-info-card">
                        <span className="eyebrow">MATCH INFORMATION</span>
                        <h2>Match Details</h2>

                        <div className="info-list">
                            <div>
                                <span>Competition</span>
                                <strong>{match.competition}</strong>
                            </div>

                            <div>
                                <span>Venue</span>
                                <strong>{match.venue}</strong>
                            </div>

                            <div>
                                <span>Referee</span>
                                <strong>{match.referee}</strong>
                            </div>

                            <div>
                                <span>Attendance</span>
                                <strong>{match.attendance}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="match-info-card">
                        <span className="eyebrow">MATCH STATUS</span>
                        <h2>Current State</h2>

                        <div className="status-display">
                            <div className="status-circle">
                                <CircleDot size={35} />
                            </div>

                            <div>
                                <strong>{match.status}</strong>
                                <p>
                                    {match.status === "LIVE"
                                        ? "The match is currently in progress."
                                        : match.status === "FINISHED"
                                            ? "The match has been completed."
                                            : "The match has not started yet."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="events-card">
                    <div className="section-card-header">
                        <div>
                            <span className="eyebrow">MATCH CENTRE</span>
                            <h2>Match Events</h2>
                        </div>
                    </div>

                    {match.events.length > 0 ? (
                        <div className="events-list">
                            {match.events.map((event, index) => (
                                <div className="event-row" key={index}>
                                    <span className="event-minute">
                                        {event.minute}
                                    </span>

                                    <div
                                        className={`event-icon ${event.type}`}
                                    >
                                        {event.type === "goal" ? "⚽" : "🟨"}
                                    </div>

                                    <div className="event-details">
                                        <strong>{event.player}</strong>
                                        <span>{event.description}</span>
                                    </div>

                                    <span className="event-team">
                                        {event.team === "home"
                                            ? match.home.short
                                            : match.away.short}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-events">
                            <Shirt size={35} />
                            <h3>No match events yet</h3>
                            <p>
                                Match events will appear here once the game begins.
                            </p>
                        </div>
                    )}
                </div>

                <div className="lineup-preview">
                    <div>
                        <span className="eyebrow">TEAM INFORMATION</span>
                        <h2>Line-ups</h2>
                        <p>
                            View starting players, substitutes and formations
                            for both teams.
                        </p>
                    </div>

                    <Link to={`/matches/${id}/lineups`} className="primary-button">
                        View Line-ups
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default MatchDetails;