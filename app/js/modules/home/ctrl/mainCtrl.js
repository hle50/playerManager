var module = angular.module('myApp');
module.controller('mainCtrl', ['playerService', '$scope', '$log', 'toastr', function (playerService, $scope, $log, toastr) {
	var self = $scope;
	self.playerService = playerService;
}])
