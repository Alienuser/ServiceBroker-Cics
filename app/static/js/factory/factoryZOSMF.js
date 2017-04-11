app.factory('zOSMF', ['$http', 'api', function ($http, api) {

    var zOSMF = {};

    zOSMF.getInfo = function () {
        return $http({
            method: 'GET',
            url: api.restAPI + '/info'
        });
    };

    return zOSMF;
}]);