export function drawFolds(
  canvas: HTMLCanvasElement,
  baseColor: string,
  foldLight: string,
  foldDark: string,
  numFolds: number
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, w, h);

  const fw = w / numFolds;
  for (let i = 0; i < numFolds; i++) {
    const x = i * fw;
    const g = ctx.createLinearGradient(x, 0, x + fw, 0);
    g.addColorStop(0, foldDark);
    g.addColorStop(0.35, foldLight);
    g.addColorStop(0.65, foldLight);
    g.addColorStop(1, foldDark);
    ctx.fillStyle = g;
    ctx.fillRect(x, 0, fw + 1, h);
  }

  const v = ctx.createLinearGradient(0, 0, 0, h);
  v.addColorStop(0, 'rgba(40,20,10,0.06)');
  v.addColorStop(1, 'rgba(40,20,10,0.18)');
  ctx.fillStyle = v;
  ctx.fillRect(0, 0, w, h);
}

export function drawSheer(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = '#E8E4DC';
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < w; i += 18) {
    ctx.strokeStyle = `rgba(255,255,248,${0.06 + Math.sin(i * 0.2) * 0.04})`;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 30, h);
    ctx.stroke();
  }

  const g = ctx.createRadialGradient(w * 0.55, h * 0.15, 0, w * 0.55, h * 0.15, w * 0.7);
  g.addColorStop(0, 'rgba(255,255,248,0.55)');
  g.addColorStop(1, 'rgba(255,255,248,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.18;
  for (let y = 0; y < h; y += 8) {
    ctx.strokeStyle = '#C8C0B0';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= w; x += 20) {
      ctx.lineTo(x, y + Math.sin(x * 0.05 + y * 0.03) * 3);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

export function drawWeave(canvas: HTMLCanvasElement, c1: string, c2: string) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, w, h);

  const s = 10;
  ctx.globalAlpha = 0.22;
  for (let x = 0; x < w; x += s) {
    ctx.strokeStyle = c2;
    ctx.lineWidth = s * 0.45;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += s) {
    ctx.strokeStyle = c1;
    ctx.lineWidth = s * 0.45;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, 'rgba(255,255,255,0.12)');
  g.addColorStop(1, 'rgba(0,0,0,0.08)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

export function drawNautical(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = '#8A9EA8';
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.18;
  for (let i = -h; i < w + h; i += 30) {
    ctx.fillStyle = '#6B8090';
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 14, 0);
    ctx.lineTo(i + 14 + h, h);
    ctx.lineTo(i + h, h);
    ctx.closePath();
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(200,220,230,0.3)');
  g.addColorStop(0.5, 'rgba(100,160,180,0)');
  g.addColorStop(1, 'rgba(40,60,80,0.25)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

export function drawRealisation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#C8B4A0');
  g.addColorStop(1, '#B0907A');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  drawFolds(canvas, '#C0A890', '#D8C8B4', '#A89070', 5);

  const fl = ctx.createLinearGradient(0, h * 0.72, 0, h);
  fl.addColorStop(0, 'rgba(180,150,110,0.4)');
  fl.addColorStop(1, 'rgba(160,130,90,0.6)');
  ctx.fillStyle = fl;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  for (let x = 0; x < w; x += 28) {
    ctx.strokeStyle = 'rgba(100,70,40,0.18)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(x, h * 0.72);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
}

export function drawShowroom(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = '#D8D0C4';
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.15;
  for (let x = 0; x < w; x += 40) {
    ctx.strokeStyle = '#B0A898';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(255,252,245,0.45)');
  g.addColorStop(1, 'rgba(200,190,178,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}
