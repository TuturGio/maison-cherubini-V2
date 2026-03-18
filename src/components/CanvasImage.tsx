import { useEffect, useRef } from 'react';

interface CanvasImageProps {
  draw: (canvas: HTMLCanvasElement) => void;
  className?: string;
}

export default function CanvasImage({ draw, className = '' }: CanvasImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.offsetWidth || 400;
      canvas.height = parent.offsetHeight || 400;
    }

    draw(canvas);
  }, [draw]);

  return <canvas ref={canvasRef} className={className} />;
}
