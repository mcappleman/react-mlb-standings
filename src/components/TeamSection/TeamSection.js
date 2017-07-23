import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TeamSection extends Component {

    render() {

        var team = this.props.data.team;
        var runs = this.props.data.runs;
        var expRecord = {
            wins: team.exp_wins.toFixed(2),
            losses: team.exp_losses.toFixed(2)
        }

        return (
            <div className="team-section">
                <h2 className="team-name"><Link to={`/team/${team.team._id}`}>{team.team.abbrev}</Link></h2>
                <span className="team-record">({team.wins}-{team.losses})<br />({expRecord.wins}-{expRecord.losses})<br />{team.elo_rating}</span>
                <h2 className="score">{runs}</h2>
            </div>
        );
    }

} 

export default TeamSection;