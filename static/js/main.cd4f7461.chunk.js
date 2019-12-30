(this["webpackJsonpmovie-api"]=this["webpackJsonpmovie-api"]||[]).push([[0],{78:function(e,t,a){e.exports=a(91)},83:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"watchMovieDetailRequest",(function(){return x})),a.d(n,"searchRequest",(function(){return A}));var r=a(0),c=a.n(r),l=a(10),i=a.n(l),u=(a(83),a(24)),o=a(30),s=a(16),E=a(20),m=a.n(E),d=a(19),f=a(27),v=a(67),p=a(18),b="bee67ab4",y="https://www.omdbapi.com/",h=function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a="";return t&&(a="?"+Object.keys(t).reduce((function(e,a,n){return e+=0!==n?"&":"",e+="".concat(a,"=").concat(t[a])}),"")),fetch(e+a).then((function(e){return e.json()}))}}(),O=function(e){var t=e.searchText,a=e.page;return h(y,{apikey:b,s:t,page:a})},g=function(e){var t=e.id;return h(y,{apikey:b,i:t})},T=m.a.mark(_),I=m.a.mark(x),j=m.a.mark(D),S=m.a.mark(A);function _(e){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(g,{id:e.payload.id});case 3:return t=a.sent,a.next=6,Object(p.d)({type:"SET_SELECTED_MOVIE",payload:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(p.d)({type:"MOVIE_FETCH_FAILED",message:a.t0.message});case 12:case"end":return a.stop()}}),T,null,[[0,8]])}function x(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)("MOVIE_FETCH_REQUESTED",_);case 2:case"end":return e.stop()}}),I)}function D(e){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(O,{searchText:e.payload.searchText,page:e.payload.page});case 3:return t=a.sent,a.next=6,Object(p.d)({type:"SET_MOVIES",payload:t.Search});case 6:return a.next=8,Object(p.d)({type:"SET_TOTAL_PAGES",payload:Math.ceil(parseInt(t.totalResults)/10)});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(p.d)({type:"MOVIE_SEARCH_FAILED",message:a.t0.message});case 14:case"end":return a.stop()}}),j,null,[[0,10]])}function A(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)("MOVIE_SEARCH_REQUESTED",D);case 2:case"end":return e.stop()}}),S)}var R=a(34),k={searchText:"",activePage:1,totalPages:0},w=a(41),C=function(){return[function(e){return JSON.parse(localStorage.getItem(e))},function(e,t){localStorage.setItem(e,JSON.stringify(t))}]}(),F=Object(w.a)(C,2),M=F[0],P=F[1],V={movies:[],selectedMovie:null},L=m.a.mark(U),H=Object(v.a)();function U(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(Object(d.a)(Object.values(n).map(p.c)));case 2:case"end":return e.stop()}}),L)}var W=Object(f.e)(Object(f.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_SEARCH_TEXT":return Object(R.a)({},e,{searchText:n,activePage:1});case"SET_ACTIVE_PAGE":return Object(R.a)({},e,{activePage:n});case"SET_TOTAL_PAGES":return Object(R.a)({},e,{totalPages:n});default:return e}},favourites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M("favs")||[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_FAVOURITE":var r=[].concat(Object(d.a)(e),[n]);return P("favs",r),r;case"REMOVE_FAVOURITE":var c=e.filter((function(e){return e.imdbID!==n}));return P("favs",c),c;default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MOVIES":return Object(R.a)({},e,{movies:n});case"SET_SELECTED_MOVIE":return Object(R.a)({},e,{selectedMovie:n});default:return e}}}),Object(f.a)(H));H.run(U);var G=a(121),N=a(125),Y=a(126);function J(){return c.a.createElement(G.a,{position:"static"},c.a.createElement(N.a,null,c.a.createElement(u.b,{to:"/"},c.a.createElement(Y.a,null,"Search")),c.a.createElement(u.b,{to:"/fav"},c.a.createElement(Y.a,{style:{marginLeft:10}},"Favourites"))))}var Q=function(e){return new Array(e).fill().map((function(e,t){return t+1}))},q={marginRight:2};function B(e){var t=e.totalPages,a=e.activePage,n=e.setPage;return t&&t>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{style:q,onClick:function(){return n(a-1)},disabled:a<=1},"<"),Q(t).map((function(e){return c.a.createElement("button",{style:q,onClick:function(){return n(e)},disabled:e===a,key:e},e)})),c.a.createElement("button",{style:q,onClick:function(){return n(a+1)},disabled:a>=t},">")):null}var X=function(){var e=Object(s.c)((function(e){return e.search})),t=e.activePage,a=e.searchText,n=e.totalPages,l=Object(s.b)();return Object(r.useEffect)((function(){a&&l({type:"MOVIE_SEARCH_REQUESTED",payload:{searchText:a,page:t}})}),[t,a]),[function(e){return l(function(e){return{type:"SET_SEARCH_TEXT",payload:e}}(e))},c.a.createElement(B,{activePage:t,totalPages:n,setPage:function(e){return l(function(e){return{type:"SET_ACTIVE_PAGE",payload:e}}(e))}})]},z=function(){var e=Object(s.c)((function(e){return e.favourites})),t=Object(s.b)();return{addFavourite:function(e){return t({type:"ADD_FAVOURITE",payload:e})},removeFavourite:function(e){return t({type:"REMOVE_FAVOURITE",payload:e})},isInFavourites:function(t){return e.some((function(e){return e.imdbID===t}))},favourites:e}},K={RED:"#9d0b0b",YELLOW:"#c9bf32",PRIMARY:"#3f51b5",WHITE:"#f9f9f9"},Z=a(136),$=a(127),ee=a(128),te=a(129),ae=a(130),ne=a(48),re=a.n(ne),ce=a(49),le=a.n(ce);function ie(){var e=Object(r.useState)(""),t=Object(w.a)(e,2),a=t[0],n=t[1],l=Object(s.c)((function(e){return e.movies.movies})),i=z().isInFavourites,o=X(),E=Object(w.a)(o,2),m=E[0],d=E[1],f=function(){return a.length>0&&a.length<3};return c.a.createElement("div",{style:{padding:20}},c.a.createElement("h1",null,"MovieSearch"),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("form",{style:{flex:1},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a.length>=3&&m(a)}},c.a.createElement(Z.a,{error:f(),style:{width:"-webkit-fill-available"},label:f()?"At least 3 characters.":"Search",variant:"outlined",onChange:function(e){return n(e.target.value)},value:a})),c.a.createElement(Y.a,{color:"primary",variant:"contained",icon:"search",disabled:a.length<3,onClick:function(){return m(a)},style:{marginLeft:20}},"Search")),c.a.createElement($.a,null,l&&l.map((function(e,t){return c.a.createElement(ee.a,{key:t},c.a.createElement(u.b,{to:"/detail/".concat(e.imdbID),className:"list-item"},c.a.createElement(te.a,{primary:e.Title})),c.a.createElement(ae.a,null,i(e.imdbID)?c.a.createElement(re.a,{style:{color:K.YELLOW}}):c.a.createElement(le.a,null)))}))),d)}var ue=a(131),oe=a(66),se=a.n(oe);function Ee(){var e=z(),t=e.removeFavourite,a=e.favourites;return c.a.createElement("div",{style:{padding:20}},c.a.createElement("h1",null,"FavouriteMovies"),c.a.createElement($.a,null,a&&a.map((function(e,a){return c.a.createElement(ee.a,{key:a},c.a.createElement(u.b,{to:"/detail/".concat(e.imdbID),className:"list-item"},c.a.createElement(te.a,{primary:e.title})),c.a.createElement(ae.a,null,c.a.createElement(ue.a,{edge:"end","aria-label":"delete",onClick:function(){return t(e.imdbID)}},c.a.createElement(se.a,{style:{color:K.RED}}))))}))))}var me=a(132),de=a(133),fe=a(134),ve=a(135),pe=a(139),be=a(31),ye=function(e){var t=e.children;return c.a.createElement("span",{style:{fontWeight:"bold"}},t)};function he(e){var t=e.match,a=(e.history,Object(s.c)((function(e){return e.movies.selectedMovie}))),n=Object(s.b)(),l=z(),i=l.addFavourite,u=l.isInFavourites,o=l.removeFavourite;Object(r.useEffect)((function(){n({type:"MOVIE_FETCH_REQUESTED",payload:{id:t.params.id}})}),[t.params.id]);return c.a.createElement("div",{style:{padding:20}},a?c.a.createElement(me.a,null,c.a.createElement(de.a,{avatar:c.a.createElement(pe.a,{"aria-label":"recipe"},a.imdbRating),action:c.a.createElement(ue.a,{"aria-label":"settings",onClick:function(){a&&u(a.imdbID)?o(a.imdbID):i({imdbID:a.imdbID,title:a.Title})}},u(a.imdbID)?c.a.createElement(re.a,{style:{color:K.YELLOW}}):c.a.createElement(le.a,null)),title:a.Title,subheader:a.Released}),c.a.createElement(fe.a,{image:a.Poster,title:a.Title,style:{height:0,paddingTop:"50%"}}),c.a.createElement(ve.a,null,c.a.createElement(be.a,{variant:"body2",color:"textSecondary",component:"p"},a.Plot)),c.a.createElement(ve.a,null,c.a.createElement("div",null,c.a.createElement(be.a,null,a.Genre),c.a.createElement(be.a,null,a.Country," / ",a.Year," / ",a.Runtime)),c.a.createElement("div",null,c.a.createElement(be.a,null,c.a.createElement(ye,null,"Director:")," ",a.Director),c.a.createElement(be.a,null,c.a.createElement(ye,null,"Writers:")," ",a.Writer),c.a.createElement(be.a,null,c.a.createElement(ye,null,"Actors:")," ",a.Actors),c.a.createElement(be.a,null,c.a.createElement(ye,null,"Earnings:")," ",a.BoxOffice)))):null)}var Oe=a(138);var ge=function(){return c.a.createElement(s.a,{store:W},c.a.createElement(Oe.a,null),c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/fav",component:Ee}),c.a.createElement(o.a,{path:"/detail/:id",component:he}),c.a.createElement(o.a,{path:"/",component:ie})))))};i.a.render(c.a.createElement(ge,null),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.cd4f7461.chunk.js.map