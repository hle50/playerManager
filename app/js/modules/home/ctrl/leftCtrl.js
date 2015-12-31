var module = angular.module('myApp');
module.controller('leftCtrl', ['playerService', '$scope', '$log', 'toastr', function (playerService, $scope, $log, toastr) {
	var self = $scope;
	self.playerService = playerService;
	toastr.info('Loading Manchester United players');
	$log.warn('leftCtrl init');
	self.isLoading = true;

	self.list = playerService.get('/meta').then(function (result) {
		self.isLoading = false;
		toastr.success('Loading sucessfully');
		$log.info(result);
		self.players = result;
	}, function (error) {
		self.isLoading = false;
		toastr.warning('Loading unsucessfully');
	});

	self.getDetail = function (player) {
		playerService.hasInfo = player;
	}
}])
