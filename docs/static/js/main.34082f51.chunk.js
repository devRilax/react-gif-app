(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=(n(14),n(1)),o=n(8),l=function(e){var t=e.onadd,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&i.length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)}}))},d=function(e){e.id;var t=e.title,n=e.url;return r.a.createElement("div",{className:"card animate__animated animate__rubberBand animate__delay-2s"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},m=n(4),s=n.n(m),p=n(7),f=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"d5dVqDKG5ohwi0FUtI1tPEWZ6Toidte6",e.next=3,fetch("http://api.giphy.com/v1/gifs/search?api_key=".concat("d5dVqDKG5ohwi0FUtI1tPEWZ6Toidte6","&q=").concat(encodeURI(t),"&limit=10"));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a.data.map((function(e){var t;return{id:e.id,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url,title:e.title}})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(e.category).data;return r.a.createElement("div",{className:"flex-wrapper"},t.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))})))},E=function(){var e=Object(a.useState)(["Got"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Bienvenido a Gif Expert App"),r.a.createElement(l,{onadd:c}),r.a.createElement("hr",null),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(v,{key:e,category:e})}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.34082f51.chunk.js.map