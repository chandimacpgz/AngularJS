(function () {
    'use strict';

    angular
        .module('Application')
        .controller('editControllerRoute', editControllerRoute);

    editControllerRoute.$inject = ['$location','$scope'];

    function editControllerRoute($location,$scope) {
        $scope.editthisDepartment = function (deptName) {
            $location.path('/thisEditDepartment'+deptName);
        }
    }
})();
