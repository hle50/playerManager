var module = angular.module('myApp');
module.controller('bindingCtrl', function ($log, playerService, $scope) {
    var self = $scope;
    self.playerService = playerService;
    $log.warn('binding init');
    initObject();
    function initObject() {
        playerService.get('players', 'form').then(function (result) {
            $log.info(result);

        });
    }
    self.save = function (){
       playerService.post('players').then(function(result){
           $log.info(result);
       })
    }
})