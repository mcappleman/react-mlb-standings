import React, { Component } from 'react';
import MLBService from '../../services/MLBService';

import TeamFormLine from '../TeamFormLine/TeamFormLine';

import './UpdateElo.css';

class UpdateElo extends Component {

    constructor() {

        super();
        this.state = { 
            teams: []
        };

    }

    componentDidMount() {

        this.getTeams();

    }

    getTeams() {

        return MLBService.getTeams()
        .then((teams) => {

            this.setState({ teams });

        });

    }

    submitTeams() {

    }

    render() {

        return (
            <div>
                <h2>Update Elo Ratings</h2>
                <form className="team-form" onSubmit={this.submitTeams}>
                    <div className="line-container">
                        {this.state.teams.map((team) => {
                            return <TeamFormLine key={team._id} data={team} />
                        })}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );

    }

} 

export default UpdateElo;
