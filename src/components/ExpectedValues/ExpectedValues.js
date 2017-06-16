import React, { Component } from 'react';
import './ExpectedValues.css';

class ExpectedValues extends Component {

	constructor() {

		super();
		this.state = {
			numberFireValues: [],
			pointValues: [18, 33, 60, 109, 198, 361, 657],
			standingsValues: []
		}

	}

	componentWillReceiveProps(nextProps) {

		this.getBestStandings(nextProps.data);
		this.getNumberFireOdds(nextProps.data);
		
	}

	getExpectedValueArray(odds) {

		var pointValues = this.state.pointValues;
		var expvalues = [];

		pointValues.forEach((points, i) => {
			expvalues.push(points * odds[i])
		});

		return expvalues;

	}

	getNumberFireOdds(games) {

		var odds = this.getOdds(games, 'number_fire_odds');
		var expvalues = this.getExpectedValueArray(odds);

		this.setState({ numberFireValues: expvalues });

	}

    getBestStandings(games) {

		var odds = this.getOdds(games, 'standings_percent');
		var expvalues = this.getExpectedValueArray(odds);

		this.setState({ standingsValues: expvalues });
        
    }

	getOdds(array, filter) {

		var returnArray = [];
		var maxOddsArrayLength = this.state.pointValues.length;
		var sortedArray = array.sort((a, b) => {
			return b[filter] - a[filter];
		});

		for (var i = 0; i < maxOddsArrayLength && i < sortedArray.length; i++) {

			var currentValue = sortedArray[i][filter]/100;

			if (returnArray.length === 0) {
				returnArray.push(currentValue);
			} else {
				returnArray.push(currentValue * returnArray[i-1]);
			}

		}

		return this.convertToReadable(returnArray);

	}

	convertToReadable(array) {

		var returnArray = [];

		array.forEach((value) => {

			value = value.toFixed(6);
			returnArray.push(Number(value));

		});

		return returnArray;

	}

    render() {

        return (
            <div className="expected-container">

                <h2>Expected Value Table</h2>

				<div className="table-container">
	                <table>
	                	<tbody>
	                		<tr>
		                		<th># of Wins</th>
		                		<th>1</th>
		                		<th>2</th>
		                		<th>3</th>
		                		<th>4</th>
		                		<th>5</th>
		                		<th>6</th>
		                		<th>7</th>
	                		</tr>
	                		<tr>
	                			<td>Number Fire</td>
			                    {this.state.numberFireValues.map((value, i) => {
			                        return <td key={i}>{value.toFixed(2)}</td>
			                    })}
	                		</tr>
	                		<tr>
	                			<td>Standings</td>
			                    {this.state.standingsValues.map((value, i) => {
			                        return <td key={i}>{value.toFixed(2)}</td>
			                    })}
	                		</tr>
	                	</tbody>
	                </table>
                </div>

            </div>
        );
    }

} 

export default ExpectedValues;
