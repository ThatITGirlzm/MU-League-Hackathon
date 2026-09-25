import { useState, useEffect } from 'react';
import { getLeagues } from '../api/leagueService';

export default function LeagueList() {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getLeagues()
            .then((data) => setLeagues(data))
            .catch((err) => {
                console.error(err);
                setError('Failed to load leagues.');
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading leagues...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Leagues</h2>
            <ul className="space-y-2">
                {leagues.map((league) => (
                    <li key={league._id || league.id} className="p-3 border rounded shadow-sm">
                        {league.name || JSON.stringify(league)}
                    </li>
                ))}
            </ul>
        </div>
    );
}