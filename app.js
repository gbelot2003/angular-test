var app = angular.module('app', []);

app.run(function($rootScope) {
    /*
        Receive emitted message and broadcast it.
        Event names must be distinct or browser will blow up!
    */
    $rootScope.$on('handleEmit', function(event, args) {
        $rootScope.$broadcast('handleBroadcast', args);
    });
});

function ControllerZero($scope) {
    $scope.handleClick = function(msg) {
        $scope.$emit('handleEmit', {message: msg});
    };

    $scope.$on('handleBroadcast', function(event, args) {
        $scope.message = args.message;
    });   
}

function ControllerOne($scope) {
    $scope.handleClick = function(msg) {
        $scope.$emit('handleEmit', {message: msg});
    };

    $scope.$on('handleBroadcast', function(event, args) {
        $scope.message = args.message;
    });        
}

function ControllerTwo($scope) {
    $scope.handleClick = function(msg) {
        $scope.$emit('handleEmit', {message: msg});
    };

    $scope.$on('handleBroadcast', function(event, args) {
        $scope.message = args.message;
    });
}

ControllerZero.$inject = ['$scope'];

ControllerOne.$inject = ['$scope'];

ControllerTwo.$inject = ['$scope'];