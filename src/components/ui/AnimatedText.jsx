import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
    text,
    className = "",
    charClassName = "",
    initialY = 50,
    initialX = 30,
    stiffness = 120,
    damping = 6,
    mass = 0.3,
    velocity = 2,
    delayMultiplier = 0.04,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            className={className}
        >
            {Array.from(text).map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: initialY, x: initialX }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                        transition: {
                            type: "spring",
                            stiffness: stiffness,
                            damping: damping,
                            delay: index * delayMultiplier,
                            mass: mass,
                            velocity: velocity,
                        },
                    }}
                    className={`${char === " " ? "mr-2" : ""} ${charClassName}`}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
