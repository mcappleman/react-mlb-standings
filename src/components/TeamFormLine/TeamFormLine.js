import React, { Component } from 'react';
import MLBService from '../../services/MLBService';

import './TeamFormLine.css';

class TeamFormLine extends Component {

    render() {

        var team = this.props.data;

        console.log(team);

        return (
            <div className="team-form-line">
                <label>
                    {team.team.name} <span>({team.team.abbrev})</span>
                    <input type="number" value={team.elo_rating} />
                </label>
            </div>
        );

    }

} 

export default TeamFormLine;
