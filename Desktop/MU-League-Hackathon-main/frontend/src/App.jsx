import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import MatchDetails from "./pages/MatchDetails";
import Table from "./pages/Table";
import Teams from "./pages/Teams";
import Lineups from "./pages/Lineups";
import TeamDetails from "./pages/TeamDetails";
import Players from "./pages/Players";
import News from "./pages/News";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchDetails />} />

        <Route path="/table" element={<Table />} />

        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
        <Route path="/matches/:id/lineups" element={<Lineups />} />
        <Route path="/players" element={<Players />} />

        <Route path="/news" element={<News />} />

        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;