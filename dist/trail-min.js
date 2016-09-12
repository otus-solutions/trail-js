angular.module("trail",["ngMaterial","nsPopover"]),function(e,t,n){"use strict";var o=t.module("nsPopover",[]),i=t.element,r=t.isDefined,c=[],a=0;o.provider("nsPopover",function(){var e={template:"",theme:"ns-popover-list-theme",plain:"false",trigger:"click",triggerPrevent:!0,angularEvent:"",scopeEvent:"",container:"body",placement:"bottom|left",timeout:1.5,hideOnInsideClick:!1,hideOnOutsideClick:!0,hideOnButtonClick:!0,mouseRelative:"",popupDelay:0};this.setDefaults=function(n){t.extend(e,n)},this.$get=function(){return{getDefaults:function(){return e}}}}),o.directive("nsPopover",["nsPopover","$rootScope","$timeout","$templateCache","$q","$http","$compile","$document","$parse",function(o,l,p,s,d,u,v,m,g){return{restrict:"A",scope:!0,link:function(h,f,P){function y(e,t,n,o,i){var r,c,a=b(e[0]),l=function(){return"center"===n?Math.round(o.left+o.width/2-a.width/2):"right"===n?o.right-a.width:o.left},p=function(){return"center"===n?Math.round(o.top+o.height/2-a.height/2):"bottom"===n?o.bottom-a.height:o.top};"top"===t?(r=o.top-a.height,c=l()):"right"===t?(r=p(),c=o.right):"bottom"===t?(r=o.bottom,c=l()):"left"===t&&(r=p(),c=o.left-a.width),e.css("top",r.toString()+"px").css("left",c.toString()+"px"),i&&("top"===t||"bottom"===t?(c=o.left+o.width/2-c,i.css("left",c.toString()+"px")):(r=o.top+o.height/2-r,i.css("top",r.toString()+"px")))}function O(e,t,n,o){var i={bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width};return t&&(i.left=o.pageX,i.right=o.pageX,i.width=0),n&&(i.top=o.pageY,i.bottom=o.pageY,i.height=0),i}function b(t){var n=e,o=document.documentElement||document.body.parentNode||document.body,i=r(n.pageXOffset)?n.pageXOffset:o.scrollLeft,c=r(n.pageYOffset)?n.pageYOffset:o.scrollTop,a=t.getBoundingClientRect();return i||c?{bottom:a.bottom+c,left:a.left+i,right:a.right+i,top:a.top+c,height:a.height,width:a.width}:a}function k(e){if(e&&0!==e.length){var t=(""+e).toLowerCase();e="true"==t}else e=!1;return e}function C(e,n){return e?t.isString(e)&&n?e:s.get(e)||u.get(e,{cache:!0}):""}function w(){Y.isOpen&&S.hide(0)}function $(e){function n(e){if(e.id===o)return!0;var i=t.element(e).parent()[0];return!!i&&(i.id===o||n(i))}if(Y.isOpen&&e.target!==f[0]){var o=Y[0].id;n(e.target)||S.hide(0)}}function E(){Y.isOpen&&S.hide(0)}var D=o.getDefaults(),R={template:P.nsPopoverTemplate||D.template,theme:P.nsPopoverTheme||D.theme,plain:k(P.nsPopoverPlain||D.plain),trigger:P.nsPopoverTrigger||D.trigger,triggerPrevent:P.nsPopoverTriggerPrevent||D.triggerPrevent,angularEvent:P.nsPopoverAngularEvent||D.angularEvent,scopeEvent:P.nsPopoverScopeEvent||D.scopeEvent,container:P.nsPopoverContainer||D.container,placement:P.nsPopoverPlacement||D.placement,timeout:P.nsPopoverTimeout||D.timeout,hideOnInsideClick:k(P.nsPopoverHideOnInsideClick||D.hideOnInsideClick),hideOnOutsideClick:k(P.nsPopoverHideOnOutsideClick||D.hideOnOutsideClick),hideOnButtonClick:k(P.nsPopoverHideOnButtonClick||D.hideOnButtonClick),mouseRelative:P.nsPopoverMouseRelative,popupDelay:P.nsPopoverPopupDelay||D.popupDelay,group:P.nsPopoverGroup};R.mouseRelative&&(R.mouseRelativeX=R.mouseRelative.indexOf("x")!==-1,R.mouseRelativeY=R.mouseRelative.indexOf("y")!==-1);var x={id_:n,display:function(e,t){g(P.nsPopover)(h)!==!1&&(p.cancel(x.id_),r(e)||(e=0),R.group&&l.$broadcast("ns:popover:hide",R.group),x.id_=p(function(){Y.isOpen=!0,Y.css("display","block");var e=b(f[0]);R.mouseRelative&&(e=O(e,R.mouseRelativeX,R.mouseRelativeY,t)),y(Y,T,X,e,B),R.hideOnInsideClick&&Y.on("click",w),R.hideOnOutsideClick&&m.on("click",$),R.hideOnButtonClick&&f.on("click",E)},1e3*e))},cancel:function(){p.cancel(x.id_)}},S={id_:n,hide:function(e){p.cancel(S.id_),"-1"!==e&&(r(e)||(e=1.5),S.id_=p(function(){Y.off("click",w),m.off("click",$),f.off("click",E),Y.isOpen=!1,x.cancel(),Y.css("display","none")},1e3*e))},cancel:function(){p.cancel(S.id_)}},_=m.find(R.container);_.length||(_=m.find("body"));var B,T,X;a+=1;var Y=i('<div id="nspopover-'+a+'"></div>');c.push(Y);var I=R.placement.match(/^(top|bottom|left|right)$|((top|bottom)\|(center|left|right)+)|((left|right)\|(center|top|bottom)+)/);if(!I)throw new Error('"'+R.placement+'" is not a valid placement or has a invalid combination of placements.');T=I[6]||I[3]||I[1],X=I[7]||I[4]||I[2]||"center",d.when(C(R.template,R.plain)).then(function(e){e=t.isString(e)?e:e.data&&t.isString(e.data)?e.data:"",Y.html(e),R.theme&&Y.addClass(R.theme),Y.addClass("ns-popover-"+T+"-placement").addClass("ns-popover-"+X+"-align"),v(Y)(h),h.$on("$destroy",function(){Y.remove()}),h.hidePopover=function(){S.hide(0)},h.$on("ns:popover:hide",function(e,t){R.group===t&&h.hidePopover()}),Y.css("position","absolute").css("display","none"),B=Y[0].querySelectorAll(".triangle"),B.length&&(B=i(B)),_.append(Y)}),R.angularEvent?l.$on(R.angularEvent,function(){S.cancel(),x.display(R.popupDelay)}):R.scopeEvent?h.$on(R.scopeEvent,function(){S.cancel(),x.display(Y,R.popupDelay)}):f.on(R.trigger,function(e){!1!==R.triggerPrevent&&e.preventDefault(),S.cancel(),x.display(R.popupDelay,e)}),f.on("mouseout",function(){S.hide(R.timeout)}).on("mouseover",function(){S.cancel()}),Y.on("mouseout",function(e){S.hide(R.timeout)}).on("mouseover",function(){S.cancel()})}}}])}(window,window.angular),angular.module("trail").directive("otusTrail",function(){return{template:'<div layout-align="center center" layout="column"><md-button class="md-fab md-primary"><md-icon >directions_subway</md-icon></md-button><div layout-align="center" ng-repeat="content in nodes"><section flex class="timeLine"></section><div layout="row" layout-align="center center"><div id="stepButtons"><md-button ng-click="content.click(content)" ns-popover ns-popover-template="tooltip" ns-popover-trigger="mouseover"ns-popover-theme="ns-popover-tooltip-theme" ns-popover-timeout="0.1"ns-popover-placement="right" ng-class="content.styleClass" class="md-fab md-mini"><md-icon>{{content.icon}}</md-icon></md-button></div><div><span>{{content.time}}</span></div></div><script type="text/ng-template" id="tooltip"><div class="triangle"></div><div class="md-body-2 ns-popover-tooltip">{{content.text+i}}</div></script></div></div',restrict:"E",scope:{nodes:"="}}});