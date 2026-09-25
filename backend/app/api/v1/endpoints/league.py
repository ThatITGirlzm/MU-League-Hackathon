from typing import List, Optional
from fastapi import APIRouter, Query
from app.schemas.league import (
    TableEntry, MatchDetail, TeamOverview, TeamDetail, 
    Player, LeagueStats, NewsArticle
)

router = APIRouter()

@router.get("/table", response_model=List[TableEntry])
async def get_league_table():
    return [
        {
            "position": 1,
            "team_id": "mu",
            "team_name": "Mulungushi United",
            "team_badge": "/images/teams/mu.png",
            "played": 10,
            "won": 8,
            "drawn": 1,
            "lost": 1,
            "goals_for": 24,
            "goals_against": 8,
            "goal_difference": 16,
            "points": 25
        }
    ]

@router.get("/matches", response_model=List[MatchDetail])
async def get_matches(status: Optional[str] = Query(None)):
    return [
        {
            "match_id": "m1",
            "home_team": "Mulungushi United",
            "away_team": "Kabwe Warriors",
            "home_badge": "/images/teams/mu.png",
            "away_badge": "/images/teams/kw.png",
            "home_score": 2,
            "away_score": 1,
            "status": "LIVE",
            "minute": "72'",
            "venue": "MU Main Arena",
            "home_lineup": [],
            "away_lineup": [],
            "events": [
                {"minute": 23, "team_id": "mu", "player_name": "Chila", "event_type": "GOAL"}
            ]
        }
    ]

@router.get("/teams", response_model=List[TeamOverview])
async def get_teams():
    return [
        {
            "id": "mu",
            "name": "Mulungushi United",
            "badge_url": "/images/teams/mu.png",
            "manager": "Coach John"
        }
    ]

@router.get("/stats/overview", response_model=LeagueStats)
async def get_league_statistics():
    return {
        "top_scorers": [
            {"rank": 1, "player_name": "Chila", "team_name": "Mulungushi United", "team_badge": "/images/teams/mu.png", "value": 12}
        ],
        "top_assists": [
            {"rank": 1, "player_name": "Banda", "team_name": "Kabwe Warriors", "team_badge": "/images/teams/kw.png", "value": 8}
        ],
        "clean_sheets": [
            {"rank": 1, "player_name": "Mulenga", "team_name": "Ndola Stars", "team_badge": "/images/teams/ns.png", "value": 6}
        ]
    }

@router.get("/news", response_model=List[NewsArticle])
async def get_news():
    return [
        {
            "id": "n1",
            "title": "MU League Season Reaches Semi-Finals",
            "summary": "Excitement builds as top teams prepare for the weekend derby.",
            "content": "Full article text goes here...",
            "image_url": "/images/news/semis.png",
            "published_at": "2026-09-25"
        }
    ]