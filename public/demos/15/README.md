# Pet&Style - Otimização de Performance Web

Landing page responsiva de produtos para pets. Este repositório registra a evolução do projeto em duas versões, com foco em carregamento, estabilidade visual e redução de recursos.

## Versão 1 - antes da otimização

A versão original utilizava Tailwind via CDN, configurado por JavaScript no navegador. As seis imagens eram JPEG, totalizavam **395,1 KB**, e os produtos abaixo da dobra eram carregados imediatamente. Além disso, as imagens não declaravam `width` e `height`, o que poderia causar deslocamento do layout (CLS).

Principais gargalos:

- Imagens JPEG com dimensões maiores do que as necessárias na tela.
- Script externo do Tailwind bloqueando trabalho de renderização.
- Imagens de catálogo sem `loading="lazy"`.
- Ausência de dimensões para reservar espaço no layout.

Evidência: [relatório inicial em PDF](reports/01-relatorio-antes.pdf).

## Versão 2 - projeto otimizado

A versão atual substitui as fotos por WebP redimensionados e remove o CDN do Tailwind. A interface foi preservada em CSS local já minificado e o HTML foi simplificado, sem imports ou scripts não utilizados.

Melhorias aplicadas:

- Conversão das seis imagens para `.webp` com qualidade 78 e redimensionamento adequado.
- Redução do conjunto de imagens de **395,1 KB para 122,1 KB**: economia de **273,0 KB (69,1%)**.
- `loading="lazy"` e `decoding="async"` nas imagens dos produtos, que estão abaixo da dobra.
- `width` e `height` em todas as imagens para melhorar a estabilidade visual.
- Hero priorizado com `fetchpriority="high"`.
- CSS local minificado (`styles.min.css`) e remoção do Tailwind CDN/configuração em JavaScript.
- Remoção de código e dependências de estilos que não eram necessários para a página final.

Evidência: [relatório otimizado em PDF](reports/02-relatorio-depois.pdf).

## Comparação

| Critério | V1 | V2 |
| --- | --- | --- |
| Formato das imagens | JPEG | WebP |
| Peso das imagens | 395,1 KB | 122,1 KB |
| Carregamento abaixo da dobra | Imediato | Lazy loading |
| Estilos | CDN + JavaScript | CSS local minificado |
| Estabilidade visual | Sem dimensões | Dimensões declaradas |

O maior impacto foi a conversão/redimensionamento das imagens. Em uma validação no Chrome DevTools, execute Lighthouse em modo Mobile, registre as notas na captura e compare os resultados com os relatórios deste repositório.

## Como abrir localmente

Abra `index.html` no navegador. Para uma auditoria mais fiel, use um servidor local, abra a página no Chrome e execute **DevTools > Lighthouse > Analyze page load**.

## Estrutura

- `assets/images/`: imagens WebP usadas pela V2.
- `reports/`: relatórios antes/depois em PDF.
- `scripts/optimize-images.js`: script usado para gerar os WebP.
- `scripts/generate-reports.py`: script que gera os dois relatórios.
