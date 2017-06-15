import React, { Component } from 'react';
import './Matchup.css';
import PreviewGame from '../Games/PreviewGame';
import FinalGame from '../Games/FinalGame';
import InProgressGame from '../Games/InProgressGame';

class Matchup extends Component {

    render() {

        var game = this.props.data;
        var match;

        if (game.status === 'In Progress') {
            match = <InProgressGame data={game} />
        } else if (game.status === 'Final' || game.status === 'Game Over') {
            match = <FinalGame data={game} />
        } else {
            match = <PreviewGame data={game} />
        }

        return (
            <div className="matchup-container">

                {match}

            </div>
        );
    }

} 

export default Matchup;
