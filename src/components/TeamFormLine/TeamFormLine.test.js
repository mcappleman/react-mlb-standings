import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import TeamFormLine from './TeamFormLine';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamFormLine />, div);
});