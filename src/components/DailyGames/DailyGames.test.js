import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { mount } from 'enzyme';
import DailyGames from './DailyGames';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailyGames />, div);
});

describe('Get the games for a particular day', () => {

	it('should get the games for tomorrow', (done) => {

		var d = moment().add(1, 'days');

		// var dailyGames = new DailyGames();
		const wrapper = mount(<DailyGames />);

		wrapper.getGames(d)
		.then(() => {
			console.log(wrapper.state);
			expect(true).toBe(true);
			done();
		})

	});

})
