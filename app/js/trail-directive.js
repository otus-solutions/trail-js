(function() {

angular
    .module('trail')
    .directive('otusTrail', function() {
        return {
            template:
		'<div layout-align="center center" layout="column">'+
		'<md-button class="md-fab md-primary">'+
		'<md-icon >question_answer</md-icon>'+
		'</md-button>'+
		'<div layout-align="center" ng-repeat="content in nodes">'+
		'<section flex class="timeLine"></section>'+
		'<div layout="row" layout-align="center center">'+
		'<div id="stepButtons">'+
		'<md-button ng-click="content.click(content)" ns-popover ns-popover-template="tooltip" ns-popover-trigger="mouseover"'+
		'ns-popover-theme="ns-popover-tooltip-theme" ns-popover-timeout="0.1"'+
		'ns-popover-placement="right" ng-class="content.styleClass" class="md-fab md-mini">'+
		'<md-icon>{{content.icon}}</md-icon>'+
		'</md-button>'+
		'</div>'+
		'<div>'+
		'<span>{{content.time}}</span>'+
		'</div>'+
		'</div>'+
		'<script type="text/ng-template" id="tooltip">'+
		'<div class="triangle"></div>'+
		'<div class="md-body-2 ns-popover-tooltip">{{content.text+i}}</div>'+
		'</script>'+
		'</div>'+
		'</div',
	    restrict: 'E',
            scope: {
                nodes: '='
            }
        };
    });

  })()
