// src/components/SpinningCommunismSymbol.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export function SpinningCommunismSymbol() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let A = 0;
    let B = 0;

    const renderFrame = () => {
      const b = [];
      const z = [];
      const width = 80;
      const height = 24;
      const backgroundASCIICode = ' ';

      // Inicializar buffers
      for (let i = 0; i < width * height; i++) {
        b[i] = backgroundASCIICode;
        z[i] = 0;
      }

      // Parâmetros do símbolo
      const symbolSize = 20;

      // Renderizar o símbolo
      for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
        for (let phi = 0; phi < Math.PI * 2; phi += 0.02) {
          // Coordenadas 3D da foice e martelo
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          const sinPhi = Math.sin(phi);
          const cosPhi = Math.cos(phi);

          // Definir a forma da foice e do martelo
          // Aqui, modelamos uma forma toroidal (similar ao donut) como base
          const circleX = (symbolSize + 5 * cosTheta) * (cosPhi);
          const circleY = (symbolSize + 5 * cosTheta) * (sinPhi);
          const circleZ = 5 * sinTheta;

          // Rotacionar em torno dos eixos X e Z
          const x = circleX * Math.cos(B) - circleZ * Math.sin(B);
          const y = circleY;
          const zCoord = circleX * Math.sin(B) + circleZ * Math.cos(B);

          // Projeção em 2D
          const ooz = 1 / (zCoord + 100); // Fator de profundidade
          const xp = Math.floor(width / 2 + (x * ooz * width) / 2);
          const yp = Math.floor(height / 2 - (y * ooz * height) / 2);

          // Índice no buffer
          const idx = xp + yp * width;

          // Caractere ASCII com base na profundidade
          const luminanceIndex = Math.floor(8 * ((sinPhi * sinTheta - cosPhi * cosTheta)));
          const asciiChars = '.,-~:;=!*#$@';
          const luminance = luminanceIndex > 0 ? luminanceIndex : 0;
          const asciiChar = asciiChars[luminance];

          if (yp >= 0 && yp < height && xp >= 0 && xp < width && ooz > z[idx]) {
            z[idx] = ooz;
            b[idx] = asciiChar;
          }
        }
      }

      // Construir a string final
      let output = '';
      for (let i = 0; i < b.length; i++) {
        output += b[i];
        if ((i + 1) % width === 0) {
          output += '\n';
        }
      }

      if (preRef.current) {
        preRef.current.textContent = output;
      }

      A += 0.07;
      B += 0.03;

      // Chamar o próximo frame
      requestAnimationFrame(renderFrame);
    };

    renderFrame();
  }, []);

  return (
    <div className="flex justify-center mb-4">
      <pre
        ref={preRef}
        className="text-[8px] leading-[6px] font-mono text-center whitespace-pre overflow-hidden"
      ></pre>
    </div>
  );
}
