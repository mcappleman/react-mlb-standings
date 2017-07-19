import React, { Component } from 'react';

class TeamSection extends Component {

    render() {

        var elo = this.props.data.elo;
        var number_fire = this.props.data.number_fire;
        var standings = this.props.data.standings;

        return (
            <div className="odds-section">
                <p>
                    Number Fire: <b>{number_fire.abbrev}</b> by <b>{number_fire.odds}%</b> <br />
                    Elo: <b>{elo.abbrev}</b> by <b>{elo.odds}%</b> <br />
                    Standings: <b>{standings.favorite.abbrev}</b> by <b>{standings.percent}%</b>
                </p>
            </div>
        );
    }

} 

export default TeamSection;