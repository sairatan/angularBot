'use strict';

// Defining Angular app model with all other dependent modules
var mostPopularListingsApp = angular.module('mostPopularListingsApp',['ngRoute',
	'mostPopularListingsApp.userDetails','mostPopularListingsApp.users','mostPopularListingsApp.login']);

mostPopularListingsApp.config(function($routeProvider, $locationProvider, $httpProvider) {
	
	// Declaration of the default route if neither of the controllers
    // is supporting the request path
	$routeProvider
        .when('/', {
            controller: 'usersController',
            templateUrl: 'components/views/users.html'
        })
        .when('/users/:userID', {
            controller: 'userDetailsController',
            templateUrl: 'components/views/userDetails.html'
        })
		.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	// disabling # in Angular urls
	// $locationProvider.html5Mode({
	// 		enabled: true,
	//      requireBase: false
	// });
});
