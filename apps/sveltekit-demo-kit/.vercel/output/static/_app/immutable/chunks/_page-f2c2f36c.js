const n=!0;async function r({fetch:t}){let e=[];try{e=await(await t("https://jsonplaceholder.typicode.com/photos?_limit=20")).json(),console.log(e)}catch(o){console.log(o)}return{photos:e}}const s=Object.freeze(Object.defineProperty({__proto__:null,prerender:!0,load:r},Symbol.toStringTag,{value:"Module"}));export{s as _,r as l,n as p};