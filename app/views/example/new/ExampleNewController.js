angular.module('app')
    .config(function ($stateProvider, USER_ROLES) {
        $stateProvider
            .state("example.new", {
                url: '/new',
                controller: 'ExampleNewController',
                controllerAs: "vm",
                templateUrl: "views/example/new/exampleNew.html",
                resolve: {
                    Example: function () {
                        return {};
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.user]
                }
            })
            .state("example.modify", {
                url: '/modify/:exampleId',
                controller: 'ExampleNewController',
                controllerAs: "vm",
                templateUrl: "views/example/new/exampleNew.html",
                resolve: {
                    Example: function ($stateParams, ExampleService) {
                        return ExampleService.getById($stateParams.exampleId)
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.user]
                }
            })
    })
    .controller("ExampleNewController", function (ExampleService, Example) {

        var vm = this;

        vm.newExample = Example;

        vm.save = function (example) {
            
        };
    });