(this.webpackJsonpreactplayer=this.webpackJsonpreactplayer||[]).push([[0],{22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a.n(r),c=a(13),s=a.n(c),o=a(4),l=a.n(o),d=a(8),u=a(3),h=a(9),b=(a(22),a(6)),p=a(5),j=function(e){var t=e.audioRef,a=e.activeLibraryHandler,r=e.currentSong,i=e.setCurrentSong,c=e.isPlaying,s=e.setIsPlaying,o=e.songInfo,h=e.setSongInfo,j=e.songs,f=function(){var e=Object(d.a)(l.a.mark((function e(n){var s,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=j.findIndex((function(e){return e.id===r.id})),"back"!==n){e.next=8;break}return o=j[(s-1)%j.length]||j[j.length-1],e.next=5,i(o);case 5:a(o),e.next=13;break;case 8:if("forward"!==n){e.next=13;break}return d=j[(s+1)%j.length],e.next=12,i(d);case 12:a(d);case 13:c&&t.current.play();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=o.currentTime/o.duration*100,v={transform:"translateX(".concat(m,"%)")},O={background:"linear-gradient(to right, ".concat(r.color[0],", ").concat(r.color[1],")")};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:g(o.currentTime)}),Object(n.jsxs)("div",{className:"track",style:O,children:[Object(n.jsx)("input",{type:"range",min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){h(Object(u.a)(Object(u.a)({},o),{},{currentTime:e.target.value})),t.current.currentTime=e.target.value}}),Object(n.jsx)("div",{className:"animate-track",style:v})]}),Object(n.jsx)("p",{children:o.duration?g(o.duration):"0:00"})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(b.a,{className:"skip-back",onClick:function(){return f("back")},size:"2x",icon:p.a}),Object(n.jsx)(b.a,{onClick:function(){s(!c),c?t.current.pause():t.current.play()},className:"play",size:"2x",icon:c?p.e:p.f}),Object(n.jsx)(b.a,{className:"skip-forward",onClick:function(){return f("forward")},size:"2x",icon:p.b})]})]})},f=function(e){var t=e.currentSong,a=e.isPlaying;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{src:t.cover,alt:t.alt,className:a?"pulse":""}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,a=e.setCurrentSong,r=e.isPlaying,i=e.audioRef,c=e.songs,s=e.setSongs,o=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:n=c.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),r&&i.current.play(),s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"library-song ".concat(t.active?"selected":""),onClick:o,children:[Object(n.jsx)("img",{src:t.cover,alt:t.alt}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,a=e.setCurrentSong,r=e.isPlaying,i=e.audioRef,c=e.setSongs,s=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(n.jsx)("h2",{children:"Library"}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(g,{audioRef:i,song:e,songs:t,setSongs:c,setCurrentSong:a,isPlaying:r},e.id)}))})]})},v=a(14),O=function(e){var t=e.libraryStatus,a=e.setLibraryStatus,r=Object(v.a)(!1);return console.log(r.value),Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{id:"left-side",children:Object(n.jsx)("h1",{children:"Beats and Waves"})}),Object(n.jsxs)("div",{id:"right-side",children:[Object(n.jsxs)("button",{onClick:function(){return a(!t)},children:["Library",Object(n.jsx)("br",{})," ",Object(n.jsx)(b.a,{icon:p.d})]}),Object(n.jsxs)("div",{class:"toggle",children:[Object(n.jsx)("input",{type:"checkbox",checked:r.value,element:document.library,onChange:function(){r.toggle()},id:"toggle"}),Object(n.jsx)("label",{for:"toggle",children:Object(n.jsx)("center",{children:Object(n.jsxs)("div",{id:"iconcontainer",children:[Object(n.jsx)(b.a,{id:"sunIcon",icon:p.g}),Object(n.jsx)(b.a,{id:"moonIcon",icon:p.c})]})})})]})]})]})},x=a(30);var y=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(x.a)(),active:!0,alt:"Album cover for 'Canary Forest' by Aso x Aviino x Middle School. Two cartoon foxes dressed in clothing stand in the dark on a bridge looking away over the river, lit only by a small handheld lamp. Another fox is seen in the forest peering up the path away from us. Several illuminated fireflies line the river."},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(x.a)(),active:!1,alt:"Album cover for 'Day and Night' by Aiguille. Style is a surrealist cartoon. A swirling pink cloud which looks like marshmallow gathers in the sky. Beneath it, a strange bird-like creature with a long beak appears  to have emerged from a pink marshmallowy pool of water. Three oddly-shaped trees with three main bushes each are seen in the distance."},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(x.a)(),active:!1,alt:"Album cover for 'Reflection' by Sworn. An intensely pink and purple cartoon landscape stretches before us, and several creatures can be seen beside a lake of pink water. One is a pigeon dressed in a suit, the others appear to be a fox and a rabbit with their backs to us. Over the lake is a small Chinese-style bridge with lanterns on either side of the walkway."},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(x.a)(),active:!1,alt:"Album cover for 'Reflection' by Sworn. An intensely pink and purple cartoon landscape stretches before us, and several creatures can be seen beside a lake of pink water. One is a pigeon dressed in a suit, the others appear to be a fox and a rabbit with their backs to us. Over the lake is a small Chinese-style bridge with lanterns on either side of the walkway."},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(x.a)(),active:!1,alt:"Album cover for 'Reflection' by Sworn. An intensely pink and purple cartoon landscape stretches before us, and several creatures can be seen beside a lake of pink water. One is a pigeon dressed in a suit, the others appear to be a fox and a rabbit with their backs to us. Over the lake is a small Chinese-style bridge with lanterns on either side of the walkway."},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(x.a)(),active:!1,alt:"Album cover for 'Canary Forest' by Aso x Aviino x Middle School. Two cartoon foxes dressed in clothing stand in the dark on a bridge looking away over the river, lit only by a small handheld lamp. Another fox is seen in the forest peering up the path away from us. Several illuminated fireflies line the river."}]};var k=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(y()),a=Object(h.a)(t,2),i=a[0],c=a[1],s=Object(r.useState)(i[0]),o=Object(h.a)(s,2),b=o[0],p=o[1],g=Object(r.useState)(!1),v=Object(h.a)(g,2),x=v[0],k=v[1],w=Object(r.useState)(!1),S=Object(h.a)(w,2),A=S[0],C=S[1],N=Object(r.useState)({currentTime:0,duration:0,animationPercentage:0}),T=Object(h.a)(N,2),P=T[0],I=T[1],R=function(e){var t=e.target.currentTime,a=e.target.duration;I(Object(u.a)(Object(u.a)({},P),{},{currentTime:t,duration:a}))},L=function(e){var t=i.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));c(t)},F=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.findIndex((function(e){return e.id===b.id})),n=i[(a+1)%i.length],t.next=4,p(n);case 4:L(n),x&&e.current.play();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(A?"library-active":""),children:[Object(n.jsx)(O,{libraryStatus:A,setLibraryStatus:C}),Object(n.jsx)(f,{currentSong:b,isPlaying:x}),Object(n.jsx)(j,{audioRef:e,activeLibraryHandler:L,currentSong:b,setCurrentSong:p,isPlaying:x,setIsPlaying:k,songInfo:P,setSongInfo:I,songs:i}),Object(n.jsx)("audio",{ref:e,src:b.audio,onTimeUpdate:R,onLoadedMetadata:R,onEnded:F}),Object(n.jsx)(m,{audioRef:e,isPlaying:x,libraryStatus:A,songs:i,setSongs:c,setCurrentSong:p})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),w()}},[[28,1,2]]]);
//# sourceMappingURL=main.39d56164.chunk.js.map