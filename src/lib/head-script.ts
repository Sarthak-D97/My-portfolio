/**
 * Blocking inline script for <head>. Runs before first paint and applies the stored / system theme
 * class (dark-first when unknown) so there is no flash. When a stored choice overrides the OS
 * preference it also collapses the two media-keyed theme-color metas to the chosen colour.
 * Kept in a plain module (not a "use client" file) so the server can inline the string.
 * The `js` class that enables scroll reveals is added later by <RevealObserver /> after hydration.
 */
export const headScript = [
  "(function(){",
  "var r=document.documentElement;",
  "try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;",
  "r.classList.add(d?'dark':'light');r.style.colorScheme=d?'dark':'light';",
  "if(t){var c=d?'#0b0b0a':'#f5f3ee';var ms=document.querySelectorAll('meta[name=\"theme-color\"]');for(var i=0;i<ms.length;i++){ms[i].removeAttribute('media');ms[i].setAttribute('content',c);}}}",
  "catch(e){r.classList.add('dark');}",
  "})();",
].join("");
