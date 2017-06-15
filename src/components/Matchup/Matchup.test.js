import React from 'react';
import ReactDOM from 'react-dom';
import Matchup from './Matchup';

it('renders without crashing', () => {

	var game = {
		"_id": "58d86f86d5b26f3fca26cf49",
		"date": "2017-06-14T19:05:00.000Z",
		"home_team": {
			"_id": "593761df2e4a462a6c120429",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb75",
				"abbrev": "PHI",
				"city": "Philadelphia",
				"name": "Phillies",
				"__v": 0
			},
			"wins": 21,
			"losses": 42,
			"year": 2017,
			"win_percent": 0.3333333333333333
		},
		"away_team": {
			"_id": "593761df2e4a462a6c12041e",
			"team": {
				"_id": "58d86f75d5b26f3fca26cb65",
				"abbrev": "BOS",
				"city": "Boston",
				"name": "Red Sox",
				"__v": 0
			},
			"wins": 36,
			"losses": 28,
			"year": 2017,
			"win_percent": 0.5625
		},
		"home_runs": 0,
		"away_runs": 0,
		"gd2_id": "2017/06/14/bosmlb-phimlb-1",
		"__v": 0,
		"status": "Preview",
		"inning": 0,
		"top_inning": false,
		"number_fire_favorite": null,
		"number_fire_odds": 50.6,
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
  	ReactDOM.render(<Matchup key={game.id} data={game} />, div);
  		
});
