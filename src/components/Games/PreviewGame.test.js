import React from 'react';
import ReactDOM from 'react-dom';
import PreviewGame from './PreviewGame';

it('renders without crashing', () => {

	var game = {
		"_id": "58d86f86d5b26f3fca26cf48",
		"date": "2017-06-14T16:05:00.000Z",
		"home_team": {
			"_id": "593761df2e4a462a6c12041a",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb5f",
				"abbrev": "WSH",
				"city": "Washington",
				"name": "Nationals",
				"__v": 0
			},
			"wins": 39,
			"losses": 25,
			"year": 2017,
			"win_percent": 0.609375
		},
		"away_team": {
			"_id": "593761df2e4a462a6c12041d",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb63",
				"abbrev": "ATL",
				"city": "Atlanta",
				"name": "Braves",
				"__v": 0
			},
			"wins": 28,
			"losses": 36,
			"year": 2017,
			"win_percent": 0.4375
		},
		"home_runs": 0,
		"away_runs": 0,
		"gd2_id": "2017/06/14/atlmlb-wasmlb-1",
		"__v": 0,
		"status": "Preview",
		"inning": 0,
		"top_inning": false,
		"number_fire_favorite": {
			"_id": "58d86f75d5b26f3fca26cb5f",
			"abbrev": "WSH",
			"city": "Washington",
			"name": "Nationals",
			"__v": 0
		},
		"number_fire_odds": 61.1,
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
	ReactDOM.render(<PreviewGame data={game} />, div);
		
});
