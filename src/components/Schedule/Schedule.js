import React, { Component } from 'react';

import Matchup from '../Matchup/Matchup';

import MLBService from '../../services/MLBService';

import './Schedule.css';

class Schedule extends Component {

    constructor() {

        super();
        this.state = { 
            games: []
        };

    }

    componentDidMount() {

        console.log(this.props.location.pathname.split('/').pop());

        MLBService.getSchedule(this.props.location.pathname.split('/').pop())
        .then((games) => {

            console.log(games);

            this.setState({ games });

        })

    }

    render() {

        return (
            <div>
                <div className="matchup-list">
                    {this.state.games.map((game) => {
                        return <Matchup key={game._id} data={game} />
                    })}
                </div>
            </div>
        );

    }

} 

export default Schedule;
