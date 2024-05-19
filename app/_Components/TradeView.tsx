// TradingViewWidget.jsx
import React, { useContext, useEffect, useRef } from "react";
import userContext from "../_context/userContext";
let tvScriptLoadingPromise;
 
export default function TradingViewWidget() { // Declare the extended Window type globally
    const {data} = useContext(userContext);
const onLoadScriptRef = useRef<()=>void|undefined>();
console.log(data.token.replace("/",""))
 
useEffect(() => {
onLoadScriptRef.current = createWidget;
 
if (!tvScriptLoadingPromise) {
tvScriptLoadingPromise = new Promise((resolve) => {
const script = document.createElement("script");
script.id = "tradingview-widget-loading-script";
script.src = "https://s3.tradingview.com/tv.js";
script.type = "text/javascript";
script.onload = resolve;
document.head.appendChild(script);
});
}
 
tvScriptLoadingPromise.then(
() => onLoadScriptRef.current && onLoadScriptRef.current()
);
 
return () => (onLoadScriptRef.current = null);
 // Extend the Window interface


function createWidget() {
if (document.getElementById("tradingview") && "TradingView" in window) {
new (window.TradingView as any).widget({
autosize: true,
symbol: `PYTH:${data.token.replace("/","")}`,
interval: "D",
timezone: "Etc/UTC",
theme: "dark",
overrides: {
    "paneProperties.background": "#0f0e0e",
    "paneProperties.backgroundType": "solid"
},
style: "1",
locale: "en",
toolbar_bg: "#0F0E0E",
enable_publishing: false,
allow_symbol_change: true,
container_id: "tradingview",
});
}
}
 
}, [data.token]);
 
return (
 
<div className="tradingview-widget-container w-full h-full">
<div id="tradingview"  className="h-full" />
</div>
); }
 