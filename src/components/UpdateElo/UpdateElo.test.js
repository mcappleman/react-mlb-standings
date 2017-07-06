import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import UpdateElo from './UpdateElo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateElo />, div);
});
