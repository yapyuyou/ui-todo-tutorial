(this["webpackJsonpui-todo"]=this["webpackJsonpui-todo"]||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),u=(n(73),n(74),n(26)),s=n(41),i=n(28),d=function(t){return{type:"SET_TODOS",data:t}},p=function(t,e){var n=e.type,a=e.data;switch(n){case"SET_TODOS":return Object(i.a)(Object(i.a)({},t),{},{todos:a});case"ADD_TODO":var r=Object(i.a)(Object(i.a)({},t.todos),{},Object(s.a)({},a.id,{description:a.description}));return Object(i.a)(Object(i.a)({},t),{},{todos:r});default:return t}},l={todos:{}},f=Object(a.createContext)(l),m=function(t){var e=t.children,n=Object(a.useReducer)(p,l),o=Object(u.a)(n,2),c=o[0],s=o[1];return r.a.createElement(f.Provider,{value:{state:c,dispatch:s}},e)},b=function(){return r.a.createElement("h1",{"data-cy":"header"},"TODO")},h=n(5),v=n.n(h),O=n(10),j=n(113),k=n(50),y=n(114),w=n(48),E=n.n(w);n(76);n(79).config();E.a.initializeApp({apiKey:"AIzaSyDH6jehm1gof0aIrDGHv_D5sQ6aBai5ihM",authDomain:"backend-todo-tutorial.firebaseapp.com",databaseURL:"https://backend-todo-tutorial.firebaseio.com",projectId:"backend-todo-tutorial",storageBucket:"backend-todo-tutorial.appspot.com",messagingSenderId:"6754965596",appId:"1:6754965596:web:9d66304a0c49efc1876e99"});var _=E.a.firestore(),x={fetchTodos:function(){var t=Object(O.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.next=3,_.collection("todo-list").get();case 3:return t.sent.docs.forEach((function(t){e[t.id]=t.data()})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),addTodo:function(){var t=Object(O.a)(v.a.mark((function t(e,n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.collection("todo-list").doc(e).set({description:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),updateTodo:function(){var t=Object(O.a)(v.a.mark((function t(e,n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.collection("todo-list").doc(e).update({description:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),deleteTodo:function(){var t=Object(O.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.collection("todo-list").doc(e).delete();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(){var t=Object(a.useState)(""),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(a.useContext)(f).dispatch,s=function(){var t=Object(O.a)(v.a.mark((function t(){var e,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(y.a)(),x.addTodo(e,n),t.next=4,x.fetchTodos();case 4:a=t.sent,c(d(a)),o("");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"todo-input"},r.a.createElement(j.a,{value:n,onChange:function(t){var e=t.target.value;return o(e)},placeholder:"Add a TODO",size:"large",className:"todo-input__input","data-cy":"todo-input__input"}),r.a.createElement(k.a,{type:"primary",shape:"round",onClick:s,className:"todo-input__button","data-cy":"todo-input__button"},"Add"))},g=function(t){var e=Object(a.useState)("lel"),n=Object(u.a)(e,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"todo-task"},r.a.createElement("div",{className:"todo-task__name","data-cy":"todo-task__name",contentEditable:"true",onChange:function(t){var e=t.target.value;return c(e)}},t.description),r.a.createElement(k.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-update",onClick:function(){t.update(t.id,o)}},"Update"),r.a.createElement(k.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-delete",onClick:function(){return t.delete(t.id)}},"Delete"))},D=function(){var t=Object(a.useContext)(f).state,e=Object(a.useContext)(f).dispatch;Object(a.useEffect)((function(){(function(){var t=Object(O.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.fetchTodos();case 2:n=t.sent,e(d(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var n=function(){var t=Object(O.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.deleteTodo(n),t.next=3,x.fetchTodos();case 3:a=t.sent,e(d(a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(O.a)(v.a.mark((function t(n,a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.updateTodo(n,a),t.next=3,x.fetchTodos();case 3:r=t.sent,e(d(r));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"todo-list","data-cy":"todo-list"},Object.entries(t.todos).map((function(t){var e=Object(u.a)(t,2),a=e[0],c=e[1];return r.a.createElement(g,{key:a,description:c.description,delete:n,update:o,id:a})})))},C=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(m,null,r.a.createElement(T,null),r.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},68:function(t,e,n){t.exports=n(110)},73:function(t,e,n){},74:function(t,e,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.329b434d.chunk.js.map