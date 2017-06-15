import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import logo from '../../images/small-baseball.png';
import Matchup from '../Matchup/Matchup';
import ExpectedValues from '../ExpectedValues/ExpectedValues';
import MLBService from '../../services/MLBService';

import './DailyGames.css';
import 'react-datepicker/dist/react-datepicker.css';

class DailyGames extends Component {

    constructor() {

        super();
        this.state = { 
            games: [],
            selectedDate: moment()
        };

    }

    componentDidMount() {

        this.getGames(this.state.selectedDate);

    }

    getGames(day) {

        this.setState({ selectedDate: day });

        MLBService.getGames(day)
        .then((games) => {
            this.setState({ games });
        });

    }

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to MLB Standings</h2>
                </div>
                <div className="datepicker-container">
                    <h2>Select a Date</h2>
                    <DatePicker selected={this.state.selectedDate} onChange={this.getGames.bind(this)} />
                </div>
                <div>
                    <ExpectedValues data={this.state.games}/>
                </div>
                <div className="matchup-list">
                    {this.state.games.map((game) => {
                        return <Matchup key={game._id} data={game} />
                    })}
                </div>
            </div>
        );

    }

} 

export default DailyGames;
