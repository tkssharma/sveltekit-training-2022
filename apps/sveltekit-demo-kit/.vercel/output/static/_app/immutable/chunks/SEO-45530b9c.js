import{S as h,i as u,s as f,k as c,M as _,l as r,m as p,h as l,n as s,B as d,A as m}from"./index-979af05b.js";function g(o){let n,t,a;return document.title=n=o[0],{c(){t=c("meta"),a=c("html"),this.h()},l(i){const e=_('[data-svelte="svelte-zck3ag"]',document.head);t=r(e,"META",{name:!0,content:!0}),a=r(e,"HTML",{lang:!0}),p(a).forEach(l),e.forEach(l),this.h()},h(){s(t,"name","description"),s(t,"content",o[1]),s(a,"lang","en")},m(i,e){d(document.head,t),d(document.head,a)},p(i,[e]){e&1&&n!==(n=i[0])&&(document.title=n),e&2&&s(t,"content",i[1])},i:m,o:m,d(i){l(t),l(a)}}}function S(o,n,t){let{title:a="Svelte Kit Demo"}=n,{description:i="Demo Application"}=n;return o.$$set=e=>{"title"in e&&t(0,a=e.title),"description"in e&&t(1,i=e.description)},[a,i]}class E extends h{constructor(n){super(),u(this,n,S,g,f,{title:0,description:1})}}export{E as S};
