from typing import List, Optional
from pydantic import BaseModel

# --- LEAGUE TABLE / STANDINGS ---
class TableEntry(BaseModel):
    position: int
    team_id: str
    team_name: str
    team_badge: str
    played: int
    won: int
    drawn: int
    lost: int
    goals_for: int
    goals_against: int
    goal_difference: int
    points: int

# --- MATCHES & LINEUPS ---
class LineupPlayer(BaseModel):
    id: str
    name: str
    number: int
    position: str
    is_starter: bool

class MatchEvent(BaseModel):
    minute: int
    team_id: str
    player_name: str
    event_type: str  # "GOAL", "YELLOW_CARD", "RED_CARD", "SUB"

class MatchDetail(BaseModel):
    match_id: str
    home_team: str
    away_team: str
    home_badge: str
    away_badge: str
    home_score: int
    away_score: int
    status: str  # "UPCOMING", "LIVE", "FINISHED"
    minute: Optional[str] = None
    venue: str
    home_lineup: List[LineupPlayer] = []
    away_lineup: List[LineupPlayer] = []
    events: List[MatchEvent] = []

# --- PLAYERS & STATS ---
class Player(BaseModel):
    id: str
    name: str
    team_id: str
    team_name: str
    position: str
    jersey_number: int
    goals: int = 0
    assists: int = 0
    photo_url: Optional[str] = None

class StatLeader(BaseModel):
    rank: int
    player_name: str
    team_name: str
    team_badge: str
    value: int  # goals, assists, or clean sheets count

class LeagueStats(BaseModel):
    top_scorers: List[StatLeader]
    top_assists: List[StatLeader]
    clean_sheets: List[StatLeader]

# --- TEAMS ---
class TeamOverview(BaseModel):
    id: str
    name: str
    badge_url: str
    manager: str
    star_player_id: Optional[str] = None

class TeamDetail(TeamOverview):
    squad: List[Player]
    star_player_summary: Optional[dict] = None

# --- NEWS ---
class NewsArticle(BaseModel):
    id: str
    title: str
    summary: str
    content: str
    image_url: str
    published_at: str