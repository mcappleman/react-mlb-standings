import React from 'react';
import ReactDOM from 'react-dom';
import ExpectedValues from './ExpectedValues';

// const games = [{"_id":"58d86f86d5b26f3fca26cf48","date":"2017-06-14T16:05:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041a","team":{"_id":"58d86f75d5b26f3fca26cb5f","abbrev":"WSH","city":"Washington","name":"Nationals","__v":0},"wins":39,"losses":25,"year":2017,"win_percent":0.609375},"away_team":{"_id":"593761df2e4a462a6c12041d","team":{"_id":"58d86f75d5b26f3fca26cb63","abbrev":"ATL","city":"Atlanta","name":"Braves","__v":0},"wins":28,"losses":36,"year":2017,"win_percent":0.4375},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/atlmlb-wasmlb-1","__v":0,"status":"Pre-Game","inning":1,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb5f","abbrev":"WSH","city":"Washington","name":"Nationals","__v":0},"number_fire_odds":61.1,"standings_favorite":{"_id":"593761df2e4a462a6c12041a","team":{"_id":"58d86f75d5b26f3fca26cb5f","abbrev":"WSH","city":"Washington","name":"Nationals","__v":0},"wins":39,"losses":25,"year":2017,"win_percent":0.609375},"standings_percent":"58.21"},{"_id":"58d86f86d5b26f3fca26cf45","date":"2017-06-14T12:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041b","team":{"_id":"58d86f75d5b26f3fca26cb60","abbrev":"MIA","city":"Miami","name":"Marlins","__v":0},"wins":28,"losses":35,"year":2017,"win_percent":0.4444444444444444},"away_team":{"_id":"593761df2e4a462a6c120430","team":{"_id":"58d86f75d5b26f3fca26cb80","abbrev":"OAK","city":"Oakland","name":"Athletics","__v":0},"wins":27,"losses":37,"year":2017,"win_percent":0.421875},"home_runs":11,"away_runs":5,"gd2_id":"2017/06/14/oakmlb-miamlb-1","__v":0,"status":"In Progress","inning":9,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb60","abbrev":"MIA","city":"Miami","name":"Marlins","__v":0},"number_fire_odds":59.7,"standings_favorite":{"_id":"593761df2e4a462a6c12041b","team":{"_id":"58d86f75d5b26f3fca26cb60","abbrev":"MIA","city":"Miami","name":"Marlins","__v":0},"wins":28,"losses":35,"year":2017,"win_percent":0.4444444444444444},"standings_percent":"51.30"},{"_id":"58d86f86d5b26f3fca26cf47","date":"2017-06-14T15:45:00.000Z","home_team":{"_id":"593761df2e4a462a6c120417","team":{"_id":"58d86f75d5b26f3fca26cb5a","abbrev":"SF","city":"San Francisco","name":"Giants","__v":0},"wins":26,"losses":40,"year":2017,"win_percent":0.3939393939393939},"away_team":{"_id":"593761df2e4a462a6c120427","team":{"_id":"58d86f75d5b26f3fca26cb72","abbrev":"KC","city":"Kansas City","name":"Royals","__v":0},"wins":29,"losses":34,"year":2017,"win_percent":0.4603174603174603},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/kcamlb-sfnmlb-1","__v":0,"status":"Warmup","inning":1,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb5a","abbrev":"SF","city":"San Francisco","name":"Giants","__v":0},"number_fire_odds":59.5,"standings_favorite":{"_id":"593761df2e4a462a6c120427","team":{"_id":"58d86f75d5b26f3fca26cb72","abbrev":"KC","city":"Kansas City","name":"Royals","__v":0},"wins":29,"losses":34,"year":2017,"win_percent":0.4603174603174603},"standings_percent":"53.89"},{"_id":"58d86f86d5b26f3fca26cf52","date":"2017-06-14T20:15:00.000Z","home_team":{"_id":"593761df2e4a462a6c120418","team":{"_id":"58d86f75d5b26f3fca26cb5c","abbrev":"STL","city":"St. Louis","name":"Cardinals","__v":0},"wins":30,"losses":33,"year":2017,"win_percent":0.47619047619047616},"away_team":{"_id":"593761df2e4a462a6c120420","team":{"_id":"58d86f75d5b26f3fca26cb68","abbrev":"MIL","city":"Milwaukee","name":"Brewers","__v":0},"wins":34,"losses":32,"year":2017,"win_percent":0.5151515151515151},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/milmlb-slnmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb5c","abbrev":"STL","city":"St. Louis","name":"Cardinals","__v":0},"number_fire_odds":58.6,"standings_favorite":{"_id":"593761df2e4a462a6c120420","team":{"_id":"58d86f75d5b26f3fca26cb68","abbrev":"MIL","city":"Milwaukee","name":"Brewers","__v":0},"wins":34,"losses":32,"year":2017,"win_percent":0.5151515151515151},"standings_percent":"51.97"},{"_id":"58d86f86d5b26f3fca26cf51","date":"2017-06-14T20:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12042e","team":{"_id":"58d86f75d5b26f3fca26cb7d","abbrev":"HOU","city":"Houston","name":"Astros","__v":0},"wins":44,"losses":22,"year":2017,"win_percent":0.6666666666666666},"away_team":{"_id":"593761df2e4a462a6c12042c","team":{"_id":"58d86f75d5b26f3fca26cb7a","abbrev":"TEX","city":"Texas","name":"Rangers","__v":0},"wins":32,"losses":32,"year":2017,"win_percent":0.5},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/texmlb-houmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb7d","abbrev":"HOU","city":"Houston","name":"Astros","__v":0},"number_fire_odds":55.2,"standings_favorite":{"_id":"593761df2e4a462a6c12042e","team":{"_id":"58d86f75d5b26f3fca26cb7d","abbrev":"HOU","city":"Houston","name":"Astros","__v":0},"wins":44,"losses":22,"year":2017,"win_percent":0.6666666666666666},"standings_percent":"57.14"},{"_id":"58d86f86d5b26f3fca26cf4f","date":"2017-06-14T20:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c120424","team":{"_id":"58d86f75d5b26f3fca26cb6e","abbrev":"CWS","city":"Chi White Sox","name":"White Sox","__v":0},"wins":28,"losses":35,"year":2017,"win_percent":0.4444444444444444},"away_team":{"_id":"593761df2e4a462a6c120422","team":{"_id":"58d86f75d5b26f3fca26cb6b","abbrev":"BAL","city":"Baltimore","name":"Orioles","__v":0},"wins":31,"losses":32,"year":2017,"win_percent":0.49206349206349204},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/balmlb-chamlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb6e","abbrev":"CWS","city":"Chi White Sox","name":"White Sox","__v":0},"number_fire_odds":53.8,"standings_favorite":{"_id":"593761df2e4a462a6c120422","team":{"_id":"58d86f75d5b26f3fca26cb6b","abbrev":"BAL","city":"Baltimore","name":"Orioles","__v":0},"wins":31,"losses":32,"year":2017,"win_percent":0.49206349206349204},"standings_percent":"52.54"},{"_id":"58d86f86d5b26f3fca26cf46","date":"2017-06-14T15:40:00.000Z","home_team":{"_id":"593761df2e4a462a6c12042b","team":{"_id":"58d86f75d5b26f3fca26cb78","abbrev":"SD","city":"San Diego","name":"Padres","__v":0},"wins":26,"losses":40,"year":2017,"win_percent":0.3939393939393939},"away_team":{"_id":"593761df2e4a462a6c120428","team":{"_id":"58d86f75d5b26f3fca26cb74","abbrev":"CIN","city":"Cincinnati","name":"Reds","__v":0},"wins":29,"losses":35,"year":2017,"win_percent":0.453125},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/cinmlb-sdnmlb-1","__v":0,"status":"Warmup","inning":1,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb78","abbrev":"SD","city":"San Diego","name":"Padres","__v":0},"number_fire_odds":53.6,"standings_favorite":{"_id":"593761df2e4a462a6c120428","team":{"_id":"58d86f75d5b26f3fca26cb74","abbrev":"CIN","city":"Cincinnati","name":"Reds","__v":0},"wins":29,"losses":35,"year":2017,"win_percent":0.453125},"standings_percent":"53.49"},{"_id":"58d86f86d5b26f3fca26cf4c","date":"2017-06-14T19:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c120425","team":{"_id":"58d86f75d5b26f3fca26cb6f","abbrev":"DET","city":"Detroit","name":"Tigers","__v":0},"wins":30,"losses":33,"year":2017,"win_percent":0.47619047619047616},"away_team":{"_id":"593761de2e4a462a6c120416","team":{"_id":"58d86f75d5b26f3fca26cb59","abbrev":"ARI","city":"Arizona","name":"D-backs","__v":0},"wins":40,"losses":26,"year":2017,"win_percent":0.6060606060606061},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/arimlb-detmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":null,"number_fire_odds":52.8,"standings_favorite":{"_id":"593761de2e4a462a6c120416","team":{"_id":"58d86f75d5b26f3fca26cb59","abbrev":"ARI","city":"Arizona","name":"D-backs","__v":0},"wins":40,"losses":26,"year":2017,"win_percent":0.6060606060606061},"standings_percent":"56.00"},{"_id":"58d86f86d5b26f3fca26cf50","date":"2017-06-14T20:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c120426","team":{"_id":"58d86f75d5b26f3fca26cb71","abbrev":"MIN","city":"Minnesota","name":"Twins","__v":0},"wins":33,"losses":28,"year":2017,"win_percent":0.5409836065573771},"away_team":{"_id":"593761df2e4a462a6c12042f","team":{"_id":"58d86f75d5b26f3fca26cb7e","abbrev":"SEA","city":"Seattle","name":"Mariners","__v":0},"wins":32,"losses":34,"year":2017,"win_percent":0.48484848484848486},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/seamlb-minmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb71","abbrev":"MIN","city":"Minnesota","name":"Twins","__v":0},"number_fire_odds":52.4,"standings_favorite":{"_id":"593761df2e4a462a6c120426","team":{"_id":"58d86f75d5b26f3fca26cb71","abbrev":"MIN","city":"Minnesota","name":"Twins","__v":0},"wins":33,"losses":28,"year":2017,"win_percent":0.5409836065573771},"standings_percent":"52.74"},{"_id":"58d86f86d5b26f3fca26cf4a","date":"2017-06-14T19:05:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041f","team":{"_id":"58d86f75d5b26f3fca26cb66","abbrev":"PIT","city":"Pittsburgh","name":"Pirates","__v":0},"wins":30,"losses":35,"year":2017,"win_percent":0.46153846153846156},"away_team":{"_id":"593761df2e4a462a6c120421","team":{"_id":"58d86f75d5b26f3fca26cb69","abbrev":"COL","city":"Colorado","name":"Rockies","__v":0},"wins":41,"losses":26,"year":2017,"win_percent":0.6119402985074627},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/colmlb-pitmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb66","abbrev":"PIT","city":"Pittsburgh","name":"Pirates","__v":0},"number_fire_odds":52,"standings_favorite":{"_id":"593761df2e4a462a6c120421","team":{"_id":"58d86f75d5b26f3fca26cb69","abbrev":"COL","city":"Colorado","name":"Rockies","__v":0},"wins":41,"losses":26,"year":2017,"win_percent":0.6119402985074627},"standings_percent":"57.01"},{"_id":"58d86f86d5b26f3fca26cf53","date":"2017-06-14T22:07:00.000Z","home_team":{"_id":"593761df2e4a462a6c120431","team":{"_id":"58d86f75d5b26f3fca26cb81","abbrev":"LAA","city":"LA Angels","name":"Angels","__v":0},"wins":34,"losses":34,"year":2017,"win_percent":0.5},"away_team":{"_id":"593761de2e4a462a6c120415","team":{"_id":"58d86f75d5b26f3fca26cb57","abbrev":"NYY","city":"NY Yankees","name":"Yankees","__v":0},"wins":38,"losses":24,"year":2017,"win_percent":0.6129032258064516},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/nyamlb-anamlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":null,"number_fire_odds":51.8,"standings_favorite":{"_id":"593761de2e4a462a6c120415","team":{"_id":"58d86f75d5b26f3fca26cb57","abbrev":"NYY","city":"NY Yankees","name":"Yankees","__v":0},"wins":38,"losses":24,"year":2017,"win_percent":0.6129032258064516},"standings_percent":"55.07"},{"_id":"58d86f86d5b26f3fca26cf4b","date":"2017-06-14T19:07:00.000Z","home_team":{"_id":"593761df2e4a462a6c120423","team":{"_id":"58d86f75d5b26f3fca26cb6c","abbrev":"TOR","city":"Toronto","name":"Blue Jays","__v":0},"wins":31,"losses":33,"year":2017,"win_percent":0.484375},"away_team":{"_id":"593761de2e4a462a6c120414","team":{"_id":"58d86f75d5b26f3fca26cb56","abbrev":"TB","city":"Tampa Bay","name":"Rays","__v":0},"wins":35,"losses":32,"year":2017,"win_percent":0.5223880597014925},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/tbamlb-tormlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb6c","abbrev":"TOR","city":"Toronto","name":"Blue Jays","__v":0},"number_fire_odds":51.2,"standings_favorite":{"_id":"593761de2e4a462a6c120414","team":{"_id":"58d86f75d5b26f3fca26cb56","abbrev":"TB","city":"Tampa Bay","name":"Rays","__v":0},"wins":35,"losses":32,"year":2017,"win_percent":0.5223880597014925},"standings_percent":"51.89"},{"_id":"58d86f86d5b26f3fca26cf4e","date":"2017-06-14T19:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12042d","team":{"_id":"58d86f75d5b26f3fca26cb7b","abbrev":"CLE","city":"Cleveland","name":"Indians","__v":0},"wins":31,"losses":30,"year":2017,"win_percent":0.5081967213114754},"away_team":{"_id":"593761df2e4a462a6c12042a","team":{"_id":"58d86f75d5b26f3fca26cb77","abbrev":"LAD","city":"LA Dodgers","name":"Dodgers","__v":0},"wins":40,"losses":25,"year":2017,"win_percent":0.6153846153846154},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/lanmlb-clemlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb7b","abbrev":"CLE","city":"Cleveland","name":"Indians","__v":0},"number_fire_odds":51,"standings_favorite":{"_id":"593761df2e4a462a6c12042a","team":{"_id":"58d86f75d5b26f3fca26cb77","abbrev":"LAD","city":"LA Dodgers","name":"Dodgers","__v":0},"wins":40,"losses":25,"year":2017,"win_percent":0.6153846153846154},"standings_percent":"54.77"},{"_id":"58d86f86d5b26f3fca26cf4d","date":"2017-06-14T19:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041c","team":{"_id":"58d86f75d5b26f3fca26cb62","abbrev":"NYM","city":"NY Mets","name":"Mets","__v":0},"wins":29,"losses":34,"year":2017,"win_percent":0.4603174603174603},"away_team":{"_id":"593761df2e4a462a6c120419","team":{"_id":"58d86f75d5b26f3fca26cb5d","abbrev":"CHC","city":"Chi Cubs","name":"Cubs","__v":0},"wins":32,"losses":32,"year":2017,"win_percent":0.5},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/chnmlb-nynmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb62","abbrev":"NYM","city":"NY Mets","name":"Mets","__v":0},"number_fire_odds":50.8,"standings_favorite":{"_id":"593761df2e4a462a6c120419","team":{"_id":"58d86f75d5b26f3fca26cb5d","abbrev":"CHC","city":"Chi Cubs","name":"Cubs","__v":0},"wins":32,"losses":32,"year":2017,"win_percent":0.5},"standings_percent":"52.07"},{"_id":"58d86f86d5b26f3fca26cf49","date":"2017-06-14T19:05:00.000Z","home_team":{"_id":"593761df2e4a462a6c120429","team":{"_id":"58d86f75d5b26f3fca26cb75","abbrev":"PHI","city":"Philadelphia","name":"Phillies","__v":0},"wins":21,"losses":42,"year":2017,"win_percent":0.3333333333333333},"away_team":{"_id":"593761df2e4a462a6c12041e","team":{"_id":"58d86f75d5b26f3fca26cb65","abbrev":"BOS","city":"Boston","name":"Red Sox","__v":0},"wins":36,"losses":28,"year":2017,"win_percent":0.5625},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/bosmlb-phimlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":null,"number_fire_odds":50.6,"standings_favorite":{"_id":"593761df2e4a462a6c12041e","team":{"_id":"58d86f75d5b26f3fca26cb65","abbrev":"BOS","city":"Boston","name":"Red Sox","__v":0},"wins":36,"losses":28,"year":2017,"win_percent":0.5625},"standings_percent":"62.79"}];

it('renders without crashing', () => {

	var games = [{"_id":"58d86f86d5b26f3fca26cf48","date":"2017-06-14T16:05:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041a","team":{"_id":"58d86f75d5b26f3fca26cb5f","abbrev":"WSH","city":"Washington","name":"Nationals","__v":0},"wins":39,"losses":25,"year":2017,"win_percent":0.609375},"away_team":{"_id":"593761df2e4a462a6c12041d","team":{"_id":"58d86f75d5b26f3fca26cb63","abbrev":"ATL","city":"Atlanta","name":"Braves","__v":0},"wins":28,"losses":36,"year":2017,"win_percent":0.4375},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/atlmlb-wasmlb-1","__v":0,"status":"Pre-Game","inning":1,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb5f","abbrev":"WSH","city":"Washington","name":"Nationals","__v":0},"number_fire_odds":61.1,"standings_favorite":{"_id":"593761df2e4a462a6c12041a","team":{"_id":"58d86f75d5b26f3fca26cb5f","abbrev":"WSH","city":"Washington","name":"Nationals","__v":0},"wins":39,"losses":25,"year":2017,"win_percent":0.609375},"standings_percent":"58.21"},{"_id":"58d86f86d5b26f3fca26cf45","date":"2017-06-14T12:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041b","team":{"_id":"58d86f75d5b26f3fca26cb60","abbrev":"MIA","city":"Miami","name":"Marlins","__v":0},"wins":28,"losses":35,"year":2017,"win_percent":0.4444444444444444},"away_team":{"_id":"593761df2e4a462a6c120430","team":{"_id":"58d86f75d5b26f3fca26cb80","abbrev":"OAK","city":"Oakland","name":"Athletics","__v":0},"wins":27,"losses":37,"year":2017,"win_percent":0.421875},"home_runs":11,"away_runs":5,"gd2_id":"2017/06/14/oakmlb-miamlb-1","__v":0,"status":"In Progress","inning":9,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb60","abbrev":"MIA","city":"Miami","name":"Marlins","__v":0},"number_fire_odds":59.7,"standings_favorite":{"_id":"593761df2e4a462a6c12041b","team":{"_id":"58d86f75d5b26f3fca26cb60","abbrev":"MIA","city":"Miami","name":"Marlins","__v":0},"wins":28,"losses":35,"year":2017,"win_percent":0.4444444444444444},"standings_percent":"51.30"},{"_id":"58d86f86d5b26f3fca26cf47","date":"2017-06-14T15:45:00.000Z","home_team":{"_id":"593761df2e4a462a6c120417","team":{"_id":"58d86f75d5b26f3fca26cb5a","abbrev":"SF","city":"San Francisco","name":"Giants","__v":0},"wins":26,"losses":40,"year":2017,"win_percent":0.3939393939393939},"away_team":{"_id":"593761df2e4a462a6c120427","team":{"_id":"58d86f75d5b26f3fca26cb72","abbrev":"KC","city":"Kansas City","name":"Royals","__v":0},"wins":29,"losses":34,"year":2017,"win_percent":0.4603174603174603},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/kcamlb-sfnmlb-1","__v":0,"status":"Warmup","inning":1,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb5a","abbrev":"SF","city":"San Francisco","name":"Giants","__v":0},"number_fire_odds":59.5,"standings_favorite":{"_id":"593761df2e4a462a6c120427","team":{"_id":"58d86f75d5b26f3fca26cb72","abbrev":"KC","city":"Kansas City","name":"Royals","__v":0},"wins":29,"losses":34,"year":2017,"win_percent":0.4603174603174603},"standings_percent":"53.89"},{"_id":"58d86f86d5b26f3fca26cf52","date":"2017-06-14T20:15:00.000Z","home_team":{"_id":"593761df2e4a462a6c120418","team":{"_id":"58d86f75d5b26f3fca26cb5c","abbrev":"STL","city":"St. Louis","name":"Cardinals","__v":0},"wins":30,"losses":33,"year":2017,"win_percent":0.47619047619047616},"away_team":{"_id":"593761df2e4a462a6c120420","team":{"_id":"58d86f75d5b26f3fca26cb68","abbrev":"MIL","city":"Milwaukee","name":"Brewers","__v":0},"wins":34,"losses":32,"year":2017,"win_percent":0.5151515151515151},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/milmlb-slnmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb5c","abbrev":"STL","city":"St. Louis","name":"Cardinals","__v":0},"number_fire_odds":58.6,"standings_favorite":{"_id":"593761df2e4a462a6c120420","team":{"_id":"58d86f75d5b26f3fca26cb68","abbrev":"MIL","city":"Milwaukee","name":"Brewers","__v":0},"wins":34,"losses":32,"year":2017,"win_percent":0.5151515151515151},"standings_percent":"51.97"},{"_id":"58d86f86d5b26f3fca26cf51","date":"2017-06-14T20:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12042e","team":{"_id":"58d86f75d5b26f3fca26cb7d","abbrev":"HOU","city":"Houston","name":"Astros","__v":0},"wins":44,"losses":22,"year":2017,"win_percent":0.6666666666666666},"away_team":{"_id":"593761df2e4a462a6c12042c","team":{"_id":"58d86f75d5b26f3fca26cb7a","abbrev":"TEX","city":"Texas","name":"Rangers","__v":0},"wins":32,"losses":32,"year":2017,"win_percent":0.5},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/texmlb-houmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb7d","abbrev":"HOU","city":"Houston","name":"Astros","__v":0},"number_fire_odds":55.2,"standings_favorite":{"_id":"593761df2e4a462a6c12042e","team":{"_id":"58d86f75d5b26f3fca26cb7d","abbrev":"HOU","city":"Houston","name":"Astros","__v":0},"wins":44,"losses":22,"year":2017,"win_percent":0.6666666666666666},"standings_percent":"57.14"},{"_id":"58d86f86d5b26f3fca26cf4f","date":"2017-06-14T20:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c120424","team":{"_id":"58d86f75d5b26f3fca26cb6e","abbrev":"CWS","city":"Chi White Sox","name":"White Sox","__v":0},"wins":28,"losses":35,"year":2017,"win_percent":0.4444444444444444},"away_team":{"_id":"593761df2e4a462a6c120422","team":{"_id":"58d86f75d5b26f3fca26cb6b","abbrev":"BAL","city":"Baltimore","name":"Orioles","__v":0},"wins":31,"losses":32,"year":2017,"win_percent":0.49206349206349204},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/balmlb-chamlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb6e","abbrev":"CWS","city":"Chi White Sox","name":"White Sox","__v":0},"number_fire_odds":53.8,"standings_favorite":{"_id":"593761df2e4a462a6c120422","team":{"_id":"58d86f75d5b26f3fca26cb6b","abbrev":"BAL","city":"Baltimore","name":"Orioles","__v":0},"wins":31,"losses":32,"year":2017,"win_percent":0.49206349206349204},"standings_percent":"52.54"},{"_id":"58d86f86d5b26f3fca26cf46","date":"2017-06-14T15:40:00.000Z","home_team":{"_id":"593761df2e4a462a6c12042b","team":{"_id":"58d86f75d5b26f3fca26cb78","abbrev":"SD","city":"San Diego","name":"Padres","__v":0},"wins":26,"losses":40,"year":2017,"win_percent":0.3939393939393939},"away_team":{"_id":"593761df2e4a462a6c120428","team":{"_id":"58d86f75d5b26f3fca26cb74","abbrev":"CIN","city":"Cincinnati","name":"Reds","__v":0},"wins":29,"losses":35,"year":2017,"win_percent":0.453125},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/cinmlb-sdnmlb-1","__v":0,"status":"Warmup","inning":1,"top_inning":true,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb78","abbrev":"SD","city":"San Diego","name":"Padres","__v":0},"number_fire_odds":53.6,"standings_favorite":{"_id":"593761df2e4a462a6c120428","team":{"_id":"58d86f75d5b26f3fca26cb74","abbrev":"CIN","city":"Cincinnati","name":"Reds","__v":0},"wins":29,"losses":35,"year":2017,"win_percent":0.453125},"standings_percent":"53.49"},{"_id":"58d86f86d5b26f3fca26cf4c","date":"2017-06-14T19:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c120425","team":{"_id":"58d86f75d5b26f3fca26cb6f","abbrev":"DET","city":"Detroit","name":"Tigers","__v":0},"wins":30,"losses":33,"year":2017,"win_percent":0.47619047619047616},"away_team":{"_id":"593761de2e4a462a6c120416","team":{"_id":"58d86f75d5b26f3fca26cb59","abbrev":"ARI","city":"Arizona","name":"D-backs","__v":0},"wins":40,"losses":26,"year":2017,"win_percent":0.6060606060606061},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/arimlb-detmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":null,"number_fire_odds":52.8,"standings_favorite":{"_id":"593761de2e4a462a6c120416","team":{"_id":"58d86f75d5b26f3fca26cb59","abbrev":"ARI","city":"Arizona","name":"D-backs","__v":0},"wins":40,"losses":26,"year":2017,"win_percent":0.6060606060606061},"standings_percent":"56.00"},{"_id":"58d86f86d5b26f3fca26cf50","date":"2017-06-14T20:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c120426","team":{"_id":"58d86f75d5b26f3fca26cb71","abbrev":"MIN","city":"Minnesota","name":"Twins","__v":0},"wins":33,"losses":28,"year":2017,"win_percent":0.5409836065573771},"away_team":{"_id":"593761df2e4a462a6c12042f","team":{"_id":"58d86f75d5b26f3fca26cb7e","abbrev":"SEA","city":"Seattle","name":"Mariners","__v":0},"wins":32,"losses":34,"year":2017,"win_percent":0.48484848484848486},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/seamlb-minmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb71","abbrev":"MIN","city":"Minnesota","name":"Twins","__v":0},"number_fire_odds":52.4,"standings_favorite":{"_id":"593761df2e4a462a6c120426","team":{"_id":"58d86f75d5b26f3fca26cb71","abbrev":"MIN","city":"Minnesota","name":"Twins","__v":0},"wins":33,"losses":28,"year":2017,"win_percent":0.5409836065573771},"standings_percent":"52.74"},{"_id":"58d86f86d5b26f3fca26cf4a","date":"2017-06-14T19:05:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041f","team":{"_id":"58d86f75d5b26f3fca26cb66","abbrev":"PIT","city":"Pittsburgh","name":"Pirates","__v":0},"wins":30,"losses":35,"year":2017,"win_percent":0.46153846153846156},"away_team":{"_id":"593761df2e4a462a6c120421","team":{"_id":"58d86f75d5b26f3fca26cb69","abbrev":"COL","city":"Colorado","name":"Rockies","__v":0},"wins":41,"losses":26,"year":2017,"win_percent":0.6119402985074627},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/colmlb-pitmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb66","abbrev":"PIT","city":"Pittsburgh","name":"Pirates","__v":0},"number_fire_odds":52,"standings_favorite":{"_id":"593761df2e4a462a6c120421","team":{"_id":"58d86f75d5b26f3fca26cb69","abbrev":"COL","city":"Colorado","name":"Rockies","__v":0},"wins":41,"losses":26,"year":2017,"win_percent":0.6119402985074627},"standings_percent":"57.01"},{"_id":"58d86f86d5b26f3fca26cf53","date":"2017-06-14T22:07:00.000Z","home_team":{"_id":"593761df2e4a462a6c120431","team":{"_id":"58d86f75d5b26f3fca26cb81","abbrev":"LAA","city":"LA Angels","name":"Angels","__v":0},"wins":34,"losses":34,"year":2017,"win_percent":0.5},"away_team":{"_id":"593761de2e4a462a6c120415","team":{"_id":"58d86f75d5b26f3fca26cb57","abbrev":"NYY","city":"NY Yankees","name":"Yankees","__v":0},"wins":38,"losses":24,"year":2017,"win_percent":0.6129032258064516},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/nyamlb-anamlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":null,"number_fire_odds":51.8,"standings_favorite":{"_id":"593761de2e4a462a6c120415","team":{"_id":"58d86f75d5b26f3fca26cb57","abbrev":"NYY","city":"NY Yankees","name":"Yankees","__v":0},"wins":38,"losses":24,"year":2017,"win_percent":0.6129032258064516},"standings_percent":"55.07"},{"_id":"58d86f86d5b26f3fca26cf4b","date":"2017-06-14T19:07:00.000Z","home_team":{"_id":"593761df2e4a462a6c120423","team":{"_id":"58d86f75d5b26f3fca26cb6c","abbrev":"TOR","city":"Toronto","name":"Blue Jays","__v":0},"wins":31,"losses":33,"year":2017,"win_percent":0.484375},"away_team":{"_id":"593761de2e4a462a6c120414","team":{"_id":"58d86f75d5b26f3fca26cb56","abbrev":"TB","city":"Tampa Bay","name":"Rays","__v":0},"wins":35,"losses":32,"year":2017,"win_percent":0.5223880597014925},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/tbamlb-tormlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb6c","abbrev":"TOR","city":"Toronto","name":"Blue Jays","__v":0},"number_fire_odds":51.2,"standings_favorite":{"_id":"593761de2e4a462a6c120414","team":{"_id":"58d86f75d5b26f3fca26cb56","abbrev":"TB","city":"Tampa Bay","name":"Rays","__v":0},"wins":35,"losses":32,"year":2017,"win_percent":0.5223880597014925},"standings_percent":"51.89"},{"_id":"58d86f86d5b26f3fca26cf4e","date":"2017-06-14T19:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12042d","team":{"_id":"58d86f75d5b26f3fca26cb7b","abbrev":"CLE","city":"Cleveland","name":"Indians","__v":0},"wins":31,"losses":30,"year":2017,"win_percent":0.5081967213114754},"away_team":{"_id":"593761df2e4a462a6c12042a","team":{"_id":"58d86f75d5b26f3fca26cb77","abbrev":"LAD","city":"LA Dodgers","name":"Dodgers","__v":0},"wins":40,"losses":25,"year":2017,"win_percent":0.6153846153846154},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/lanmlb-clemlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb7b","abbrev":"CLE","city":"Cleveland","name":"Indians","__v":0},"number_fire_odds":51,"standings_favorite":{"_id":"593761df2e4a462a6c12042a","team":{"_id":"58d86f75d5b26f3fca26cb77","abbrev":"LAD","city":"LA Dodgers","name":"Dodgers","__v":0},"wins":40,"losses":25,"year":2017,"win_percent":0.6153846153846154},"standings_percent":"54.77"},{"_id":"58d86f86d5b26f3fca26cf4d","date":"2017-06-14T19:10:00.000Z","home_team":{"_id":"593761df2e4a462a6c12041c","team":{"_id":"58d86f75d5b26f3fca26cb62","abbrev":"NYM","city":"NY Mets","name":"Mets","__v":0},"wins":29,"losses":34,"year":2017,"win_percent":0.4603174603174603},"away_team":{"_id":"593761df2e4a462a6c120419","team":{"_id":"58d86f75d5b26f3fca26cb5d","abbrev":"CHC","city":"Chi Cubs","name":"Cubs","__v":0},"wins":32,"losses":32,"year":2017,"win_percent":0.5},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/chnmlb-nynmlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":{"_id":"58d86f75d5b26f3fca26cb62","abbrev":"NYM","city":"NY Mets","name":"Mets","__v":0},"number_fire_odds":50.8,"standings_favorite":{"_id":"593761df2e4a462a6c120419","team":{"_id":"58d86f75d5b26f3fca26cb5d","abbrev":"CHC","city":"Chi Cubs","name":"Cubs","__v":0},"wins":32,"losses":32,"year":2017,"win_percent":0.5},"standings_percent":"52.07"},{"_id":"58d86f86d5b26f3fca26cf49","date":"2017-06-14T19:05:00.000Z","home_team":{"_id":"593761df2e4a462a6c120429","team":{"_id":"58d86f75d5b26f3fca26cb75","abbrev":"PHI","city":"Philadelphia","name":"Phillies","__v":0},"wins":21,"losses":42,"year":2017,"win_percent":0.3333333333333333},"away_team":{"_id":"593761df2e4a462a6c12041e","team":{"_id":"58d86f75d5b26f3fca26cb65","abbrev":"BOS","city":"Boston","name":"Red Sox","__v":0},"wins":36,"losses":28,"year":2017,"win_percent":0.5625},"home_runs":0,"away_runs":0,"gd2_id":"2017/06/14/bosmlb-phimlb-1","__v":0,"status":"Preview","inning":0,"top_inning":false,"number_fire_favorite":null,"number_fire_odds":50.6,"standings_favorite":{"_id":"593761df2e4a462a6c12041e","team":{"_id":"58d86f75d5b26f3fca26cb65","abbrev":"BOS","city":"Boston","name":"Red Sox","__v":0},"wins":36,"losses":28,"year":2017,"win_percent":0.5625},"standings_percent":"62.79"}];
  	const div = document.createElement('div');
  	ReactDOM.render(<ExpectedValues data={games} />, div);
  		
});

describe('sort odds', () => {

	it('sort array with all the same value', () => {

		const app = new ExpectedValues();
		var array = [{standings_percent: 50}, {standings_percent: 50}, {standings_percent: 50}, {standings_percent: 50}];

		expect(app.getOdds(array, 'standings_percent')).toEqual([.5, .25, .125, .0625]);

	});

	it('sort array with different values', () => {

		const app = new ExpectedValues();
		var array = [{standings_percent: 55}, {standings_percent: 51}, {standings_percent: 60}, {standings_percent: 53}];

		expect(app.getOdds(array, 'standings_percent')).toEqual([.6, .33, .1749, .089199]);

	});

});

it('should return a readable form by fixing the number to the 6th decimal place', () => {

	const app = new ExpectedValues();
	var array = [.00023323, .0023, .234635, .1234567];

	expect(app.convertToReadable(array)).toEqual([.000233, .0023, .234635, .123457]);

});