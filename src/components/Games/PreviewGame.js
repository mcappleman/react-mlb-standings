import React, { Component } from 'react';
import moment from 'moment';
import './Games.css';

class PreviewGame extends Component {

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

        var time = moment(this.props.data.date).format('h:mm a');

        return (
            <div className="matchup-preview matchup">

                <div className="top">
                    <div className="team-section">
                        <h3>{away_team.team.abbrev}</h3>
                        <span className="team-record">({away_team.wins}-{away_team.losses})</span>
                        <h3>{this.props.data.away_runs}</h3>
                    </div>
                    <div className="divider">
                        @
                    </div>
                    <div className="team-section">
                        <h3>{home_team.team.abbrev}</h3>
                        <span className="team-record">({home_team.wins}-{home_team.losses})</span>
                        <h3>{this.props.data.home_runs}</h3>
                    </div>
                </div>

                <p className="game-info">
                    <h4>{this.props.data.status}</h4>
                    <h4>{time}</h4>
                </p>

                <p className="odds-section">
                    Number Fire: <b>{number_fire_favorite.abbrev}</b> by <b>{this.props.data.number_fire_odds}%</b> <br />
                    Standings: <b>{this.props.data.standings_favorite.team.abbrev}</b> by <b>{this.props.data.standings_percent}%</b>
                </p>

            </div>
        );
    }

} 

export default PreviewGame;
