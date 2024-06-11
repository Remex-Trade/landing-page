// TradingViewWidget.jsx
import React, { useContext, useEffect, useRef } from "react";
import userContext from "../_context/userContext";
import { useSelectedTokenStore } from "@/store/tokenStore";
// import "./TradingView.css";

let tvScriptLoadingPromise;
 
export default function TradingViewWidget() { // Declare the extended Window type globally
    const {data} = useContext(userContext);
const onLoadScriptRef = useRef<()=>void|undefined>();
const selectedPair = useSelectedTokenStore(state => state.pair);
const tokenName = selectedPair?.token || "";
 
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
// custom_css_url: "/TradingView.css",
autosize: true,
symbol: `PYTH:${tokenName.replace("/","")}`,
interval: "D",
// timezone: "Etc/UTC",
theme: "dark",
overrides: {
    "paneProperties.backgroundGradientStartColor": "#020024",
        "paneProperties.backgroundGradientEndColor": "#4f485e",
  "paneProperties.vertGridProperties.color": "rgb(54, 60, 78, 0.2)",
  "paneProperties.horzGridProperties.color": "rgb(54, 60, 78, 0.2)",
  "symbolWatermarkProperties.transparency": 90,
  "scalesProperties.textColor": "#AAA",
  "mainSeriesProperties.candleStyle.wickUpColor": "#34f5ae",
  "mainSeriesProperties.candleStyle.wickDownColor": "#fa3c58",
  "mainSeriesProperties.candleStyle.upColor": "#34f5ae",
  "mainSeriesProperties.candleStyle.downColor": "#fa3c58",

},
style: "1",
locale: "en",
toolbar_bg: "#ffffff",
enable_publishing: false,
allow_symbol_change: true,
container_id: "tradingview",
});
}
}
 
}, [tokenName]);
 
return (
 
<div className="tradingview-widget-container w-full h-full">
<div id="tradingview"  className="h-full" />
</div>
); }
 