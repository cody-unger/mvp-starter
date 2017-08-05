angular.module('app')
.service('userGroupsService', function($http) {
  this.post = function(userGroupQuery, callback) {
    userGroupQuery = userGroupQuery.split(',');
    $http({
        method: "POST",
        url: "/items",
        data: JSON.stringify({userGroupQuery}),
        contentType: 'application/JSON'
    });
  };
});