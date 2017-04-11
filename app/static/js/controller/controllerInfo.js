(function () {

    app.controller('controllerInfo', function ($rootScope, $scope, zOSMF) {

        zOSMF.getInfo()
            .then(function (response) {
                $scope.info = response.data;

                // Disable spinner when page is loaded
                $rootScope.spinnerMode = false;
            }, function onErrorCallback(response) {
                console.log(response);

                // Disable spinner when page is loaded
                $rootScope.spinnerMode = false;
            });

    });

})();