var module = angular.module('layoutDirective', []);
module.directive('left', function () {
	return {
		restrict: 'E',
		templateUrl: 'left.html',
		link: function (scope, element) {
			scope.name = 'Jeff';
		}
	};
})
