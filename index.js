"use strict";requestAnimationFrame(t);var e=document.getElementById("gear"),n=document.getElementById("skill-slider"),r=["web","css","html","javascript","troubleshooting","creative","debugging","training","advertising"],a="abcdefghijklmnopqrstuvwxyz";function t(){requestAnimationFrame(t),e.style.transform="rotate("+window.scrollY/1e3*360+"deg)"}var o="web",l="web",s=100,g=50,m=2e3,c=0,d=0,h=1e3,u=0,f=void 0;function v(e){requestAnimationFrame(v),f||(f=e);var t=e-f;if(l===o&&m<(h+=t)&&(o=r[u++%r.length],h=0),l.length!==o.length&&s<(c+=t)&&(c=0,l.length>o.length?l=l.slice(0,-1):l+=a[Math.floor(Math.random()*a.length)]),g<d){d=0;var i=l.split("");i.forEach(function(e,t){if(e!==o[t]){var n=(a.indexOf(e)+1)%a.length;i[t]=a[n]}}),l=i.join("")}d+=t,f=e,n.innerHTML=l}requestAnimationFrame(v);
//# sourceMappingURL=index.js.map