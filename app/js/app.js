'use strict';
var myapp = angular.module('myApp', ["ui.router", 'ngAnimate', 'toastr', 'ui.bootstrap', 'playerService'])
myapp.config(function ($stateProvider, $urlRouterProvider, toastrConfig) {

	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "./js/modules/home/templates/home.html"
		})
    	.state('binding', {
			url: "/binding",
			templateUrl: "./js/modules/binding/templates/binding.html"
		});
	angular.extend(toastrConfig, {
		allowHtml: false,
		closeButton: true,
		closeHtml: '<button>&times;</button>',
		extendedTimeOut: 1000,
		iconClasses: {
			error: 'toast-error',
			info: 'toast-info',
			success: 'toast-success',
			warning: 'toast-warning'
		},
		messageClass: 'toast-message',
		onHidden: null,
		onShown: null,
		onTap: null,
		progressBar: false,
		tapToDismiss: true,
		timeOut: 5000,
		titleClass: 'toast-title',
		toastClass: 'toast'
	});

});
