var module = angular.module('myApp');
module.controller('leftCtrl', ['playerService', '$scope', '$log', 'toastr', function (playerService, $scope, $log, toastr) {
	var self = $scope;
	self.playerService = playerService;
	toastr.info('Loading Manchester United players');
	$log.warn('leftCtrl init');
	self.isLoading = true;

	self.list = playerService.get('players', 'meta').then(function (result) {
		self.isLoading = false;
		toastr.success('Loading sucessfully');
		$log.info(result);
		self.players = result;
	}, function (error) {
		self.isLoading = false;
		toastr.warning('Loading unsucessfully');
	});

	self.getDetail = function (_id) {
		playerService.get('players','detail',_id).then(function (result){
            $log.info(result);
            playerService.detail = result;
            playerService.hasInfo = result.details;
        });
	}
}])
