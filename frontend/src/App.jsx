import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import MatchDetails from "./pages/MatchDetails";
import Table from "./pages/Table";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import Players from "./pages/Players";
import News from "./pages/News";
import Statistics from "./pages/Statistics";

// Fallback 404 Component for invalid routes
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-6xl font-extrabold text-gray-800 mb-2">404</h1>
    <p className="text-xl text-gray-600 mb-6">Page not found</p>
    <Link
      to="/"
      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
    >
      Return Home
    </Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/matches" element={<Matches />} />
            <Route path="/matches/:id" element={<MatchDetails />} />

            <Route path="/table" element={<Table />} />

            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamDetails />} />

            <Route path="/players" element={<Players />} />

            <Route path="/news" element={<News />} />

            <Route path="/statistics" element={<Statistics />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;