import { useEffect, useRef } from 'react';

export default function NetworkVisualization({ width = 600, height = 400 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const packetsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // Create nodes
    const nodeCount = 24;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 3 + 2,
      type: Math.random() > 0.7 ? 'active' : 'passive',
    }));
    nodesRef.current = nodes;

    // Create packets
    const createPacket = () => {
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);
      while (to === from) to = Math.floor(Math.random() * nodeCount);
      return { from, to, progress: 0, speed: 0.008 + Math.random() * 0.012 };
    };

    packetsRef.current = Array.from({ length: 8 }, createPacket);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 88, 160, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw packets
      packetsRef.current.forEach((p, idx) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          packetsRef.current[idx] = createPacket();
          return;
        }
        const from = nodes[p.from];
        const to = nodes[p.to];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        // Glow trail
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 8);
        gradient.addColorStop(0, 'rgba(48, 176, 240, 0.9)');
        gradient.addColorStop(1, 'rgba(48, 176, 240, 0)');
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#30B0F0';
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach(n => {
        if (n.type === 'active') {
          // Glow ring
          const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
          gradient.addColorStop(0, 'rgba(48, 176, 240, 0.3)');
          gradient.addColorStop(1, 'rgba(48, 176, 240, 0)');
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.type === 'active' ? '#0058A0' : 'rgba(0, 88, 160, 0.3)';
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full opacity-70"
      style={{ borderRadius: '16px' }}
    />
  );
}