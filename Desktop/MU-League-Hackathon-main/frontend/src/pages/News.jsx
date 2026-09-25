import { Link } from "react-router-dom";
import {
    ArrowRight,
    CalendarDays,
    Search,
    Clock3,
} from "lucide-react";
import { useState } from "react";

const articles = [
    {
        id: 1,
        category: "MATCH REPORT",
        title: "Warriors continue strong start to the season",
        description:
            "Lusaka Warriors produced another impressive performance to maintain their position near the top of the league table.",
        date: "26 September 2026",
        time: "2 hours ago",
        image: "news-match.jpg",
    },
    {
        id: 2,
        category: "TEAM NEWS",
        title: "Clubs prepare for another exciting round",
        description:
            "Teams across the league are preparing for another weekend of competitive football and important fixtures.",
        date: "26 September 2026",
        time: "5 hours ago",
        image: "news-training.jpg",
    },
    {
        id: 3,
        category: "LEAGUE NEWS",
        title: "Everything you need to know this week",
        description:
            "Catch up on fixtures, standings, statistics and the biggest stories from around the league.",
        date: "25 September 2026",
        time: "Yesterday",
        image: "news-stadium.jpg",
    },
    {
        id: 4,
        category: "MATCH PREVIEW",
        title: "Zambia City FC ready for next challenge",
        description:
            "Zambia City FC are preparing for their upcoming fixture as they look to climb higher in the standings.",
        date: "25 September 2026",
        time: "Yesterday",
        image: "news-match.jpg",
    },
    {
        id: 5,
        category: "CLUB NEWS",
        title: "Kabwe Stars focus on upcoming fixture",
        description:
            "The club has turned its attention towards the next match after a positive week of preparation.",
        date: "24 September 2026",
        time: "2 days ago",
        image: "news-training.jpg",
    },
    {
        id: 6,
        category: "FEATURE",
        title: "The stadiums shaping the football season",
        description:
            "A look at the venues providing the stage for another exciting season of football.",
        date: "23 September 2026",
        time: "3 days ago",
        image: "news-stadium.jpg",
    },
];

const categories = [
    "ALL",
    "MATCH REPORT",
    "TEAM NEWS",
    "LEAGUE NEWS",
    "MATCH PREVIEW",
    "CLUB NEWS",
    "FEATURE",
];

function News() {
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredArticles = articles.filter((article) => {
        const matchesCategory =
            activeCategory === "ALL" ||
            article.category === activeCategory;

        const matchesSearch =
            article.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            article.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const featuredArticle = articles[0];

    return (
        <main className="news-page">

            {/* HERO */}

            <section className="news-hero">
                <div className="news-hero-content">
                    <span className="eyebrow">
                        FOOTBALL HUB NEWS
                    </span>

                    <h1>Latest Football News</h1>

                    <p>
                        Match reports, team updates, previews and
                        stories from across the football world.
                    </p>
                </div>
            </section>

            {/* CONTENT */}

            <section className="news-content">

                {/* FEATURED STORY */}

                <div className="featured-news">

                    <div
                        className="featured-news-image"
                        style={{
                            backgroundImage:
                                `url("/images/${featuredArticle.image}")`,
                        }}
                    >
                        <span className="featured-label">
                            FEATURED
                        </span>
                    </div>

                    <div className="featured-news-content">

                        <span className="eyebrow">
                            {featuredArticle.category}
                        </span>

                        <h2>{featuredArticle.title}</h2>

                        <p>{featuredArticle.description}</p>

                        <div className="article-meta">
                            <span>
                                <CalendarDays size={15} />
                                {featuredArticle.date}
                            </span>

                            <span>
                                <Clock3 size={15} />
                                {featuredArticle.time}
                            </span>
                        </div>

                        <Link
                            to={`/news/${featuredArticle.id}`}
                            className="read-more-button"
                        >
                            Read Full Story
                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </div>

                {/* NEWS HEADER */}

                <div className="news-heading">

                    <div>
                        <span className="eyebrow">LATEST STORIES</span>
                        <h2>Football News</h2>
                    </div>

                    <div className="news-search">
                        <Search size={17} />

                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                        />
                    </div>

                </div>

                {/* CATEGORIES */}

                <div className="news-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? "news-category active"
                                    : "news-category"
                            }
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* NEWS GRID */}

                <div className="news-grid">

                    {filteredArticles.map((article) => (
                        <Link
                            to={`/news/${article.id}`}
                            className="news-card"
                            key={article.id}
                        >

                            <div
                                className="news-card-image"
                                style={{
                                    backgroundImage:
                                        `url("/images/${article.image}")`,
                                }}
                            >
                                <span>{article.category}</span>
                            </div>

                            <div className="news-card-body">

                                <h3>{article.title}</h3>

                                <p>{article.description}</p>

                                <div className="news-card-footer">
                                    <span>{article.time}</span>

                                    <span className="news-read">
                                        Read
                                        <ArrowRight size={15} />
                                    </span>
                                </div>

                            </div>

                        </Link>
                    ))}

                </div>

                {filteredArticles.length === 0 && (
                    <div className="no-news">
                        <Search size={40} />

                        <h3>No articles found</h3>

                        <p>
                            Try a different search term or category.
                        </p>
                    </div>
                )}

            </section>

        </main>
    );
}

export default News;