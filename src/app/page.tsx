// src/app/page.tsx
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { SpinningCommunismSymbol } from '@/components/SpinningCommunismSymbol'; // Importe o componente
import { SpinningBitcoin } from '@/components/SpinningBitcoin'; // Importe o componente


export default function Home() {
  const [salarioLiquido, setSalarioLiquido] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')
  const [resultados, setResultados] = useState<any>(null)

  const calcularCustos = () => {
    if (!salarioLiquido) {
      setMensagemErro('Por favor, insira o valor do salário líquido.')
      return
    }

    setMensagemErro('')

    const salarioLiquidoNum = parseFloat(
      salarioLiquido.replace(',', '.').replace(/[^\d.]/g, '')
    )

    if (isNaN(salarioLiquidoNum)) {
      setMensagemErro('Por favor, insira um valor numérico válido.')
      return
    }

    // Cálculos simplificados (ajuste conforme necessário)
    const salarioBruto = salarioLiquidoNum / 0.8 // Supondo 20% de descontos
    const fgts = salarioBruto * 0.08
    const inss = salarioBruto * 0.11
    const irrf = salarioBruto * 0.075
    const inssPatronal = salarioBruto * 0.2
    const decimoTerceiro = salarioBruto / 12
    const ferias = salarioBruto / 12
    const planoSaude = 500 // Valor fixo
    const valeRefeicao = 20 * 22 // R$20 por dia útil

    const custoTotal =
      salarioBruto +
      fgts +
      inssPatronal +
      decimoTerceiro +
      ferias +
      planoSaude +
      valeRefeicao

    setResultados({
      salarioBruto: salarioBruto.toFixed(2),
      fgts: fgts.toFixed(2),
      inss: inss.toFixed(2),
      irrf: irrf.toFixed(2),
      inssPatronal: inssPatronal.toFixed(2),
      decimoTerceiro: decimoTerceiro.toFixed(2),
      ferias: ferias.toFixed(2),
      planoSaude: planoSaude.toFixed(2),
      valeRefeicao: valeRefeicao.toFixed(2),
      custoTotal: custoTotal.toFixed(2),
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <SpinningBitcoin /> {/* Use o componente aqui */}
      <h1 className="text-2xl font-bold mb-4">Calculadora CLT vs PJ</h1>
      <Input
        type="text"
        placeholder="Digite seu salário líquido"
        value={salarioLiquido}
        onChange={(e) => setSalarioLiquido(e.target.value)}
        className="mb-2 max-w-xs"
      />
      {mensagemErro && <p className="text-red-500 mb-2">{mensagemErro}</p>}
      <Button onClick={calcularCustos}>Calcular</Button>
      {resultados && (
        <div className="mt-6">
          <p>Salário Bruto: R$ {resultados.salarioBruto}</p>
          <p>Desconto FGTS: R$ {resultados.fgts}</p>
          <p>Desconto INSS: R$ {resultados.inss}</p>
          <p>Desconto IRRF: R$ {resultados.irrf}</p>
          <p>INSS Patronal: R$ {resultados.inssPatronal}</p>
          <p>Custo 13º: R$ {resultados.decimoTerceiro}</p>
          <p>Custo Férias: R$ {resultados.ferias}</p>
          <p>Plano de Saúde: R$ {resultados.planoSaude}</p>
          <p>Vale Refeição: R$ {resultados.valeRefeicao}</p>
          <p className="font-bold mt-2">
            Custo Total para o Patrão: R$ {resultados.custoTotal}
          </p>
        </div>
      )}
    </div>
  )
}
