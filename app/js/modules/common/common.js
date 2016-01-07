'use strict'
var coreModule = angular.module('coreModule', ['config']);
coreModule.service('coreService', function ($http, $log, $q,configService) {
    var self;
	function CoreSerivce() {
        self = this;
        self.url=configService.api;
	}
	CoreSerivce.prototype.get = function (resourceName, resourceType, resourceId) {
		var defered = $q.defer();
        var runtimeURL;
        if(resourceId===null || resourceId==undefined){
            runtimeURL = self.url + '/' + resourceName + '/' + resourceType;
        }
        else{
            runtimeURL = self.url + '/' + resourceName + '/' + resourceType +'/' + resourceId;
        }
		$http({
			method: 'GET',
			url: runtimeURL,

		}).success(function (data) {
			defered.resolve(data);
            if(resourceType == 'form'){
                self.detail = data.details;
            }
                

		}).error(function (data) {
			defered.reject(data);
		});
		return defered.promise;
		$log.info(runtimeUrl);
	}
    	CoreSerivce.prototype.post = function (resourceName) {
		var defered = $q.defer();
        var runtimeURL = self.url + '/' + resourceName;
       
		$http({
			method: 'POST',
			url: runtimeURL,
            data: self.detail,
            header :{
                 'Content-Type': 'application/json'
            }

		}).success(function (data) {
			defered.resolve(data);
            if(resourceType == 'form'){
                self.detail = data.details;
            }
                

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