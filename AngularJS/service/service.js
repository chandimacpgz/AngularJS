﻿
app.service('AuthenticationService', function ($http, $rootScope) {


    this.Authenitcate = function (username, password, callback) {
        
        $http.post('/api/authenticate', { username: username, password: password })
       .success(function (response) {
        callback(response);
        });
    }

    this.SetCredentials = function (user) {
        $rootScope.user = user;
        
    }
});

(function () {
    'use strict';
    app.factory('userService', userService);
    userService.$inject = ['$http'];
    function userService($http) {
        var service = {};


        service.createUser = createUser;
        service.viewAllUsers = viewAllUsers;
        service.viewSingleUser = viewSingleUser;
        service.deleteSingleUser = deleteSingleUser;
        service.updateSingleUser = updateSingleUser;

        return service;

        function createUser(user) {
            return $http.post('/api/createUser', { user: user }).then(handleSuccess, handleError('Error Creating single user'));
        }

        function viewAllUsers() {
            return $http.get('http://localhost:33090/api/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function viewSingleUser(id) {
            return $http.get('/api/singleUser/' + id).then(handleSuccess, handleError('Error getting Single User'));
        }

        function deleteSingleUser(id) {
            return $http.delete('/api/deleteUser/' + id).then(handleSuccess, handleError('Error deleting User'));
        }

        function updateSingleUser(user) {
            return $http.post('/api/deleteUser', { user: user }).then(handleSuccess, handleError('Error updating User'));
        }



        // custom functions

        function handleSuccess(res) {
            return res;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }





    }

})();





/*
app.service('userService', function ($http, $rootScope) {


    this.createUser = function (user) {
        $http.post('/api/createUser', { user: user })
       .success(function (response) {
           return (response);
       }).fail(function (response) {
           return (response);

       });

    }


    this.viewAllUsers = function () {
        return $http.get('http://localhost:33090/api/Users/');
    }

    this.viewSingleUser = function (username) {
        $http.post('/api/singleUser', { username: username })
       .success(function (response) {
           return (JSON.parse(response));
       });

    }

    this.deleteSingleUser = function (username) {
        $http.post('/api/deleteUser', { username: username })
       .success(function (response) {
           return (response);
       });

    }

    this.updateSingleUser = function (user) {
        $http.post('/api/deleteUser', { user: user })
       .success(function (response) {
           return(response);
       });
    }


});


*/


/*
app.service('deptService', function ($http, $rootScope) {

    this.viewAllDepartments = function () {
        $http.post('/api/allusers')
       .success(function (response) {
           return (JSON.parse(response));
       });

    }

    this.viewSingleDepartment = function (username) {
        $http.post('/api/singleUser', { username: username })
       .success(function (response) {
           return (JSON.parse(response));
       });

    }

    this.deleteSingleDepartment = function (username) {
        $http.post('/api/deleteUser', { username: username })
       .success(function (response) {
           return(response);
       });

    }

    this.updateSingleDepartment = function (user) {
        $http.post('/api/deleteUser', { user: user })
       .success(function (response) {
           return(response);
       });
    }


});


*/

