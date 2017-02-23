angular.module("Contacto",[])
  .controller("Firstcontroller",function ($scope,$http) {
    $scope.post = [];
    $scope.newPost = {};
    $scope.user = {};

    $scope.addPost = function () {
       console.log($scope.user);
       $scope.user.page = "mellowventures.mx";
       $scope.message = "sin mensaje";
       console.log($scope.user);

      $http.post(,{
        title: $scope.newPost.title,
        body: $scope.newPost.body,
        userId: 1
      })
        .success(function(data,status,headers,config) {
          $scope.post.push($scope.newPost);
          $scope.addPost = {}
        })
        .error(function (data,status,headers,config) {
          console.log(error);
        });
    }

  });
