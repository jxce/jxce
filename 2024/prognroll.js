!function(){var o={5949:function(){var o;(o=jQuery).fn.prognroll=function(r){var t=o.extend({height:5,color:"#50bcb6",custom:!1},r),n=o("<span>",{class:"prognroll-bar"});return this.each((function(r,e){if(o(this).data("prognroll"))return!1;o(this).data("prognroll",!0),o("body").prepend(n).end().find(".prognroll-bar").not(":first").remove(),o(".prognroll-bar").css({position:"fixed",top:0,left:0,width:0,height:t.height,backgroundColor:t.color,zIndex:2147483647});var i={windowScrollTop:o(window).scrollTop(),windowOuterHeight:o(window).outerHeight(),bodyHeight:o(document).height()};function l(){o(window).scroll((function(r){r.preventDefault(),i.windowScrollTop=o(window).scrollTop(),i.windowOuterHeight=o(window).outerHeight(),i.bodyHeight=o(document).height();var t=i.windowScrollTop/(i.bodyHeight-i.windowOuterHeight)*100;o(".prognroll-bar").css("width",t+"%")}))}!1===t.custom||"none"==o(this).css("max-height")?l():o(this).scroll((function(r){r.preventDefault();var t=o(this).scrollTop(),n=o(this).outerHeight(),e=t/(o(this).prop("scrollHeight")-n)*100;o(".prognroll-bar").css("width",e+"%")}));var c=i.windowScrollTop/(i.bodyHeight-i.windowOuterHeight)*100;o(".prognroll-bar").css("width",c+"%")}))}}},r={};function t(n){var e=r[n];if(void 0!==e)return e.exports;var i=r[n]={exports:{}};return o[n](i,i.exports,t),i.exports}t.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(r,{a:r}),r},t.d=function(o,r){for(var n in r)t.o(r,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:r[n]})},t.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},function(){"use strict";var o;t(5949);o=jQuery,Drupal,o(document).ready((function(){o(window).width()<767&&o("body").prognroll({height:5,color:"#26A3E7",custom:!1})}))}()}();