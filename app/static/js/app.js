var app = angular.module('bsb', ['ngMaterial', 'ngRoute']);

// Define all constants.
app.constant('api', {
    restAPI: 'https://cap-sg-prd-1.integration.ibmcloud.com:16283/zosmf'
});

// Define all the routes for the web app.
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/templates/main.html',
            controller: 'controllerMain'
        })
        .when('/instance/:objectId', {
            templateUrl: '/static/templates/instance.html',
            controller: 'controllerInstance'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
        // Start the spinner when changing content
        $rootScope.spinnerMode = true;
    });
});