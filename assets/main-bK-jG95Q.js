(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();console.log("Glow Shoe Laundry Modern App Initialized");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("nav ul"),r=document.createElement("button");r.innerHTML="☰",r.style.cssText=`
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primary);
  `,window.innerWidth<=768&&(r.style.display="block",document.querySelector(".nav-content").insertBefore(r,t),r.addEventListener("click",()=>{t.style.display=t.style.display==="flex"?"none":"flex",t.style.flexDirection="column",t.style.position="absolute",t.style.top="80px",t.style.left="0",t.style.width="100%",t.style.background="white",t.style.padding="1rem",t.style.boxShadow="0 4px 6px rgba(0,0,0,0.1)"}))});
