import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DailyGames from '../DailyGames/DailyGames';
import UpdateElo from '../UpdateElo/UpdateElo';
import Schedule from '../Schedule/Schedule';

class Body extends Component {

    render() {
    	
    	return (

	        <Switch>
	        	<Route exact path='/' component={DailyGames} />
	        	<Route exact path='/teams' component={UpdateElo} />
	        	<Route exact path='/team/:id' component={Schedule} />
	        </Switch>

        );

    }

} 

export default Body;