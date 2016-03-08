(function () {
    'use strict';
    app.factory('deptService', deptService);
    deptService.$inject = ['$http'];
    function deptService($http) {
        var service = {};


        service.createDepartment = createDepartment;
        service.viewAllDepartments = viewAllDepartments;
        service.viewSingleDepartment = viewSingleDepartment;
        service.deleteSingleDepartment = deleteSingleDepartment;
        service.viewAllEditDepartments = viewAllEditDepartments;
        service.updateSingleDepartment = updateSingleDepartment;

        return service;

        function createDepartment(dept) {
            return $http.post('/api/createDepartment', { dept: dept }).then(handleSuccess, handleError('Error Creating Department'));
        }

        function viewAllDepartments() {
            return $http.get('http://localhost:33090/api/Departments/').then(handleSuccess, handleError('Error getting all Departments'));
        }

        function viewSingleDepartment(id) {
            return $http.get('/api/singleUser/' + id).then(handleSuccess, handleError('Error getting Single Department'));
        }

        function deleteSingleDepartment(id) {
            return $http.delete('/api/deleteUser/' + id).then(handleSuccess, handleError('Error deleting Department'));
        }

        function updateSingleDepartment(dept) {
            return $http.post('/api/deleteUser', { dept: dept }).then(handleSuccess, handleError('Error updating Department'));
        }

       function viewAllEditDepartments(){
           return $http.get('http://localhost:33090/api/departments').then(handleSuccess, handleError('Error in editing all Departments'));
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
