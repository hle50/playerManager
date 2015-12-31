var config =angular.module('config', []);
config.factory('configService', function (){
    return{
        api: 'http://localhost:3000'
    }
})