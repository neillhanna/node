angular.module('userService', [])

.factory('Users', function($http){
       
     return {
         
        get : function() {
           return $http.get("/users");
        },
        create : function(scope) {
           return $http.get("/users/create/" + scope.firstname + "/" + scope.lastname + "/" + scope.email);
        },
        delete : function(id) {
            return $http.get("/users/delete/" + id);
        },
        update : function(userObj) {
            return $http.get("/users/update/" + userObj._id + "/" + userObj.firstname + "/" + userObj.lastname + "/" + userObj.email);
        }

    }
    
}).factory('dashboard', function($http){
       
     return {
         
        get : function() {
           return $http.get("/users");
        },
        create : function(scope) {
           return $http.get("/users/create/" + scope.firstname + "/" + scope.lastname + "/" + scope.email);
        },
        delete : function(id) {
            return $http.get("/users/delete/" + id);
        },
        update : function(userObj) {
            return $http.get("/users/update/" + userObj._id + "/" + userObj.firstname + "/" + userObj.lastname + "/" + userObj.email);
        }

    }
    
});