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
                        <h3>{away_team.team.abbrev}</h3>
                        <h3>{this.props.data.away_runs}</h3>
                    </div>
                    <div className="divider">
                        @
                    </div>
                    <div className="team-section">
                        <h3>{home_team.team.abbrev}</h3>
                        <h3>{this.props.data.home_runs}</h3>
                    </div>
                </div>

                <h4>{this.props.data.status}</h4>

                <p>
                    Number Fire Favorite: <b>{number_fire_favorite.abbrev}</b> by <b>{this.props.data.number_fire_odds}%</b>
                </p>

                <p>
                    Standings Favorite: <b>{this.props.data.standings_favorite.team.abbrev}</b> by <b>{this.props.data.standings_percent}%</b>
                </p>

            </div>
        );
    }

} 

export default FinalGame;
