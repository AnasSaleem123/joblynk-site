import { useEffect, useRef, useState } from 'react';

const NODES = [
  { id: 0, label: 'Job Description', icon: '📋', x: 50, y: 20 },
  { id: 1, label: 'Talent Discovery', icon: '🔍', x: 50, y: 50 },
  { id: 2, label: 'AI Outreach', icon: '📡', x: 50, y: 110 },
  { id: 3, label: 'AI Conversations', icon: '💬', x: 50, y: 170 },
  { id: 4, label: 'AI Interviews', icon: '🎙️', x: 50, y: 230 },
  { id: 5, label: 'Qualification', icon: '✅', x: 50, y: 290 },
  { id: 6, label: 'Interview-Ready', icon: '🏆', x: 50, y: 350 },
];

const nodeIcons = ['◈', '◎', '◉', '◆', '◇', '◈', '★'];
const nodeLabels = [
  'Job Description',
  'Talent Discovery',
  'AI Outreach',
  'AI Conversations',
  'AI Interviews',
  'Qualification',
  'Interview-Ready Talent',
];

export default function HiringEngineViz() {
  const [activeNode, setActiveNode] = useState(0);
  const [orbPositions, setOrbPositions] = useState([]);
  const animRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    let frame = 0;
    const total = nodeLabels.length;

    const animate = () => {
      frame++;
      if (frame % 60 === 0) {
        setActiveNode(prev => (prev + 1) % total);
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const nodeSpacing = 68;
  const svgHeight = (nodeLabels.length - 1) * nodeSpacing + 80;
  const cx = 50;

  return (
    <div className="relative w-full max-w-[280px] mx-auto select-none">
      <svg
        width="100%"
        viewBox={`0 0 260 ${svgHeight}`}
        className="overflow-visible"
        style={{ filter: 'drop-shadow(0 0 40px rgba(48,176,240,0.12))' }}
      >
        {/* Background */}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#30B0F0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0058A0" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {nodeLabels.slice(0, -1).map((_, i) => {
          const y1 = 40 + i * nodeSpacing;
          const y2 = 40 + (i + 1) * nodeSpacing;
          const isActive = i < activeNode;
          return (
            <g key={`line-${i}`}>
              {/* Background line */}
              <line
                x1={cx} y1={y1 + 16}
                x2={cx} y2={y2 - 16}
                stroke="#E2E8F0"
                strokeWidth="2"
              />
              {/* Active line */}
              {isActive && (
                <line
                  x1={cx} y1={y1 + 16}
                  x2={cx} y2={y2 - 16}
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                  filter="url(#glow)"
                />
              )}
              {/* Animated dash */}
              {i === activeNode - 1 && (
                <line
                  x1={cx} y1={y1 + 16}
                  x2={cx} y2={y2 - 16}
                  stroke="#30B0F0"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="dash-animated"
                  filter="url(#glow)"
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodeLabels.map((label, i) => {
          const y = 40 + i * nodeSpacing;
          const isActive = i === activeNode;
          const isDone = i < activeNode;

          return (
            <g key={`node-${i}`} filter={isActive ? "url(#nodeGlow)" : undefined}>
              {/* Outer ring for active */}
              {isActive && (
                <circle
                  cx={cx} cy={y}
                  r="22"
                  fill="none"
                  stroke="#30B0F0"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  className="animate-ping"
                  style={{ transformOrigin: `${cx}px ${y}px` }}
                />
              )}

              {/* Node circle */}
              <circle
                cx={cx} cy={y}
                r="14"
                fill={isActive ? '#0058A0' : isDone ? '#E8F5FE' : 'white'}
                stroke={isActive ? '#30B0F0' : isDone ? '#30B0F0' : '#E2E8F0'}
                strokeWidth={isActive ? "2" : "1.5"}
              />

              {/* Node number */}
              <text
                x={cx} y={y + 5}
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill={isActive ? 'white' : isDone ? '#0058A0' : '#94A3B8'}
                fontFamily="Inter Tight, Inter, sans-serif"
              >
                {isDone ? '✓' : i + 1}
              </text>

              {/* Label */}
              <text
                x={cx + 24} y={y + 4}
                fontSize="12"
                fontWeight={isActive ? "600" : "400"}
                fill={isActive ? '#0058A0' : isDone ? '#0058A0' : '#94A3B8'}
                fontFamily="Inter, sans-serif"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Traveling orb */}
        {activeNode > 0 && (
          <circle
            cx={cx}
            cy={40 + (activeNode - 0.5) * nodeSpacing}
            r="5"
            fill="#30B0F0"
            filter="url(#glow)"
            opacity="0.9"
          />
        )}
      </svg>

      {/* Status indicator */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#30B0F0]/30 bg-[#30B0F0]/5">
          <span className="w-2 h-2 rounded-full bg-[#30B0F0] pulse-node"></span>
          <span className="text-xs font-medium text-[#0058A0]">Processing autonomously...</span>
        </div>
      </div>
    </div>
  );
}