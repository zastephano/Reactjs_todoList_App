(this["webpackJsonptodo-list-redux"]=this["webpackJsonptodo-list-redux"]||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},43:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(0),d=n.n(c),r=n(14),a=n.n(r),s=(n(37),n(38),n(8)),i=n(11),l=n(25),u=n(31),j={treatment:[{id:1,content:"Wach car",completed:!1},{id:2,content:"Go to school",completed:!1},{id:3,content:"Get a ride on lamborgini",completed:!1},{id:4,content:"Create store for digital products",completed:!1},{id:5,content:"Pinterest free traffic",completed:!1}],todos:[{id:1,content:"Wach car",completed:!1},{id:2,content:"Go to school",completed:!1},{id:3,content:"Get a ride on lamborgini",completed:!1},{id:4,content:"Create store for digital products",completed:!1},{id:5,content:"Pinterest free traffic",completed:!1}]},p=Object(i.b)({myTodo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TODO":return{todos:[{id:1,content:"ss"}]};case"ADD_TODO":return{todos:[].concat(Object(u.a)(t.todos),[e.payload])};case"UPDATE_TODO":return{todos:t.todos.map((function(t){return t.id==e.payload.id?t=e.payload:t}))};case"DELETE_TODO":return{todos:t.todos.filter((function(t){return t.id!==e.payload}))};case"COMPLETED_TODO":return{todos:t.todos.map((function(t){return t.id==e.payload.id?{id:t.id,content:t.content,completed:!t.completed}:t}))};case"GET_ALL_TODO":return{todos:t.treatment};case"GET_COMPLETED_TODO":return Object(l.a)({todos:t.treatment},"todos",t.todos.filter((function(t){return!0===t.completed})));case"GET_INCOMPLETED_TODO":return Object(l.a)({todos:t.treatment},"todos",t.todos.filter((function(t){return!1===t.completed})));default:return t}}}),O=Object(i.c)(p,{}),b=n(18),m=n(19),h=n(21),f=n(20),x=(n(43),n(9)),T=n(16),v=n.n(T),y=(n(45),function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d];return(t=e.call.apply(e,[this].concat(c))).delete=function(e){t.props.deleteTodo(e)},t.completed=function(e,n){n.preventDefault();var o=t.props.todos.myTodo.todos.filter((function(t){return t.id===e})).reduce((function(t){return t}));t.props.completedTodo(o)},t.getAllTodos=function(){t.props.getAllTodo()},t.getCompletedTodos=function(){t.props.getCompletedTodo()},t.getIncompletedTodos=function(){t.props.getIncompletedTodo()},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e=this.props.todos.myTodo.todos;return Object(o.jsxs)("div",{className:"listBloc",children:[Object(o.jsxs)("div",{className:"heading mt-5",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("b",{children:"Notes"})}),Object(o.jsx)("h4",{className:"addTodos",children:Object(o.jsx)(x.b,{to:"/add",children:Object(o.jsx)("i",{className:"fa fa-edit","aria-hidden":"true"})})})]}),Object(o.jsx)("div",{className:"todoItems mt-3",children:e?e.map((function(e,n){return Object(o.jsxs)("div",{className:"todoBlock mx-5 py-3",children:[Object(o.jsxs)("div",{className:"todoCore",children:[Object(o.jsx)("h4",{className:"card-title ".concat(e.completed?"completed":""),children:e.content}),Object(o.jsx)("p",{className:"card-text ".concat(e.completed?"completed":""),children:e.content}),Object(o.jsx)("p",{children:v()().format("DD/MM/YYYY")})]}),Object(o.jsx)("div",{className:"icons",children:Object(o.jsxs)("span",{className:"icons-sub",children:[Object(o.jsx)("h5",{children:Object(o.jsx)(x.b,{to:"/edit/".concat(e.id),children:Object(o.jsx)("i",{className:"fas fa-pencil pr-3","aria-hidden":"true"})})}),Object(o.jsx)("h5",{children:Object(o.jsx)("i",{className:"fas fa-times pr-3",onClick:t.delete.bind(t,e.id),"aria-hidden":"true"})})]})})]},n)})):Object(o.jsx)("div",{className:"mt-5",children:Object(o.jsx)("h5",{children:"No todo left"})})})]})}}]),n}(c.Component)),g=Object(s.b)((function(t){return{todos:t}}),(function(t){return{getTodos:function(){return t({type:"GET_TODO"})},deleteTodo:function(e){return t({type:"DELETE_TODO",payload:e})},completedTodo:function(e){return t({type:"COMPLETED_TODO",payload:e})},getAllTodo:function(){return t({type:"GET_ALL_TODO"})},getCompletedTodo:function(){return t({type:"GET_COMPLETED_TODO"})},getIncompletedTodo:function(){return t({type:"GET_INCOMPLETED_TODO"})}}}))(y),D=n(52),N=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d];return(t=e.call.apply(e,[this].concat(c))).state={id:0,content:""},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"mt-5 mb-5 text-center",children:["What's the plan for ",Object(o.jsx)("b",{children:"Today!"})]}),Object(o.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),e.target[0].value&&(t.props.addTodo(t.state),t.setState({id:0,content:""}),e.target[0].value="",t.props.history.push("/"))}(e)},children:[Object(o.jsxs)("div",{className:"heading mb-3",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("b",{children:"Add Todo"})}),Object(o.jsx)("h4",{className:"addTodos",children:Object(o.jsx)(x.b,{to:"/",children:Object(o.jsx)("i",{className:"fa fa-long-arrow-alt-left","aria-hidden":"true"})})})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",id:"addInput",autoFocus:!0,className:"form-control",onChange:function(e){return function(e){t.setState({id:Object(D.a)(),content:e.target.value})}(e)},defaultValue:this.state.content})}),Object(o.jsx)("button",{type:"submit",className:"btn btn-success btn-block",children:"Add"})]})]})}}]),n}(c.Component),E=Object(s.b)(null,(function(t){return{addTodo:function(e){return t({type:"ADD_TODO",payload:e})}}}))(N),_=n(28);var C=Object(s.b)((function(t){return{todos:t.myTodo.todos}}),(function(t){return{updateTodo:function(e){return t({type:"UPDATE_TODO",payload:e})}}}))((function(t){var e=Object(c.useState)({id:0,content:""}),n=Object(_.a)(e,2),d=n[0],r=n[1],a=Object(c.useState)({id:0,content:""}),s=Object(_.a)(a,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){var e=t.match.params.id,n=t.todos.filter((function(t){return t.id==e}));r({id:n[0].id,content:n[0].content})}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"mt-5 mb-5 text-center",children:"Change the plan ?"}),Object(o.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),e.target[0].value&&(t.updateTodo(i),t.history.push("/"),l({id:0,content:""}),e.target[0].value="")}(e)},children:[Object(o.jsxs)("div",{className:"heading mb-3",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("b",{children:"Edit Todo"})}),Object(o.jsx)("h4",{className:"addTodos",children:Object(o.jsx)(x.b,{to:"/",children:Object(o.jsx)("i",{className:"fa fa-long-arrow-alt-left","aria-hidden":"true"})})})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",id:"addInput",className:"form-control",onChange:function(t){return function(t){l({id:d.id,content:t.target.value})}(t)},defaultValue:d.content})}),Object(o.jsx)("button",{type:"submit",className:"btn btn-success btn-block",children:"Update"})]})]})})),A=n(3);var L=Object(s.b)((function(t){return{todos:t.myTodo.todos}}),(function(t){return{updateTodo:function(e){return t({type:"UPDATE_TODO",payload:e})}}}))((function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"rest"})})}));var P=function(){return Object(o.jsx)(s.a,{store:O,children:Object(o.jsx)(x.a,{children:Object(o.jsx)("div",{className:"App container",children:Object(o.jsxs)(A.c,{children:[Object(o.jsx)(A.a,{exact:!0,path:"/add",component:E}),Object(o.jsx)(A.a,{exact:!0,path:"/edit/:id",component:C}),Object(o.jsx)(A.a,{exact:!0,path:"/",component:g}),Object(o.jsx)(A.a,{exact:!0,path:"/completed",component:L})]})})})})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,d=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),d(t),r(t)}))};a.a.render(Object(o.jsx)(d.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),G()}},[[49,1,2]]]);
//# sourceMappingURL=main.9af6ed00.chunk.js.map