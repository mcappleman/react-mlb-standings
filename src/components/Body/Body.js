import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DailyGames from '../DailyGames/DailyGames';
import UpdateElo from '../UpdateElo/UpdateElo';

class Body extends Component {

    render() {
    	
    	return (

	        <Switch>
	        	<Route exact path='/' component={DailyGames} />
	        	<Route exact path='/teams' component={UpdateElo} />
	        </Switch>

        );

    }

} 

export default Body;