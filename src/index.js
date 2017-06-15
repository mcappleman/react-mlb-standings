import React from 'react';
import ReactDOM from 'react-dom';
import DailyGames from './components/DailyGames/DailyGames';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<DailyGames />, document.getElementById('root'));
registerServiceWorker();
