from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

root = Path(__file__).resolve().parents[1]
out = root / 'reports'
out.mkdir(exist_ok=True)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleGreen', parent=styles['Title'], textColor=HexColor('#3F7A4A'), spaceAfter=16))
styles.add(ParagraphStyle(name='Body', parent=styles['BodyText'], leading=16, spaceAfter=10))

def build(filename, title, subtitle, rows, findings):
    doc = SimpleDocTemplate(str(out / filename), pagesize=A4, rightMargin=45, leftMargin=45, topMargin=45, bottomMargin=45)
    story = [Paragraph(title, styles['TitleGreen']), Paragraph(subtitle, styles['Body']), Spacer(1, 8)]
    wrapped_rows = [[Paragraph(cell, styles['Body']) for cell in row] for row in rows]
    table = Table(wrapped_rows, colWidths=[150, 175, 175])
    table.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),HexColor('#3F7A4A')),('TEXTCOLOR',(0,0),(-1,0),HexColor('#FFFFFF')),('GRID',(0,0),(-1,-1),.5,HexColor('#D1D5DB')),('VALIGN',(0,0),(-1,-1),'TOP'),('BACKGROUND',(0,1),(-1,-1),HexColor('#F0F7EA')),('PADDING',(0,0),(-1,-1),7)]))
    story += [table, Spacer(1, 18), Paragraph('Principais observações', styles['Heading2'])]
    story += [Paragraph(f'• {item}', styles['Body']) for item in findings]
    story += [Spacer(1, 10), Paragraph('Método: inspeção local dos arquivos e medição do peso transferido. Para a entrega, a mesma página pode ser aberta no Chrome DevTools > Lighthouse em modo Mobile para complementar estas evidências com a pontuação do ambiente do avaliador.', styles['Body'])]
    doc.build(story)

build('01-relatorio-antes.pdf','Pet&Style - Relatório inicial (V1)','Linha de base registrada antes das otimizações.',[
 ['Item','Resultado V1','Impacto'],
 ['Imagens JPEG','6 arquivos / 395,1 KB','Maior transferência inicial'],
 ['Estilos','Tailwind via CDN + configuração em JavaScript','Requisição externa e trabalho de JavaScript'],
 ['Imagens de produtos','Sem loading="lazy" e sem dimensões','Baixadas logo no início; risco de CLS'],
 ['Código','HTML extenso com utilitários de CDN','Mais bytes e dependência de terceiros']],
 ['O peso das imagens era o principal gargalo identificado.', 'O Tailwind CDN é carregado como script bloqueante para gerar CSS no navegador.', 'As quatro imagens abaixo da dobra disputavam rede com o conteúdo principal.', 'As imagens não tinham width e height, favorecendo deslocamento visual durante a carga.'])

build('02-relatorio-depois.pdf','Pet&Style - Relatório otimizado (V2)','Reanálise após conversão de imagens e simplificação do front-end.',[
 ['Item','Resultado V2','Ganho'],
 ['Imagens WebP','6 arquivos / 122,1 KB','-273,0 KB (-69,1%)'],
 ['Estilos','styles.min.css local, 4,8 KB','Elimina CDN e JavaScript de configuração'],
 ['Imagens de produtos','loading="lazy" + decoding="async"','Menos competição no carregamento inicial'],
 ['Estabilidade visual','width e height em todas as imagens','Reserva espaço e reduz CLS']],
 ['A conversão e o redimensionamento das imagens tiveram o maior impacto: redução de 69,1% no conjunto de imagens.', 'O hero continua prioritário com fetchpriority="high"; os itens abaixo da dobra são adiados.', 'A folha local já está minificada, sem importações ou scripts desnecessários.', 'O HTML foi simplificado e continua responsivo, com navegação, catálogo, depoimentos e contato.'])
