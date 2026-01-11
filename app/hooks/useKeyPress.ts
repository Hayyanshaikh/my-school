"use client";
import { useEffect } from "react";

/**
 * Custom hook to listen for specific key press globally
 * @param targetKey jis key ko listen karna hy (example: "Enter", "Escape", "a")
 * @param callback jab key press ho to run hone wala function
 */
export function useKeyPress(targetKey: string, callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, callback]);
}
