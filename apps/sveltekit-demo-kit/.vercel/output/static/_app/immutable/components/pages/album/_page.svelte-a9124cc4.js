import{S as V,i as F,s as H,k as _,q as E,a as b,l as p,m as v,r as k,h,c as $,n as m,b as g,B as d,A as x,C as O,H as y,u as j,v as P,w as I,x as A,f as S,t as q,y as C}from"../../../chunks/index-979af05b.js";import{S as B}from"../../../chunks/SEO-45530b9c.js";function D(f,t,r){const a=f.slice();return a[1]=t[r],a}function G(f){let t,r;return{c(){t=_("p"),r=E("loading...")},l(a){t=p(a,"P",{});var s=v(t);r=k(s,"loading..."),s.forEach(h)},m(a,s){g(a,t,s),d(t,r)},p:x,d(a){a&&h(t)}}}function U(f){let t,r,a,s,o,n,e=f[1].title+"",l,c;return{c(){t=_("figure"),r=_("img"),o=b(),n=_("figcaption"),l=E(e),c=b(),this.h()},l(i){t=p(i,"FIGURE",{class:!0});var u=v(t);r=p(u,"IMG",{src:!0,alt:!0,class:!0}),o=$(u),n=p(u,"FIGCAPTION",{class:!0});var w=v(n);l=k(w,e),w.forEach(h),c=$(u),u.forEach(h),this.h()},h(){y(r.src,a=f[1].thumbnailUrl)||m(r,"src",a),m(r,"alt",s=f[1].title),m(r,"class","w-full m-0"),m(n,"class","text-xs sm:text-sm dark:text-gray-300"),m(t,"class","w-full m-0")},m(i,u){g(i,t,u),d(t,r),d(t,o),d(t,n),d(n,l),d(t,c)},p(i,u){u&1&&!y(r.src,a=i[1].thumbnailUrl)&&m(r,"src",a),u&1&&s!==(s=i[1].title)&&m(r,"alt",s),u&1&&e!==(e=i[1].title+"")&&j(l,e)},d(i){i&&h(t)}}}function M(f){let t,r,a,s,o=f[0],n=[];for(let l=0;l<o.length;l+=1)n[l]=U(D(f,o,l));let e=null;return o.length||(e=G()),{c(){t=_("h1"),r=E("Photo album"),a=b(),s=_("div");for(let l=0;l<n.length;l+=1)n[l].c();e&&e.c(),this.h()},l(l){t=p(l,"H1",{class:!0});var c=v(t);r=k(c,"Photo album"),c.forEach(h),a=$(l),s=p(l,"DIV",{class:!0});var i=v(s);for(let u=0;u<n.length;u+=1)n[u].l(i);e&&e.l(i),i.forEach(h),this.h()},h(){m(t,"class","font-bold dark:text-gray-200"),m(s,"class","w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2")},m(l,c){g(l,t,c),d(t,r),g(l,a,c),g(l,s,c);for(let i=0;i<n.length;i+=1)n[i].m(s,null);e&&e.m(s,null)},p(l,[c]){if(c&1){o=l[0];let i;for(i=0;i<o.length;i+=1){const u=D(l,o,i);n[i]?n[i].p(u,c):(n[i]=U(u),n[i].c(),n[i].m(s,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=o.length,!o.length&&e?e.p(l,c):o.length?e&&(e.d(1),e=null):(e=G(),e.c(),e.m(s,null))}},i:x,o:x,d(l){l&&h(t),l&&h(a),l&&h(s),O(n,l),e&&e.d()}}}function N(f,t,r){let{photos:a=[]}=t;return f.$$set=s=>{"photos"in s&&r(0,a=s.photos)},[a]}class R extends V{constructor(t){super(),F(this,t,N,M,H,{photos:0})}}function T(f){let t,r,a,s,o,n;return t=new B({props:{title:"Photo Album",description:"Photo Album App"}}),o=new R({props:{photos:f[0]}}),{c(){P(t.$$.fragment),r=b(),a=_("div"),s=_("div"),P(o.$$.fragment),this.h()},l(e){I(t.$$.fragment,e),r=$(e),a=p(e,"DIV",{class:!0});var l=v(a);s=p(l,"DIV",{class:!0});var c=v(s);I(o.$$.fragment,c),c.forEach(h),l.forEach(h),this.h()},h(){m(s,"class","p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"),m(a,"class","flex justify-center align-middle items-center")},m(e,l){A(t,e,l),g(e,r,l),g(e,a,l),d(a,s),A(o,s,null),n=!0},p(e,[l]){const c={};l&1&&(c.photos=e[0]),o.$set(c)},i(e){n||(S(t.$$.fragment,e),S(o.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),q(o.$$.fragment,e),n=!1},d(e){C(t,e),e&&h(r),e&&h(a),C(o)}}}function z(f,t,r){let a,{data:s}=t;return f.$$set=o=>{"data"in o&&r(1,s=o.data)},f.$$.update=()=>{f.$$.dirty&2&&r(0,{photos:a}=s,a)},[a,s]}class L extends V{constructor(t){super(),F(this,t,z,T,H,{data:1})}}export{L as default};