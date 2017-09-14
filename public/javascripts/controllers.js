angular.module('myWebsiteControllers', [])

.controller('navCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
})

.controller('indexCtrl', function($scope, $http) {

})

.controller('meanCtrl', function($scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
})


.controller('dashboardCtrl', function($scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
    
})

.controller('demoCtrl', function($scope, $http, Users) {
            
            Users.get()
            .success(function(data) {
                
            i = 1;
            $.each(data, function(){
                  this['editing'] = false;  
                  this['deleted'] = false;
                  this['index'] = i;
                  i++;
            });
                
                    $scope.users = data;
                    $scope.init();
            });
            
            
            
            
            $scope.createUser = function(formData) {
                    
                    Users.create(formData)
                        
                    .success(function(data) {
                            $scope.formData = {};
                            data['editing'] = false;  
                            data['deleted'] = false;
                            data['index'] = $scope.totalItems+1;
                            $scope.users.push(data);
                            $scope.setTotalItems();
                            $scope.currentItems();
                                       
                    });
   
   
            };

            $scope.deleteUser = function(doc) {
                
                doc['deleted'] = true;
                      
                Users.delete(doc['_id'])
                
                .success(function(data) {
                  
                });
                
            };
            
            $scope.updateUser = function(userObj) {
                
                Users.update(userObj)
                
                .success(function(data) {
                    $.each($scope.users, function(){
                        this.editing = false; 
                    });
                        
                });
                
            };
            
                        
            $scope.editUser = function (item) {
                $.each($scope.users, function(){
                    this.editing = false; 
                });
                item.editing = true;
            }

            /*for pagination*/
            $scope.currentPage = 1;
            $scope.maxSize = 3;
            $scope.totalItems = 0;
            $scope.userPage = [];
            
            $scope.currentItems = function(){
                $scope.userPage = [];
                $scope.startItem  = (($scope.currentPage - 1) * 10) +1;
                if($scope.currentPage < $scope.numPages){
                    $scope.endItem = ($scope.currentPage * 10);
                }else{
                    $scope.endItem = $scope.totalItems;
                }
                var p = 0;
                for(i=$scope.startItem;i<=$scope.endItem;i++){
                $scope.userPage[p] = $scope.users[i-1];
                p++;
                }
                
                
            }
            
            $scope.setTotalItems = function(){
                $scope.totalItems = $scope.users.length;
            }

            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };

            $scope.pageChanged = function() {
                //do something on page change
                $scope.currentItems();
            };
            
            
            $scope.init = function(){
                $scope.setTotalItems();
                $scope.numPages = (($scope.totalItems - ($scope.totalItems % 10)) / 10) +1;
                $scope.currentItems();
                
            }
            
});