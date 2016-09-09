angular
    .module('trail')
    .directive('otusTrail', function() {
        return {
            templateUrl: 'app/trail-template.html',
            restrict: 'E',
            scope: {
                nodes: '='
            }
        };
    });
