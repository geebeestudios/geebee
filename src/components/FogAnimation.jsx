import React, { useEffect, useState } from "react";
import "../styles/style.css";

const FogAnimation = ({
    children,
    className = "",
    fogColor = "rgba(255, 255, 255, 0.3)",
    fogDensity = 5,
    speed = 15,
    direction = "up", // "up" or "down"
}) => {
    const [fogLayers, setFogLayers] = useState([]);

    useEffect(() => {
        // Generate random fog layers
        const newFogLayers = [];
        for (let i = 0; i < fogDensity; i++) {
            newFogLayers.push({
                id: i,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 30}%`,
                height: `${Math.random() * 30 + 20}%`,
                animationDuration: `${Math.random() * 10 + speed}s`,
                opacity: Math.random() * 0.4 + 0.3,
                delay: `${Math.random() * 5}s`,
            });
        }
        setFogLayers(newFogLayers);
    }, [fogDensity, speed]);

    return (
        <div className={`relative ${className}`}>
            {/* Content */}
            {children}
            
            {/* Fog container - positioned absolutely over the content */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Fog layers */}
                {fogLayers.map((layer) => (
                    <div
                        key={layer.id}
                        className={`absolute rounded-full blur-2xl ${
                            direction === "up" ? "fogFloatUp" : "fogFloatDown"
                        }`}
                        style={{
                            left: layer.left,
                            top: 0,
                            width: layer.width,
                            height: layer.height,
                            backgroundColor: fogColor,
                            opacity: layer.opacity,
                            animationDuration: layer.animationDuration,
                            animationDelay: layer.delay,
                            pointerEvents: "none"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default FogAnimation;
