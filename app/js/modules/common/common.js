'use strict'
var coreModule = angular.module('coreModule', ['config']);
coreModule.service('coreService', function ($http, $log, $q,configService) {
    var self;
	function CoreSerivce() {
        self = this;
        self.url=configService.api;
	}
	CoreSerivce.prototype.get = function (runtimeUrl) {
		var defered = $q.defer();
		$http({
			method: 'GET',
			url: self.url+runtimeUrl,

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