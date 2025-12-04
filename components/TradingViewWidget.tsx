"use client";

import React, {useEffect, useRef} from "react";


const TradingViewWidget = () => {
    const container = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = ``;
        container.current.appendChild(script);
    }, []);

    return (
        <div></div>
    );
};




