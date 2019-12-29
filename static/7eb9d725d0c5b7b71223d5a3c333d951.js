'use strict';(function(){function r(a){t(()=>u(a))}function u(a){let b=e.b(document.querySelector("#particles-js"));(new IntersectionObserver(c=>{var d=window.pJSDom&&window.pJSDom.length;!d&&c[0].isIntersecting&&window.particlesJS.load("particles-js",a);d&&({pJS:d}=window.pJSDom[0],d.particles.move.enable=c[0].isIntersecting,c[0].isIntersecting&&d.fn.particlesRefresh())})).observe(b)}function h(a){return 0<a.touches.length?a.touches[0]:void 0}function n(a,b){a=e.b(l(a,b,"result"));return new v(a)}
function l(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function w(){let a=document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(x(a),b.disconnect())});b.observe(a)}}function x(a){let b=document.createElement("iframe");b.src=f.m(a.dataset,"spotifyEmbedUrl");b.width=b.height="300px";b.classList.add("header__spotifyEmbed");b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};a.appendChild(b)}
class y{constructor(a){this.s=a}oa(a,b,c,d){gtag("event","play",{sa:this.s,qa:"listen",pa:"click",S:a,T:b,ta:c,ra:d})}}class f{static m(a,b){return e.b(a[b])}static ha(a){return a.particlesJsConfig}static ja(a){return a(e.b(window.bootstrap))}}class e{static b(a){if(null==a)throw Error("expected value");return a}}class p{constructor({s:a,G:b}){this.G=b;this.s=a}static X(a){return new p({G:f.ha(a),s:f.m(a,"gaMeasurementId")})}}let t=window.requestIdleCallback||(a=>window.setTimeout(a,50));class z{constructor(a,
b,c){this.V=a;this.c=b;this.J=c;this.l=0;this.f=void 0;this.c.i(0,()=>this.ea());this.c.i(2,()=>this.ga());this.c.i(1,()=>this.fa());this.c.i(3,()=>this.N(e.b(this.f),!0));this.c.i(5,d=>this.c.K(d));this.c.i(4,d=>this.c.ma(d));this.J.i(0,this.N.bind(this))}N(a,b){if(this.f&&this.f.L(a))switch(this.l){case 2:return this.resume();case 1:return b&&this.pause();default:return}this.play(a)}play(a){if(!this.f||!this.f.L(a)){this.l=1;null!=this.f&&this.f.U();this.f=a;a.play();var {D:b,S:c,C:d,ia:g,T:m,title:k}=
a.Z();this.c.na(c);this.c.K(0);this.c.play();this.c.la({D:b,title:k,C:d});this.c.show();this.V.oa(c,m,`${k} - ${d}`,g)}}pause(){this.l=2;this.c.pause()}resume(){this.l=1;this.c.play()}ea(){null!=this.f&&(this.l=0,this.f.U(),this.c.$(),this.f=void 0)}fa(){null!=this.f&&(this.l=2,this.f.pause())}ga(){null!=this.f&&(this.l=1,this.f.resume())}}class q{constructor(a){this.a=a;this.M={}}j(a,...b){(a=this.M[a])&&a(...b)}i(a,b){this.M[a]=b}}class A extends q{constructor(a){super(a);this.g=void 0;this.u=!1;
this.h=e.b(a.querySelector("audio"));this.o=e.b(this.a.querySelector(".player__artworkPlayButton span"));this.I=e.b(this.a.querySelector(".player__progressIndicator"));this.h.onended=()=>this.j(0);this.h.onpause=()=>this.j(1);this.h.onplay=()=>this.j(2);this.h.ontimeupdate=()=>!this.u&&this.j(5,this.h.currentTime/this.h.duration);e.b(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",()=>this.j(3));this.H=e.b(this.a.querySelector(".player__progress"));this.H.addEventListener("mousedown",
b=>0===b.button&&this.w(b));this.H.addEventListener("touchstart",b=>this.w(h(b)),{passive:!0});this.I.addEventListener("mousedown",b=>0===b.button&&this.w(b));this.I.addEventListener("touchstart",b=>this.w(h(b)),{passive:!0});window.addEventListener("mousemove",b=>this.P(b));window.addEventListener("touchmove",b=>this.P(h(b)),{passive:!0});window.addEventListener("mouseup",b=>this.R(b));window.addEventListener("touchend",b=>this.R(h(b)),{passive:!0})}w(a){document.body.classList.add("dragging");this.u=
!0;this.v=this.F(e.b(a))}P(a){this.u&&(this.v=this.F(e.b(a)),this.K(this.v))}R(a){this.u&&(document.body.classList.remove("dragging"),this.u=!1,a=null!=a?this.F(a):this.v,this.v=void 0,this.j(4,e.b(a)))}na(a){this.h.setAttribute("src",a)}la({D:a,title:b,C:c}){this.g||(this.g=document.createElement("img"),this.g.className="player__artworkImage",e.b(this.a.querySelector(".player__artwork")).appendChild(this.g));a?this.g.src=a:(this.g.remove(),this.g=void 0);e.b(this.a.querySelector(".player__title")).innerText=
b;e.b(this.a.querySelector(".player__artist")).innerText=c}pause(){this.o.className="icon-play2";this.h.pause()}play(){this.o.className="icon-pause";this.h.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}$(){this.a.classList.add("player--hidden");document.body.classList.remove("hasPlayer")}ma(a){this.h.currentTime=a*this.h.duration}K(a){this.I.style.transform=`translateX(calc(${-12+-12*a}px + ${100*a}%)`}F(a){let {left:b,width:c}=this.H.getBoundingClientRect();
return Math.max(Math.min((a.clientX-(b+6))/(c-12),1),0)}}class B{constructor(a){this.view=a;this.A=new Map;this.O=new Set;a.i(1,this.ca.bind(this))}ca(a,b,c,d,g){b?this.A.has(c)||(a.ka(),b=window.setTimeout(()=>{this.O.has(c)||(this.O.add(c),a.aa(c,d),g())},200),this.A.set(c,b)):(window.clearInterval(this.A.get(c)),this.A.delete(c))}}class v{constructor(a){this.a=a;this.o=this.a.querySelector(".result__artworkPlayButton span");this.g=e.b(this.a.querySelector(".result__artwork"))}L(a){return this.a===
a.a}Z(){return{ia:this.a.querySelector(".result__rank").textContent,D:this.Y(),T:f.m(this.a.dataset,"songId"),S:f.m(this.a.dataset,"previewSrc"),C:this.a.querySelector(".result__artistName").textContent,title:this.a.querySelector(".result__trackTitle").textContent}}Y(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?f.m(b.dataset,"src"):void 0}play(){this.g.classList.add("result__artwork--prePlay");window.setTimeout(()=>
{this.g.classList.add("result__artwork--playing");this.B("icon-pause")},300)}pause(){this.g.classList.add("result__artwork--paused");this.B("icon-play2")}resume(){this.g.classList.remove("result__artwork--paused");this.B("icon-pause")}U(){this.g.classList.add("result__artwork--fadeout");this.B("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--fadeout")})})},
350)}ka(){e.b(this.a.querySelector(".result__artworkPlaceholder")).classList.add("result__artworkPlaceholder--loading")}aa(a,b){let c=e.b(this.a.querySelector(".result__artworkPlaceholder")),d=new Image;d.src=a;d.alt=b;d.classList.add("result__artworkImage","result__artworkImage--fadein");d.onload=()=>{c.parentNode.insertBefore(d,c);c.remove()};d.onerror=()=>{c.classList.remove("result__artworkPlaceholder--loading")}}B(a){this.o&&(this.o.className=a)}}class C extends q{W(){this.a.addEventListener("click",
a=>this.da(a));this.ba()}da(a){let b=l(a.target,this.a,"result__artworkPlayButton");a=l(a.target,this.a,"result__listenButton");if(a=b||a){let c=n(a,this.a);this.j(0,c,a===b)}}ba(){let a=new IntersectionObserver(b=>{b.forEach(c=>{const d=c.target,g=n(d,this.a),m=f.m(d.dataset,"src"),k=f.m(d.dataset,"alt");this.j(1,g,c.isIntersecting,m,k,()=>a.unobserve(d))})});this.a.querySelectorAll(".result__artworkPlaceholder").forEach(b=>a.observe(b))}}document.addEventListener("DOMContentLoaded",function(){let {s:a,
G:b}=f.ja(p.X),c=new y(a);var d=new C(e.b(document.querySelector(".countdown ul")));new B(d);d={J:d};({J:d}=d);{let g=new A(e.b(document.querySelector(".player")));new z(c,g,d)}w();b&&r(b);d.W()})})();
