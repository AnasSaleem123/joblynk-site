import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ end, suffix = '', duration = 2000, prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const endValue = typeof end === 'number' ? end : parseFloat(end);

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * endValue);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(endValue);
    };

    requestAnimationFrame(tick);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="metric-number tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}