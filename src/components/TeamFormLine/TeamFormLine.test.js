import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import TeamFormLine from './TeamFormLine';

var team = {
	"_id": "5942f397942d8644c1b5fb00",
	"team": {
		"_id": "5942f027575cdb416f1c6b77",
		"abbrev": "HOU",
		"city": "Houston",
		"name": "Astros",
		"__v": 0
	},
	"wins": 58,
	"losses": 26,
	"year": 2017,
	"win_percent": 0.6904761904761905
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamFormLine data={team} />, div);
});
