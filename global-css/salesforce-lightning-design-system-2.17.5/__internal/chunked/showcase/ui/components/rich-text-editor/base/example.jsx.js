var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/rich-text-editor/base/example.jsx.js"]=function(e){function t(t){for(var a,i,c=t[0],m=t[1],o=t[2],d=0,s=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&s.push(n[i][0]),n[i]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);for(u&&u(t);s.length;)s.shift()();return r.push.apply(r,o||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,c=1;c<l.length;c++){var m=l[c];0!==n[m]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=l[0]))}return e}var a={},n={135:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},r=[];function i(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=a,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(l,a,function(t){return e[t]}.bind(null,a));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],m=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=m;return r.push([551,0]),l()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},551:function(e,t,l){"use strict";l.r(t),l.d(t,"Demo",(function(){return s})),l.d(t,"states",(function(){return p})),l.d(t,"examples",(function(){return b}));var a=l(0),n=l.n(a),r=l(1),i=l.n(r),c=l(2),m=l.n(c),o=l(64),u=l(15);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var s=function(e){return n.a.createElement("div",d({className:m()("demo-only",e.className),style:{minHeight:"180px"}},e),e.children)};s.propTypes={children:i.a.node,className:i.a.string};var E=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Heading - h1"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, ",n.a.createElement("strong",null,"strong")," adipisicing elit, sed do ",n.a.createElement("em",null,"emphasis")," tempor incididunt ut ",n.a.createElement("u",null,"underlined")," et dolore"," ",n.a.createElement("s",null,"strikethrough")," aliqua. Ut ",n.a.createElement("sub",null,"subscript")," ad"," ",n.a.createElement("sup",null,"superscript")," veniam, ",n.a.createElement("abbr",null,"quis")," nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",n.a.createElement("a",{href:"#"},"link")," in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("h2",null,"Heading - h2"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"," ",n.a.createElement("a",{href:"#"},"veryVeryLongWordWithHyperlinkExample")," tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("ul",null,n.a.createElement("li",null,"Unordered list item",n.a.createElement("ul",null,n.a.createElement("li",null,"Nested Unordered list item",n.a.createElement("ol",null,n.a.createElement("li",null,"Nested Ordered list item"),n.a.createElement("li",null,"Nested Ordered list item"))),n.a.createElement("li",null,"Nested Unordered list item",n.a.createElement("ul",null,n.a.createElement("li",null,"Nested Unordered list item"),n.a.createElement("li",null,"Nested Unordered list item"))))),n.a.createElement("li",null,"Unordered list item",n.a.createElement("ol",null,n.a.createElement("li",null,"Nested Ordered list item"),n.a.createElement("li",null,"Nested Ordered list item"))),n.a.createElement("li",null,"Unordered list item")),n.a.createElement("h3",null,"Heading - h3"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("ol",null,n.a.createElement("li",null,"Ordered list item",n.a.createElement("ul",null,n.a.createElement("li",null,"Nested Unordered list item",n.a.createElement("ol",null,n.a.createElement("li",null,"Nested Ordered list item"),n.a.createElement("li",null,"Nested Ordered list item"))),n.a.createElement("li",null,"Nested Unordered list item",n.a.createElement("ul",null,n.a.createElement("li",null,"Nested Unordered list item"),n.a.createElement("li",null,"Nested Unordered list item"))))),n.a.createElement("li",null,"Ordered list item",n.a.createElement("ol",null,n.a.createElement("li",null,"Nested Ordered list item",n.a.createElement("ol",null,n.a.createElement("li",null,"Nested Ordered list item",n.a.createElement("ol",null,n.a.createElement("li",null,"Nested Ordered list item"),n.a.createElement("li",null,"Nested Ordered list item"))),n.a.createElement("li",null,"Nested Ordered list item"))),n.a.createElement("li",null,"Nested Ordered list item"))),n.a.createElement("li",null,"Ordered list item")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",null,"List Item with div")),n.a.createElement("li",null,n.a.createElement("div",null,"List Item with div"))),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("div",null,"List Item with div")),n.a.createElement("li",null,n.a.createElement("div",null,"List Item with div"))),n.a.createElement("h4",null,"Heading - h4"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("dl",null,n.a.createElement("dt",null,"Description List - Term"),n.a.createElement("dd",null,"Description List - Description"),n.a.createElement("dt",null,"Description List - Term"),n.a.createElement("dd",null,"Description List - Description")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Column"),n.a.createElement("th",null,"Column"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Row"),n.a.createElement("td",null,"Row")),n.a.createElement("tr",null,n.a.createElement("td",null,"Row"),n.a.createElement("td",null,"Row")))),n.a.createElement("h5",null,"Heading - h5"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("blockquote",null,"Blockquote - incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("h6",null,"Heading - h6"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"," ",n.a.createElement("a",{href:"#"},"https://url.com/document/d/1dSOGKlCQtSG73NcSJB7qCJVyjE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/ed")," ","quis nostrud ",n.a.createElement("ins",null,"Content to be inserted.")," exercitation ullamco"," ",n.a.createElement("del",null,"Content to be deleted.")," laboris nisi ut aliquip ex ea commodo consequat."))};t.default=n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{placeholder:"Compose text..."})));var p=[{id:"focused",label:"Focused",element:n.a.createElement(s,null,n.a.createElement(u.a,{className:"slds-has-focus"},n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{placeholder:"Compose text..."})))},{id:"filled-out",label:"Filled Out",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{text:n.a.createElement(E,null)})))},{id:"error",label:"Error",element:n.a.createElement(s,null,n.a.createElement(u.a,{className:"slds-has-error",inlineMessage:"This field is required",hasError:!0,errorId:"rte-error-01"},n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{placeholder:"Compose text...","aria-describedby":"rte-error-01"})))},{id:"disabled",label:"Disabled",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,{disabledButtons:!0,disabledLabel:"disabled"},n.a.createElement(u.g,{tabIndexSetting:"0",disabledButtons:!0}),n.a.createElement(u.d,{disabledButtons:!0}),n.a.createElement(u.c,{disabledButtons:!0})),n.a.createElement(u.k,{placeholder:"Compose text...",disabled:!0})))},{id:"tooltip",label:"Tooltip",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0",hasTooltip:!0}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{placeholder:"Compose text..."}),n.a.createElement(o.Tooltip,{className:"slds-nubbin_top-left",id:"bold",style:{position:"absolute",top:"48px",left:"2px"}},"Bold ",n.a.createElement("kbd",null,"cmd+b"))))},{id:"toolbar-only",label:"Toolbar Only",element:n.a.createElement(s,null,n.a.createElement(u.a,{isToolbarOnly:!0},n.a.createElement(u.l,{isToolbarOnly:!0},n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null))))}],b=[{id:"bottom-toolbar",label:"Bottom toolbar",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.k,{placeholder:"Compose text..."}),n.a.createElement(u.l,{className:"slds-rich-text-editor__toolbar_bottom"},n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null))))},{id:"with-label",label:"With a Label",element:n.a.createElement(s,null,n.a.createElement(u.a,{label:"Details and Steps to Reproduce",labelId:u.m},n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{placeholder:"Compose text...",labelId:u.m})))},{id:"email",label:"Email",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.f,null),n.a.createElement(u.g,{tabIndexSetting:"-1"}),n.a.createElement(u.e,null),n.a.createElement(u.d,null),n.a.createElement(u.b,null),n.a.createElement(u.i,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{label:"Compose email",placeholder:"Compose Email..."})))},{id:"toolbar-narrow",label:"Toolbar Narrow",element:n.a.createElement(s,{style:{width:"294px"},className:"slds-region_narrow"},n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.f,null),n.a.createElement(u.g,{tabIndexSetting:"-1"}),n.a.createElement(u.e,null),n.a.createElement(u.d,null),n.a.createElement(u.b,null),n.a.createElement(u.i,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{label:"Compose email",placeholder:"Compose Email..."})))},{id:"feed",label:"Feed",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.b,null),n.a.createElement(u.i,null),n.a.createElement(u.j,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{label:"Post to feed",placeholder:"Post to feed..."})))},{id:"note",label:"Notes",element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.i,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{label:"Compose note",placeholder:"Compose Note..."})))},{id:"styling-hooks-rte-min-height",label:"Styling Hooks - Base (Min Height)",demoStyles:"\n        --sds-c-textarea-sizing-min-height: 3rem;\n      ",storybookStyles:!0,element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{placeholder:"Compose text..."})))},{id:"styling-hooks-rte-max-height",label:"Styling Hooks - Base (Max Height)",demoStyles:"\n        --sds-c-textarea-sizing-max-height: 10rem;\n      ",storybookStyles:!0,element:n.a.createElement(s,null,n.a.createElement(u.a,null,n.a.createElement(u.l,null,n.a.createElement(u.g,{tabIndexSetting:"0"}),n.a.createElement(u.d,null),n.a.createElement(u.c,null)),n.a.createElement(u.k,{text:n.a.createElement(E,null)})))}]}});