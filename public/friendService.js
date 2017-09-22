angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('/api/login', {name: user.name, password: user.password})/* FIX ME */
    };

    this.getFriends = function() {
    	return $http.get('/api/profiles')/* FIX ME */
    };

});
