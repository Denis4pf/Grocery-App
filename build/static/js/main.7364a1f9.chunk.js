(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),o=a.n(c),l=(a(16),a(5)),i=a(3),m=a(6);var u=function(e){var t=e.name,a=e.id,n=e.price,c=e.description,o=e.image,l=e.isSaved,i=e.onUpdate,u=e.onDelete;return e.onEdit,r.a.createElement("div",{className:"n1"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fa",onClick:function(e){fetch("https://afternoon-cove-03847.herokuapp.com/groceries/".concat(a),{method:"DELETE"}).then(function(e){return e.json()}).then(function(){return u(a)})}},"\uf014")),r.a.createElement("img",{src:o,alt:"grocery"}),r.a.createElement("br",null),r.a.createElement("input",{value:t,readOnly:!0}),r.a.createElement("p",null,"Ksh ",n," per kg"),r.a.createElement("textarea",{value:c,readOnly:!0})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){fetch("https://afternoon-cove-03847.herokuapp.com/groceries/".concat(a),{method:"PATCH",headers:{"Content-Type":"application/json",Application:"application/json"},body:JSON.stringify({isSaved:!l})}).then(function(e){return e.json()}).then(function(e){console.log("Clicked......"),i(e,a)}).catch(function(e){return console.log(e)})}},l?"Discard":"Save"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/edit",state:{name:t,id:a,image:o,description:c,price:n}},r.a.createElement("button",{className:"edit"},"Edit Grocery ",r.a.createElement("i",{className:"far fa-edit"}))))};var p=function(e){var t=e.groceries,a=e.onUpdate,n=e.onDelete,c=t.map(function(e,t){return r.a.createElement(u,{key:t,name:e.name,price:e.price,description:e.description,id:e.id,image:e.image,isSaved:e.isSaved,onUpdate:a,onDelete:n})});return r.a.createElement("div",{className:"groceries"},c)},s=a(4),d=a(13),f=a(0);var h=function(e){var t=e.onAddNew,a=Object(f.m)(),c=Object(n.useState)({name:"",price:"",description:"",image:""}),o=Object(i.a)(c,2),l=o[0],m=o[1];function u(e){m(Object(d.a)({},l,Object(s.a)({},e.target.name,e.target.value)))}return r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",null,"Please fill in the details to upload a new product"),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),console.log(l),fetch("https://afternoon-cove-03847.herokuapp.com/groceries",{method:"POST",headers:{"Content-Type":"application/json",Application:"application/json"},body:JSON.stringify(l)}).then(function(e){return e.json()}).then(function(e){t(e),a("/")}).catch(function(e){return console.log(e)})}},r.a.createElement("input",{name:"name",value:l.name,type:"text",placeholder:"Name of the Product",onChange:u}),r.a.createElement("br",null),r.a.createElement("input",{name:"image",value:l.image,type:"text",placeholder:"Paste url of the grocery image here",onChange:u}),r.a.createElement("br",null),r.a.createElement("input",{name:"price",value:l.price,type:"text",placeholder:"Price of the item per Kg",onChange:u}),r.a.createElement("br",null),r.a.createElement("input",{name:"description",value:l.description,type:"text",placeholder:"Description of the grocery item",onChange:u}),r.a.createElement("br",null),r.a.createElement("input",{id:"upload",type:"submit",value:"Upload Item"}))))};var E=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"https://i.pinimg.com/736x/2f/7f/dc/2f7fdcc294c90e1a98cc32e813f1723b.jpg",alt:"logo"}),r.a.createElement("h2",null,"G-",r.a.createElement("span",null,"Sto"),"re")),r.a.createElement("div",{className:"nav-links"},r.a.createElement(m.c,{to:"/",exact:"true"},"Home"),r.a.createElement(m.c,{to:"/new",exact:"true"},"New Grocery"),r.a.createElement(m.c,{to:"/saved-grocery",exact:"true"},"Saved Groceries")))};var g=function(e){var t=e.groceries,a=e.onUpdate,n=e.onDelete,c=t.map(function(e,t){return r.a.createElement(u,{key:t,name:e.name,price:e.price,description:e.description,id:e.id,image:e.image,isSaved:e.isSaved,onUpdate:a,onDelete:n})});return r.a.createElement("div",{className:"groceries"},c)};function v(e){var t=e.onUpdate,a=Object(f.m)(),c=Object(f.j)().state,o=c.name,l=c.id,m=c.price,u=c.description,p=c.image,h=Object(n.useState)({name:o,price:m,description:u,image:p}),E=Object(i.a)(h,2),g=E[0],v=E[1];function b(e){v(Object(d.a)({},g,Object(s.a)({},e.target.name,e.target.value)))}return console.log(g),r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),fetch("https://afternoon-cove-03847.herokuapp.com/groceries/".concat(l),{method:"PATCH",headers:{"Content-Type":"application/json",Application:"application/json"},body:JSON.stringify(g)}).then(function(e){return e.json()}).then(function(e){console.log(e),t(e,l),a("/")}).catch(function(e){return console.log(e)})}},r.a.createElement("input",{name:"name",value:g.name,type:"text",placeholder:"Name of the Product",onChange:b}),r.a.createElement("br",null),r.a.createElement("input",{name:"image",value:g.image,type:"text",placeholder:"Paste url of the grocery image here",onChange:b}),r.a.createElement("br",null),r.a.createElement("input",{name:"price",value:g.price,type:"text",placeholder:"Price of the item per Kg",onChange:b}),r.a.createElement("br",null),r.a.createElement("input",{name:"description",value:g.description,type:"text",placeholder:"Description of the grocery item",onChange:b}),r.a.createElement("br",null),r.a.createElement("input",{id:"upload",type:"submit",value:"Save Changes"}))))}a(14);var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){fetch("https://afternoon-cove-03847.herokuapp.com/groceries").then(function(e){return e.json()}).then(function(e){return c(e)})},[]);var o=a.filter(function(e){return!0===e.isSaved});function m(e){console.log(e);var t=a.map(function(t){return t.id===e.id?e:t});c(t)}function u(e){var t=a.filter(function(t){return t.id!==e});c(t)}return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",element:r.a.createElement(p,{groceries:a,onUpdate:m,onDelete:u})}),r.a.createElement(f.a,{exact:!0,path:"/saved-grocery",element:r.a.createElement(g,{onUpdate:m,groceries:o,onDelete:u})}),r.a.createElement(f.a,{exact:!0,path:"/new",element:r.a.createElement(h,{onAddNew:function(e){c([].concat(Object(l.a)(a),[e]))}})}),r.a.createElement(f.a,{exact:!0,path:"/edit",element:r.a.createElement(v,{onUpdate:m})})))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(m.a,null,r.a.createElement(b,null)))}},[[18,2,1]]]);
//# sourceMappingURL=main.7364a1f9.chunk.js.map