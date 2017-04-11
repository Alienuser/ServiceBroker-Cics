(function () {

    app.controller('controllerCics', function ($rootScope, $scope, $mdToast, $mdDialog, $location, Instances) {

        $scope.tenants = ["Test_Frankfurt", "Test_Hamburg", "default"];
        
        Instances.getAllCics()
            .then(function (response) {
                $scope.cicse = response.data['scr-list'];

                // Disable spinner when page is loaded
                $rootScope.spinnerMode = false;
            }, function onErrorCallback(response) {
                console.log(response);

                // Disable spinner when page is loaded
                $rootScope.spinnerMode = false;
            });

        $scope.start = function (objectID, objectName) {
            // Disable spinner when page is loaded
            $rootScope.spinnerMode = true;
            Instances.startInstance(objectID)
                .then(function (response) {
                    $mdToast.show($mdToast.simple().textContent(objectName + ' successfully started.'));
                    // Disable spinner when page is loaded
                    $rootScope.spinnerMode = false;
                }, function onErrorCallback(response) {
                    $mdToast.show($mdToast.simple().textContent('Could not start ' + objectName));
                    // Disable spinner when page is loaded
                    $rootScope.spinnerMode = false;
                });
        };

        $scope.stop = function (objectID, objectName) {
            // Disable spinner when page is loaded
            $rootScope.spinnerMode = true;
            Instances.stopInstance(objectID)
                .then(function (response) {
                    $mdToast.show($mdToast.simple().textContent(objectName + ' successfully stopped.'));
                    // Disable spinner when page is loaded
                    $rootScope.spinnerMode = false;
                }, function onErrorCallback(response) {
                    $mdToast.show($mdToast.simple().textContent('Could not stop ' + objectName));
                    // Disable spinner when page is loaded
                    $rootScope.spinnerMode = false;
                });
        };

        $scope.addCics = function () {
            $mdDialog.show({
                controller: 'controllerDialogCics',
                templateUrl: '/static/templates/dialogCics.html',
                locals: {},
                openFrom: angular.element(document.querySelector('#createCICS')),
                closeTo: angular.element(document.querySelector('#createCICS'))
            });
        };

        $scope.open = function (objectID) {
            $location.path('/instance/' + objectID);
        };

    });

})();