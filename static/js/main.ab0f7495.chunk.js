(this["webpackJsonpfooty-team-picker"]=this["webpackJsonpfooty-team-picker"]||[]).push([[0],{21:function(e,a,t){e.exports=t(31)},26:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),m=t(8),s=t(3),o=t(1),u=(t(26),function(){var e=Object(o.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"btn-teams"},l.a.createElement("p",{className:"input-label"},"Generate Teams"),l.a.createElement("button",{className:"main-btn",onClick:function(a){e.push("/teams")}},"Generate Teams")))}),i=function(e){var a=Object(n.useContext)(x),t=a.state.count,r=a.dispatch,c=Object(n.useContext)(x).state.names,s=Object(n.useState)(""),o=Object(m.a)(s,2),i=o[0],E=o[1],b=Object(n.useState)(""),p=Object(m.a)(b,2),d=p[0],v=p[1];return c.length>=t?l.a.createElement(u,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"input-label"},"Players Name:"),l.a.createElement("p",{className:"form-info"},"After ",l.a.createElement("i",{style:{fontWeight:"bold"}},t," names"),", your teams will be randomly be generated"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(""),r({type:"ADD_NAME",value:{input:i,colorInput:d}}),r({type:"SHUFFLE"})}},l.a.createElement("input",{className:"name-input",onChange:function(e){E(e.currentTarget.value)},value:i,required:!0}),l.a.createElement("p",{className:"input-label"},"Players Color:"),l.a.createElement("ul",{className:"color-list",onChange:function(e){v(e.target.value)}},l.a.createElement("li",{className:"color-blue"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"blue",name:"color",required:!0})),l.a.createElement("li",{className:"color-red"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"red",name:"color",required:!0})),l.a.createElement("li",{className:"color-green"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"green",name:"color",required:!0})),l.a.createElement("li",{className:"color-yellow"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"yellow",name:"color",required:!0})),l.a.createElement("li",{className:"color-purple"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"purple",name:"color",required:!0})),l.a.createElement("li",{className:"color-brown"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"brown",name:"color",required:!0})),l.a.createElement("li",{className:"color-orange"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"orange",name:"color",required:!0})),l.a.createElement("li",{className:"color-pink"},l.a.createElement("input",{className:"color-radio",type:"radio",value:"pink",name:"color",required:!0}))),l.a.createElement("button",{className:"main-btn",type:"submit"},"Add")))},E="/",b="/settings",p="/teams",d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"page-header__the"},"The"),l.a.createElement("h1",{className:"page-header__title"},"FootyTeamPicker"))},v=function(){var e=Object(n.useContext)(x),a=e.state.names,t=e.dispatch;return l.a.createElement("table",{className:"names-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"names-table-title"},"Footballers: "))),l.a.createElement("tbody",null,0===a.length?null:l.a.createElement("tr",{className:"tr-list-names"},a.map((function(e,a){return l.a.createElement("td",{className:"td-list-names",style:{backgroundImage:e.color},key:a},l.a.createElement("span",null," ",e.name),l.a.createElement("span",{className:"tr-list-names"},l.a.createElement("button",{className:"remove-btn",onClick:function(){return t({type:"REMOVE_NAME",index:a})}},"x")))})))))},N=function(){var e=Object(n.useContext)(x).state;return l.a.createElement("a",{href:"/",className:"nav-links",onClick:function(){return e({type:"RESET"})}},"Reset Game")},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-nav-bar"},l.a.createElement(s.b,{className:"nav-links",to:b},"Game Settings"),l.a.createElement(N,null)),l.a.createElement("div",{className:"page-container"},l.a.createElement(d,null),l.a.createElement(i,null)),l.a.createElement("div",{className:"list-name"},l.a.createElement(v,null)))},f=function(){var e=Object(n.useContext)(x).dispatch,a=Object(o.f)(),t=Object(n.useState)(""),r=Object(m.a)(t,2),c=r[0],s=r[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),E=i[0],b=i[1],p=Object(n.useState)(4),d=Object(m.a)(p,2),v=d[0],N=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),s(""),b(""),e({type:"TEAM_ONE",value:{teamOne:c}}),e({type:"TEAM_TWO",value:{teamTwo:E}}),e({type:"COUNT",value:{count:v}}),a.push("/")}},l.a.createElement("label",{className:"input-label"},"First Team Captain:"),l.a.createElement("input",{className:"settings-input",type:"text",onChange:function(e){s(e.target.value)},value:c,required:!0}),l.a.createElement("label",{className:"input-label"},"Second Team Captain:"),l.a.createElement("input",{className:"settings-input",type:"text",onChange:function(e){b(e.target.value)},value:E}),l.a.createElement("div",{className:"counter"},l.a.createElement("label",{className:"input-label"},"Number of Players:"),l.a.createElement("p",{className:"counter-display",onChange:function(e){N(e.target.value)}},v," Players"),l.a.createElement("button",{className:"counter-btn",type:"button",disabled:v>9,onClick:function(){return N(v+1)}},"+"),l.a.createElement("button",{className:"counter-btn",type:"button",disabled:v<5,onClick:function(){return N(v-1)}},"-")),l.a.createElement("label",{className:"input-label"},"Submit"),l.a.createElement("button",{type:"submit",className:"settings-btn"},"Start")))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-nav-bar"},l.a.createElement(s.b,{className:"nav-links",to:E},"Link to Home"),l.a.createElement(N,null)),l.a.createElement("div",{className:"page-container"},l.a.createElement(d,null),l.a.createElement(f,null)))},O=function(e){var a=e.fill,t=void 0===a?"#000":a,n=e.width,r=void 0===n?150:n,c=e.height,m=void 0===c?150:c;return l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{className:"footballer-shirt",fill:t,height:m,viewBox:"0 0 512 512",width:r,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",null,l.a.createElement("path",{d:"m49.097 129.396h60.636v-125.373l-60.636 60.637z"}),l.a.createElement("path",{d:"m139.733 512h101.267v-93.84h30v93.84h101.267v-187.681h-232.534z"}),l.a.createElement("path",{d:"m256 58.779c19.204 0 34.827-15.624 34.827-34.828v-23.951h-69.655v23.952c0 19.204 15.624 34.827 34.828 34.827z"}),l.a.createElement("path",{d:"m402.267 4.023v125.373h60.636v-64.736z"}),l.a.createElement("path",{d:"m320.827 23.952c0 35.746-29.081 64.828-64.827 64.828s-64.828-29.082-64.828-64.828v-23.952h-51.439v294.319h232.533v-294.319h-51.439zm17.872 138.208h-48.288v-30h48.288z"}))))},y=function(){var e=Object(n.useContext)(x).state.names,a=Object(n.useContext)(x).state.teamOne,t=Object(n.useContext)(x).state.teamTwo,r=Object(n.useContext)(x).state.teamOneNames,c=Object(n.useContext)(x).state.teamTwoNames,m=Object(n.useContext)(x).state.count;return e.length<m?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"team-one-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"teams-table-title"},"Team ",a))),l.a.createElement("tbody",null,0===r.length?null:l.a.createElement("tr",null,r.map((function(e,a){return l.a.createElement("td",{className:"tr-list-teams",key:a},l.a.createElement("span",{className:"footballer-name"},e.name),l.a.createElement(O,{fill:e.color}))}))))),l.a.createElement("table",{className:"team-two-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"teams-table-title"},"Team ",t))),l.a.createElement("tbody",null,0===c.length?null:l.a.createElement("tr",null,c.map((function(e,a){return l.a.createElement("td",{className:"tr-list-teams",key:a},l.a.createElement("span",{className:"footballer-name"},e.name),l.a.createElement(O,{fill:e.color}))}))))))},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-nav-bar"},l.a.createElement(s.b,{className:"nav-links",to:E},"Link to Home"),l.a.createElement(s.b,{className:"nav-links",to:b},"Game Settings"),l.a.createElement(N,null)),l.a.createElement("div",{className:"page-container"},l.a.createElement(d,null),l.a.createElement(N,null)),l.a.createElement("div",{className:"list-teams"},l.a.createElement(y,null)))},C=t(20),T=t(6),k={names:[],color:"",teamOne:"",teamTwo:"",count:4},w=function(e,a){switch(a.type){case"ADD_NAME":return function(e,a){var t=a.value;return Object(T.a)(Object(T.a)({},e),{},{names:[].concat(Object(C.a)(e.names),[{name:t.input,color:t.colorInput}])})}(e,a);case"REMOVE_NAME":return function(e,a){var t=a.index;return Object(T.a)(Object(T.a)({},e),{},{names:e.names.filter((function(e,a){return a!==t}))})}(e,a);case"TEAM_ONE":return function(e,a){var t=a.value;return Object(T.a)(Object(T.a)({},e),{},{teamOne:t.teamOne})}(e,a);case"TEAM_TWO":return function(e,a){var t=a.value;return Object(T.a)(Object(T.a)({},e),{},{teamTwo:t.teamTwo})}(e,a);case"SHUFFLE":return function(e){for(var a=e.names,t=[],n=[],l=0;l<a.length;l++)l%2===0?t.push(a[l]):n.push(a[l]);return Object(T.a)(Object(T.a)({},e),{},{teamOneNames:t,teamTwoNames:n})}(e);case"COUNT":return function(e,a){var t=a.value;return Object(T.a)(Object(T.a)({},e),{},{count:t.count})}(e,a);case"RESET":return k;default:return e}},x=l.a.createContext({}),F=function(){var e=Object(n.useReducer)(w,k),a=Object(m.a)(e,2),t={state:a[0],dispatch:a[1]};return l.a.createElement(x.Provider,{value:t},l.a.createElement(s.a,{basename:"/"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:E,component:h}),l.a.createElement(o.a,{path:b,component:g}),l.a.createElement(o.a,{path:p,component:j}))))};console.log("index.js is running"),c.a.render(l.a.createElement(s.a,null,l.a.createElement(F,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ab0f7495.chunk.js.map