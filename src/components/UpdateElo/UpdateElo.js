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

        })
        .catch((err) => {

            this.setState({ teams: [] });

        });

    }

    submitTeams(e) {

        e.preventDefault();

        return MLBService.submitRatings(this.state.teams)
        .then((res) => {

            window.location.replace('/');

        })
        .catch((err) => {

            console.log(err);

        });

    }

    handleChange(teamId, value) {

        var teams = this.state.teams;
        var index = 0;

        for (var i = 0; i < teams.length; i++) {
            if (teamId === teams[i]._id) {
                index = i;
                break;
            }
        }

        teams[index].elo_rating = value;

        this.setState({ teams });

    }

    render() {

        return (
            <div>
                <h2>Update Elo Ratings</h2>
                <form className="team-form" onSubmit={this.submitTeams.bind(this)}>
                    <div className="line-container">
                        {this.state.teams.map((team, index) => {
                            return  <TeamFormLine key={team._id} data={team} onChange={this.handleChange.bind(this)} />
                        })}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );

    }

} 

export default UpdateElo;
