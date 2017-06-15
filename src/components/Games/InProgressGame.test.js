import React from 'react';
import ReactDOM from 'react-dom';
import InProgressGame from './InProgressGame';

it('renders without crashing', () => {

	var game = {
		"_id": "58d86f86d5b26f3fca26cf4d",
		"date": "2017-06-14T19:10:00.000Z",
		"home_team": {
			"_id": "593761df2e4a462a6c12041c",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb62",
				"abbrev": "NYM",
				"city": "NY Mets",
				"name": "Mets",
				"__v": 0
			},
			"wins": 29,
			"losses": 34,
			"year": 2017,
			"win_percent": 0.4603174603174603
		},
		"away_team": {
			"_id": "593761df2e4a462a6c120419",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb5d",
				"abbrev": "CHC",
				"city": "Chi Cubs",
				"name": "Cubs",
				"__v": 0
			},
			"wins": 32,
			"losses": 32,
			"year": 2017,
			"win_percent": 0.5
		},
		"home_runs": 0,
		"away_runs": 0,
		"gd2_id": "2017/06/14/chnmlb-nynmlb-1",
		"__v": 0,
		"status": "In Progress",
		"inning": 6,
		"top_inning": false,
		"number_fire_favorite": {
			"_id": "58d86f75d5b26f3fca26cb62",
			"abbrev": "NYM",
			"city": "NY Mets",
			"name": "Mets",
			"__v": 0
		},
		"number_fire_odds": 50.8,
		"standings_favorite": {
			"_id": "593761df2e4a462a6c120419",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb5d",
				"abbrev": "CHC",
				"city": "Chi Cubs",
				"name": "Cubs",
				"__v": 0
			},
			"wins": 32,
			"losses": 32,
			"year": 2017,
			"win_percent": 0.5
		},
		"standings_percent": .4888
	};
  	const div = document.createElement('div');
  	ReactDOM.render(<InProgressGame data={game} />, div);
  		
});
