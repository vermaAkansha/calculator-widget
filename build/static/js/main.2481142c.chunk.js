(this["webpackJsonpcalculator-widget"]=this["webpackJsonpcalculator-widget"]||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),o=(n(25),n(17)),u=n(5),i=(n(26),n(10)),m=n.n(i),s=n(16),d=n(8),f=r.a.createContext(null),p=f.Consumer;function v(e){var t=e.children,n=r.a.useState({monthlyInstallment:0}),a=Object(d.a)(n,2),l=a[0],c=a[1],o={getInstallmentData:function(){var e=Object(s.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c(a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),installmentData:l};return r.a.createElement(f.Provider,{value:o},t)}var h=f,E=(n(28),function(){var e=r.a.useState(""),t=Object(d.a)(e,2),n=t[0],a=t[1],l=r.a.useState(""),c=Object(d.a)(l,2),o=c[0],u=c[1],i=r.a.useContext(h);return r.a.createElement("form",{onSubmit:function(e){var t=new URL("https://api.myjson.com/bins/ta1sf");t.search=new URLSearchParams({amount:n,duration:o}),e.preventDefault(),i.getInstallmentData(t)},className:"calculator-widget panel"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"amount"},"Amount: "),r.a.createElement("input",{type:"number",id:"amount",onChange:function(e){a(e.target.value)},value:n,required:!0})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"duration"},"Duration: "),r.a.createElement("input",{type:"number",id:"duration",onChange:function(e){u(e.target.value)},value:o,required:!0})),r.a.createElement("div",{className:"input-container"},r.a.createElement("button",{type:"submit"},"Ok")))}),b=(n(29),function(){return r.a.createElement(p,null,(function(e){var t=e.installmentData;return r.a.createElement("div",{className:"information-area"},r.a.createElement("label",null,"Monthly Installment: ",r.a.createElement("b",null,t&&t.monthlyInstallment," \u20ac")))}))});var w=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/"},r.a.createElement(v,null,r.a.createElement(E,null),r.a.createElement(b,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.2481142c.chunk.js.map