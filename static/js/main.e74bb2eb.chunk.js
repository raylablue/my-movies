(this["webpackJsonpmy-movies"]=this["webpackJsonpmy-movies"]||[]).push([[0],{23:function(e,a,t){e.exports=t(42)},29:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),m=(t(28),t(29),t(30),t(10)),s=t(5),u=t(17),o=t(12),i=t.n(o),E=(t(32),t(8)),p=t(9);t(38);var b=function(){var e=Object(s.f)();return l.a.createElement("div",null,l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"button",to:"/search",onClick:function(){e.push("/search")}},"Search")))};var f=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-sm o-nav-bar__filmstrip"},l.a.createElement("a",{className:"o-nav-bar__ticket-logo mx-4 my-1",href:"/gallery"},l.a.createElement(E.a,{className:"fa-4x fas fa-ticket-alt","data-fa-transform":"shrink-10 up-5",icon:p.b,id:"ticket"})),l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"o-nav-bar__nav-item"},l.a.createElement(m.b,{to:"/gallery",className:"nav-link",activeClassName:"chosen"},"Gallery")),l.a.createElement("li",{className:"o-nav-bar__nav-item"},l.a.createElement(m.b,{to:"/fav",className:"nav-link",activeClassName:"chosen"},"Favourites"))),l.a.createElement(b,null))};t(41);var v=function(){return l.a.createElement("div",{className:"card mb-3 bg-dark p-4"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("a",{className:"navbar-brand",href:"/gallery"},l.a.createElement(E.a,{className:"fas fa-ticket-alt",icon:p.b})),l.a.createElement("div",{className:"card-body mx-4"},l.a.createElement("p",{className:"card-text o-footer__p-text"},"This is a footer, a place for feets."))))};var h=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),m=Object(u.a)(c,2),s=m[0],o=m[1];return Object(n.useEffect)((function(){(function(){var e,a,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e={Search:[]},a=null,n.prev=2,n.next=5,i.a.awrap(fetch("http://www.omdbapi.com/?s=movies&i&apikey=44c3c47e"));case 5:return t=n.sent,n.next=8,i.a.awrap(t.json());case 8:e=n.sent,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),a=n.t0;case 14:return n.abrupt("return",{error:a,data:e});case 15:case"end":return n.stop()}}),null,null,[[2,11]])})().then((function(e){var a=e.data,t=e.error;o(t),r(a.Search)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center"},s?s.toString():null,t.map((function(e){return l.a.createElement("div",{className:"my-4 mx-3 p-1 p-gallery__card"},l.a.createElement("div",{className:"p-gallery__poster-container"},l.a.createElement("img",{src:e.Poster,alt:"Movie Poster",className:"p-gallery__poster"})),l.a.createElement("h4",{className:"p-gallery__title"},e.Title),l.a.createElement("a",{className:"mx-4 my-1",href:"/fav"},l.a.createElement(E.a,{className:"fa-3x fas fa-heart","data-fa-transform":"shrink-10 up-5",icon:p.a,id:"ticket"})))})))),l.a.createElement(v,null))};var d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement("p",null,"This is the main Search page (magnifying glass).",l.a.createElement("br",null),"This will be a secret page that takes looks like you're still in the gallery but is really a new page to display search results based on user input."),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement(v,null))};var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement("p",null,"This is the main Favourites page (heart).",l.a.createElement("br",null),"Fill in later with favourite movies list."),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement(v,null))};var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/fav"},l.a.createElement(y,null)),l.a.createElement(s.a,{path:"/search"},l.a.createElement(d,null)),l.a.createElement(s.a,{path:"/gallery"},l.a.createElement(h,null)))))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e74bb2eb.chunk.js.map