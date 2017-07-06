import React, { Component } from 'react';

class TeamSection extends Component {

    render() {

        var team = this.props.data.team;
        var runs = this.props.data.runs;

        return (
            <div className="team-section">
                <h2 className="team-name">{team.team.abbrev}</h2>
                <span className="team-record">({team.wins}-{team.losses})<br />Elo: {team.elo_rating}</span>
                <h2 className="score">{runs}</h2>
            </div>
        );
    }

} 

export default TeamSection;