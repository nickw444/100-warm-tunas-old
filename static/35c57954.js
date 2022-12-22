'use strict';function ca(n){var f=0;return function(){return f<n.length?{done:!1,value:n[f++]}:{done:!0}}}function z(n){var f="undefined"!=typeof Symbol&&Symbol.iterator&&n[Symbol.iterator];return f?f.call(n):{next:ca(n)}}var S="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da="function"==typeof Object.defineProperties?Object.defineProperty:function(n,f,t){n!=Array.prototype&&n!=Object.prototype&&(n[f]=t.value)};
function ea(n,f){if(f){var t=S;n=n.split(".");for(var w=0;w<n.length-1;w++){var E=n[w];E in t||(t[E]={});t=t[E]}n=n[n.length-1];w=t[n];f=f(w);f!=w&&null!=f&&da(t,n,{configurable:!0,writable:!0,value:f})}}
ea("Promise",function(n){function f(d){this.V=0;this.sa=void 0;this.J=[];var g=this.ia();try{d(g.resolve,g.reject)}catch(h){g.reject(h)}}function t(){this.C=null}function w(d){return d instanceof f?d:new f(function(g){g(d)})}if(n)return n;t.prototype.wa=function(d){if(null==this.C){this.C=[];var g=this;this.xa(function(){g.Za()})}this.C.push(d)};var E=S.setTimeout;t.prototype.xa=function(d){E(d,0)};t.prototype.Za=function(){for(;this.C&&this.C.length;){var d=this.C;this.C=[];for(var g=0;g<d.length;++g){var h=
d[g];d[g]=null;try{h()}catch(u){this.Wa(u)}}}this.C=null};t.prototype.Wa=function(d){this.xa(function(){throw d;})};f.prototype.ia=function(){function d(u){return function(A){h||(h=!0,u.call(g,A))}}var g=this,h=!1;return{resolve:d(this.Jb),reject:d(this.qa)}};f.prototype.Jb=function(d){if(d===this)this.qa(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof f)this.Vb(d);else{a:switch(typeof d){case "object":var g=null!=d;break a;case "function":g=!0;break a;default:g=!1}g?this.Ib(d):
this.Da(d)}};f.prototype.Ib=function(d){var g=void 0;try{g=d.then}catch(h){this.qa(h);return}"function"==typeof g?this.Wb(g,d):this.Da(d)};f.prototype.qa=function(d){this.Qa(2,d)};f.prototype.Da=function(d){this.Qa(1,d)};f.prototype.Qa=function(d,g){if(0!=this.V)throw Error("Cannot settle("+d+", "+g+"): Promise already settled in state"+this.V);this.V=d;this.sa=g;this.$a()};f.prototype.$a=function(){if(null!=this.J){for(var d=0;d<this.J.length;++d)H.wa(this.J[d]);this.J=null}};var H=new t;f.prototype.Vb=
function(d){var g=this.ia();d.Y(g.resolve,g.reject)};f.prototype.Wb=function(d,g){var h=this.ia();try{d.call(g,h.resolve,h.reject)}catch(u){h.reject(u)}};f.prototype.then=function(d,g){function h(C,F){return"function"==typeof C?function(M){try{u(C(M))}catch(N){A(N)}}:F}var u,A,I=new f(function(C,F){u=C;A=F});this.Y(h(d,u),h(g,A));return I};f.prototype.catch=function(d){return this.then(void 0,d)};f.prototype.Y=function(d,g){function h(){switch(u.V){case 1:d(u.sa);break;case 2:g(u.sa);break;default:throw Error("Unexpected state: "+
u.V);}}var u=this;null==this.J?H.wa(h):this.J.push(h)};f.resolve=w;f.reject=function(d){return new f(function(g,h){h(d)})};f.race=function(d){return new f(function(g,h){for(var u=z(d),A=u.next();!A.done;A=u.next())w(A.value).Y(g,h)})};f.all=function(d){var g=z(d),h=g.next();return h.done?w([]):new f(function(u,A){function I(M){return function(N){C[M]=N;F--;0==F&&u(C)}}var C=[],F=0;do C.push(void 0),F++,w(h.value).Y(I(C.length-1),A),h=g.next();while(!h.done)})};return f});
function T(n){function f(w){return n.next(w)}function t(w){return n.throw(w)}return new Promise(function(w,E){function H(d){d.done?w(d.value):Promise.resolve(d.value).then(f,t).then(H,E)}H(n.next())})}
(function(){function n(a){return{position:a.position,S:a.is_mega,M:a.song_id,B:a.song_title,u:a.artist_name,v:a.preview_url,l:a.num_votes,Va:a.artwork_filename,backgroundColor:a.background_color}}function f(a){return new Promise(b=>{window.setTimeout(()=>b(),a)})}function t(a){let b=document.createElement("div");b.innerHTML=a;return b.firstChild}function w(a,b,c,e,k){return T(function*(){try{var r=yield a.bb()}catch(p){if(p instanceof U)return;console.error(p);return}let x=V.w(),G=W.w();r=X.w(r,k);
let D=l.b(c.parentNode);D.insertBefore(x.a,c);D.insertBefore(G.a,c);D.insertBefore(r.a,c);(new fa(r,x,G,e,a,b)).ha()}())}function E(){H();let a=l.b(document.querySelector(".header")),b=new ha(a);b.h(1,()=>{document.body.classList.add("noscroll");b.Sa(!0)});b.h(2,()=>{document.body.classList.remove("noscroll");b.Sa(!1)})}function H(){let a;window.addEventListener("resize",()=>{document.body.classList.add("resizing");window.clearTimeout(a);a=window.setTimeout(()=>document.body.classList.remove("resizing"),
200)})}function d(){let a=document.querySelector(".hero__viewCountdownCta"),b=document.querySelector(".countdown");a&&b&&a.addEventListener("click",()=>{ia({top:b.offsetTop-32,behavior:"smooth"})})}function g(){"Australia/Sydney"!==Intl.DateTimeFormat().resolvedOptions().timeZone&&document.querySelectorAll(".localTime").forEach(a=>{let b=parseInt(B.D(a.dataset,"ts"),10);a.innerText=`(${(new Date(1E3*b)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})} in your time zone)`})}
function h(a){return 0<a.touches.length?a.touches[0]:void 0}function u(a,b){let c=new ja(l.b(document.querySelector(".player")));new ka(a,c,b)}function A(a,b){a=l.b(I(a,b,"result"));return new Q(a)}function I(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function C(a){a=new la(a);let b=new ma(a);return{ra:a,s:b}}function F(a,b,c,e){return T(function*(){function k(){let p=document.createElement("div");var q=document.createElement("p");q.innerHTML="<strong>Want a sneak peak at the top 10?</strong> Upload a screenshot of your votes to take a look:";
p.appendChild(q);let m=document.createElement("form");m.classList.add("votesUploaderForm");p.appendChild(m);q=document.createElement("label");q.setAttribute("for","fileInput");q.innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>\n    <span>Choose a file\u2026</span>\n';
m.appendChild(q);q=document.createElement("input");q.type="file";q.name="upload";q.accept="image/*";q.id="fileInput";m.appendChild(q);q.addEventListener("change",y=>r(y,{Qb:J,Ob:K}));let v=document.createElement("div");v.classList.add("votesUploaderFormError");p.appendChild(v);let K=y=>{if(y){const Y=document.createElement("p");Y.innerText=y;v.appendChild(Y)}else v.innerHTML=""},J=y=>{y?m.classList.add("votesUploaderForm--hidden"):m.classList.remove("votesUploaderForm--hidden")};return p}function r(p,
q){var {Ob:m,Qb:v}=q;return T(function*(){m(void 0);v(!0);c.m(!0);var K=l.b(l.b(p.target.files).item(0));let J;try{J=yield e.Ya({file:K})}catch(y){throw v(!1),m("Something went wrong whilst processing your image. Please try again later."),c.m(!1),y;}K=void 0;try{K=yield x({id:J.id,A:J.A})}catch(y){throw v(!1),m("Something went wrong whilst processing your image. Please try again later."),c.m(!1),y;}if(null!=K){switch(K){case "novotes":v(!1);m("We did not detect any valid votes in the image you uploaded. Please ensure you are uploading a screenshot of your vote confirmation from triple j.");
break;case "unknown":v(!1),m("Something went wrong whilst processing your image. Please try again later.")}c.m(!1)}else{try{yield G({id:J.id,A:J.A})}catch(y){throw v(!1),m("Something went wrong whilst processing your image. Please try again later."),c.m(!1),y;}try{let y=yield e.Z();D(y)}catch(y){throw m("Something went wrong whilst processing your image. Please try again later."),y;}finally{v(!1),c.m(!1)}}}())}function x(p){var {id:q,A:m}=p;return T(function*(){let v=void 0;do null!=v&&(yield M(1E3)),
v=yield e.gb({id:q,A:m});while("COMPLETE"!=v.state);if(null!=v.Ca||null!=v.va)return"unknown";if(!v.Ha)return"novotes"}())}function G(p){var {id:q,A:m}=p;return T(function*(){yield e.Cb(new na(void 0,q,m))}())}function D(p){return T(function*(){a.innerHTML="<strong>Thanks for submitting your votes</strong>. Here is your sneak peak of the top 10:";c.L(p.results.filter(m=>10>=m.position).sort((m,v)=>v.position-m.position).map(m=>({S:!1,backgroundColor:m.backgroundColor,v:m.v,M:0,position:m.position,
B:m.B,u:m.u,l:m.l,Ua:Math.round(m.l/p.T.ba*100),I:m.I})));let q=document.createElement("p");q.innerText=`Data was last processed at ${(new Date(1E3*p.T.mb)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})}. Data is based on ${p.T.l} votes counted across ${p.T.ba} entries.`;b.Pb(q)}())}try{c.m(!0);let p=yield e.Z();D(p)}catch(p){if(p instanceof Z){let q=k();a.appendChild(q)}}finally{c.m(!1)}}())}function M(a){return new Promise(b=>{setTimeout(()=>b(),a)})}function N(){let a=
document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(P(()=>oa(a)),b.disconnect())});b.observe(a)}}function oa(a){let b=document.createElement("iframe");b.src=B.D(a.dataset,"spotifyEmbedUrl");b.width=b.height="300px";b.classList.add("header__spotifyEmbed");b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};a.appendChild(b)}class pa{constructor(a){this.P=a}bc(a,b,c,e){gtag("event","play",{send_to:this.P,event_category:"listen",
event_action:"click",previewSrc:a,songId:b,songTitle:c,resultCurrentRank:e})}$b(){gtag("event","controls_button_visible",{event_category:"controls"})}ac(){gtag("event","controls_open",{event_category:"controls"})}Ta(a){gtag("event","controls_changed",{event_category:"controls",event_label:a.join(", ")})}}class B{static D(a,b){return l.b(a[b])}static Bb(a){return a.resultsUrlSlug}static Hb(a){return a(l.b(window.bootstrap))}static Ab(a){return a.enableExcludePlacedControl}static Gb(a){return B.Ab(a)||
!1}}class l{static b(a){if(null==a)throw Error("expected value");return a}}let P=window.requestIdleCallback||(a=>window.setTimeout(a,50));class O extends Error{}class qa extends O{}class ra extends O{}class Z extends O{}class U extends O{}class sa{get(a){const b=this;return T(function*(){let c=yield fetch(a,{credentials:"include"});b.Ga(c);return yield c.json()}())}na(a,b){const c=this;return T(function*(){let e=yield fetch(a,Object.assign({},b,{method:"POST",credentials:"include"}));c.Ga(e);return yield e.json()}())}Ga(a){switch(a.status){case 403:throw new Z("Error: "+
a.statusText);case 404:throw new U("Error: "+a.statusText);}if(400<=a.status&&500>a.status)throw new ra("Error: "+a.statusText);if(500<=a.status&&600>a.status)throw new qa("Error: "+a.statusText);if(200>a.status||300<=a.status)throw new O("Error: "+a.statusText);}}class fa{constructor(a,b,c,e,k,r){this.za=a;this.ya=b;this.pb=c;this.s=e;this.Lb=k;this.H=r;this.Ia=!1;a.h(1,x=>this.yb(x));b.h(1,()=>this.Oa(!this.za.lb()));c.h(1,()=>this.Oa(!1))}ha(){this.s.zb(a=>{this.ya.Zb(a);a&&!this.Ia&&(this.H.$b(),
this.Ia=!0)})}yb(a){const b=this;return T(function*(){if(0===a.length)P(()=>b.H.Ta([])),b.s.L([]),b.s.Pa("No media types selected. Please select at least one media type."),b.ma=void 0;else{b.s.m(!0);b.s.L([]);var c=b.ma=f(500).then(()=>{if(c!==b.ma)throw new R;}).then(()=>{P(()=>b.H.Ta([...a].sort()));return b.Lb.Z(a)}).then(e=>{if(c!==b.ma)throw new R;b.s.m(!1);b.s.L(e.Kb.map(k=>({S:k.S,backgroundColor:k.backgroundColor,v:k.v,M:k.M,position:k.position,B:k.B,u:k.u,l:k.l,Ua:Math.floor(k.l/e.ba*100),
I:"/static/artwork/2021/"+k.Va})))}).catch(e=>{if(!(e instanceof R))throw b.s.Pa("An error occurred whilst fetching data. Please try again."),e;})}}())}Oa(a){a&&this.H.ac();this.pb.toggle(a);this.za.toggle(a);this.ya.toggle(a)}}class R extends Error{}class L{constructor(a){this.a=a;this.Ba={}}i(a,...b){(a=this.Ba[a])&&a(...b)}h(a,b){this.Ba[a]=b}}class X extends L{constructor(a){super(a);this.Ka=l.b(a.querySelector(".controls__form--mediaTypes"));this.Ka.addEventListener("change",()=>this.i(1,this.eb()))}static w(a,
b){a=t(`<div class="controls controls--hidden">
  <div class="container container--narrow">
    <h3>Included Media Types</h3>
    <p>Fine-tune the prediction by selecting the specific media types to be counted.</p>
    <form class="controls__form controls__form--mediaTypes">
      ${b?'<div><label><input value="exclude_placed" type="checkbox" checked autocomplete="off"> Eliminate songs that have placed in the Hottest 200-101</label></div>':""}
      <div><label><input value="instagram_post" type="checkbox" checked autocomplete="off"> Instagram Posts <span class="controls__formMeta">(${a.jb} entries)</span></label>
      </div>
      <div><label><input value="instagram_direct_message" type="checkbox" checked autocomplete="off"> Instagram DMs <span class="controls__formMeta">(${a.ib} entries)</span></label>
      </div>
      <div><label><input value="instagram_story" type="checkbox" checked autocomplete="off"> Instagram Stories <span
          class="controls__formMeta">(${a.kb} entries)</span></label></div>
      <div><label><input value="twitter_post" type="checkbox" checked autocomplete="off"> Twitter Posts <span class="controls__formMeta">(${a.cc}  entries)</span></label>
      </div>
      <div><label><input value="reddit_comment" type="checkbox" checked autocomplete="off"> Reddit Comments <span class="controls__formMeta">(${a.Fb}  entries)</span></label>
      </div>
    </form>
  </div>
</div>
`);return new X(a)}toggle(a){a?this.a.classList.remove("controls--hidden"):this.a.classList.add("controls--hidden")}lb(){return!this.a.classList.contains("controls--hidden")}eb(){let a=[];this.Ka.querySelectorAll('input[type="checkbox"]').forEach(b=>{b.checked&&a.push(b.value)});return a}}class V extends L{constructor(a){super(a);a.addEventListener("click",()=>this.i(1))}static w(){let a=t('<div class="controls__buttonContainer controls__buttonContainer--hidden">\n  <button class="controls__button">\n    <span class="controls__icon icon-equalizer"></span>\n    <span class="controls__icon controls__icon--hidden icon-close"></span>\n  </button>\n</div>');
return new V(a)}Zb(a){a?this.a.classList.remove("controls__buttonContainer--hidden"):this.a.classList.add("controls__buttonContainer--hidden")}toggle(a){let b=l.b(this.a.querySelector(".controls__icon.icon-equalizer")),c=l.b(this.a.querySelector(".controls__icon.icon-close"));a?(b.classList.add("controls__icon--hidden"),c.classList.remove("controls__icon--hidden")):(b.classList.remove("controls__icon--hidden"),c.classList.add("controls__icon--hidden"))}}class W extends L{constructor(a){super(a);a.addEventListener("click",
()=>this.i(1))}static w(){let a=t('<div class="controls__mask controls__mask--hidden"></div>');return new W(a)}toggle(a){a?(this.a.classList.remove("controls__mask--hidden"),document.body.classList.add("noscroll")):(this.a.classList.add("controls__mask--hidden"),document.body.classList.remove("noscroll"))}}class ha extends L{constructor(a){super(a);this.qb=l.b(this.a.querySelector(".header__navList"));this.Ja=l.b(this.a.querySelector(".header__navListMask"));a=l.b(this.a.querySelector(".header__hamburgerButton"));
let b=l.b(this.a.querySelector(".header__navListClose"));a.addEventListener("click",()=>this.i(1));[this.Ja,b].forEach(c=>c.addEventListener("click",()=>this.i(2)))}Sa(a){this.toggle(this.qb,a,"header__navList--visible");this.toggle(this.Ja,a,"header__navListMask--visible")}toggle(a,b,c){b?a.classList.add(c):a.classList.remove(c)}}let ta=a=>{function b(){window.requestAnimationFrame(()=>{const r=Math.max(Math.min((Date.now()-k)/300,1),0);window.scrollTo(window.scrollX,c+(.5>r?2*r*r:-1+(4-2*r)*r)*
e);1>r&&b()})}({top:a}=a);let c=window.scrollY;const e=a-c,k=Date.now();b()},ia="scrollBehavior"in document.documentElement.style?window.scrollTo:ta;console.log();class aa{constructor(a){var {P:b,K:c,ja:e}=a;this.P=b;this.K=c;this.ja=e}static j(a){return new aa({P:B.D(a,"gaMeasurementId"),K:B.Bb(a),ja:B.Gb(a)})}}class ka{constructor(a,b,c){this.H=a;this.c=b;this.ra=c;this.G=1;this.f=void 0;this.c.h(1,()=>this.vb());this.c.h(3,()=>this.xb());this.c.h(2,()=>this.wb());this.c.h(4,()=>this.Fa(l.b(this.f),
!0));this.c.h(6,e=>this.c.ta(e));this.c.h(5,e=>this.c.Sb(e));this.ra.h(1,this.Fa.bind(this))}Fa(a,b){if(this.f&&this.f.Aa(a))switch(this.G){case 3:return this.resume();case 2:return b&&this.pause();default:return}this.play(a)}play(a){if(!this.f||!this.f.Aa(a)){this.G=2;null!=this.f&&this.f.Ra();this.f=a;a.play();var {ga:b,Db:c,fa:e,Eb:k,M:r,title:x}=a.fb();this.c.Tb(c);this.c.ta(0);this.c.play();this.c.Rb({ga:b,title:x,fa:e});this.c.show();this.H.bc(c,r,`${x} - ${e}`,k)}}pause(){this.G=3;this.c.pause()}resume(){this.G=
2;this.c.play()}vb(){null!=this.f&&(this.G=1,this.f.Ra(),this.c.hb(),this.f=void 0)}wb(){null!=this.f&&(this.G=3,this.f.pause())}xb(){null!=this.f&&(this.G=2,this.f.resume())}}class ja extends L{constructor(a){super(a);this.g=void 0;this.R=!1;this.o=l.b(a.querySelector("audio"));this.N=l.b(this.a.querySelector(".player__artworkPlayButton span"));this.pa=l.b(this.a.querySelector(".player__progressIndicator"));this.o.onended=()=>this.i(1);this.o.onpause=()=>this.i(2);this.o.onplay=()=>this.i(3);this.o.ontimeupdate=
()=>!this.R&&this.i(6,this.o.currentTime/this.o.duration);l.b(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",()=>this.i(4));this.oa=l.b(this.a.querySelector(".player__progress"));this.oa.addEventListener("mousedown",b=>0===b.button&&this.ca(b));this.oa.addEventListener("touchstart",b=>this.ca(h(b)),{passive:!0});this.pa.addEventListener("mousedown",b=>0===b.button&&this.ca(b));this.pa.addEventListener("touchstart",b=>this.ca(h(b)),{passive:!0});window.addEventListener("mousemove",
b=>this.Ma(b));window.addEventListener("touchmove",b=>this.Ma(h(b)),{passive:!0});window.addEventListener("mouseup",b=>this.Na(b));window.addEventListener("touchend",b=>this.Na(h(b)),{passive:!0})}ca(a){document.body.classList.add("dragging");this.R=!0;this.$=this.ka(l.b(a))}Ma(a){this.R&&(this.$=this.ka(l.b(a)),this.ta(this.$))}Na(a){this.R&&(document.body.classList.remove("dragging"),this.R=!1,a=null!=a?this.ka(a):this.$,this.$=void 0,this.i(5,l.b(a)))}Tb(a){this.o.setAttribute("src",a)}Rb(a){var {ga:b,
title:c,fa:e}=a;this.g||(this.g=document.createElement("img"),this.g.className="player__artworkImage",l.b(this.a.querySelector(".player__artwork")).appendChild(this.g));b?this.g.src=b:(this.g.remove(),this.g=void 0);l.b(this.a.querySelector(".player__title")).innerText=c;l.b(this.a.querySelector(".player__artist")).innerText=e}pause(){this.N.className="icon-play2";this.o.pause()}play(){this.N.className="icon-pause";this.o.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}hb(){this.a.classList.add("player--hidden");
document.body.classList.remove("hasPlayer")}Sb(a){this.o.currentTime=a*this.o.duration}ta(a){this.pa.style.transform=`translateX(calc(${-12+-12*a}px + ${100*a}%)`}ka(a){let {left:b,width:c}=this.oa.getBoundingClientRect();return Math.max(Math.min((a.clientX-(b+6))/(c-12),1),0)}}class ua{constructor(a,b){this.id=a;this.A=b}static j(a){return{id:a.id,A:a.secret}}}class va{constructor(a,b,c,e,k){this.id=a;this.state=b;this.Ca=c;this.Ha=e;this.va=k}static j(a){return{id:a.id,state:a.state,Ca:a.failureReason,
Ha:a.hasMatchedVotes,va:a.accessTokenUuid}}}class wa{constructor(a,b,c,e,k,r,x){this.position=a;this.B=b;this.u=c;this.v=e;this.l=k;this.I=r;this.backgroundColor=x}static j(a){return{position:a.position,B:a.songTitle,u:a.artistName,v:a.previewUrl,l:a.numVotes,I:a.artworkUrl,backgroundColor:a.backgroundColor}}}class xa{constructor(a,b){this.results=a;this.T=b}static j(a){return{results:a.results.map(b=>wa.j(b)),T:{ba:a.meta.numEntries,l:a.meta.numVotes,rb:a.meta.numPreviousYearVotes,mb:a.meta.lastProcessed}}}}
class na{constructor(a,b,c){this.nb=a;this.Xb=b;this.Yb=c}Mb(){return{linkingToken:this.nb,submissionId:this.Xb,submissionSecret:this.Yb}}}class ya{constructor(a,b){this.F=a;this.W=b}Ya(a){const b=this;return T(function*(){var c=new FormData;c.append("file",a.file);c=yield b.F.na(b.W+"/submission",{body:c,headers:void 0});return ua.j(c)}())}gb(a){const b=this;return T(function*(){let c=yield b.F.na(b.W+`/submission/${a.id}`,{body:JSON.stringify({secret:a.A}),headers:{"Content-Type":"application/json"}});
return va.j(c)}())}Z(){const a=this;return T(function*(){let b=yield a.F.get(a.W+"/results");return xa.j(b)}())}Cb(a){const b=this;return T(function*(){yield b.F.na(b.W+"/exchange",{body:JSON.stringify(a.Mb()),headers:{"Content-Type":"application/json"}});return{}}())}}class ma{constructor(a){this.view=a;this.U=new Map;this.la=new Set;a.h(2,this.tb.bind(this))}m(a){this.view.Ea().m(a)}Pa(a){this.view.Ea().Ub(a)}L(a){this.view.L(a);this.U.clear();this.la.clear()}zb(a){this.view.Xa();this.view.h(3,
a)}tb(a,b,c,e,k){b?this.U.has(c)||(a.Nb(),b=window.setTimeout(()=>{this.la.has(c)||(this.la.add(c),a.ob(c,e),k())},200),this.U.set(c,b)):(window.clearInterval(this.U.get(c)),this.U.delete(c))}}class Q{constructor(a){this.a=a;this.N=this.a.querySelector(".result__artworkPlayButton span");this.g=l.b(this.a.querySelector(".result__artwork"))}static w(a){a=t(`<li class="result${a.S?" result--mega":""}"
      style="${a.S?`background: #${a.backgroundColor} radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)`:""}"
      data-preview-src="${a.v}"
      data-song-id="${a.M}"
      >
        <div class="container container--narrow">
          <div class="result__content">
            <div class="result__rankContainer">
              <div class="result__rank">${a.position}</div>
            </div>
            <div class="result__details">
              <div class="result__trackTitle">${a.B}</div>
              <div class="result__artistName">${a.u}</div>
              <div class="result__voteDetails">${a.l}
                votes (${a.Ua}%)
                ${a.v?'\n                    &nbsp;&nbsp;|&nbsp;&nbsp;\n                    <button class="result__listenButton">\n                      <span class="icon-play2"></span>&nbsp;Listen\n                    </button>\n                ':""}
              </div>
            </div>
            <div class="result__artwork">
                ${a.I?`
                <div class="result__artworkSpinner">
                    <div class="result__artworkPlaceholder"
                         data-alt="Cover artwork for ${a.B} - ${a.u}"
                         data-src="${a.I}"></div>
                  </div>
                  ${a.v?`
                  <button class="result__artworkPlayButton"
                            aria-label="Play ${a.B} by ${a.u}">
                      <span class="icon-play2"></span>
                    </button>
                  `:""}
                `:""}
            </div>
          </div>
        </div>
      </li>
`);return new Q(a)}Aa(a){return this.a===a.a}fb(){return{Eb:this.a.querySelector(".result__rank").textContent,ga:this.ab(),M:B.D(this.a.dataset,"songId"),Db:B.D(this.a.dataset,"previewSrc"),fa:this.a.querySelector(".result__artistName").textContent,title:this.a.querySelector(".result__trackTitle").textContent}}ab(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?B.D(b.dataset,"src"):void 0}play(){this.g.classList.add("result__artwork--prePlay");
this.da("icon-pause");window.setTimeout(()=>{this.g.classList.add("result__artwork--playing")},300)}pause(){this.g.classList.add("result__artwork--paused");this.da("icon-play2")}resume(){this.g.classList.remove("result__artwork--paused");this.da("icon-pause")}Ra(){this.g.classList.add("result__artwork--fadeout");this.da("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>
{this.g.classList.remove("result__artwork--fadeout")})})},350)}Nb(){l.b(this.a.querySelector(".result__artworkPlaceholder")).classList.add("result__artworkPlaceholder--loading")}ob(a,b){let c=l.b(this.a.querySelector(".result__artworkPlaceholder")),e=new Image;e.src=a;e.alt=b;e.classList.add("result__artworkImage","result__artworkImage--fadein");e.onload=()=>{c.parentNode.insertBefore(e,c);c.remove()};e.onerror=()=>{c.classList.remove("result__artworkPlaceholder--loading")}}da(a){this.N&&(this.N.className=
a)}}class ba{constructor(a){this.a=a}static w(){let a=document.createElement("div");a.className="countdown__statusIndicator countdown__statusIndicator--hidden";return new ba(a)}m(a){a?(this.ea(!0),this.a.innerHTML='<div class="countdown__statusIcon"><span class="icon-spinner"></span></div>'):this.ea(!1)}Ub(a){if(a){this.ea(!0);var b=document.createElement("div");b.className="countdown__statusMessage";b.innerText=a;this.a.innerHTML="";this.a.appendChild(b)}else this.ea(!1)}ea(a){a?this.a.classList.remove("countdown__statusIndicator--hidden"):
this.a.classList.add("countdown__statusIndicator--hidden")}}class la extends L{constructor(a){super(a);this.aa=l.b(this.a.querySelector(".countdown__list"))}ha(){this.a.addEventListener("click",a=>this.ub(a));this.La()}Ea(){this.ua||(this.ua=ba.w(),this.a.insertBefore(this.ua.a,this.aa));return this.ua}L(a){this.aa.innerHTML="";for(let b of a)a=Q.w(b),this.aa.appendChild(a.a);this.La()}Pb(a){null==this.O&&(this.O=document.createElement("div"),this.O.classList.add("container","container--narrow","countdown__footnote"),
this.a.appendChild(this.O));this.O.innerHTML="";this.O.appendChild(a)}Xa(){(new IntersectionObserver(a=>{a.length&&this.i(3,a[0].isIntersecting)},{rootMargin:"-96px 0px"})).observe(this.aa)}ub(a){let b=I(a.target,this.a,"result__artworkPlayButton");a=I(a.target,this.a,"result__listenButton");if(a=b||a){let c=A(a,this.a);this.i(1,c,a===b)}}La(){let a=this.cb();this.a.querySelectorAll(".result__artworkPlaceholder").forEach(b=>a.observe(b))}cb(){return this.X?this.X:this.X=new IntersectionObserver(a=>
this.sb(l.b(this.X),a))}sb(a,b){b.forEach(c=>{let e=c.target,k=A(e,this.a),r=B.D(e.dataset,"src"),x=B.D(e.dataset,"alt");this.i(2,k,c.isIntersecting,r,x,()=>a.unobserve(e))})}}let za={j(a){return{ba:a.num_entries,l:a.num_votes,rb:a.numPreviousYearVotes,dc:a.last_processed_ts,Kb:a.results_0_100.map(n)}}},Aa={j(a){return{jb:a.instagram_post,ib:a.instagram_direct_message,kb:a.instagram_story,cc:a.twitter_post,Fb:a.reddit_comment}}};class Ba{constructor(a,b){this.F=a;this.K=b}Z(a){const b=this;return T(function*(){var c=
[...a].sort();c=yield b.F.get(`/static/results/${b.K}/`+c.join("+")+".json");return za.j(c)}())}bb(){const a=this;return T(function*(){let b=yield a.F.get(`/static/results/${a.K}/entryCountsBySource.json`);return Aa.j(b)}())}}document.addEventListener("DOMContentLoaded",function(){let {P:a,K:b,ja:c}=B.Hb(aa.j),e=new pa(a),k=document.querySelector(".countdown"),r=document.querySelector(".uploader"),x=new sa;if(null!=k){let {ra:D,s:p}=C(k);u(e,D);D.ha();var G=null!=(new URLSearchParams(window.location.search)).get("enableUploads")||
16716708E5<Date.now();null!=r&&G&&(G=new ya(x,"https://s.100warmtunas.com"),F(r,D,p,G));P(()=>{if(b){let q=new Ba(x,b);w(q,e,k,p,c)}})}N();E();d();g()})})();
//# sourceMappingURL=35c57954.js.map
