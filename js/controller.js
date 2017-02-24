angular.module("Contacto",[])
  .controller("Firstcontroller",function ($scope,$http,$window) {

    $scope.user = {};

    $scope.addPost = function () {
       $scope.user.page = "mellowventures.mx";
       $scope.user.message = "Sin Mensaje";
       $http.post("http://emailapi.mellow.online/api/general",$scope.user)
           .success(function (data, status, headers, config) {
               $window.location.reload();
           })
           .error(function (data, status, header, config) {
                console.log(data);
           });

    };

  });
