(()=>{"use strict";var t,e={247:(t,e,n)=>{t.exports=n.p+"assets/ChapterSelect0.mp3"}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../"})(),t=o(247),window.addEventListener("DOMContentLoaded",(()=>{document.querySelector("div#startToPlayBtn").addEventListener("click",(()=>{location.href="../songSelect/index.html"})),document.querySelector("div#cacheControl").addEventListener("click",(()=>{location.href="../cacheControl/index.html"})),document.querySelector("div#settingBtn").addEventListener("click",(()=>{location.href="../settings/index.html"})),document.querySelector("div#uploadChartsBtn").addEventListener("click",(()=>{location.href="https://github.com/HanHan233/PhiCommunity-Charts-Repo"})),fetch(t).then((t=>t.arrayBuffer())).then((t=>{const e=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext);e.decodeAudioData(t,(function(t){var n=e.createBufferSource();n.buffer=t,n.loop=!0,n.connect(e.destination),n.start(0)}))}));const e=document.getElementById("body");window.DeviceOrientationEvent&&(console.log("DeviceOrientationEvent detected, attaching event listener."),window.addEventListener("deviceorientation",(t=>{const{gamma:n,beta:o}=t;e.style.setProperty("--gamma",n),e.style.setProperty("--beta",o)}),!0))}))})();