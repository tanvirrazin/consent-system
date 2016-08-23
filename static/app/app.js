
angular.module('ConsentFormApp', ['ngAnimate', 'ui.router'])

// configure routes
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
    
        // route to show our basic form (/form)
        .state('consent-form', {
            url: '/consent-form',
            templateUrl: '/static/app/views/consent-form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view

        .state('consent-form.form-name', {
            url: '/form-name',
            templateUrl: '/static/app/views/partials/consent-form-name.html'
        })

        .state('consent-form.communication-mode', {
            url: '/communication-mode',
            templateUrl: '/static/app/views/partials/consent-form-communication-mode.html'
        })
        
        .state('consent-form.personal-particulars', {
            url: '/personal-particulars',
            templateUrl: '/static/app/views/partials/consent-form-personal-particulars.html'
        })

        .state('consent-form.consent-clause', {
            url: '/consent-clause',
            templateUrl: '/static/app/views/partials/consent-form-clause.html'
        })

        .state('consent-form.notification-options', {
            url: '/notification-options',
            templateUrl: '/static/app/views/partials/consent-form-notification-options.html'
        })

        .state('consent-form.assign-user-group', {
            url: '/assign-user-group',
            templateUrl: '/static/app/views/partials/consent-form-assign-user-group.html'
        });
        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/consent-form/form-name');
});
