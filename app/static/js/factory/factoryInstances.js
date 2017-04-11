app.factory('Instances', ['$http', 'api', function ($http, api) {

    var Instances = {};

    Instances.getAllCics = function () {
        return $http({
            method: 'GET',
            url: api.restAPI + '/provisioning/rest/1.0/scr',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('lprobst:ce123bit')
            }
        });
    };

    Instances.startInstance = function (objectId) {
        return $http({
            method: 'POST',
            url: api.restAPI + '/provisioning/rest/1.0/scr/' + objectId + '/actions/start',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('lprobst:ce123bit')
            },
            data: ''
        });
    };

    Instances.stopInstance = function (objectId) {
        return $http({
            method: 'POST',
            url: api.restAPI + '/provisioning/rest/1.0/scr/' + objectId + '/actions/stop',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('lprobst:ce123bit')
            },
            data: ''
        });
    };

    Instances.getSingle = function (objectId) {
        return $http({
            method: 'GET',
            url: api.restAPI + '/provisioning/rest/1.0/scr/' + objectId,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('lprobst:ce123bit')
            }
        });
    };

    Instances.createInstance = function (tenant, name, description) {
        return $http({
            method: 'POST',
            url: api.restAPI + '/provisioning/rest/1.0/psc/cics53_mas_liberty_ucd/actions/run',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('lprobst:ce123bit')
            },
            data: {
                'tenant-name': tenant
            }
        });
    };

    Instances.startJob = function (instance, job) {
        return $http({
            method: 'POST',
            url: api.restAPI + '/provisioning/rest/1.0/scr/' + instance + '/actions/' + job,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('lprobst:ce123bit')
            },
            data: {}
        });
    };

    return Instances;
}]);