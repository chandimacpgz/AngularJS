(function () {
    'use strict';

    angular
        .module('Application')
        .controller('deptController', deptController);

    deptController.$inject = ['$location', '$scope', 'deptService' ];

    function deptController($location, $scope, deptService) {
   
        $scope.editthisDepartment = function () {
            $location.path('/thisEditDepartment');
        }
            deptService.viewAllDepartments().then(function (state) {
                $scope.alldepts = state.data;

            });
        

        $scope.createUser = function (user) {
            deptService.createUser(user).then(function (state) {
                $scope.result = state.data;
            });
        }

        $scope.viewSingleDepartment = function (depname) {
            deptService.viewSingleDepartment(depname).then(function (state) {
                $scope.singleDepartment = state.data;
            });
        }

        $scope.deleteSingleUser = function (username) {
            deptService.deleteSingleUser(username).then(function (state) {
                socpe.result = state.data;
            });
        }
        //editing-show all the departments with edit and delete button
        deptService.viewAllEditDepartments().then(function (state) {
            $scope.alldepartments = state.data;
        });



        //$scope.viewAllEditDepartments = function (state) {
        //    deptService.viewAllEditDepartments(state).then(function (state) {
        //        $scope.alldepartments = state.data;

        //    });
        //}

        //$scope.updateSingleUser = function (user) {
        //    $scope.result = deptService.updateSingleUser(user).then(function (state) {
        //        socpe.result = state.data;
        //    });
        }
    
    }
)();
