(function () {

    app.controller('controllerDialogCics', function ($rootScope, $scope, $mdToast, $mdDialog, Instances) {

        $scope.tenants = ["Test_Frankfurt", "Test_Hamburg", "default"];

        $scope.create = function () {
            Instances.createInstance($scope.tenant, $scope.name, $scope.description)
                .then(function (response) {
                    console.log(response);
                    $mdToast.show($mdToast.simple().textContent('CICS created successfully.'));
                }, function onErrorCallback(response) {
                    console.log(response);
                    $mdToast.show($mdToast.simple().textContent('Could not create cics.'));
                });
            $mdDialog.hide();
        };

        $scope.close = function () {
            $mdDialog.hide();
        };

    });

})();