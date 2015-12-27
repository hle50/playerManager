var module = angular.module('myApp');
module.controller('rightCtrl', function ($log, playerService, $scope) {
	var self = $scope;
	self.playerService = playerService;
	$log.warn('rightCtrl init');
})
