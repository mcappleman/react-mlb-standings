import React, { Component } from 'react';

import './TeamFormLine.css';

class TeamFormLine extends Component {

    handleChange(teamId, e) {
        this.props.onChange(teamId, e.target.value);
    }

    render() {

        var team = this.props.data.team;
        var index = this.props.data.index;

        return (
            <div className="team-form-line">
                <label>
                    {team.team.name} <span>({team.team.abbrev})</span>
                    <input type="number" value={team.elo_rating} onChange={this.handleChange.bind(this, team._id)} />
                </label>
            </div>
        );

    }

} 

export default TeamFormLine;
