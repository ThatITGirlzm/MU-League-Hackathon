import { Link, NavLink } from "react-router-dom";
import {
    Trophy,
    CalendarDays,
    Users,
    Newspaper,
    BarChart3,
} from "lucide-react";

function Navbar() {
    return (
        <header className="navbar">

            <div className="nav-container">

                <Link to="/" className="logo">
                    <Trophy size={30} />
                    <span>MU <span>LEAGUE</span></span>
                </Link>

                <nav>

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/matches">
                        <CalendarDays size={18} />
                        Matches
                    </NavLink>

                    <NavLink to="/table">
                        <Trophy size={18} />
                        Table
                    </NavLink>

                    <NavLink to="/teams">
                        <Users size={18} />
                        Teams
                    </NavLink>

                    <NavLink to="/news">
                        <Newspaper size={18} />
                        News
                    </NavLink>

                    <NavLink to="/statistics">
                        <BarChart3 size={18} />
                        Stats
                    </NavLink>

                </nav>

            </div>

        </header>
    );
}

export default Navbar;