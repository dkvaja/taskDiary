(this["webpackJsonptask-diary"]=this["webpackJsonptask-diary"]||[]).push([[0],{126:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(39),i=n.n(c),r=(n(126),n(211)),o=n(2);function s(){return Object(o.jsx)(r.a,{variant:"body2",align:"center",sx:{position:"fixed",bottom:"0",textAlign:"center",width:"100vw",p:2,fontWeight:"bold"},children:"Crafted with \u2764\ufe0f"})}var l=n(213),d=n(212),j=n(214);function b(){return Object(o.jsx)(d.a,{sx:{flexGrow:1},children:Object(o.jsx)(l.a,{position:"fixed",children:Object(o.jsx)(j.a,{children:Object(o.jsx)(r.a,{variant:"h5",noWrap:!0,align:"center",fontWeight:"bold",component:"div",sx:{flexGrow:1},children:"Task Diary"})})})})}var h=n(18),u=n(13),x=n(15),O=n(4),p=n(77),m=n.n(p),g=n(95),f=n(225),v=n(203),k=n(230),y=n(199),S=n(55),w=n(226),C=n(229),T=n(228),P=n(227),A=n(96),W=n(191),D=n(221),z=n(222),F=n(218),I=n(220),L=n(216),M=n(202),B=n(217),G=n(208),J=n(215),N=n(205),R=n(219),q=n(200),E=n(97),H=n.n(E),K=n(98),Q=n.n(K),U=n(192);function V(e,t,n,a,c){return{name:e,calories:t,fat:n,carbs:a,protein:c}}V("Cupcake",305,3.7,67,4.3),V("Donut",452,25,51,4.9),V("Eclair",262,16,24,6),V("Frozen yoghurt",159,6,24,4),V("Gingerbread",356,16,49,3.9),V("Honeycomb",408,3.2,87,6.5),V("Ice cream sandwich",237,9,37,4.3),V("Jelly Bean",375,0,94,0),V("KitKat",518,26,65,7),V("Lollipop",392,.2,98,0),V("Marshmallow",318,0,81,2),V("Nougat",360,19,9,37),V("Oreo",437,18,63,4);function X(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Y(e,t){return"desc"===e?function(e,n){return X(e,n,t)}:function(e,n){return-X(e,n,t)}}function Z(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var $=[{id:"index",numeric:!0,disablePadding:!1,label:"Sr. No."},{id:"task",numeric:!0,disablePadding:!1,label:"Task"},{id:"created date",numeric:!0,disablePadding:!1,label:"Created On"}];function _(e){var t=e.onSelectAllClick,n=e.order,a=e.orderBy,c=e.numSelected,i=e.rowCount,r=e.onRequestSort;return Object(o.jsx)(L.a,{children:Object(o.jsxs)(B.a,{children:[Object(o.jsx)(F.a,{padding:"checkbox",children:Object(o.jsx)(N.a,{color:"primary",indeterminate:c>0&&c<i,checked:i>0&&c===i,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),$.map((function(e){return Object(o.jsx)(F.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&n,children:Object(o.jsxs)(G.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(t=e.id,function(e){r(e,t)}),children:[e.label,a===e.id?Object(o.jsx)(d.a,{component:"span",sx:U.a,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})})}var ee=function(e){var t=e.numSelected;return Object(o.jsxs)(j.a,{sx:Object(A.a)({pl:{sm:2},pr:{xs:1,sm:1}},t>0&&{bgcolor:function(e){return Object(W.a)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:[t>0?Object(o.jsxs)(r.a,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[t," selected"]}):Object(o.jsx)(r.a,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),t>0?Object(o.jsx)(q.a,{title:"Delete",children:Object(o.jsx)(R.a,{children:Object(o.jsx)(H.a,{})})}):Object(o.jsx)(q.a,{title:"Filter list",children:Object(o.jsx)(R.a,{children:Object(o.jsx)(Q.a,{})})})]})};function te(e){var t=e.seenTaskList,n=a.useState("asc"),c=Object(u.a)(n,2),i=c[0],r=c[1],s=a.useState("calories"),l=Object(u.a)(s,2),j=l[0],b=l[1],h=a.useState([]),x=Object(u.a)(h,2),O=x[0],p=x[1],m=a.useState(0),g=Object(u.a)(m,2),f=g[0],v=g[1],k=a.useState(5),y=Object(u.a)(k,2),S=y[0],w=y[1];console.log("seenTasks in tasklist",t);var C=f>0?Math.max(0,(1+f)*S-t.length):0;return Object(o.jsx)(d.a,{sx:{width:"100%",p:2,mt:12},children:Object(o.jsxs)(J.a,{sx:{width:"100%",mb:2,p:2},elevation:3,children:[Object(o.jsx)(ee,{numSelected:O.length}),Object(o.jsx)(I.a,{children:Object(o.jsxs)(D.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[Object(o.jsx)(_,{numSelected:O.length,order:i,orderBy:j,onSelectAllClick:function(e){if(e.target.checked){var n=t.map((function(e){return e.name}));p(n)}else p([])},onRequestSort:function(e,t){r(j===t&&"asc"===i?"desc":"asc"),b(t)},rowCount:t.length}),Object(o.jsxs)(z.a,{children:[Z(t,Y(i,j)).slice(f*S,f*S+S).map((function(e,t){var n,a=(n=e.name,-1!==O.indexOf(n)),c="enhanced-table-checkbox-".concat(t);return Object(o.jsxs)(B.a,{hover:!0,onClick:function(t){return function(e,t){var n=O.indexOf(t),a=[];-1===n?a=a.concat(O,t):0===n?a=a.concat(O.slice(1)):n===O.length-1?a=a.concat(O.slice(0,-1)):n>0&&(a=a.concat(O.slice(0,n),O.slice(n+1))),p(a)}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(o.jsx)(F.a,{padding:"checkbox",children:Object(o.jsx)(N.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":c}})}),Object(o.jsx)(F.a,{component:"th",id:c,scope:"row",padding:"none",children:e.name}),Object(o.jsx)(F.a,{align:"right",children:e.calories}),Object(o.jsx)(F.a,{align:"right",children:e.fat}),Object(o.jsx)(F.a,{align:"right",children:e.carbs}),Object(o.jsx)(F.a,{align:"right",children:e.protein})]},e.name)})),C>0&&Object(o.jsx)(B.a,{style:{height:53*C},children:Object(o.jsx)(F.a,{colSpan:6})})]})]})}),Object(o.jsx)(M.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:S,page:f,onPageChange:function(e,t){v(t)},onRowsPerPageChange:function(e){w(parseInt(e.target.value,10)),v(0)}})]})})}function ne(e){var t,n=e.handleAddTaskInList,c=e.tasklist,i=(e.handleSeenTaskList,Object(a.useState)(!1)),s=Object(u.a)(i,2),l=s[0],d=s[1],j=Object(a.useState)(!1),b=Object(u.a)(j,2),h=b[0],x=b[1],p=Object(a.useState)(""),A=Object(u.a)(p,2),W=A[0],D=A[1],z=Object(a.useState)(""),F=Object(u.a)(z,2),I=F[0],L=F[1];console.log("tasklist",c,c.length);var M=function(){d(!1)},B=function(){var e=Object(g.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(n({id:Math.round(1e5*Math.random()),description:W,createdOn:(new Date).toJSON()}),0),d(!1),D("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(f.a,{maxWidth:!1,sx:{display:"flex",pt:"20vh",flexDirection:"column",alignItems:"center",bgcolor:" rgba(66, 165, 246, 0.3)",minHeight:"100vh"},children:[Object(o.jsxs)(w.a,{open:l,onClose:M,children:[Object(o.jsx)(P.a,{sx:{textAlign:"center",fontSize:"1.5rem",color:"text.primary",fontWeight:"bold"},children:"Add Task"}),Object(o.jsx)(T.a,{children:Object(o.jsx)(v.a,{id:"outlined-basic",margin:"dense",autoFocus:!0,placeholder:"Add Task Description",value:W,onChange:function(e){D(e.target.value)},variant:"outlined",autoComplete:"off",fullWidth:!0})}),Object(o.jsx)(C.a,{sx:{margin:"auto"},children:Object(o.jsx)(k.a,{onClick:B,disabled:!W,variant:"contained",children:"Add Task"})})]}),Object(o.jsxs)(w.a,{open:h,onClose:M,children:[Object(o.jsx)(P.a,{sx:{textAlign:"center",fontSize:"1.5rem",color:"text.primary",fontWeight:"bold"},children:"Generated Task"}),Object(o.jsx)(T.a,{sx:{m:"auto"},children:Object(o.jsx)(r.a,{variant:"p",align:"center",children:!!I&&I})}),Object(o.jsx)(C.a,{sx:{margin:"auto"},children:Object(o.jsx)(k.a,{onClick:function(){x(!1)},variant:"contained",children:"Okay"})})]}),Object(o.jsxs)(r.a,{variant:"h3",align:"center",fontWeight:"bold",color:"text.primary",gutterBottom:!0,children:["Welcome to the",Object(o.jsx)(r.a,{variant:"h4",align:"center",fontWeight:"bold",bgcolor:"white",borderRadius:2,p:1,color:"primary",children:"Task Diary"})]}),Object(o.jsxs)(y.a,(t={direction:"row"},Object(O.a)(t,"direction",{xs:"column",md:"column",sm:"row"}),Object(O.a)(t,"spacing",{xs:1,sm:2,md:4}),Object(O.a)(t,"mt",10),Object(O.a)(t,"children",[Object(o.jsx)(k.a,{onClick:function(){return d(!0)},variant:"contained",sx:{px:4,py:2,fontSize:30},children:"Add Task"}),Object(o.jsx)(k.a,{variant:"contained",sx:{px:4,py:2,fontSize:30},onClick:function(){if(c&&c.length>0){var e=Math.round(Math.random()*(c.length-1));console.log(c[e].id),L(c[e].description),x(!0)}},children:"Fetch Task"}),Object(o.jsx)(k.a,{variant:"contained",component:S.b,sx:{px:4,py:2,fontSize:30},to:"/showtask",children:"Show Seen Task"})]),t))]})}function ae(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),r=Object(u.a)(i,2),s=r[0],l=r[1],d=function(e){console.log(e),c([].concat(Object(h.a)(n),[e]))},j=function(e){l([].concat(Object(h.a)(s),Object(h.a)(e)))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{exact:!0,path:"/",component:function(){return Object(o.jsx)(ne,{handleAddTaskInList:d,tasklist:n,handleSeenTaskList:j})}}),Object(o.jsx)(x.a,{path:"/showtask",component:function(){return Object(o.jsx)(te,{seenTaskList:s})}})]})})}function ce(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{}),Object(o.jsx)(s,{}),Object(o.jsx)(ae,{})]})}var ie=n(100),re=Object(ie.a)({typography:{fontFamily:'"Poppins", sans-serif'}}),oe=n(207);i.a.render(Object(o.jsx)(S.a,{children:Object(o.jsx)(oe.a,{theme:re,children:Object(o.jsx)(ce,{})})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.1429c5ce.chunk.js.map