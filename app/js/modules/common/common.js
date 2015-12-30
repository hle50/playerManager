'use strict'
var coreModule = angular.module('coreModule', []);
coreModule.service('coreService', function ($http, $log, $q) {
    var self;
	function CoreSerivce() {
        self = this;
        self.url='http://api.football-data.org/v1/teams/';
	}
	CoreSerivce.prototype.getList = function (runtimeUrl) {
		var defered = $q.defer();
		$http({
			method: 'GET',
			url: self.url+runtimeUrl,
            headers: {
				'X-Auth-Token': 'bc58f428c5024405b10075b96dd02c66'
			}

		}).success(function (data) {
			defered.resolve(data);
		}).error(function (data) {
			defered.reject(data);
		});
		return defered.promise;
		$log.info(runtimeUrl);
	}


	return {
		CoreSerivce: CoreSerivce
	}


});

function inheritPrototype(prototype) {
	function F() {}; // Dummy constructor
	F.prototype = prototype;
	return new F();
}

function inherit(parentClazz, childClazz) {
	childClazz.prototype = inheritPrototype(parentClazz.prototype);
	childClazz.prototype.constructor = childClazz;
}

/*function extend(srcClazz, destClazz) {
	for (var k in srcClazz.prototype) {
		if (srcClazz.prototype.hasOwnProperty(k)) {
			destClazz.prototype[k] = srcClazz.prototype[k];
		}
	}
	destClazz.prototype = inheritPrototype(destClazz.prototype);
}*/