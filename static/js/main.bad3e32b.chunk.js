(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","phone":"Fry Cook","dob":"10-22-2003","email":"SpongeBob@company.net"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","phone":"Restaurant Owner","dob":"8-12-1987","email":"Mr.Krabs@company.net"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","phone":"Cashier","dob":"5-6-1999","email":"Squidward@company.net"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","phone":"Boy Genius","dob":"9-13-2004","email":"Dexter@company.net"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","phone":"A Cowardly Dog","dob":"3-25-2012","email":"Courage@company.net"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","phone":"Student","dob":"8-17-1996","email":"DougFunnie@company.net"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","phone":"Looney Toon","dob":"7-22-1990","email":"BugsBunny@company.net"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","phone":"Ladies Man","dob":"1-10-1986","email":"JohnnyBravo@company.net"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","phone":"Adventurer","dob":"8-26-1990","email":"TommyPickles@company.net"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","phone":"Cashier","dob":"12-12-1987","email":"Rocko@company.net"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","phone":"Superhero","dob":"7-4-1776","email":"CaptainPlanet@company.net"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","phone":"Ahhhh! A Real Monster!","dob":"8-17-1884","email":"Ickis@company.net"}]')},,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1),o=t.n(i),c=t(8),s=t.n(c),r=(t(15),t(7)),l=t(4),m=t(9);t(16);var d=function(e){return Object(a.jsx)("main",Object(m.a)({className:"wrapper"},e))};t(17);var p=function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg d-flex justify-content-center",children:Object(a.jsx)("h1",{className:"header d-flex justify-content-center",children:"Employee Directory"})})};t(18);var g=function(e){var n=e.employees,t=e.toggle,i=e.setToggle,o=e.text;return Object(a.jsx)("article",{className:"container d-flex justify-content-center",children:Object(a.jsxs)("table",{className:"table table-dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Profile"}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("a",{onClick:function(){return"ascending"===t?i("descending"):"descending"===t?i(!1):t?void 0:i("ascending")},children:"Name"})}),Object(a.jsx)("th",{scope:"col",children:"Phone"}),Object(a.jsx)("th",{scope:"col",children:"Email"}),Object(a.jsx)("th",{scope:"col",children:"Date of Birth"})]})}),Object(a.jsx)("tbody",{children:n.filter((function(e){return e.name.includes(o)})).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:Object(a.jsx)("img",{src:e.image,alt:e.name})}),Object(a.jsx)("td",{className:e.name,children:e.name}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.dob})]},e.id)}))})]})})},b=t(6);t(19);var h=function(){var e=Object(i.useState)(b),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(i.useState)(""),s=Object(l.a)(c,2),m=s[0],h=s[1],j=Object(i.useState)(!1),u=Object(l.a)(j,2),v=u[0],O=u[1];return Object(i.useEffect)((function(){"ascending"===v?(console.log(!0),o(Object(r.a)(t).sort((function(e,n){return e.name>n.name?1:-1}))),console.log(v)):"descending"===v?(console.log(!1),o(Object(r.a)(t).sort((function(e,n){return e.name>n.name?-1:1})))):o(b)}),[v]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(d,{children:[Object(a.jsx)(p,{}),Object(a.jsx)("input",{className:"input col-sm-6",value:m,onChange:function(e){return h(e.target.value)},placeholder:"Search Employees"}),Object(a.jsx)(g,{employees:t,toggle:v,setToggle:O,text:m})]})})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.bad3e32b.chunk.js.map