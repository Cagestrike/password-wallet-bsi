var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/utilities/visibility/example.jsx.js"]=function(e){function s(s){for(var i,l,d=s[0],o=s[1],r=s[2],c=0,m=[];c<d.length;c++)l=d[c],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(h&&h(s);m.length;)m.shift()();return t.push.apply(t,r||[]),n()}function n(){for(var e,s=0;s<t.length;s++){for(var n=t[s],i=!0,d=1;d<n.length;d++){var o=n[d];0!==a[o]&&(i=!1)}i&&(t.splice(s--,1),e=l(l.s=n[0]))}return e}var i={},a={188:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},t=[];function l(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,s,n){l.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,s){if(1&s&&(e=l(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)l.d(n,i,function(s){return e[s]}.bind(null,i));return n},l.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(s,"a",s),s},l.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},l.p="/assets/scripts/bundle/";var d=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=d.push.bind(d);d.push=s,d=d.slice();for(var r=0;r<d.length;r++)s(d[r]);var h=o;return t.push([619,0]),n()}({0:function(e,s){e.exports=React},619:function(e,s,n){"use strict";n.r(s),n.d(s,"examples",(function(){return t}));var i=n(0),a=n.n(i),t=[{id:"assistive-text",label:"Assistive Text",element:a.a.createElement("div",{className:"slds-assistive-text"},"I am hidden from sight"),description:"Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text."},{id:"collapsed-expanded",label:"Collapsed / Expanded",element:a.a.createElement("div",{className:"demo-only"},a.a.createElement("div",{className:"slds-is-collapsed"},a.a.createElement("h3",null,"I am collapsed"),a.a.createElement("p",null,"I am a child inside a collapsed element")),a.a.createElement("div",{className:"slds-is-expanded"},a.a.createElement("h3",null,"I am expanded"),a.a.createElement("p",null,"I am a child inside an expanded element"))),description:"The `.slds-is-collapsed` class hides the elements contained inside by controlling the height and overflow properties. Use the `.slds-is-expanded` class to show the elements contained inside in their normal expanded state."},{id:"hidden-visible",label:"Hidden / Visible",element:a.a.createElement("div",{className:"demo-only"},a.a.createElement("div",{className:"slds-hidden"},"I am hidden"),a.a.createElement("div",{className:"slds-visible"},"I am visible")),description:"\nYou can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  `slds-hidden` class. To make it visible again, use the `slds-visible` class.\n\nNote that `.slds-hidden` and any of the `.slds-visible` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.\n    "},{id:"hide-show",label:"Hide / Show",element:a.a.createElement("div",{className:"demo-only"},a.a.createElement("div",{className:"slds-hide"},"I am hidden"),a.a.createElement("div",{className:"slds-show"},"I am shown as a block"),a.a.createElement("div",{className:"slds-show_inline-block"},"I am shown as an inline-block")),description:"\nTo hide any type of element from view and from screen readers, use the `.slds-hide` class. Once hidden, you can display the content by using JavaScript to swap `.slds-hide` with `.slds-show`; This class will set the `display` property to `block`. If you need to display your hidden element as `inline` or `inline-block`, you can use the `.slds-show_inline` or `.slds-show_inline-block` classes, respectively.\n\nNote that `.slds-hide` and any of the `.slds-show-*` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.\n    "},{id:"transition-hide-show",label:"Transition Hide / Show",element:a.a.createElement("div",{className:"demo-only"},a.a.createElement("div",{className:"slds-transition-hide"},"I have zero opacity"),a.a.createElement("div",{className:"slds-transition-show"},"I have 100% opacity")),description:"To slowly transition an element from hiding and showing, use the  `slds-transition-hide` and `slds-transition-show` classes . They toggle the element's opacity and also reserve its space. Note: To control the timing of the transition, add an additional `transition` property to control the opacity change."},{id:"responsive",label:"Responsive",element:a.a.createElement("div",{className:"demo-only demo-visibility"},a.a.createElement("div",{className:"slds-show_x-small"},"Hides on 319px and down"),a.a.createElement("div",{className:"slds-hide_x-small"},"Hides on 320px and up"),a.a.createElement("div",{className:"slds-show_small"},"Hides on 479px and down"),a.a.createElement("div",{className:"slds-hide_small"},"Hides on 480px and up"),a.a.createElement("div",{className:"slds-show_medium"},"Hides on 767px and down"),a.a.createElement("div",{className:"slds-hide_medium"},"Hides on 768px and up"),a.a.createElement("div",{className:"slds-show_large"},"Hides on 1023px and down"),a.a.createElement("div",{className:"slds-hide_large"},"Hides on 1024px and up"),a.a.createElement("div",{className:"slds-show_x-large"},"Hides on 1279px and down"),a.a.createElement("div",{className:"slds-hide_x-large"},"Hides on 1280px and up")),description:"\nResponsive visibility classes will hide content on specific breakpoints. `slds-show_[breakpoint]` renders `display: none` when the the view port width is smaller than the breakpoint, and does nothing if it is bigger or equal. `slds-hide_[breakpoint]` does the opposite by rendering `display: none` when the the viewport width is bigger or equal than the breakpoint, and does nothing if it is smaller.\n\n|Class Name|Less than 320px|X-Small (>= 320px)|Small (>= 480px)|Medium (>= 768px)|Large (>= 1024px)|X-Large (>= 1280px)|\n|---|---|---|---|---|---|---|\n|`.slds-hide_x-small`|Show|Hide|Hide|Hide|Hide|Hide|\n|`.slds-show_x-small`|Hide|Show|Show|Show|Show|Show|\n|`.slds-hide_small`|Show|Show|Hide|Hide|Hide|Hide|\n|`.slds-show_small`|Hide|Hide|Show|Show|Show|Show|\n|`.slds-hide_medium`|Show|Show|Show|Hide|Hide|Hide|\n|`.slds-show_medium`|Hide|Hide|Hide|Show|Show|Show|\n|`.slds-hide_large`|Show|Show|Show|Show|Hide|Hide|\n|`.slds-show_large`|Hide|Hide|Hide|Hide|Show|Show|\n|`.slds-hide_x-large`|Show|Show|Show|Show|Show|Hide|\n|`.slds-show_x-large`|Hide|Hide|Hide|Hide|Hide|Show|\n    "}]}});