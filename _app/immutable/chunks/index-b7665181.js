function g(){}const X=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function K(){return Object.create(null)}function $(t){t.forEach(Y)}function H(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Ft(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function It(t,e,n,i){if(t){const r=Z(t,e,n,i);return t[0](r)}}function Z(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Jt(t,e,n,i,r,c){if(r){const s=Z(e,n,i,c);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ut(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Vt(t){return t&&H(t.destroy)?t.destroy:g}const tt=typeof window<"u";let et=tt?()=>window.performance.now():()=>Date.now(),F=tt?t=>requestAnimationFrame(t):g;const x=new Set;function nt(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(nt)}function it(t){let e;return x.size===0&&F(nt),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let L=!1;function yt(){L=!0}function gt(){L=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:xt(1,r,_=>e[n[_]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<c.length&&s[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(s[o],f)}}function bt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=G("style");return wt(rt(t),e),e.sheet}function wt(t,e){return bt(t.head||t,e),e.sheet}function Et(t,e){if(L){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function Nt(t,e,n){L&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Yt(){return I(" ")}function Zt(){return I("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Tt(t,i,e[i])}function ne(t){return t===""?null:+t}function St(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){st(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Ct(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ie(t,e,n){return Ct(t,e,n,G)}function jt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function re(t){return jt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function se(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);st(t);const r=t.splice(n,i-n+1);E(r[0]),E(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(c,e)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e==null?"":e}function le(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ae(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function _e(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Mt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=At(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class U extends Mt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}}const M=new Map;let q=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:vt(e),rules:{}};return M.set(t,n),n}function lt(t,e,n,i,r,c,s,l=0){const o=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=o){const A=e+(n-e)*c(m);u+=m*100+`%{${s(A,1-A)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${qt(f)}_${l}`,_=rt(t),{stylesheet:d,rules:h}=M.get(_)||Dt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Ht())}function Ht(){F(()=>{q||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),M.clear())})}let k;function w(t){k=t}function W(){if(!k)throw new Error("Function called outside component initialization");return k}function de(t){W().$$.on_mount.push(t)}function he(t){W().$$.after_update.push(t)}function me(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=ct(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}const v=[],V=[],C=[],B=[],ut=Promise.resolve();let z=!1;function at(){z||(z=!0,ut.then(ft))}function pe(){return at(),ut}function N(t){C.push(t)}function ye(t){B.push(t)}const P=new Set;let S=0;function ft(){const t=k;do{for(;S<v.length;){const e=v[S];S++,w(e),Lt(e.$$)}for(w(null),v.length=0,S=0;V.length;)V.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(v.length);for(;B.length;)B.pop()();z=!1,P.clear(),w(t)}function Lt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let b;function _t(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function D(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function ge(){y={r:0,c:[],p:y}}function xe(){y.r||$(y.c),y=y.p}function Ot(t,e){t&&t.i&&(j.delete(t),t.i(e))}function $e(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function be(t,e,n){let i=e(t,n),r=!1,c,s,l=0;function o(){c&&R(t,c)}function u(){const{delay:a=0,duration:_=300,easing:d=X,tick:h=g,css:p}=i||dt;p&&(c=lt(t,0,1,_,a,d,p,l++)),h(0,1);const m=et()+a,A=m+_;s&&s.abort(),r=!0,N(()=>D(t,!0,"start")),s=it(O=>{if(r){if(O>=A)return h(1,0),D(t,!0,"end"),o(),r=!1;if(O>=m){const J=d((O-m)/_);h(J,1-J)}}return r})}let f=!1;return{start(){f||(f=!0,R(t),H(i)?(i=i(),_t().then(u)):u())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function ve(t,e,n){let i=e(t,n),r=!0,c;const s=y;s.r+=1;function l(){const{delay:o=0,duration:u=300,easing:f=X,tick:a=g,css:_}=i||dt;_&&(c=lt(t,1,0,u,o,f,_));const d=et()+o,h=d+u;N(()=>D(t,!1,"start")),it(p=>{if(r){if(p>=h)return a(0,1),D(t,!1,"end"),--s.r||$(s.c),!1;if(p>=d){const m=f((p-d)/u);a(1-m,m)}}return r})}return H(i)?_t().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),r&&(c&&R(t,c),r=!1)}}}function we(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ee(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ke(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||N(()=>{const o=c.map(Y).filter(H);s?s.push(...o):$(o),t.$$.on_mount=[]}),l.forEach(N)}function Rt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,r,c,s,l=[-1]){const o=k;w(t);const u=t.$$={fragment:null,ctx:null,props:c,update:g,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Bt(t,a)),_}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){yt();const a=St(e.target);u.fragment&&u.fragment.l(a),a.forEach(E)}else u.fragment&&u.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),gt(),ft()}w(o)}class Te{$destroy(){Rt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{U as $,g as A,It as B,Jt as C,Kt as D,Wt as E,Et as F,Gt as G,me as H,V as I,te as J,Xt as K,Ft as L,Ee as M,Vt as N,ye as O,$ as P,X as Q,fe as R,Te as S,N as T,be as U,ve as V,Ut as W,ht as X,Qt as Y,ee as Z,we as _,Yt as a,se as a0,_e as a1,ce as a2,ue as a3,ne as a4,H as a5,ae as a6,Nt as b,re as c,xe as d,Zt as e,Ot as f,ge as g,E as h,Ae as i,he as j,G as k,ie as l,St as m,Tt as n,de as o,le as p,I as q,jt as r,zt as s,$e as t,oe as u,ke as v,Ne as w,Pt as x,Rt as y,pe as z};
