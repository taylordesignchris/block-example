!function(){"use strict";var e,t={396:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,o=window.wp.components;(0,e.registerBlockType)("td-test-block/test-block",{apiVersion:2,edit:function({attributes:e,setAttributes:i}){return(0,t.createElement)("div",(0,r.useBlockProps)(),(0,t.createElement)(o.TextControl,{label:(0,n.__)("Message","test-block"),value:e.message,onChange:e=>i({message:e})}))},save:function({attributes:e}){return(0,t.createElement)("div",r.useBlockProps.save(),e.message)}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,s=n[0],u=n[1],c=n[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var l=c(r)}for(t&&t(n);a<s.length;a++)i=s[a],r.o(e,i)&&e[i]&&e[i][0](),e[s[a]]=0;return r.O(l)},n=self.webpackChunktest_block=self.webpackChunktest_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(396)}));o=r.O(o)}();