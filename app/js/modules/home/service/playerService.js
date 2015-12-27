var playerService = angular.module('playerService', []);
playerService.service('playerService', function ($q, $http) {
	var self = this;
	var apiManchester = 'http://api.football-data.org/v1/teams/66/players';
	var histotryUrl = './js/modules/home/service/history.json';
	self.getList = function () {
		var defered = $q.defer();

		$http({
			method: 'GET',
			url: apiManchester,
			headers: {
				'X-Auth-Token': 'bc58f428c5024405b10075b96dd02c66'
			}

		}).success(function (data) {
			// With the data succesfully returned, we can resolve promise and we can access it in controller
			defered.resolve(data.players);
			self.detail = data.players;
		}).error(function () {

			//let the function caller know the error
			defered.reject();
		});
		return defered.promise;

	};
	self.getHistory = function () {
		var defered = $q.defer();

		$http({
			method: 'GET',
			url: histotryUrl,

		}).success(function (data) {
			// With the data succesfully returned, we can resolve promise and we can access it in controller
			defered.resolve(data.histories);
		}).error(function () {

			//let the function caller know the error
			defered.reject();
		});
		return defered.promise;

	};
})
