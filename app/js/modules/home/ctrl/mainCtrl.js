var module = angular.module('myApp');
module.controller('mainCtrl', ['playerService', '$scope', '$log', 'toastr', function (playerService, $scope, $log, toastr) {
	var self = $scope;
	self.playerService = playerService;

	self.getHistory = function () {
		playerService.getHistory().then(function (data) {
			playerService.history = data;
			toastr.success('Loading sucessfully');
		})
	}
}])
