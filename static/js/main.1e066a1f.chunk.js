(this["webpackJsonpredux-react-tester"]=this["webpackJsonpredux-react-tester"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),s=n.n(i),o=n(1),d={display:"default",sounds:[{keyCode:81,keyTrigger:"Q",id:"bassdrum",url:"./sounds/808-bd15.wav"},{keyCode:87,keyTrigger:"W",id:"clap",url:"./sounds/808-clap1.wav"},{keyCode:69,keyTrigger:"E",id:"cymbal",url:"./sounds/808-cym04.wav"},{keyCode:65,keyTrigger:"A",id:"hihat",url:"./sounds/808-hh02.wav"},{keyCode:83,keyTrigger:"S",id:"ho",url:"./sounds/808-ho10.wav"},{keyCode:68,keyTrigger:"D",id:"job",url:"./sounds/808-rim4.wav"},{keyCode:90,keyTrigger:"Z",id:"shakeweight",url:"./sounds/808-ma2.wav"},{keyCode:88,keyTrigger:"X",id:"snare",url:"./sounds/808-sd03.wav"},{keyCode:67,keyTrigger:"C",id:"When your powers combine; I am Captain Planet!",url:"./sounds/class-content_week-04_activities_day-02_10-CaptainPlanetGame_Unsolved_assets_captainplanet24.mp3"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DISPLAY":return Object.assign({},e,{display:t.text});default:return e}},u=n(3),l=Object(u.b)(c,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=function(e){var t=Object(o.b)();Object(r.useEffect)((function(){return document.addEventListener("keydown",n)})),Object(r.useEffect)((function(){return function(){document.removeEventListener("keydown",n)}}));var n=function(t){t.keyCode===e.keyCode&&i()},i=function(){var n=document.getElementById(e.keyTrigger);console.log("n3tt735"),n.parentNode.classList.add("active"),setTimeout((function(){return n.parentNode.classList.remove("active")}),500),n.currentTime=0,n.play(),t({type:"UPDATE_DISPLAY",text:e.text})};return a.a.createElement("div",{className:"box",id:"box",onClick:function(){return i()}},e.keyTrigger,a.a.createElement("audio",{src:e.source,id:e.keyTrigger}),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))},m=function(){var e=Object(o.c)((function(e){return e.sounds})),t=Object(o.c)((function(e){return e.display}));return a.a.createElement("div",null,a.a.createElement("h1",null,t),a.a.createElement("div",{className:"container"},a.a.createElement("div",{id:"display",className:"display"},e.map((function(e,t){return a.a.createElement(y,{text:e.id,key:t,keyCode:e.keyCode,source:e.url,keyTrigger:e.keyTrigger})})))))},g=(n(20),document.getElementById("root"));s.a.render(a.a.createElement(o.a,{store:l},a.a.createElement(m,null)),g)},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.1e066a1f.chunk.js.map