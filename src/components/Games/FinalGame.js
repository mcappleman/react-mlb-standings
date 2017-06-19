import React, { Component } from 'react';
import './Games.css';

class FinalGame extends Component {

    render() {

        var home_team = this.props.data.home_team;
        var away_team = this.props.data.away_team;
        var number_fire_favorite = this.props.data.number_fire_favorite;
        if (!number_fire_favorite) {
            number_fire_favorite = {
                "_id": "",
                "abbrev": "Unknown",
                "city": "Unknown",
                "name": "Unknown"
            }
        }

        return (
            <div className="matchup-final matchup">

                <div className="top">
                    <div className="team-section">
                        <h2 className="team-name">{away_team.team.abbrev}</h2>
                        <span className="team-record">({away_team.wins}-{away_team.losses})</span>
                        <h2 className="score">{this.props.data.away_runs}</h2>
                    </div>
                    <div className="divider">
                        @
                    </div>
                    <div className="team-section">
                        <h2 className="team-name">{home_team.team.abbrev}</h2>
                        <span className="team-record">({home_team.wins}-{home_team.losses})</span>
                        <h2 className="score">{this.props.data.home_runs}</h2>
                    </div>
                </div>

                <p className="game-info">
                    <span className="important-text">{this.props.data.status}</span>
                </p>

                <p className="odds-section">
                    Number Fire: <b>{number_fire_favorite.abbrev}</b> by <b>{this.props.data.number_fire_odds}%</b> <br />
                    Standings: <b>{this.props.data.standings_favorite.team.abbrev}</b> by <b>{this.props.data.standings_percent}%</b>
                </p>

            </div>
        );
    }

} 

export default FinalGame;
