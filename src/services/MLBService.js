
var request = require('request');
var config  = require('../config/config');
var moment 	= require('moment');

module.exports = {
	getGames,
	getTeams,
	submitRatings
}

function getGames(day) {

	var url = `${config.MLB_STANDINGS_URL}/games/${day.year()}-${day.month()+1}-${day.date()}`;

	return promisfy(url)
	.then((response) => {

		var games = response.data;
		games.forEach((game) => {

			game.standings_favorite = game.home_team.win_percent > game.away_team.win_percent ? game.home_team : game.away_team;
			game.standings_percent = Number(((game.standings_favorite.win_percent/(game.home_team.win_percent+game.away_team.win_percent))*100).toFixed(2));
			var d = moment(game.date).add(4, 'hours');
			game.date = d;

		});

		return games;

	})
	
}

function getTeams() {

	var url = `${config.MLB_STANDINGS_URL}/standings`;

	return promisfy(url)
	.then((response) => {

		var teams = response.data;

		return teams;

	});
	
}

function submitRatings(teams) {

	var url = `${config.MLB_STANDINGS_URL}/standings`;

	return promisfy(url)
	.then((response) => {

		var teams = response.data;

		return teams;

	});

}

function promisfy(url) {

	return new Promise((resolve, reject) => {

		request(url, (err, res, data) => {

			if (err) { return reject(err); }

			return resolve(JSON.parse(data));

		});

	});

}