import React from 'react';
import ReactDOM from 'react-dom';
import UpdateElo from './UpdateElo';

it('renders without crashing', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateElo />, div);
  setTimeout(() => {
  	done();
  }, 500);
});
