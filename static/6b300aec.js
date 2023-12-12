'use strict';var v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,Y="function"==typeof Object.defineProperties?Object.defineProperty:function(q,u,n){q!=Array.prototype&&q!=Object.prototype&&(q[u]=n.value)};function aa(q,u){if(u){var n=v;q=q.split(".");for(var r=0;r<q.length-1;r++){var z=q[r];z in n||(n[z]={});n=n[z]}q=q[q.length-1];r=n[q];u=u(r);u!=r&&null!=u&&Y(n,q,{configurable:!0,writable:!0,value:u})}}
function Z(q){function u(r){return q.next(r)}function n(r){return q.throw(r)}return new Promise(function(r,z){function D(E){E.done?r(E.value):Promise.resolve(E.value).then(u,n).then(D,z)}D(q.next())})}aa("Array.prototype.includes",function(q){return q?q:function(u,n){var r=this;r instanceof String&&(r=String(r));var z=r.length;n=n||0;for(0>n&&(n=Math.max(n+z,0));n<z;n++){var D=r[n];if(D===u||Object.is(D,u))return!0}return!1}});
(function(){function q(a){return{position:a.position,G:a.is_mega,L:a.song_id,A:a.song_title,s:a.artist_name,u:a.preview_url,l:a.num_votes,Va:a.artwork_filename,backgroundColor:a.background_color,S:a.model_applied,ca:a.num_votes_orig,U:a.rank_orig}}function u(a){return new Promise(b=>{window.setTimeout(()=>b(),a)})}function n(a){let b=document.createElement("div");b.innerHTML=a;return b.firstChild}function r(a,b,c,d,f,e,h){return Z(function*(){try{var y=yield a.Za()}catch(A){if(A instanceof O)return;
console.error(A);return}let F=P.v(),C=Q.v();y=R.v(y,f,e);let w=g.b(c.parentNode);w.insertBefore(F.a,c);w.insertBefore(C.a,c);w.insertBefore(y.a,c);(new ba(y,F,C,d,a,b,h)).ia()}())}function z(a){try{localStorage.setItem("test","test");localStorage.removeItem("test");var b=!0}catch(c){b=!1}!b||17069184E5<Date.now()||(b=window.localStorage.getItem("100wt-donation-diag"),null!=b&&parseInt(b)>Date.now()||window.setTimeout(()=>ca(a),1E3*(45+Math.round(30*Math.random()))))}function D(){let a=Date.now();
return 17063136E5>a?Math.min(a+6048E5,17063136E5):a+6048E5}function E(){localStorage.setItem("100wt-donation-diag",String(D()))}function ca(a){function b(){document.body.classList.remove("noscroll");c.classList.remove("dialog--visible");window.setTimeout(()=>{c.remove()},200)}let c=document.createElement("div");c.classList.add("dialog");c.innerHTML='\n    <div class="dialog__content">\n       <img class="dialog__heroImg" src="/static/client/coffeecup.svg" alt="" /> \n       <h2>Enjoying The Predictions?&nbsp;\ud83d\udd25</h2>\n       <p>100 Warm Tunas involves a handful of server and 3rd party vendor costs, so a\n       small contribution will help to keep 100 Warm Tunas running for years to come.</p>\n       <p>You can show your support by buying me a coffee&nbsp;\u2615\ufe0f</p>\n       <div>\n       <a href="https://www.buymeacoffee.com/nickw444" target="_blank" rel="noreferrer nofollow" class="dialog__cta dialog__cta--brand" id="buyCoffeeCta">\n          Buy me a coffee&nbsp;\u2615\ufe0f\n       </a>\n      <button href="#" class="dialog__cta" id="noThanksCta">\n        No thanks\n      </button>\n      </div>\n    </div>\n  ';
g.b(c.querySelector("#noThanksCta")).addEventListener("click",()=>{a.va("no_thanks");b();E()});g.b(c.querySelector("#buyCoffeeCta")).addEventListener("click",()=>{a.va("buy_coffee");b();E()});let d=g.b(c.querySelector(".dialog__content")),f=0;c.addEventListener("click",e=>{let h=d.getBoundingClientRect();if(e.clientY<h.top||e.clientY>h.bottom||e.clientX<h.left||e.clientX>h.right)f++,1<f&&(a.va("backdrop"),b(),E())});document.body.appendChild(c);document.body.classList.add("noscroll");window.requestAnimationFrame(()=>
{c.classList.add("dialog--visible");a.Ub()})}function da(){ea();let a=g.b(document.querySelector(".header")),b=new fa(a);b.h(1,()=>{document.body.classList.add("noscroll");b.Ra(!0)});b.h(2,()=>{document.body.classList.remove("noscroll");b.Ra(!1)})}function ea(){let a;window.addEventListener("resize",()=>{document.body.classList.add("resizing");window.clearTimeout(a);a=window.setTimeout(()=>document.body.classList.remove("resizing"),200)})}function ha(){let a=document.querySelector(".hero__viewCountdownCta"),
b=document.querySelector(".countdown");a&&b&&a.addEventListener("click",()=>{ia({top:b.offsetTop-32,behavior:"smooth"})})}function ja(){"Australia/Sydney"!==Intl.DateTimeFormat().resolvedOptions().timeZone&&document.querySelectorAll(".localTime").forEach(a=>{let b=parseInt(x.B(a.dataset,"ts"),10);a.innerText=`(${(new Date(1E3*b)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})} in your time zone)`})}function J(a){return 0<a.touches.length?a.touches[0]:void 0}function ka(a,
b){let c=new la(g.b(document.querySelector(".player")));new ma(a,c,b)}function S(a,b){a=g.b(L(a,b,"result"));return new M(a)}function L(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function na(a){a=new oa(a);let b=new pa(a);return{sa:a,o:b}}function T(a,b,c,d){return Z(function*(){function f(m){w?A&&(A.style.display=m?"block":"none"):c&&c.V(m)}function e(){let m=document.createElement("div");var k=document.createElement("p");k.innerHTML=w?"Help us make a more accurate prediction \ud83d\udd25. Submit your votes by uploading them below:":
"<strong>Want a sneak peek?</strong> Upload a screenshot of your votes to take a look:";m.appendChild(k);let p=document.createElement("form");p.classList.add("votesUploaderForm");m.appendChild(p);k=document.createElement("label");k.setAttribute("for","fileInput");k.innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>\n    <span>Choose a file\u2026</span>\n';
p.appendChild(k);k=document.createElement("input");k.type="file";k.name="upload";k.accept="image/*";k.id="fileInput";p.appendChild(k);k.addEventListener("change",t=>h(t,{Kb:G,Ib:B}));k=void 0;w&&(k=document.createElement("div"),k.classList.add("loader"),k.innerHTML='<span class="countdown__statusIcon icon-spinner"></span>',k.style.display="none",m.appendChild(k));let l=document.createElement("div");l.classList.add("votesUploaderFormError");m.appendChild(l);let B=t=>{if(t){const U=document.createElement("p");
U.innerText=t;l.appendChild(U)}else l.innerHTML=""};if(w){let t=document.createElement("p");t.innerHTML='You can also submit your votes by sending a screenshot of your votes as a direct message to\n<a target="_blank" rel="noreferrer nofollow" class="hero__link"\n   href="https://www.instagram.com/100warmtunas/">@100warmtunas</a>\non Instagram.';m.appendChild(t)}let G=t=>{t?p.classList.add("votesUploaderForm--hidden"):p.classList.remove("votesUploaderForm--hidden")};return{Xb:m,lb:k}}function h(m,
k){var {Ib:p,Kb:l}=k;return Z(function*(){p(void 0);l(!0);f(!0);var B=g.b(g.b(m.target.files).item(0));let G;try{G=yield d.Xa({file:B})}catch(t){throw l(!1),p("Something went wrong whilst processing your image. Please try again later."),f(!1),t;}B=void 0;try{B=yield y({id:G.id,w:G.w})}catch(t){throw l(!1),p("Something went wrong whilst processing your image. Please try again later."),f(!1),t;}if(null!=B){switch(B){case "novotes":l(!1);p("We did not detect any valid votes in the image you uploaded. Please ensure you are uploading a screenshot of your vote confirmation from triple j.");
break;case "unknown":l(!1),p("Something went wrong whilst processing your image. Please try again later.")}f(!1)}else{try{yield F({id:G.id,w:G.w})}catch(t){throw l(!1),p("Something went wrong whilst processing your image. Please try again later."),f(!1),t;}try{let t=yield d.Y();C(t)}catch(t){throw p("Something went wrong whilst processing your image. Please try again later."),t;}finally{l(!1),f(!1)}}}())}function y(m){var {id:k,w:p}=m;return Z(function*(){let l=void 0;do null!=l&&(yield qa(1E3)),
l=yield d.bb({id:k,w:p});while("COMPLETE"!=l.state);if(null!=l.Aa||null!=l.wa)return"unknown";if(!l.Ga)return"novotes"}())}function F(m){var {id:k,w:p}=m;return Z(function*(){yield d.zb(new ra(void 0,k,p))}())}function C(m){return Z(function*(){let k=m.results.length;a.innerHTML=w?"Thanks for submitting your votes. This helps us build a more accurate prediction \ud83d\udc1f":`<strong>Thanks for submitting your votes</strong>. Here is your sneak peek of the top ${k}:`;c&&c.K(m.results.sort((l,B)=>
B.position-l.position).map(l=>({G:10<k&&10>=l.position,backgroundColor:l.backgroundColor,u:l.u,L:0,position:l.position,A:l.A,s:l.s,l:l.l,Ta:Math.round(l.l/m.R.ba*100),J:l.J,S:!1,U:void 0,ca:void 0})));let p=document.createElement("p");p.innerText=`Data was last processed at ${(new Date(1E3*m.R.ib)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})}. Data is based on ${m.R.l} votes counted across ${m.R.ba} entries.`;b&&b.Jb(p)}())}let w=null==b,A=void 0;try{f(!0);
let m=yield d.Y();C(m)}catch(m){if(m instanceof V){a.innerHTML="";let {Xb:k,lb:p}=e();A=p;a.appendChild(k)}}finally{f(!1)}}())}function qa(a){return new Promise(b=>{setTimeout(()=>b(),a)})}function sa(){let a=document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(K(()=>ta(a)),b.disconnect())});b.observe(a)}}function ta(a){let b=document.createElement("iframe");b.src=x.B(a.dataset,"spotifyEmbedUrl");b.width=b.height="300px";b.classList.add("header__spotifyEmbed");
b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};a.appendChild(b)}class ua{constructor(a){this.O=a}Vb(a,b,c,d){gtag("event","play",{send_to:this.O,event_category:"listen",event_action:"click",previewSrc:a,songId:b,songTitle:c,resultCurrentRank:d})}Sb(){gtag("event","controls_button_visible",{event_category:"controls"})}Tb(){gtag("event","controls_open",{event_category:"controls"})}Sa(a){gtag("event","controls_changed",{event_category:"controls",
event_label:a.join(", ")})}Ub(){gtag("event","donation_dialog_show",{event_category:"donation_dialog"})}va(a){gtag("event","donation_dialog_click",{event_category:"donation_dialog",event_action:"donation_dialog_click_"+a})}}class x{static B(a,b){return g.b(a[b])}static yb(a){return a.resultsUrlSlug}static Db(a){return a(g.b(window.bootstrap))}static xb(a,b){return a[b]}static Na(a,b){return x.xb(a,b)||!1}}class g{static b(a){if(null==a)throw Error("expected value");return a}}let K=window.requestIdleCallback||
(a=>window.setTimeout(a,50));class I extends Error{}class va extends I{}class wa extends I{}class V extends I{}class O extends I{}class xa{get(a){const b=this;return Z(function*(){let c=yield fetch(a,{credentials:"include"});b.Fa(c);return yield c.json()}())}oa(a,b){const c=this;return Z(function*(){let d=yield fetch(a,Object.assign({},b,{method:"POST",credentials:"include"}));c.Fa(d);return yield d.json()}())}Fa(a){switch(a.status){case 403:throw new V("Error: "+a.statusText);case 404:throw new O("Error: "+
a.statusText);}if(400<=a.status&&500>a.status)throw new wa("Error: "+a.statusText);if(500<=a.status&&600>a.status)throw new va("Error: "+a.statusText);if(200>a.status||300<=a.status)throw new I("Error: "+a.statusText);}}class ba{constructor(a,b,c,d,f,e,h){this.D=a;this.xa=b;this.mb=c;this.o=d;this.Fb=f;this.I=e;this.C=h;this.Ha=!1;this.pa=[];a.h(1,y=>this.vb(y));b.h(1,()=>this.Ma(!this.D.hb()));c.h(1,()=>this.Ma(!1));this.pa=this.D.Ba()}ia(){this.o.wb(a=>{this.xa.Rb(a);a&&!this.Ha&&(this.I.Sb(),this.Ha=
!0)})}vb(a){const b=this;return Z(function*(){if(0===a.length)K(()=>b.I.Sa([])),b.o.K([]),b.o.Pa("No media types selected. Please select at least one media type."),b.na=void 0;else{var c=b.D.Ba().filter(e=>!["modelled","exclude_placed"].includes(e)),d=a.filter(e=>!["modelled","exclude_placed"].includes(e));!b.pa.includes("modelled")&&a.includes("modelled")?c.forEach(e=>{b.D.Oa(e,!0)}):c.length!=d.length&&a.includes("modelled")&&b.D.Oa("modelled",!1);a=b.D.Ca();b.pa=a;b.o.V(!0);b.o.K([]);var f=b.na=
u(500).then(()=>{if(f!==b.na)throw new N;}).then(()=>{K(()=>b.I.Sa([...a].sort()));return b.Fb.Y(a)}).then(e=>{if(f!==b.na)throw new N;b.o.V(!1);b.o.K(e.Eb.map(h=>({G:h.G,backgroundColor:h.backgroundColor,u:h.u,L:h.L,position:h.position,A:h.A,s:h.s,l:h.l,Ta:Math.floor(h.l/e.ba*100),J:`/static/artwork/${b.C}/`+h.Va,S:h.S,U:h.U,ca:h.ca})))}).catch(e=>{if(!(e instanceof N))throw b.o.Pa("An error occurred whilst fetching data. Please try again."),e;})}}())}Ma(a){a&&this.I.Tb();this.mb.toggle(a);this.D.toggle(a);
this.xa.toggle(a)}}class N extends Error{}class H{constructor(a){this.a=a;this.za={}}i(a,...b){(a=this.za[a])&&a(...b)}h(a,b){this.za[a]=b}}class R extends H{constructor(a){super(a);this.aa=g.b(a.querySelector(".controls__form--mediaTypes"));this.aa.addEventListener("change",()=>this.i(1,this.Ca()))}static v(a,b,c){a=n(`<div class="controls controls--hidden">
  <div class="container container--narrow">
    <h3>Included Media Types</h3>
    <p>Fine-tune the prediction by selecting the specific media types to be counted.</p>
    <form class="controls__form controls__form--mediaTypes">
      ${c?'<div style="padding-bottom: 8px; margin-bottom:8px; border-bottom:1px solid #eee;"><label><input value="modelled" type="checkbox" checked autocomplete="off"> Enable ML Model \ud83d\udd2e\u2728 (experimental, <a href="/news/2023/01/ml-model-result-adjustment/" target="_blank">learn more</a>)</label></div>':""}
      ${b?'<div><label><input value="exclude_placed" type="checkbox" checked autocomplete="off"> Eliminate songs that have placed in the Hottest 200-101</label></div>':""}
      <div><label><input value="instagram_post" type="checkbox" checked autocomplete="off"> Instagram Posts <span class="controls__formMeta">(${a.fb} entries)</span></label>
      </div>
      <div><label><input value="instagram_direct_message" type="checkbox" checked autocomplete="off"> Instagram DMs <span class="controls__formMeta">(${a.eb} entries)</span></label>
      </div>
      <div><label><input value="instagram_story" type="checkbox" checked autocomplete="off"> Instagram Stories <span
          class="controls__formMeta">(${a.gb} entries)</span></label></div>
      <div><label><input value="twitter_post" type="checkbox" checked autocomplete="off"> Twitter Posts <span class="controls__formMeta">(${a.Wb}  entries)</span></label>
      </div>
      <div><label><input value="reddit_comment" type="checkbox" checked autocomplete="off"> Reddit Comments <span class="controls__formMeta">(${a.Cb}  entries)</span></label>
      </div>
      ${null!=a.Ua?`<div><label><input value="web_upload" type="checkbox" checked autocomplete="off"> Website Uploads <span class="controls__formMeta">(${a.Ua}  entries)</span></label></div>`:""}
    </form>
  </div>
</div>
`);return new R(a)}toggle(a){a?this.a.classList.remove("controls--hidden"):this.a.classList.add("controls--hidden")}hb(){return!this.a.classList.contains("controls--hidden")}Ca(){let a=[];this.aa.querySelectorAll('input[type="checkbox"]').forEach(b=>{b.checked&&a.push(b.value)});return a}Ba(){let a=[];this.aa.querySelectorAll('input[type="checkbox"]').forEach(b=>a.push(b.value));return a}Oa(a,b){g.b(this.aa.querySelector(`input[type="checkbox"][value="${a}"]`)).checked=b}}class P extends H{constructor(a){super(a);
a.addEventListener("click",()=>this.i(1))}static v(){let a=n('<div class="controls__buttonContainer controls__buttonContainer--hidden">\n  <button class="controls__button">\n    <span class="controls__icon icon-equalizer"></span>\n    <span class="controls__icon controls__icon--hidden icon-close"></span>\n  </button>\n</div>');return new P(a)}Rb(a){a?this.a.classList.remove("controls__buttonContainer--hidden"):this.a.classList.add("controls__buttonContainer--hidden")}toggle(a){let b=g.b(this.a.querySelector(".controls__icon.icon-equalizer")),
c=g.b(this.a.querySelector(".controls__icon.icon-close"));a?(b.classList.add("controls__icon--hidden"),c.classList.remove("controls__icon--hidden")):(b.classList.remove("controls__icon--hidden"),c.classList.add("controls__icon--hidden"))}}class Q extends H{constructor(a){super(a);a.addEventListener("click",()=>this.i(1))}static v(){let a=n('<div class="controls__mask controls__mask--hidden"></div>');return new Q(a)}toggle(a){a?(this.a.classList.remove("controls__mask--hidden"),document.body.classList.add("noscroll")):
(this.a.classList.add("controls__mask--hidden"),document.body.classList.remove("noscroll"))}}class fa extends H{constructor(a){super(a);this.nb=g.b(this.a.querySelector(".header__navList"));this.Ia=g.b(this.a.querySelector(".header__navListMask"));a=g.b(this.a.querySelector(".header__hamburgerButton"));let b=g.b(this.a.querySelector(".header__navListClose"));a.addEventListener("click",()=>this.i(1));[this.Ia,b].forEach(c=>c.addEventListener("click",()=>this.i(2)))}Ra(a){this.toggle(this.nb,a,"header__navList--visible");
this.toggle(this.Ia,a,"header__navListMask--visible")}toggle(a,b,c){b?a.classList.add(c):a.classList.remove(c)}}let ya=a=>{function b(){window.requestAnimationFrame(()=>{const e=Math.max(Math.min((Date.now()-f)/300,1),0);window.scrollTo(window.scrollX,c+(.5>e?2*e*e:-1+(4-2*e)*e)*d);1>e&&b()})}({top:a}=a);let c=window.scrollY;const d=a-c,f=Date.now();b()},ia="scrollBehavior"in document.documentElement.style?window.scrollTo:ya;console.log();class W{constructor(a){var {O:b,C:c,ja:d,ka:f}=a;this.O=b;
this.C=c;this.ja=d;this.ka=f}static j(a){return new W({O:x.B(a,"gaMeasurementId"),C:x.yb(a),ja:x.Na(a,"enableExcludePlacedControl"),ka:x.Na(a,"enableModelControl")})}}class ma{constructor(a,b,c){this.I=a;this.c=b;this.sa=c;this.H=1;this.f=void 0;this.c.h(1,()=>this.sb());this.c.h(3,()=>this.ub());this.c.h(2,()=>this.tb());this.c.h(4,()=>this.Ea(g.b(this.f),!0));this.c.h(6,d=>this.c.ta(d));this.c.h(5,d=>this.c.Mb(d));this.sa.h(1,this.Ea.bind(this))}Ea(a,b){if(this.f&&this.f.ya(a))switch(this.H){case 3:return this.resume();
case 2:return b&&this.pause();default:return}this.play(a)}play(a){if(!this.f||!this.f.ya(a)){this.H=2;null!=this.f&&this.f.Qa();this.f=a;a.play();var {ha:b,Ab:c,ga:d,Bb:f,L:e,title:h}=a.ab();this.c.Nb(c);this.c.ta(0);this.c.play();this.c.Lb({ha:b,title:h,ga:d});this.c.show();this.I.Vb(c,e,`${h} - ${d}`,f)}}pause(){this.H=3;this.c.pause()}resume(){this.H=2;this.c.play()}sb(){null!=this.f&&(this.H=1,this.f.Qa(),this.c.cb(),this.f=void 0)}tb(){null!=this.f&&(this.H=3,this.f.pause())}ub(){null!=this.f&&
(this.H=2,this.f.resume())}}class la extends H{constructor(a){super(a);this.g=void 0;this.P=!1;this.m=g.b(a.querySelector("audio"));this.M=g.b(this.a.querySelector(".player__artworkPlayButton span"));this.ra=g.b(this.a.querySelector(".player__progressIndicator"));this.m.onended=()=>this.i(1);this.m.onpause=()=>this.i(2);this.m.onplay=()=>this.i(3);this.m.ontimeupdate=()=>!this.P&&this.i(6,this.m.currentTime/this.m.duration);g.b(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",
()=>this.i(4));this.qa=g.b(this.a.querySelector(".player__progress"));this.qa.addEventListener("mousedown",b=>0===b.button&&this.da(b));this.qa.addEventListener("touchstart",b=>this.da(J(b)),{passive:!0});this.ra.addEventListener("mousedown",b=>0===b.button&&this.da(b));this.ra.addEventListener("touchstart",b=>this.da(J(b)),{passive:!0});window.addEventListener("mousemove",b=>this.Ka(b));window.addEventListener("touchmove",b=>this.Ka(J(b)),{passive:!0});window.addEventListener("mouseup",b=>this.La(b));
window.addEventListener("touchend",b=>this.La(J(b)),{passive:!0})}da(a){document.body.classList.add("dragging");this.P=!0;this.Z=this.la(g.b(a))}Ka(a){this.P&&(this.Z=this.la(g.b(a)),this.ta(this.Z))}La(a){this.P&&(document.body.classList.remove("dragging"),this.P=!1,a=null!=a?this.la(a):this.Z,this.Z=void 0,this.i(5,g.b(a)))}Nb(a){this.m.setAttribute("src",a)}Lb(a){var {ha:b,title:c,ga:d}=a;this.g||(this.g=document.createElement("img"),this.g.className="player__artworkImage",g.b(this.a.querySelector(".player__artwork")).appendChild(this.g));
b?this.g.src=b:(this.g.remove(),this.g=void 0);g.b(this.a.querySelector(".player__title")).innerText=c;g.b(this.a.querySelector(".player__artist")).innerText=d}pause(){this.M.className="icon-play2";this.m.pause()}play(){this.M.className="icon-pause";this.m.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}cb(){this.a.classList.add("player--hidden");document.body.classList.remove("hasPlayer")}Mb(a){this.m.currentTime=a*this.m.duration}ta(a){this.ra.style.transform=
`translateX(calc(${-12+-12*a}px + ${100*a}%)`}la(a){let {left:b,width:c}=this.qa.getBoundingClientRect();return Math.max(Math.min((a.clientX-(b+6))/(c-12),1),0)}}class za{constructor(a,b){this.id=a;this.w=b}static j(a){return{id:a.id,w:a.secret}}}class Aa{constructor(a,b,c,d,f){this.id=a;this.state=b;this.Aa=c;this.Ga=d;this.wa=f}static j(a){return{id:a.id,state:a.state,Aa:a.failureReason,Ga:a.hasMatchedVotes,wa:a.accessTokenUuid}}}class Ba{constructor(a,b,c,d,f,e,h){this.position=a;this.A=b;this.s=
c;this.u=d;this.l=f;this.J=e;this.backgroundColor=h}static j(a){return{position:a.position,A:a.songTitle,s:a.artistName,u:a.previewUrl,l:a.numVotes,J:a.artworkUrl,backgroundColor:a.backgroundColor}}}class Ca{constructor(a,b){this.results=a;this.R=b}static j(a){return{results:a.results.map(b=>Ba.j(b)),R:{ba:a.meta.numEntries,l:a.meta.numVotes,ob:a.meta.numPreviousYearVotes,ib:a.meta.lastProcessed}}}}class ra{constructor(a,b,c){this.jb=a;this.Pb=b;this.Qb=c}Gb(){return{linkingToken:this.jb,submissionId:this.Pb,
submissionSecret:this.Qb}}}class Da{constructor(a,b){this.F=a;this.W=b}Xa(a){const b=this;return Z(function*(){var c=new FormData;c.append("file",a.file);c=yield b.F.oa(b.W+"/submission",{body:c,headers:void 0});return za.j(c)}())}bb(a){const b=this;return Z(function*(){let c=yield b.F.oa(b.W+`/submission/${a.id}`,{body:JSON.stringify({secret:a.w}),headers:{"Content-Type":"application/json"}});return Aa.j(c)}())}Y(){const a=this;return Z(function*(){let b=yield a.F.get(a.W+"/results");return Ca.j(b)}())}zb(a){const b=
this;return Z(function*(){yield b.F.oa(b.W+"/exchange",{body:JSON.stringify(a.Gb()),headers:{"Content-Type":"application/json"}});return{}}())}}class pa{constructor(a){this.view=a;this.T=new Map;this.ma=new Set;a.h(2,this.qb.bind(this))}V(a){this.view.Da().V(a)}Pa(a){this.view.Da().Ob(a)}K(a){this.view.K(a);this.T.clear();this.ma.clear()}wb(a){this.view.Wa();this.view.h(3,a)}qb(a,b,c,d,f){b?this.T.has(c)||(a.Hb(),b=window.setTimeout(()=>{this.ma.has(c)||(this.ma.add(c),a.kb(c,d),f())},200),this.T.set(c,
b)):(window.clearInterval(this.T.get(c)),this.T.delete(c))}}class M{constructor(a){this.a=a;this.M=this.a.querySelector(".result__artworkPlayButton span");this.g=g.b(this.a.querySelector(".result__artwork"))}static v(a){a=n(`<li class="result${a.G?" result--mega":""}"
      style="${a.G?`background: #${a.backgroundColor} radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)`:""}"
      data-preview-src="${a.u}"
      data-song-id="${a.L}"
      >
        <div class="container container--narrow">
          <div class="result__content">
            <div class="result__rankContainer">
              <div class="result__rank">${a.position}</div>
            </div>
            <div class="result__details">
              <div class="result__trackTitle">${a.A}</div>
              <div class="result__artistName">${a.s}</div>
              <div class="result__voteDetails">${a.ca||a.l}
                votes (${a.Ta}%)
                ${a.u?'\n                    &nbsp;&nbsp;|&nbsp;&nbsp;\n                    <button class="result__listenButton">\n                      <span class="icon-play2"></span>&nbsp;Listen\n                    </button>\n                ':""}
                ${!a.G&&a.S?`
                  &nbsp;&nbsp;|&nbsp;&nbsp;\u2728 ML Model Applied (was #${a.U})
                `:""}
              </div>
              ${a.G&&a.S?`
                <div class="result__voteBounds">
                  \u2728 ML Model Applied (was #${a.U})
                </div>
              `:""}
            </div>
            <div class="result__artwork">
                ${a.J?`
                <div class="result__artworkSpinner">
                    <div class="result__artworkPlaceholder"
                         data-alt="Cover artwork for ${a.A} - ${a.s}"
                         data-src="${a.J}"></div>
                  </div>
                  ${a.u?`
                  <button class="result__artworkPlayButton"
                            aria-label="Play ${a.A} by ${a.s}">
                      <span class="icon-play2"></span>
                    </button>
                  `:""}
                `:""}
            </div>
          </div>
        </div>
      </li>
`);return new M(a)}ya(a){return this.a===a.a}ab(){return{Bb:this.a.querySelector(".result__rank").textContent,ha:this.Ya(),L:x.B(this.a.dataset,"songId"),Ab:x.B(this.a.dataset,"previewSrc"),ga:this.a.querySelector(".result__artistName").textContent,title:this.a.querySelector(".result__trackTitle").textContent}}Ya(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?x.B(b.dataset,"src"):void 0}play(){this.g.classList.add("result__artwork--prePlay");
this.ea("icon-pause");window.setTimeout(()=>{this.g.classList.add("result__artwork--playing")},300)}pause(){this.g.classList.add("result__artwork--paused");this.ea("icon-play2")}resume(){this.g.classList.remove("result__artwork--paused");this.ea("icon-pause")}Qa(){this.g.classList.add("result__artwork--fadeout");this.ea("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>
{this.g.classList.remove("result__artwork--fadeout")})})},350)}Hb(){g.b(this.a.querySelector(".result__artworkPlaceholder")).classList.add("result__artworkPlaceholder--loading")}kb(a,b){let c=g.b(this.a.querySelector(".result__artworkPlaceholder")),d=new Image;d.src=a;d.alt=b;d.classList.add("result__artworkImage","result__artworkImage--fadein");d.onload=()=>{c.parentNode.insertBefore(d,c);c.remove()};d.onerror=()=>{c.classList.remove("result__artworkPlaceholder--loading")}}ea(a){this.M&&(this.M.className=
a)}}class X{constructor(a){this.a=a}static v(){let a=document.createElement("div");a.className="countdown__statusIndicator countdown__statusIndicator--hidden";return new X(a)}V(a){a?(this.fa(!0),this.a.innerHTML='<div class="countdown__statusIcon"><span class="icon-spinner"></span></div>'):this.fa(!1)}Ob(a){if(a){this.fa(!0);var b=document.createElement("div");b.className="countdown__statusMessage";b.innerText=a;this.a.innerHTML="";this.a.appendChild(b)}else this.fa(!1)}fa(a){a?this.a.classList.remove("countdown__statusIndicator--hidden"):
this.a.classList.add("countdown__statusIndicator--hidden")}}class oa extends H{constructor(a){super(a);this.$=g.b(this.a.querySelector(".countdown__list"))}ia(){this.a.addEventListener("click",a=>this.rb(a));this.Ja()}Da(){this.ua||(this.ua=X.v(),this.a.insertBefore(this.ua.a,this.$));return this.ua}K(a){this.$.innerHTML="";for(let b of a)a=M.v(b),this.$.appendChild(a.a);this.Ja()}Jb(a){null==this.N&&(this.N=document.createElement("div"),this.N.classList.add("container","container--narrow","countdown__footnote"),
this.a.appendChild(this.N));this.N.innerHTML="";this.N.appendChild(a)}Wa(){(new IntersectionObserver(a=>{a.length&&this.i(3,a[0].isIntersecting)},{rootMargin:"-96px 0px"})).observe(this.$)}rb(a){let b=L(a.target,this.a,"result__artworkPlayButton");a=L(a.target,this.a,"result__listenButton");if(a=b||a){let c=S(a,this.a);this.i(1,c,a===b)}}Ja(){let a=this.$a();this.a.querySelectorAll(".result__artworkPlaceholder").forEach(b=>a.observe(b))}$a(){return this.X?this.X:this.X=new IntersectionObserver(a=>
this.pb(g.b(this.X),a))}pb(a,b){b.forEach(c=>{let d=c.target,f=S(d,this.a),e=x.B(d.dataset,"src"),h=x.B(d.dataset,"alt");this.i(2,f,c.isIntersecting,e,h,()=>a.unobserve(d))})}}let Ea={j(a){return{ba:a.num_entries,l:a.num_votes,ob:a.numPreviousYearVotes,Yb:a.last_processed_ts,Eb:a.results_0_100.map(q)}}},Fa={j(a){return{fb:a.instagram_post,eb:a.instagram_direct_message,gb:a.instagram_story,Wb:a.twitter_post,Cb:a.reddit_comment,Ua:a.web_upload}}};class Ga{constructor(a,b){this.F=a;this.C=b}Y(a){const b=
this;return Z(function*(){var c=[...a].sort();c=yield b.F.get(`/static/results/${b.C}/`+c.join("+")+".json");return Ea.j(c)}())}Za(){const a=this;return Z(function*(){let b=yield a.F.get(`/static/results/${a.C}/entryCountsBySource.json`);return Fa.j(b)}())}}document.addEventListener("DOMContentLoaded",function(){let {O:a,C:b,ja:c,ka:d}=x.Db(W.j),f=new ua(a),e=document.querySelector(".countdown"),h=document.querySelector(".uploader"),y=document.querySelector(".uploaderRoot--installGa"),F=new xa,C=
new Da(F,window.location.href.includes("localhost")?"http://localhost:8000":"https://s.100warmtunas.com");y&&(y.classList.add("uploader","uploader--ga"),T(y,void 0,void 0,C));if(null!=e){let {sa:w,o:A}=na(e);ka(f,w);z(f);w.ia();null!=h&&T(h,w,A,C);K(()=>{if(b){let m=new Ga(F,b);r(m,f,e,A,c,d,b)}})}sa();da();ha();ja()})})();
//# sourceMappingURL=6b300aec.js.map
