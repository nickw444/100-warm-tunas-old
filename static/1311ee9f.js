'use strict';var aa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(p,v,m){p!=Array.prototype&&p!=Object.prototype&&(p[v]=m.value)};function ca(p,v){if(v){var m=aa;p=p.split(".");for(var r=0;r<p.length-1;r++){var A=p[r];A in m||(m[A]={});m=m[A]}p=p[p.length-1];r=m[p];v=v(r);v!=r&&null!=v&&ba(m,p,{configurable:!0,writable:!0,value:v})}}
function w(p){function v(r){return p.next(r)}function m(r){return p.throw(r)}return new Promise(function(r,A){function E(F){F.done?r(F.value):Promise.resolve(F.value).then(v,m).then(E,A)}E(p.next())})}ca("Array.prototype.includes",function(p){return p?p:function(v,m){var r=this;r instanceof String&&(r=String(r));var A=r.length;m=m||0;for(0>m&&(m=Math.max(m+A,0));m<A;m++){var E=r[m];if(E===v||Object.is(E,v))return!0}return!1}});
(function(){function p(a){return{position:a.position,F:a.is_mega,H:a.song_id,M:a.song_title,v:a.artist_name,w:a.preview_url,s:a.num_votes,Za:a.artwork_filename,backgroundColor:a.background_color,T:a.model_applied,ca:a.num_votes_orig,W:a.rank_orig}}function v(a){return new Promise(b=>{window.setTimeout(()=>b(),a)})}function m(a){let b=document.createElement("div");b.innerHTML=a;return b.firstChild}function r(a,b,c,d,h,e,f){return w(function*(){try{var z=yield a.cb()}catch(B){if(B instanceof O)return;
console.error(B);return}let G=P.u(),D=Q.u();z=R.u(z,h,e);let x=g.b(c.parentNode);x.insertBefore(G.a,c);x.insertBefore(D.a,c);x.insertBefore(z.a,c);(new da(z,G,D,d,a,b,f)).ia()}())}function A(a){try{localStorage.setItem("test","test");localStorage.removeItem("test");var b=!0}catch(c){b=!1}!b||17069184E5<Date.now()||(b=window.localStorage.getItem("100wt-donation-diag"),null!=b&&parseInt(b)>Date.now()||window.setTimeout(()=>ea(a),1E3*(45+Math.round(30*Math.random()))))}function E(){let a=Date.now();
return 17063136E5>a?Math.min(a+6048E5,17063136E5):a+6048E5}function F(){localStorage.setItem("100wt-donation-diag",String(E()))}function ea(a){function b(){document.body.classList.remove("noscroll");c.classList.remove("dialog--visible");window.setTimeout(()=>{c.remove()},200)}let c=document.createElement("div");c.classList.add("dialog");c.innerHTML='\n    <div class="dialog__content">\n       <img class="dialog__heroImg" src="/static/client/coffeecup.svg" alt="" /> \n       <h2>Enjoying The Predictions?&nbsp;\ud83d\udd25</h2>\n       <p>100 Warm Tunas involves a handful of server and 3rd party vendor costs, so a\n       small contribution will help to keep 100 Warm Tunas running for years to come.</p>\n       <p>You can show your support by buying me a coffee&nbsp;\u2615\ufe0f</p>\n       <div>\n       <a href="https://www.buymeacoffee.com/nickw444" target="_blank" rel="noreferrer nofollow" class="dialog__cta dialog__cta--brand" id="buyCoffeeCta">\n          Buy me a coffee&nbsp;\u2615\ufe0f\n       </a>\n      <button href="#" class="dialog__cta" id="noThanksCta">\n        No thanks\n      </button>\n      </div>\n    </div>\n  ';
g.b(c.querySelector("#noThanksCta")).addEventListener("click",()=>{a.va("no_thanks");b();F()});g.b(c.querySelector("#buyCoffeeCta")).addEventListener("click",()=>{a.va("buy_coffee");b();F()});let d=g.b(c.querySelector(".dialog__content")),h=0;c.addEventListener("click",e=>{let f=d.getBoundingClientRect();if(e.clientY<f.top||e.clientY>f.bottom||e.clientX<f.left||e.clientX>f.right)h++,1<h&&(a.va("backdrop"),b(),F())});document.body.appendChild(c);document.body.classList.add("noscroll");window.requestAnimationFrame(()=>
{c.classList.add("dialog--visible");a.Sb()})}function fa(){ha();let a=g.b(document.querySelector(".header")),b=new ia(a);b.i(1,()=>{document.body.classList.add("noscroll");b.Sa(!0)});b.i(2,()=>{document.body.classList.remove("noscroll");b.Sa(!1)})}function ha(){let a;window.addEventListener("resize",()=>{document.body.classList.add("resizing");window.clearTimeout(a);a=window.setTimeout(()=>document.body.classList.remove("resizing"),200)})}function ja(){let a=document.querySelector(".hero__viewCountdownCta"),
b=document.querySelector(".countdown");a&&b&&a.addEventListener("click",()=>{ka({top:b.offsetTop-32,behavior:"smooth"})})}function la(){"Australia/Sydney"!==Intl.DateTimeFormat().resolvedOptions().timeZone&&document.querySelectorAll(".localTime").forEach(a=>{let b=parseInt(y.A(a.dataset,"ts"),10);a.innerText=`(${(new Date(1E3*b)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})} in your time zone)`})}function J(a){return 0<a.touches.length?a.touches[0]:void 0}function ma(a,
b){let c=new na(g.b(document.querySelector(".player")));new oa(a,c,b)}function S(a,b){a=g.b(L(a,b,"result"));return new M(a)}function L(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function pa(a){a=new qa(a);let b=new ra(a);return{sa:a,o:b}}function T(a,b,c,d){return w(function*(){function h(l){x?B&&(B.style.display=l?"block":"none"):c&&c.X(l)}function e(){let l=document.createElement("div");var k=document.createElement("p");k.innerHTML=x?"Help us make a more accurate prediction \ud83d\udd25. Submit your votes by uploading them below:":
"<strong>Want a sneak peek?</strong> Upload a screenshot of your votes to take a look:";l.appendChild(k);let n=document.createElement("form");n.classList.add("votesUploaderForm");l.appendChild(n);k=document.createElement("label");k.setAttribute("for","fileInput");k.innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>\n    <span>Choose a file\u2026</span>\n';
n.appendChild(k);k=document.createElement("input");k.type="file";k.name="upload";k.accept="image/*";k.id="fileInput";n.appendChild(k);k.addEventListener("change",u=>f(u,{Kb:C,Ib:q}));k=void 0;x&&(k=document.createElement("div"),k.classList.add("loader"),k.innerHTML='<span class="countdown__statusIcon icon-spinner"></span>',k.style.display="none",l.appendChild(k));let t=document.createElement("div");t.classList.add("votesUploaderFormError");l.appendChild(t);let q=u=>{if(u){const U=document.createElement("p");
U.innerText=u;t.appendChild(U)}else t.innerHTML=""};if(x){let u=document.createElement("p");u.innerHTML='You can also submit your votes by sending a screenshot of your votes as a direct message to\n<a target="_blank" rel="noreferrer nofollow" class="hero__link"\n   href="https://www.instagram.com/100warmtunas/">@100warmtunas</a>\non Instagram.';l.appendChild(u)}let C=u=>{u?n.classList.add("votesUploaderForm--hidden"):n.classList.remove("votesUploaderForm--hidden")};return{Ub:l,nb:k}}function f(l,
k){var {Ib:n,Kb:t}=k;return w(function*(){n(void 0);t(!0);h(!0);var q=g.b(g.b(l.target.files).item(0));let C;try{C=yield d.ab({file:q})}catch(u){throw t(!1),n("Something went wrong whilst processing your image. Please try again later."),h(!1),u;}q=void 0;try{q=yield z({I:C.id,l:C.l})}catch(u){throw t(!1),n("Something went wrong whilst processing your image. Please try again later."),h(!1),u;}if(null!=q){switch(q){case "novotes":t(!1);n("We did not detect any valid votes in the image you uploaded. Please ensure you are uploading a screenshot of your vote confirmation from triple j.");
break;case "timeout":t(!1),n("Something went wrong whilst processing your image. Please try again later.")}h(!1)}else{try{yield G({I:C.id,l:C.l})}catch(u){throw t(!1),n("Something went wrong whilst processing your image. Please try again later."),h(!1),u;}try{let u=yield d.Aa();D(u)}catch(u){throw n("Something went wrong whilst processing your image. Please try again later."),u;}finally{t(!1),h(!1)}}}())}function z(l){var {I:k,l:n}=l;return w(function*(){let t=void 0,q=Date.now();do{null!=t&&(yield sa(1E3));
if(3E4<Date.now()-q)return"timeout";t=yield d.hb({I:k,l:n})}while("processed"!=t.state);if(0==t.Ia.length)return"novotes"}())}function G(l){var {I:k,l:n}=l;return w(function*(){yield d.Ab(new ta(k,n))}())}function D(l){return w(function*(){let k=l.results.length;if(!x&&0<k){a.innerHTML=`<strong>Thanks for submitting your votes</strong>. Here is your sneak peek of the top ${k}:`;c&&c.K(l.results.sort((q,C)=>C.position-q.position).map(q=>{if(null==q.L)throw Error("Song is not hydrated.");return{F:10<
k&&10>=q.position,backgroundColor:q.L.Ya,w:q.L.w,H:0,position:q.position,M:q.L.title,v:q.L.v,s:q.Va,Wa:Math.round(q.Va/l.U*100),O:q.L.O,T:!1,W:void 0,ca:void 0}}));var n=document.createElement("p"),t="";null!=l.ma&&(t=`Data was last processed at ${(new Date(1E3*l.ma)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})}. `);n.innerText=`${t}Data is based on ${l.s} votes counted across ${l.U} entries.`;b&&b.Jb(n)}else a.innerHTML="Thanks for submitting your votes. This helps us build a more accurate prediction \ud83d\udc1f"}())}
let x=null==b,B=void 0;try{h(!0);let l=yield d.Aa();D(l)}catch(l){if(l instanceof V){a.innerHTML="";let {Ub:k,nb:n}=e();B=n;a.appendChild(k)}else throw l;}finally{h(!1)}}())}function sa(a){return new Promise(b=>{setTimeout(()=>b(void 0),a)})}function ua(){let a=document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(K(()=>va(a)),b.disconnect())});b.observe(a)}}function va(a){let b=document.createElement("iframe");b.src=y.A(a.dataset,"spotifyEmbedUrl");
b.width=b.height="300px";b.classList.add("header__spotifyEmbed");b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};a.appendChild(b)}class wa{constructor(a){this.R=a}Tb(a,b,c,d){gtag("event","play",{send_to:this.R,event_category:"listen",event_action:"click",previewSrc:a,songId:b,songTitle:c,resultCurrentRank:d})}Qb(){gtag("event","controls_button_visible",{event_category:"controls"})}Rb(){gtag("event","controls_open",{event_category:"controls"})}Ta(a){gtag("event",
"controls_changed",{event_category:"controls",event_label:a.join(", ")})}Sb(){gtag("event","donation_dialog_show",{event_category:"donation_dialog"})}va(a){gtag("event","donation_dialog_click",{event_category:"donation_dialog",event_action:"donation_dialog_click_"+a})}}class y{static A(a,b){return g.b(a[b])}static zb(a){return a.resultsUrlSlug}static Eb(a){return a(g.b(window.bootstrap))}static yb(a,b){return a[b]}static Oa(a,b){return y.yb(a,b)||!1}}class g{static b(a){if(null==a)throw Error("expected value");
return a}}let K=window.requestIdleCallback||(a=>window.setTimeout(a,50));class I extends Error{}class xa extends I{}class ya extends I{}class V extends I{}class O extends I{}class za{get(a,b){const c=this;return w(function*(){let d=yield fetch(a,Object.assign({},b,{credentials:"include"}));c.Ea(d);return yield d.json()}())}Na(a,b){const c=this;return w(function*(){let d=yield fetch(a,Object.assign({},b,{method:"POST",credentials:"include"}));c.Ea(d);return yield d.json()}())}Ea(a){switch(a.status){case 403:throw new V("Error: "+
a.statusText);case 404:throw new O("Error: "+a.statusText);}if(400<=a.status&&500>a.status)throw new ya("Error: "+a.statusText);if(500<=a.status&&600>a.status)throw new xa("Error: "+a.statusText);if(200>a.status||300<=a.status)throw new I("Error: "+a.statusText);}}class da{constructor(a,b,c,d,h,e,f){this.C=a;this.wa=b;this.ob=c;this.o=d;this.Gb=h;this.J=e;this.B=f;this.Fa=!1;this.pa=[];a.i(1,z=>this.wb(z));b.i(1,()=>this.Ma(!this.C.lb()));c.i(1,()=>this.Ma(!1));this.pa=this.C.za()}ia(){this.o.xb(a=>
{this.wa.Pb(a);a&&!this.Fa&&(this.J.Qb(),this.Fa=!0)})}wb(a){const b=this;return w(function*(){if(0===a.length)K(()=>b.J.Ta([])),b.o.K([]),b.o.Qa("No media types selected. Please select at least one media type."),b.oa=void 0;else{var c=b.C.za().filter(e=>!["modelled","exclude_placed"].includes(e)),d=a.filter(e=>!["modelled","exclude_placed"].includes(e));!b.pa.includes("modelled")&&a.includes("modelled")?c.forEach(e=>{b.C.Pa(e,!0)}):c.length!=d.length&&a.includes("modelled")&&b.C.Pa("modelled",!1);
a=b.C.Ba();b.pa=a;b.o.X(!0);b.o.K([]);var h=b.oa=v(500).then(()=>{if(h!==b.oa)throw new N;}).then(()=>{K(()=>b.J.Ta([...a].sort()));return b.Gb.fb(a)}).then(e=>{if(h!==b.oa)throw new N;b.o.X(!1);b.o.K(e.Fb.map(f=>({F:f.F,backgroundColor:f.backgroundColor,w:f.w,H:f.H,position:f.position,M:f.M,v:f.v,s:f.s,Wa:Math.floor(f.s/e.U*100),O:`/static/artwork/${b.B}/`+f.Za,T:f.T,W:f.W,ca:f.ca})))}).catch(e=>{if(!(e instanceof N))throw b.o.Qa("An error occurred whilst fetching data. Please try again."),e;})}}())}Ma(a){a&&
this.J.Rb();this.ob.toggle(a);this.C.toggle(a);this.wa.toggle(a)}}class N extends Error{}class H{constructor(a){this.a=a;this.ya={}}j(a,...b){(a=this.ya[a])&&a(...b)}i(a,b){this.ya[a]=b}}class R extends H{constructor(a){super(a);this.ba=g.b(a.querySelector(".controls__form--mediaTypes"));this.ba.addEventListener("change",()=>this.j(1,this.Ba()))}static u(a,b,c){a=m(`<div class="controls controls--hidden">
  <div class="container container--narrow">
    <h3>Included Media Types</h3>
    <p>Fine-tune the prediction by selecting the specific media types to be counted.</p>
    <form class="controls__form controls__form--mediaTypes">
      ${c?'<div style="padding-bottom: 8px; margin-bottom:8px; border-bottom:1px solid #eee;"><label><input value="modelled" type="checkbox" checked autocomplete="off"> Enable ML Model \ud83d\udd2e\u2728 (experimental, <a href="/news/2023/01/ml-model-result-adjustment/" target="_blank">learn more</a>)</label></div>':""}
      ${b?'<div><label><input value="exclude_placed" type="checkbox" checked autocomplete="off"> Eliminate songs that have placed in the Hottest 200-101</label></div>':""}
      <div><label><input value="instagram_post" type="checkbox" checked autocomplete="off"> Instagram Posts <span class="controls__formMeta">(${a.kb} entries)</span></label>
      </div>
      <div><label><input value="instagram_direct_message" type="checkbox" checked autocomplete="off"> Instagram DMs <span class="controls__formMeta">(${a.jb} entries)</span></label>
      </div>
      ${a.Ga?`<div><label><input value="instagram_story" type="checkbox" checked autocomplete="off"> Instagram Stories <span class="controls__formMeta">(${a.Ga} entries)</span></label></div>`:""}
      ${a.Ua?`<div><label><input value="twitter_post" type="checkbox" checked autocomplete="off"> Twitter Posts <span class="controls__formMeta">(${a.Ua}  entries)</span></label></div>`:""}
      <div><label><input value="reddit_comment" type="checkbox" checked autocomplete="off"> Reddit Comments <span class="controls__formMeta">(${a.Db}  entries)</span></label>
      </div>
      ${null!=a.Xa?`<div><label><input value="web_upload" type="checkbox" checked autocomplete="off"> Website Uploads <span class="controls__formMeta">(${a.Xa}  entries)</span></label></div>`:""}
    </form>
  </div>
</div>
`);return new R(a)}toggle(a){a?this.a.classList.remove("controls--hidden"):this.a.classList.add("controls--hidden")}lb(){return!this.a.classList.contains("controls--hidden")}Ba(){let a=[];this.ba.querySelectorAll('input[type="checkbox"]').forEach(b=>{b.checked&&a.push(b.value)});return a}za(){let a=[];this.ba.querySelectorAll('input[type="checkbox"]').forEach(b=>a.push(b.value));return a}Pa(a,b){g.b(this.ba.querySelector(`input[type="checkbox"][value="${a}"]`)).checked=b}}class P extends H{constructor(a){super(a);
a.addEventListener("click",()=>this.j(1))}static u(){let a=m('<div class="controls__buttonContainer controls__buttonContainer--hidden">\n  <button class="controls__button">\n    <span class="controls__icon icon-equalizer"></span>\n    <span class="controls__icon controls__icon--hidden icon-close"></span>\n  </button>\n</div>');return new P(a)}Pb(a){a?this.a.classList.remove("controls__buttonContainer--hidden"):this.a.classList.add("controls__buttonContainer--hidden")}toggle(a){let b=g.b(this.a.querySelector(".controls__icon.icon-equalizer")),
c=g.b(this.a.querySelector(".controls__icon.icon-close"));a?(b.classList.add("controls__icon--hidden"),c.classList.remove("controls__icon--hidden")):(b.classList.remove("controls__icon--hidden"),c.classList.add("controls__icon--hidden"))}}class Q extends H{constructor(a){super(a);a.addEventListener("click",()=>this.j(1))}static u(){let a=m('<div class="controls__mask controls__mask--hidden"></div>');return new Q(a)}toggle(a){a?(this.a.classList.remove("controls__mask--hidden"),document.body.classList.add("noscroll")):
(this.a.classList.add("controls__mask--hidden"),document.body.classList.remove("noscroll"))}}class ia extends H{constructor(a){super(a);this.pb=g.b(this.a.querySelector(".header__navList"));this.Ha=g.b(this.a.querySelector(".header__navListMask"));a=g.b(this.a.querySelector(".header__hamburgerButton"));let b=g.b(this.a.querySelector(".header__navListClose"));a.addEventListener("click",()=>this.j(1));[this.Ha,b].forEach(c=>c.addEventListener("click",()=>this.j(2)))}Sa(a){this.toggle(this.pb,a,"header__navList--visible");
this.toggle(this.Ha,a,"header__navListMask--visible")}toggle(a,b,c){b?a.classList.add(c):a.classList.remove(c)}}let Aa=a=>{function b(){window.requestAnimationFrame(()=>{const e=Math.max(Math.min((Date.now()-h)/300,1),0);window.scrollTo(window.scrollX,c+(.5>e?2*e*e:-1+(4-2*e)*e)*d);1>e&&b()})}({top:a}=a);let c=window.scrollY;const d=a-c,h=Date.now();b()},ka="scrollBehavior"in document.documentElement.style?window.scrollTo:Aa;console.log();class W{constructor(a){var {R:b,B:c,ja:d,ka:h}=a;this.R=b;
this.B=c;this.ja=d;this.ka=h}static h(a){return new W({R:y.A(a,"gaMeasurementId"),B:y.zb(a),ja:y.Oa(a,"enableExcludePlacedControl"),ka:y.Oa(a,"enableModelControl")})}}class oa{constructor(a,b,c){this.J=a;this.c=b;this.sa=c;this.G=1;this.f=void 0;this.c.i(1,()=>this.tb());this.c.i(3,()=>this.vb());this.c.i(2,()=>this.ub());this.c.i(4,()=>this.Da(g.b(this.f),!0));this.c.i(6,d=>this.c.ta(d));this.c.i(5,d=>this.c.Mb(d));this.sa.i(1,this.Da.bind(this))}Da(a,b){if(this.f&&this.f.xa(a))switch(this.G){case 3:return this.resume();
case 2:return b&&this.pause();default:return}this.play(a)}play(a){if(!this.f||!this.f.xa(a)){this.G=2;null!=this.f&&this.f.Ra();this.f=a;a.play();var {ha:b,Bb:c,ga:d,Cb:h,H:e,title:f}=a.gb();this.c.Nb(c);this.c.ta(0);this.c.play();this.c.Lb({ha:b,title:f,ga:d});this.c.show();this.J.Tb(c,e,`${f} - ${d}`,h)}}pause(){this.G=3;this.c.pause()}resume(){this.G=2;this.c.play()}tb(){null!=this.f&&(this.G=1,this.f.Ra(),this.c.ib(),this.f=void 0)}ub(){null!=this.f&&(this.G=3,this.f.pause())}vb(){null!=this.f&&
(this.G=2,this.f.resume())}}class na extends H{constructor(a){super(a);this.g=void 0;this.S=!1;this.m=g.b(a.querySelector("audio"));this.N=g.b(this.a.querySelector(".player__artworkPlayButton span"));this.ra=g.b(this.a.querySelector(".player__progressIndicator"));this.m.onended=()=>this.j(1);this.m.onpause=()=>this.j(2);this.m.onplay=()=>this.j(3);this.m.ontimeupdate=()=>!this.S&&this.j(6,this.m.currentTime/this.m.duration);g.b(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",
()=>this.j(4));this.qa=g.b(this.a.querySelector(".player__progress"));this.qa.addEventListener("mousedown",b=>0===b.button&&this.da(b));this.qa.addEventListener("touchstart",b=>this.da(J(b)),{passive:!0});this.ra.addEventListener("mousedown",b=>0===b.button&&this.da(b));this.ra.addEventListener("touchstart",b=>this.da(J(b)),{passive:!0});window.addEventListener("mousemove",b=>this.Ka(b));window.addEventListener("touchmove",b=>this.Ka(J(b)),{passive:!0});window.addEventListener("mouseup",b=>this.La(b));
window.addEventListener("touchend",b=>this.La(J(b)),{passive:!0})}da(a){document.body.classList.add("dragging");this.S=!0;this.$=this.la(g.b(a))}Ka(a){this.S&&(this.$=this.la(g.b(a)),this.ta(this.$))}La(a){this.S&&(document.body.classList.remove("dragging"),this.S=!1,a=null!=a?this.la(a):this.$,this.$=void 0,this.j(5,g.b(a)))}Nb(a){this.m.setAttribute("src",a)}Lb(a){var {ha:b,title:c,ga:d}=a;this.g||(this.g=document.createElement("img"),this.g.className="player__artworkImage",g.b(this.a.querySelector(".player__artwork")).appendChild(this.g));
b?this.g.src=b:(this.g.remove(),this.g=void 0);g.b(this.a.querySelector(".player__title")).innerText=c;g.b(this.a.querySelector(".player__artist")).innerText=d}pause(){this.N.className="icon-play2";this.m.pause()}play(){this.N.className="icon-pause";this.m.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}ib(){this.a.classList.add("player--hidden");document.body.classList.remove("hasPlayer")}Mb(a){this.m.currentTime=a*this.m.duration}ta(a){this.ra.style.transform=
`translateX(calc(${-12+-12*a}px + ${100*a}%)`}la(a){let {left:b,width:c}=this.qa.getBoundingClientRect();return Math.max(Math.min((a.clientX-(b+6))/(c-12),1),0)}}class Ba{constructor(a,b){this.id=a;this.l=b}static h(a){return{id:a.id,l:a.accessToken}}}class Ca{constructor(a,b,c){this.id=a;this.state=b;this.Ia=c}static h(a){return{id:a.id,state:a.state,Ia:a.matchedVotes}}}class X{constructor(a,b,c,d,h,e,f){this.id=a;this.title=b;this.v=c;this.w=d;this.O=h;this.Ya=f}static h(a){return new X(a.id,a.title,
a.artistName,a.previewUrl,a.artworkUrl,a.artworkUrlLarge,a.artworkDominantColor)}}class Y{constructor(a,b,c,d,h,e,f){this.H=a;this.L=b;this.position=c;this.Va=f}static h(a){return new Y(a.songId,X.h(a.song),a.position,a.positionOrig,a.positionUpper,a.positionLower,a.voteCount,a.voteCountScaled)}}class Da{constructor(a,b,c,d){this.results=a;this.U=b;this.s=c;this.ma=d}static h(a){return{results:a.results.map(Y.h),U:a.numEntries,s:a.numVotes,ma:a.lastUpdated}}}class ta{constructor(a,b){this.I=a;this.l=
b}}class Ea{constructor(a,b){this.D=a;this.Y=b}ab(a){const b=this;return w(function*(){var c=new FormData;c.append("file",a.file);c=yield b.D.Na(`${b.Y}/api/submission/`,{body:c,headers:void 0});return Ba.h(c)}())}hb(a){const b=this;return w(function*(){let c=yield b.D.get(`${b.Y}/api/submission/${a.I}`,{headers:{"Content-Type":"application/json","X-Access-Token":a.l}});return Ca.h(c)}())}Ab(a){const b=this;return w(function*(){yield b.D.Na(`${b.Y}/api/submission/${a.I}/exchange`,{headers:{"Content-Type":"application/json",
"X-Access-Token":a.l}});return{}}())}Aa(){const a=this;return w(function*(){let b=yield a.D.get(`${a.Y}/api/prediction/current?fetchSongs=true`);return Da.h(b)}())}}class ra{constructor(a){this.view=a;this.V=new Map;this.na=new Set;a.i(2,this.rb.bind(this))}X(a){this.view.Ca().X(a)}Qa(a){this.view.Ca().Ob(a)}K(a){this.view.K(a);this.V.clear();this.na.clear()}xb(a){this.view.$a();this.view.i(3,a)}rb(a,b,c,d,h){b?this.V.has(c)||(a.Hb(),b=window.setTimeout(()=>{this.na.has(c)||(this.na.add(c),a.mb(c,
d),h())},200),this.V.set(c,b)):(window.clearInterval(this.V.get(c)),this.V.delete(c))}}class M{constructor(a){this.a=a;this.N=this.a.querySelector(".result__artworkPlayButton span");this.g=g.b(this.a.querySelector(".result__artwork"))}static u(a){a=m(`<li class="result${a.F?" result--mega":""}"
      style="${a.F?`background: #${a.backgroundColor} radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)`:""}"
      data-preview-src="${a.w}"
      data-song-id="${a.H}"
      >
        <div class="container container--narrow">
          <div class="result__content">
            <div class="result__rankContainer">
              <div class="result__rank">${a.position}</div>
            </div>
            <div class="result__details">
              <div class="result__trackTitle">${a.M}</div>
              <div class="result__artistName">${a.v}</div>
              <div class="result__voteDetails">${a.ca||a.s}
                votes (${a.Wa}%)
                ${a.w?'\n                    &nbsp;&nbsp;|&nbsp;&nbsp;\n                    <button class="result__listenButton">\n                      <span class="icon-play2"></span>&nbsp;Listen\n                    </button>\n                ':""}
                ${!a.F&&a.T?`
                  &nbsp;&nbsp;|&nbsp;&nbsp;\u2728 ML Model Applied (was #${a.W})
                `:""}
              </div>
              ${a.F&&a.T?`
                <div class="result__voteBounds">
                  \u2728 ML Model Applied (was #${a.W})
                </div>
              `:""}
            </div>
            <div class="result__artwork">
                ${a.O?`
                <div class="result__artworkSpinner">
                    <div class="result__artworkPlaceholder"
                         data-alt="Cover artwork for ${a.M} - ${a.v}"
                         data-src="${a.O}"></div>
                  </div>
                  ${a.w?`
                  <button class="result__artworkPlayButton"
                            aria-label="Play ${a.M} by ${a.v}">
                      <span class="icon-play2"></span>
                    </button>
                  `:""}
                `:""}
            </div>
          </div>
        </div>
      </li>
`);return new M(a)}xa(a){return this.a===a.a}gb(){return{Cb:this.a.querySelector(".result__rank").textContent,ha:this.bb(),H:y.A(this.a.dataset,"songId"),Bb:y.A(this.a.dataset,"previewSrc"),ga:this.a.querySelector(".result__artistName").textContent,title:this.a.querySelector(".result__trackTitle").textContent}}bb(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?y.A(b.dataset,"src"):void 0}play(){this.g.classList.add("result__artwork--prePlay");
this.ea("icon-pause");window.setTimeout(()=>{this.g.classList.add("result__artwork--playing")},300)}pause(){this.g.classList.add("result__artwork--paused");this.ea("icon-play2")}resume(){this.g.classList.remove("result__artwork--paused");this.ea("icon-pause")}Ra(){this.g.classList.add("result__artwork--fadeout");this.ea("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>
{this.g.classList.remove("result__artwork--fadeout")})})},350)}Hb(){g.b(this.a.querySelector(".result__artworkPlaceholder")).classList.add("result__artworkPlaceholder--loading")}mb(a,b){let c=g.b(this.a.querySelector(".result__artworkPlaceholder")),d=new Image;d.src=a;d.alt=b;d.classList.add("result__artworkImage","result__artworkImage--fadein");d.onload=()=>{c.parentNode.insertBefore(d,c);c.remove()};d.onerror=()=>{c.classList.remove("result__artworkPlaceholder--loading")}}ea(a){this.N&&(this.N.className=
a)}}class Z{constructor(a){this.a=a}static u(){let a=document.createElement("div");a.className="countdown__statusIndicator countdown__statusIndicator--hidden";return new Z(a)}X(a){a?(this.fa(!0),this.a.innerHTML='<div class="countdown__statusIcon"><span class="icon-spinner"></span></div>'):this.fa(!1)}Ob(a){if(a){this.fa(!0);var b=document.createElement("div");b.className="countdown__statusMessage";b.innerText=a;this.a.innerHTML="";this.a.appendChild(b)}else this.fa(!1)}fa(a){a?this.a.classList.remove("countdown__statusIndicator--hidden"):
this.a.classList.add("countdown__statusIndicator--hidden")}}class qa extends H{constructor(a){super(a);this.aa=g.b(this.a.querySelector(".countdown__list"))}ia(){this.a.addEventListener("click",a=>this.sb(a));this.Ja()}Ca(){this.ua||(this.ua=Z.u(),this.a.insertBefore(this.ua.a,this.aa));return this.ua}K(a){this.aa.innerHTML="";for(let b of a)a=M.u(b),this.aa.appendChild(a.a);this.Ja()}Jb(a){null==this.P&&(this.P=document.createElement("div"),this.P.classList.add("container","container--narrow","countdown__footnote"),
this.a.appendChild(this.P));this.P.innerHTML="";this.P.appendChild(a)}$a(){(new IntersectionObserver(a=>{a.length&&this.j(3,a[0].isIntersecting)},{rootMargin:"-96px 0px"})).observe(this.aa)}sb(a){let b=L(a.target,this.a,"result__artworkPlayButton");a=L(a.target,this.a,"result__listenButton");if(a=b||a){let c=S(a,this.a);this.j(1,c,a===b)}}Ja(){let a=this.eb();this.a.querySelectorAll(".result__artworkPlaceholder").forEach(b=>a.observe(b))}eb(){return this.Z?this.Z:this.Z=new IntersectionObserver(a=>
this.qb(g.b(this.Z),a))}qb(a,b){b.forEach(c=>{let d=c.target,h=S(d,this.a),e=y.A(d.dataset,"src"),f=y.A(d.dataset,"alt");this.j(2,h,c.isIntersecting,e,f,()=>a.unobserve(d))})}}let Fa={h(a){return{U:a.num_entries,s:a.num_votes,Wb:a.numPreviousYearVotes,Vb:a.last_processed_ts,Fb:a.results_0_100.map(p)}}},Ga={h(a){return{kb:a.instagram_post,jb:a.instagram_direct_message,Ga:a.instagram_story,Ua:a.twitter_post,Db:a.reddit_comment,Xa:a.web_upload}}};class Ha{constructor(a,b){this.D=a;this.B=b}fb(a){const b=
this;return w(function*(){var c=[...a].sort();c=yield b.D.get(`/static/results/${b.B}/`+c.join("+")+".json");return Fa.h(c)}())}cb(){const a=this;return w(function*(){let b=yield a.D.get(`/static/results/${a.B}/entryCountsBySource.json`);return Ga.h(b)}())}}document.addEventListener("DOMContentLoaded",function(){let {R:a,B:b,ja:c,ka:d}=y.Eb(W.h),h=new wa(a),e=document.querySelector(".countdown"),f=document.querySelector(".uploader"),z=document.querySelector(".uploaderRoot--installGa"),G=new za,D=
new Ea(G,window.location.href.includes("localhost")?"http://localhost:8000":"https://api.100warmtunas.com");z&&(z.classList.add("uploader","uploader--ga"),T(z,void 0,void 0,D));if(null!=e){let {sa:x,o:B}=pa(e);ma(h,x);A(h);x.ia();null!=f&&T(f,x,B,D);K(()=>{if(b){let l=new Ha(G,b);r(l,h,e,B,c,d,b)}})}ua();fa();ja();la()})})();
//# sourceMappingURL=1311ee9f.js.map
