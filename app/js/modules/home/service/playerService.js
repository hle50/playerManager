var playerService = angular.module('playerService', ['coreModule']);
playerService.service('playerService', function ($log, $q, $http,coreService) {
    $log.info('product service');
	function PlayerService($http, $log, $q, coreService) {
		var self = this;
		coreService.CoreSerivce.call(self);
	}

	inherit(coreService.CoreSerivce, PlayerService);
	PlayerService.prototype.test = function () {
		$log.debug('test');
	};
	return new PlayerService($http, $log, $q, coreService);
});
