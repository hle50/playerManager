var module = angular.module('myApp');
module.controller('homeCtrl', function ($compile, $scope, $log, $templateRequest) {
	var leftTpl = './js/modules/home/templates/layout/left.html';
	var mainTpl = './js/modules/home/templates/layout/main.html';
	var rightTpl = './js/modules/home/templates/layout/right.html';
	$log.warn('homeCtrl init')
	if (w2ui.hasOwnProperty('layout')) {
		w2ui['layout'].destroy();
	}
	var pstyle = 'background-color: #F5F6F7; border: 1px solid #dfdfdf; padding: 5px;';
	$('#layout').w2layout({
		name: 'layout',
		panels: [

			{
				type: 'left',
				size: 300,
				resizable: true,
				style: pstyle,
			},
			{
				type: 'main',
				style: pstyle,

			},
			{
				type: 'right',
				size: 300,
				resizable: true,
				style: pstyle,
			},

        ]
	});

	function setContent(type, templateUrl) {
		$templateRequest(templateUrl).then(function (html) {
			var tpl = $compile(html)($scope);
			$log.debug(tpl);
			w2ui['layout'].content(type, tpl[0]);
		});
	}
	setContent('left', leftTpl);
	setContent('main', mainTpl);
	setContent('right', rightTpl);

})
