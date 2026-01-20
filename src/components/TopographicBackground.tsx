import { useEffect, useState, useMemo } from 'react';

interface ContourLine {
  d: string;
  opacity: number;
}

export default function TopographicBackground() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.015);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const contourLines = useMemo(() => {
    const lines: ContourLine[] = [];
    const numLines = 20;
    const baseAmplitude = 25;

    for (let i = 0; i < numLines; i++) {
      const yBase = 5 + (i * 90) / numLines;
      const phase = i * 0.5 + time;
      const amplitude = baseAmplitude * (0.5 + 0.5 * Math.sin(i * 0.3));
      
      let d = `M -5 ${yBase}`;
      
      for (let x = -5; x <= 105; x += 2) {
        const y = yBase + 
          amplitude * Math.sin((x * 0.05) + phase) * 0.3 +
          amplitude * Math.sin((x * 0.02) + phase * 0.7) * 0.4 +
          amplitude * Math.sin((x * 0.08) + phase * 1.3) * 0.2 +
          (Math.sin(x * 0.03 + i) * 8);
        d += ` L ${x} ${y}`;
      }
      
      lines.push({
        d,
        opacity: 0.15 + (i % 4 === 0 ? 0.15 : 0)
      });
    }

    // Add circular contour rings
    for (let ring = 0; ring < 5; ring++) {
      const cx = 65 + Math.sin(time * 0.3 + ring) * 8;
      const cy = 45 + Math.cos(time * 0.2 + ring) * 8;
      const baseRadius = 8 + ring * 7;
      
      let d = '';
      const points = 60;
      for (let p = 0; p <= points; p++) {
        const angle = (p / points) * Math.PI * 2;
        const radiusVariation = 
          Math.sin(angle * 4 + time + ring) * 2 +
          Math.sin(angle * 7 + time * 0.5) * 1.5;
        const r = baseRadius + radiusVariation;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        d += p === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
      }
      d += ' Z';
      
      lines.push({
        d,
        opacity: 0.12 + (ring === 0 ? 0.1 : 0)
      });
    }

    // Another set of circular contours on the left
    for (let ring = 0; ring < 3; ring++) {
      const cx = 25 + Math.cos(time * 0.25 + ring) * 5;
      const cy = 65 + Math.sin(time * 0.15 + ring) * 5;
      const baseRadius = 6 + ring * 6;
      
      let d = '';
      const points = 50;
      for (let p = 0; p <= points; p++) {
        const angle = (p / points) * Math.PI * 2;
        const radiusVariation = 
          Math.sin(angle * 3 + time * 0.8 + ring) * 2 +
          Math.sin(angle * 5 + time * 0.4) * 1;
        const r = baseRadius + radiusVariation;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        d += p === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
      }
      d += ' Z';
      
      lines.push({
        d,
        opacity: 0.1 + (ring === 0 ? 0.08 : 0)
      });
    }

    return lines;
  }, [time]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        {contourLines.map((line, i) => (
          <path
            key={i}
            d={line.d}
            fill="none"
            stroke="black"
            strokeWidth="0.25"
            style={{ opacity: line.opacity }}
          />
        ))}
      </svg>
    </div>
  );
}