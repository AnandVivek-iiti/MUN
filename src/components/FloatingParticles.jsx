import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const FloatingParticles = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]); // To store references to created particles

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 50;
    particlesRef.current = []; // Clear previous particles on re-render if any

    // Clear existing particles from DOM if component re-mounts
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create particles outside the animation loop
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full pointer-events-none";

      const size = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.3 + 0.1;
      const isGlow = Math.random() > 0.7; // 30% chance to be a glow particle

      gsap.set(particle, {
        // Use GSAP set for initial styling
        width: size,
        height: size,
        x: Math.random() * window.innerWidth, // Use x/y for better performance than left/top
        y: Math.random() * window.innerHeight,
        opacity: opacity,
        backgroundColor: isGlow ? "#00FFFF" : "#829191",
        boxShadow: isGlow ? "0 0 10px rgba(0, 255, 255, 0.5)" : "none",
      });

      container.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate particles
      const travelDuration = Math.random() * 10 + 5;
      const travelDelay = Math.random() * 5;
      const floatDuration = Math.random() * 3 + 2;
      const floatDelay = Math.random() * 2;

      // Primary travel animation
      gsap.to(particle, {
        y: `-=${100 + Math.random() * 200}`, // Move up relative to current position
        x: `+=${Math.random() * 100 - 50}`, // Move horizontally relative to current
        rotation: Math.random() * 360,
        duration: travelDuration,
        repeat: -1,
        ease: "none",
        delay: travelDelay,
        // When y reaches its end, reset to bottom for continuous loop
        onRepeat: () => {
          gsap.set(particle, { y: window.innerHeight + size }); // Reset to bottom
          gsap.set(particle, { x: Math.random() * window.innerWidth }); // Randomize x on repeat
        },
      });

      // Secondary floating animation (slight sine wave)
      gsap.to(particle, {
        x: `+=${20 * (Math.random() > 0.5 ? 1 : -1)}`, // Randomize direction
        y: `+=${10 * (Math.random() > 0.5 ? 1 : -1)}`,
        duration: floatDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: floatDelay,
      });
    }

    return () => {
      // Kill all GSAP tweens associated with these particles
      gsap.killTweensOf(particlesRef.current);
      // Remove all particles from the DOM
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      particlesRef.current = []; // Clear the ref array
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Use gsap.quickSetter for highly optimized property setting onmousemove
    const setGlowX = gsap.quickSetter(glow, "x", "px");
    const setGlowY = gsap.quickSetter(glow, "y", "px");
    const setGlowOpacity = gsap.quickSetter(glow, "opacity");

    const handleMouseMove = (e) => {
      // Instead of tweening, directly set the properties for immediate response
      // You could also still use gsap.to for a slight smooth follow, but quickSetter is faster.
      // If you want the smooth follow, keep the original gsap.to, as it's already good.

      // Option 1: Ultra-fast direct setting (less smooth follow)
      // setGlowX(e.clientX - 150);
      // setGlowY(e.clientY - 150);
      // setGlowOpacity(0.1);

      // Option 2: Keep existing smooth follow (already good performance)
      gsap.to(glow, {
        duration: 0.3,
        x: e.clientX - 150,
        y: e.clientY - 150,
        opacity: 0.1, // Only set opacity if it was 0, otherwise it's constant
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Ensure any tweens are killed on unmount
      gsap.killTweensOf(glow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-80 h-80 bg-primary rounded-full blur-3xl opacity-0 pointer-events-none z-0"
      style={{ transform: "translate(-50%, -50%)" }} // Initial centering
    />
  );
};

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  );
};
