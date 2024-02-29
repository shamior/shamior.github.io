import{r as p}from"./index.NEDEFKed.js";var f={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,o){var r,n={},u=null,l=null;o!==void 0&&(u=""+o),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)a.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:m,type:t,key:u,ref:l,props:n,_owner:d.current}}i.Fragment=x;i.jsx=_;i.jsxs=_;f.exports=i;var s=f.exports;function j(){const[t,e]=p.useState(0);return s.jsxs("div",{children:[s.jsx("h1",{children:"estou muito triste!!!!"}),s.jsx("button",{onClick:()=>{e(o=>o+1)},children:"Clica em mim ae"}),s.jsx("p",{children:t})]})}export{j as default};
