angular.module("all_users", [])
    .controller("AppCtrl", function ($scope, $http) {
        $scope.users = [];

        $http.get('http://localhost:8098/api/all_users').success(function(data){
            $scope.users = data;
        })

    });