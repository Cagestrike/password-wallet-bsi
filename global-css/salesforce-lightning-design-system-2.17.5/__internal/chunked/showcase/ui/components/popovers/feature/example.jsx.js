var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/popovers/feature/example.jsx.js"]=function(e){function t(t){for(var s,r,i=t[0],o=t[1],c=t[2],m=0,u=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},l={120:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;return n.push([633,0]),a()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},633:function(e,t,a){"use strict";a.r(t),a.d(t,"examples",(function(){return c}));var s=a(0),l=a.n(s),n=a(9),r=a(32),i=a(320),o=a(6).d.uniqueId("dialog-heading-id-");t.default=[{context:"Feature",deprecated:!0,id:"feature-default",label:"Deprecated – Feature default",element:l.a.createElement(r.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("p",{className:"slds-text-heading_small"},"Shelly, it seems you frequent this record. Try favoriting it for easy access."))))}];var c=[{context:"Feature",deprecated:!0,id:"icon-text",label:"Deprecated – With icon and text",element:l.a.createElement(r.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"favorite"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("p",{className:"slds-text-heading_small"},"Shelly, it seems you frequent this record. Try favoriting it for easy access."))))},{context:"Feature",deprecated:!0,id:"icon-header-text-link",label:"Deprecated – With icon, header, text, and link",element:l.a.createElement(r.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:o,closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"smiley_and_people"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{id:o,className:"slds-text-heading_small"},"Feature title"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Learn More")))))},{context:"Feature",deprecated:!0,id:"icon-header-text",label:"Deprecated – With icon, header, and text",element:l.a.createElement(r.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:o,closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"description"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{id:o,className:"slds-text-heading_small"},"Feature title"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},{context:"Feature",deprecated:!0,id:"icon-header-text-footer",label:"Deprecated – With icon, header, text, and footer",element:l.a.createElement(r.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:o,footer:l.a.createElement(i.Footer,{learnMoreButton:!0}),closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"favorite"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{id:o,className:"slds-text-heading_small"},"Feature title"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))}]}});