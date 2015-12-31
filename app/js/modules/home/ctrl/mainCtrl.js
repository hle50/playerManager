var module = angular.module('myApp');
module.controller('mainCtrl', ['playerService', '$scope', '$log', 'toastr', function (playerService, $scope, $log, toastr) {
    var self = $scope;
    self.playerService = playerService;

    self.toggle = function (type) {
        switch (type) {
        case 'status':
            if (playerService.isShowStatus === true) {
                playerService.isShowStatus = false;
            } else {
                playerService.isShowStatus = true;
            }
            break;
        case 'history':
            if (playerService.isShowHistory === true) {
                playerService.isShowHistory = false;
            } else {
                playerService.isShowHistory = true;
            }
            break;
        }
    }
}])