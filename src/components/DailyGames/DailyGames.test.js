import React from 'react';
import ReactDOM from 'react-dom';
import DailyGames from './DailyGames';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailyGames />, div);
});
