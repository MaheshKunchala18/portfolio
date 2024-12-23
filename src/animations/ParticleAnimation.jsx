import React, { useRef, useEffect } from "react";

const ParticleAnimation = ({ children }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const spotsRef = useRef([]); // Spots specific to this instance
    const hueRef = useRef(0); // Hue specific to this instance
    const mouseRef = useRef({ x: undefined, y: undefined }); // Mouse position for this instance

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const container = containerRef.current;

        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;

        // Update canvas size
        const updateCanvasSize = () => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            containerWidth = rect.width;
            containerHeight = rect.height;
        };

        // Debounced Resize Event
        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), delay);
            };
        };

        // Handle Mouse Move
        const handleMouseMove = (event) => {
            const mouse = mouseRef.current;
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;

            for (let i = 0; i < 3; i++) {
                spotsRef.current.push(new Particle());
            }
        };

        // Handle Mouse Out
        const handleMouseOut = () => {
            mouseRef.current.x = undefined;
            mouseRef.current.y = undefined;
        };

        // Particle Class
        class Particle {
            constructor() {
                const mouse = mouseRef.current;
                this.x = mouse.x ?? canvas.width / 2;
                this.y = mouse.y ?? canvas.height / 2;

                this.size = Math.random() * 1 + 0.1;
                this.speedX = Math.random() * 3.2 - 1;
                this.speedY = Math.random() * 2.5 - 1;
                // this.speedX = (Math.max(containerWidth, containerHeight) / 800) * (Math.random() * 2 - 1);
                // this.speedY = (Math.max(containerWidth, containerHeight) / 800) * (Math.random() * 2 - 1);

                this.color = `hsl(${hueRef.current}, 100%, 50%)`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.4) this.size -= 0.08;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Handle Particles
        const handleParticle = () => {
            spotsRef.current.forEach((particle, i) => {
                particle.update();
                particle.draw();

                for (let j = i + 1; j < spotsRef.current.length; j++) {
                    const dx = particle.x - spotsRef.current[j].x;
                    const dy = particle.y - spotsRef.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 90) {
                        ctx.beginPath();
                        ctx.strokeStyle = particle.color;
                        ctx.lineWidth = particle.size / 10;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(spotsRef.current[j].x, spotsRef.current[j].y);
                        ctx.stroke();
                    }
                }
            });

            // Remove small particles safely
            spotsRef.current = spotsRef.current.filter(p => p.size > 0.3);
        };

        // Animation Loop
        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticle();
            hueRef.current++;
            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize canvas and start animation
        updateCanvasSize();
        animate();

        // Add Event Listeners
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("resize", debounce(updateCanvasSize, 200));

        // Cleanup Event Listeners and Animation Frame
        return () => {
            cancelAnimationFrame(animationFrameId);
            if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", handleMouseMove);
                containerRef.current.removeEventListener("mouseout", handleMouseOut);
            }
            window.removeEventListener("resize", updateCanvasSize);
        };
    }, []); // Empty dependency array (refs handle state)

    return (
        <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none", // Ensure canvas does not block user interactions
                    zIndex: 1,
                }}
            />
            {children}
        </div>
    );
};

export default ParticleAnimation;
