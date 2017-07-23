
var request = require('request');
var config  = require('../config/config');
var moment 	= require('moment');

module.exports = {
	getGames,
	getTeams,
	getSchedule,
	submitRatings
}

function getGames(day) {

	var url = `${config.MLB_STANDINGS_URL}/games/${day.year()}-${day.month()+1}-${day.date()}`;

	return promisfy(url)
	.then((response) => {

		var games = response.data;
		games.forEach((game) => {

			game = getEloOdds(game);

			game.standings_favorite = game.home_team.win_percent > game.away_team.win_percent ? game.home_team : game.away_team;
			game.standings_percent = Number(((game.standings_favorite.win_percent/(game.home_team.win_percent+game.away_team.win_percent))*100).toFixed(2));
			var d = moment(game.date).add(4, 'hours');
			game.date = d;

		});

		return games;

	});
	
}

function getTeams() {

	var url = `${config.MLB_STANDINGS_URL}/standings`;

	return promisfy(url)
	.then((response) => {

		var teams = response.data;

		teams.forEach((team) => {
			if (!team.elo_rating) {
				team.elo_rating = '0';
			}
		});

		return teams;

	});
	
}

function getSchedule(teamId) {

	var url = `${config.MLB_STANDINGS_URL}/schedule/${teamId}`;

	return promisfy(url)
	.then((response) => {

		var games = response.data;
		console.log(games);
		console.log(response);
		games.forEach((game) => {

			game = getEloOdds(game);

			game.standings_favorite = game.home_team.win_percent > game.away_team.win_percent ? game.home_team : game.away_team;
			game.standings_percent = Number(((game.standings_favorite.win_percent/(game.home_team.win_percent+game.away_team.win_percent))*100).toFixed(2));
			var d = moment(game.date).add(4, 'hours');
			game.date = d;

		});

		return games;

	});

}

function submitRatings(teams) {

	var index = 0;

	return new Promise((resolve, reject) => {

		iter();

		function iter() {

			if (index >= teams.length) {
				return resolve();
			}

			return submitSingleRating(teams[index])
			.then((record) => {
				index++;
				return iter();
			})
			.catch((err) => {
				return reject(err);
			});

		}

	});

}

function submitSingleRating(team) {

	if (!team.elo_rating) {
		return Promise.resolve();
	}

	team.rating = Number(team.elo_rating);

	var reqOpts = {
		method: 'PUT',
		url: `${config.MLB_STANDINGS_URL}/record/${team._id}`,
		body: team,
		json: true
	}

	return promisfy(reqOpts)
	.then((response) => {

		var teams = response.data;

		return teams;

	});

}

function getEloOdds(game) {

	var homeFavorite = game.home_team.elo_rating+24 > game.away_team.elo_rating-3 ? true : false;

	var homeElo = game.home_team.elo_rating+24;
	var awayElo = game.away_team.elo_rating-3;

	game.elo_favorite = game.away_team;
	game.elo_percent = eloPercent(awayElo, homeElo);

	if (homeFavorite) {

		game.elo_favorite = game.home_team;
		game.elo_percent = eloPercent(homeElo, awayElo);

	}

	return game;

}

function eloPercent(fav, notFav) {

	var power = 10;
	var divisor = 400;

	var percent = Math.pow(fav/divisor, power)/(Math.pow(fav/divisor, power) + Math.pow(notFav/divisor, power));

	return Number((percent*100).toFixed(2));

}

function promisfy(url) {

	return new Promise((resolve, reject) => {

		request(url, (err, res, data) => {

			if (err) { return reject(err); }

			try {
				return resolve(JSON.parse(data));
			} catch(e) {
				return resolve(data);
			}

		});

	});

}