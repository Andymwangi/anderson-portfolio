"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}

export function TypewriterEffect({
    words,
    className = "",
    cursorClassName = "",
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
}: TypewriterEffectProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, delayBetweenWords);
            return () => clearTimeout(pauseTimeout);
        }

        if (!isDeleting && currentText === currentWord) {
            setIsPaused(true);
            return;
        }

        if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setCurrentText((prev) => {
                    if (isDeleting) {
                        return currentWord.substring(0, prev.length - 1);
                    } else {
                        return currentWord.substring(0, prev.length + 1);
                    }
                });
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                className={cursorClassName || "inline-block w-0.5 h-5 bg-orange ml-1"}
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </span>
    );
}

export default TypewriterEffect;
