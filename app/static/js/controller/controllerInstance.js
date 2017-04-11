(function () {

    app.controller('controllerInstance', function ($rootScope, $scope, $location, $mdToast, $routeParams, Instances) {

        // Get single instance
        Instances.getSingle($routeParams.objectId)
            .then(function (response) {
                $scope.name = response.data['external-name'];
                $scope.instance = response.data;
                console.log(response.data);

                // Disable spinner when page is loaded
                $rootScope.spinnerMode = false;
            }, function onErrorCallback(response) {
                console.log(response);

                // Disable spinner when page is loaded
                $rootScope.spinnerMode = false;
            });

        $scope.goBack = function () {
            $location.path('/');
        };

        $scope.runJob = function (job) {
            Instances.startJob($routeParams.objectId, job)
                .then(function (response) {
                    $mdToast.show($mdToast.simple().textContent('Job ' + job + ' started successfully.'));
                }, function onErrorCallback(response) {
                    $mdToast.show($mdToast.simple().textContent('Could not start job ' + job));
                });
        };

    });

})();