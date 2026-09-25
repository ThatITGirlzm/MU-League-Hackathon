import LeagueTable from "../components/LeagueTable";
import { standings } from "../data/mockData";

function Table() {
    return (
        <main className="page">

            <div className="page-container">

                <div className="page-title">

                    <p className="section-label">
                        COMPETITION
                    </p>

                    <h1>League Table</h1>

                    <p>
                        Current league standings.
                    </p>

                </div>

                <LeagueTable teams={standings} />

            </div>

        </main>
    );
}

export default Table;