(this["webpackJsonpmy-movies"]=this["webpackJsonpmy-movies"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){e.exports=a(51)},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/poster-placeholder.8305c915.jpg"},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=a(11),s=a(14),m=(a(38),a(39),a(40),a(10)),i=a(6),u=a(7),v=a.n(u),f=a(3),b=(a(25),a(12)),E=a(13),p=(a(45),function(e){var t=e.movie,a=Object(n.useState)(),c=Object(f.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),m=Object(f.a)(s,2),i=m[0],u=m[1],v=function(e){u(e?"-active":"")};Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(t.imdbID));o(e),v(e)}),[t.imdbID]);return r.a.createElement("div",{className:"a-fav-button ".concat(i)},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){var e=!l;o(e),e?localStorage.setItem(t.imdbID,JSON.stringify(t)):localStorage.removeItem(t.imdbID),v(e)}},r.a.createElement(b.a,{className:"fa-3x fas fa-heart a-fav-button__heart","data-fa-transform":"shrink-10 up-5",icon:E.b,id:"heart"})))}),d=function(e){var t=e.movie;return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},r.a.createElement("div",{className:"mb-4 a-movieresult__card border border-dark"},r.a.createElement(m.b,{to:"/details/".concat(t.imdbID)},r.a.createElement("div",{className:"a-movieresult__poster-container"},r.a.createElement("img",{src:t.Poster,alt:"Movie Poster",className:"a-movieresult__poster",onError:function(e){e.target.src=a(46)}})),r.a.createElement("h4",{className:"a-movieresult__title text-center text-truncate display-block p-2"},t.Title)),r.a.createElement("div",{className:"text-center pb-2"},r.a.createElement(p,{movie:t}))))};var h=Object(o.b)((function(e){return{movies:e.movies}}))((function(e){var t=e.movies;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},function(e){return e.map((function(e){return r.a.createElement(d,{movie:e,key:e.imdbID})}))}(t)))}));function g(e){return{type:"SET_MOVIES",movies:e}}a(26),a(48);var N=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(i.f)();return r.a.createElement("div",null,r.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),""!==a&&l.push("/search/".concat(a))}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"movies","aria-label":"Search",minLength:"3",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))};var O=function(){var e=Object(n.useState)(),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(f.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(""),v=Object(f.a)(u,2),p=v[0],d=v[1],h=Object(n.useState)(""),g=Object(f.a)(h,2),O=g[0],_=g[1],j=function(e){if(e)return i("navbar-toggler collapsed"),d("false"),void _("navbar-collapse collapse");i("navbar-toggler"),d("true"),_("navbar-collapse collapse show")};return Object(n.useEffect)((function(){c(!0),j(!0)}),[]),r.a.createElement("nav",{className:"navbar navbar-expand-lg o-nav-bar__filmstrip px-2"},r.a.createElement(m.c,{to:"/",className:"o-nav-bar__ticket-logo"},r.a.createElement(b.a,{className:"fa-5x fas fa-ticket-alt mr-4 py-0 pl-1",icon:E.d})),r.a.createElement("button",{className:"".concat(s," p-1"),type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":p,"aria-label":"Toggle navigation",onClick:function(){var e=!a;c(e),j(e)}},r.a.createElement(b.a,{className:"fa-3x fas fa-bars o-nav-bar__bars",icon:E.a})),r.a.createElement("div",{className:O},r.a.createElement("ul",{className:"navbar-nav mr-auto o-nav-bar__nav-width pl-1"},r.a.createElement("li",{className:"o-nav-bar__nav-item"},r.a.createElement(m.c,{to:"/gallery",className:"nav-link",activeClassName:"chosen"},"Gallery")),r.a.createElement("li",{className:"o-nav-bar__nav-item"},r.a.createElement(m.c,{to:"/fav",className:"nav-link",activeClassName:"chosen"},"Favourites"))),r.a.createElement(N,null)))};a(49);var _=function(){return r.a.createElement("footer",{className:"py-3 bg-dark text-white-50 o-footer"},r.a.createElement("div",{className:"container-fluid text-center"},r.a.createElement("div",{className:"row mx-5"},r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-3 offset-lg-3 offset-md-1 my-2"},r.a.createElement("small",null,"This website is powered by the"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"},"omdbapi")),r.a.createElement("div",{className:"col col-lg-3 my-2"},r.a.createElement("a",{className:"btn btn-outline-primary",href:"https://github.com/rachel-blue/my-movies",target:"_blank",rel:"noopener noreferrer",role:"button"},"View the Source Code")))))},j=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(O,null),r.a.createElement("div",{className:"container t-template-default__content p-0 py-5"},t)),r.a.createElement(_,null))},y=function(){return r.a.createElement(b.a,{className:"fa-4x fas fa-spinner fa-spin m-5","data-fa-transform":"shrink-10 up-5",icon:E.c,id:"heart"})},w=function(){var e=Object(o.c)(),t=Object(n.useState)(!0),a=Object(f.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(),m=Object(f.a)(s,2),i=m[0],u=m[1];return Object(n.useEffect)((function(){!function(){var t,a,n,r,c;v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return l(!0),o.next=3,v.a.awrap(fetch("https://www.omdbapi.com/?s=movies&i&apikey=44c3c47e"));case 3:return t=o.sent,o.next=6,v.a.awrap(t.json());case 6:a=o.sent,n=a.Search,l(!1),n?(r={},c=n.filter((function(e){return!r[e.imdbID]&&(r[e.imdbID]=!0,!0)})),e(g(c)),u("Start a search to see more movies")):(e(g([])),u("Type something in the search bar to see realted movie titles"));case 10:case"end":return o.stop()}}))}()}),[e]),c?r.a.createElement(j,null,r.a.createElement(y,null)):r.a.createElement(j,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Movies"),r.a.createElement("h3",null,i),r.a.createElement(h,null)))},S=function(){var e=Object(o.c)(),t=Object(i.g)().id,a=Object(n.useState)(!0),c=Object(f.a)(a,2),l=c[0],s=c[1],m=Object(n.useState)(),u=Object(f.a)(m,2),b=u[0],E=u[1];return Object(n.useEffect)((function(){!function(){var a,n,r,c,l;v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return s(!0),o.next=3,v.a.awrap(fetch("https://www.omdbapi.com/?s=".concat(t,"&i&apikey=44c3c47e")));case 3:return a=o.sent,o.next=6,v.a.awrap(a.json());case 6:n=o.sent,r=n.Search,s(!1),r?(c={},l=r.filter((function(e){return!c[e.imdbID]&&(c[e.imdbID]=!0,!0)})),e(g(l)),E("These movies were found related to your search")):(e(g([])),E("Sorry, your search returned no results. Please try again"));case 10:case"end":return o.stop()}}))}()}),[t,e]),l?r.a.createElement(j,null,r.a.createElement(y,null)):r.a.createElement(j,null,r.a.createElement("h1",null,'Search: "',t,'"'),r.a.createElement("h3",null,b),r.a.createElement(h,null))},x=function(){var e=Object.values(localStorage).map((function(e){try{return JSON.parse(e)}catch(t){return null}})).filter((function(e){return!(!e||"object"!==typeof e||!e.imdbID)}));return 0===e.length?r.a.createElement(j,null,r.a.createElement("h1",null,"Favourite Movies"),r.a.createElement("p",null,"Looks like you don\u2018t have any favourite movies yet. Go spread some love and come back here to see all your favourite movies in one place.")):r.a.createElement(j,null,r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement(d,{movie:e,key:e.imdbID})}))))},k=(a(50),function(e){var t=e.movie;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 text-center"},r.a.createElement("h2",{className:"m-movie-details__title"},t.Title),r.a.createElement("p",null,t.Rated,"\xa0|\xa0",t.Runtime,"\xa0|\xa0 IMDB Rating: \xa0",t.imdbRating,"\xa0|\xa0",t.Released),r.a.createElement("img",{src:t.Poster,alt:"movie poster",className:"pb-4"}),r.a.createElement("p",null,t.Genre)),r.a.createElement("div",{className:"col col-lg-6 pb-3 p-4 m-movie-details__filmstrip"},r.a.createElement(p,{movie:t}),r.a.createElement("p",{className:"pt-4"},t.Plot,r.a.createElement("br",null),r.a.createElement("br",null),"Director: \xa0",t.Director),r.a.createElement("p",null,"Writers: \xa0",t.Writer),r.a.createElement("p",null,"Actors: \xa0",t.Actors))))}),I=function(){var e=Object(i.g)().id,t=Object(n.useState)(),a=Object(f.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){!function(){var t,a;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(fetch("https://www.omdbapi.com/?i=".concat(e,"&apikey=44c3c47e")));case 2:return t=n.sent,n.next=5,v.a.awrap(t.json());case 5:a=n.sent,l(a);case 7:case"end":return n.stop()}}))}()}),[e]),c?r.a.createElement(j,null,r.a.createElement(k,{movie:c})):r.a.createElement(j,null,r.a.createElement(y,null))};var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/fav"},r.a.createElement(x,null)),r.a.createElement(i.a,{path:"/search/:id"},r.a.createElement(S,null)),r.a.createElement(i.a,{path:"/details/:id"},r.a.createElement(I,null)),r.a.createElement(i.a,{path:"/gallery"},r.a.createElement(w,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(w,null)))))};var T=Object(s.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIES":return t.movies;default:return e}}}),C=Object(s.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(o.a,{store:C},r.a.createElement(D,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.56297f14.chunk.js.map