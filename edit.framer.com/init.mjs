var f;(n=>(n.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,n.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),n.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),n.isSafari=n.isWebKit&&!n.isChrome,n.isSafariDesktop=n.isSafari&&!n.isTouch,n.isWindows=/Win/u.test(navigator.platform),n.isMacOS=/Mac/u.test(navigator.platform),n.isAndroidWebView=n.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),n.isIosWebView=n.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),n.isWebView=n.isAndroidWebView||n.isIosWebView))(f||={});var g="__framer_hide_editorbar_until";function V(){let s=localStorage.getItem(g);if(!s)return!1;let d=Date.now(),c=Number(s);return d>=c||Number.isNaN(c)?(localStorage.removeItem(g),!1):!0}function T(){return window.self!==window.top}var A=`
#__framer-editorbar.mode_normal {
    overflow: hidden;
    position: fixed;
    bottom: 10px;
    height: 34px;
    border: none;
    z-index: 2147483647;
}

#__framer-editorbar.mode_normal.status_hidden {
    display: none;
}

#__framer-editorbar.mode_normal.status_measuring {
    left: 0;
    width: 100%;
}

#__framer-editorbar.mode_normal[width] {
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.2), 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    left: 50%;
    transform: translateX(-50%);
}

#__framer-editorbar.mode_subtle {
    --padding-right: 10px;
    overflow: hidden;
    position: fixed;
    right: var(--padding-right);
    border: none;
    z-index: 2147483647;
    top: 0;
    width: calc(100vw - var(--padding-right));
    height: 100vh;
}

#__framer-editorbar.mode_subtle.status_hidden {
    display: none;
}

#__framer-editorbar.mode_subtle.status_measuring {
    clip-path: unset;
}
`,w=document.createElement("style");w.type="text/css";w.innerHTML=A;document.head.appendChild(w);var E=new URL(import.meta.url),p=E.origin,z=/^\/(.+)\/.+$/u.exec(E.pathname)?.[1]??"";function F({dependencies:s}){if(s.__version!==1)throw new Error("Unsupported dependencies version");if(V()||T()||f.isWebView)return function(){return null};let{createElement:d,memo:c,useCallback:h,useEffect:l,useRef:y,useState:u}=s.react,{createPortal:b}=s["react-dom"],{useCurrentRoute:x,useLocaleInfo:S,useRouter:n}=s.framer;function N(){let[o,t]=u(!1),r=h(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{t(!0)}):setTimeout(()=>{t(!0)},300)},[]);return l(()=>{let e;return document.readyState==="complete"?r():(e=()=>{document.readyState==="complete"&&r()},document.addEventListener("readystatechange",e,{once:!0})),()=>{e&&document.removeEventListener("readystatechange",e)}},[r]),o}function v(o){let[t,r]=u({className:"status_hidden"});return l(()=>{let e=a=>{a.origin===p&&typeof a.data=="object"&&a.data?.apiVersion===1&&(a.data.type==="beginSizeMeasuring"&&r({className:"status_measuring"}),a.data.type==="updateStyle"&&o.editorBarSubtle?r({style:{clipPath:a.data.clipPath}}):a.data.type==="updateStyle"&&!o.editorBarSubtle&&r({height:a.data.height,width:a.data.width,style:{background:a.data.background,borderRadius:a.data.borderRadius}}),a.data.type==="editorBarHidden"&&(r({className:"status_hidden"}),window.removeEventListener("message",e)))};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),t}function L(){let[o,t]=u(!1);return l(()=>{if(o)return;let r=e=>{if(e.origin===p&&typeof e.data=="object"&&e.data?.apiVersion===1&&e.data.type==="editorBarHidden"&&!o){let i=Date.now()+6048e5;localStorage.setItem(g,i.toString()),t(!0),window.removeEventListener("message",r)}};return window.addEventListener("message",r),()=>{window.removeEventListener("message",r)}},[]),o}function D({iframeRef:o}){let[t,r]=u(void 0),e=C();return l(()=>{r(a=>a??e),e&&o.current&&o.current.contentWindow.postMessage({apiVersion:1,type:"updateNodeId",nodeId:e},p)},[o,e]),t}function C(){let o=x(),t=S()?.activeLocale??void 0,{collectionUtils:r}=n(),[e,a]=u(void 0),i=o?.id,m=o?.collectionId,I=o?.pathVariables;return l(()=>{let _=!1;return R({activeLocale:t,collectionId:m,collectionUtils:r,pathVariables:I}).then(H=>{_||a(H??i)}).catch(()=>{_||a(i)}),()=>{_=!0}},[t,m,r,I,i]),e}async function R({activeLocale:o,collectionId:t,collectionUtils:r,pathVariables:e}){if(t){let a=Object.values(e);if(a.length!==1)return;let i=r?.[t];return await(await i?.())?.getRecordIdBySlug(a[0],o)}}function U(){l(()=>{let o=t=>{if(t.origin===p&&typeof t.data=="object"&&t.data?.apiVersion===1&&t.data.type==="initializeController"){let r=document.createElement("link");r.rel="stylesheet",r.href=t.data.cssUrl,document.head.appendChild(r),import(t.data.jsUrl).then(e=>{e.initializeController({editorBarOrigin:p,trackingUrl:t.data.trackingUrl})})}};return window.addEventListener("message",o),()=>{window.removeEventListener("message",o)}},[])}function k({framerSiteId:o,features:t,iframeRef:r,measuringProps:e,initialNodeId:a}){let i=new URLSearchParams;i.set("framerSiteId",o),i.set("nodeId",a),i.set("source",window.location.hostname),i.set("features",JSON.stringify(t||{}));let m=t.editorBarSubtle?"mode_subtle":"mode_normal";return d("iframe",{...e,id:"__framer-editorbar",ref:r,src:`${p}/${z}?${i.toString()}`,className:e.className?`${m} ${e.className}`:m})}function W({framerSiteId:o,features:t}){let r=y(null),e=N(),a=v(t),i=D({iframeRef:r});return L(),U(),!e||!i?null:b(d(k,{framerSiteId:o,features:t,iframeRef:r,measuringProps:a,initialNodeId:i}),document.body)}return c(W)}export{F as createEditorBar};
