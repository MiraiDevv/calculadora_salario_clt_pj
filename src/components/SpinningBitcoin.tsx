// src/components/SpinningBitcoin.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export function SpinningBitcoin() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let A = 0; // Rotação em torno do eixo X (não usada)
    let B = 0; // Rotação em torno do eixo Y

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

      // Parâmetros da moeda
      const R = 10; // Raio da moeda
      const thickness = 1; // Espessura da moeda

      // Renderizar a moeda
      for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
        for (let phi = -Math.PI / 2; phi < Math.PI / 2; phi += 0.02) {
          // Coordenadas 3D da superfície da moeda
          const x = R * Math.cos(phi);
          const y = R * Math.sin(phi) * Math.cos(theta);
          const zCoord = R * Math.sin(phi) * Math.sin(theta);

          // Rotacionar em torno do eixo Y
          const xRot = x * Math.cos(B) + zCoord * Math.sin(B);
          const yRot = y;
          const zRot = -x * Math.sin(B) + zCoord * Math.cos(B);

          // Projeção em 2D
          const ooz = 1 / (zRot + 100); // Fator de profundidade
          const xp = Math.floor(width / 2 + (xRot * ooz * width) / 2);
          const yp = Math.floor(height / 2 - (yRot * ooz * height));

          // Índice no buffer
          const idx = xp + yp * width;

          // Caractere ASCII com base na profundidade
          const luminanceIndex = Math.floor(
            8 * ((Math.sin(phi) * Math.sin(theta)) - (Math.cos(phi) * Math.cos(theta)))
          );
          const asciiChars = '.,-~:;=!*#$@';
          const luminance = luminanceIndex > 0 ? luminanceIndex : 0;
          let asciiChar = asciiChars[luminance];

          // Se estiver na face frontal da moeda, adicionamos o símbolo 'B'
          if (zRot > 0) {
            const distanceFromCenter = Math.sqrt(xRot * xRot + yRot * yRot);
            if (distanceFromCenter < R * 0.6) {
              asciiChar = 'B';
            }
          }

          if (
            yp >= 0 &&
            yp < height &&
            xp >= 0 &&
            xp < width &&
            ooz > z[idx]
          ) {
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

      // Atualizamos apenas a variável B para girar em torno do eixo Y
      B += 0.02; // Diminuímos o incremento para girar mais devagar
      // Não atualizamos A para evitar rotação em torno do eixo X

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
