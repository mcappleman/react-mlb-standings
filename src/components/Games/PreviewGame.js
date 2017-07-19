import React, { Component } from 'react';
import moment from 'moment';
import './Games.css';

import TeamSection from '../TeamSection/TeamSection';
import OddsSection from '../OddsSection/OddsSection';

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
                    <TeamSection data={{team: away_team, runs: this.props.data.away_runs}} />
                    <div className="divider">
                        @
                    </div>
                    <TeamSection data={{team: home_team, runs: this.props.data.home_runs}} />
                </div>

                <p className="game-info">
                    <span className="important-text">{this.props.data.status}</span> <br />
                    <span className="important-text">{time}</span>
                </p>

                <OddsSection data={{
                    elo: {
                        abbrev: this.props.data.elo_favorite.team.abbrev,
                        odds: this.props.data.elo_percent
                    },
                    number_fire: {
                        abbrev: number_fire_favorite.abbrev,
                        odds: this.props.data.number_fire_odds
                    },
                    standings: {
                        favorite: this.props.data.standings_favorite.team,
                        percent: this.props.data.standings_percent
                    }
                }} />

            </div>
        );
    }

} 

export default PreviewGame;
