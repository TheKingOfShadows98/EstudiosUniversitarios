/**
 * @file scienceCompiler.test.ts
 * @description Pruebas unitarias para el compilador cientifico y tokenizador jerarquico recursivo de KaTeX.
 */

import { describe, it, expect } from 'vitest';
import { compileScientificExpression } from '../scienceCompiler';
import { tokenizeInlineContent } from '../inlineContentLexer';

describe('scienceCompiler', () => {
  it('debe compilar correctamente particulas subatomicas ($p^+$, $e^-$, $n^0$)', () => {
    const proton = compileScientificExpression('p^+');
    expect(proton.hasError).toBe(false);
    expect(proton.renderedHtml).toContain('katex');
    expect(proton.renderedHtml).toContain('p');

    const electron = compileScientificExpression('e^-');
    expect(electron.hasError).toBe(false);
    expect(electron.renderedHtml).toContain('e');
  });

  it('debe compilar constantes y variables fisicas ($Z$, $A$, $M$, $N_A$, $m_l$)', () => {
    const z = compileScientificExpression('Z');
    expect(z.hasError).toBe(false);

    const na = compileScientificExpression('N_A');
    expect(na.hasError).toBe(false);
    expect(na.renderedHtml).toContain('N');

    const ml = compileScientificExpression('m_l');
    expect(ml.hasError).toBe(false);
    expect(ml.renderedHtml).toContain('m');
  });

  it('debe compilar notacion exponencial y unidades cientificas de carga y masa', () => {
    const charge = compileScientificExpression('+1.602 \\times 10^{-19}\\text{ C}');
    expect(charge.hasError).toBe(false);
    expect(charge.renderedHtml).toContain('1.602');
    expect(charge.renderedHtml).toContain('10');
    expect(charge.renderedHtml).toContain('C');

    const mass = compileScientificExpression('1.6726 \\times 10^{-27}\\text{ kg}');
    expect(mass.hasError).toBe(false);
    expect(mass.renderedHtml).toContain('kg');
  });

  it('debe compilar formulas en modo bloque display', () => {
    const block = compileScientificExpression('FE = h(izq) - h(der)', { displayMode: true });
    expect(block.hasError).toBe(false);
    expect(block.isDisplayMode).toBe(true);
    expect(block.renderedHtml).toContain('katex-display');
  });

  it('debe manejar errores sintacticos sin lanzar excepciones no controladas', () => {
    const invalid = compileScientificExpression('\\invalidMacro{test}');
    expect(invalid.hasError).toBe(true);
    expect(invalid.renderedHtml).toBeDefined();
  });
});

describe('tokenizeInlineContent con anidamiento recursivo', () => {
  it('debe tokenizar formulas matematicas dentro de negrita (**Protones ($p^+$):**)', () => {
    const input = '**Protones ($p^+$):** Carga $+1.602 \\times 10^{-19}\\text{ C}$';
    const segments = tokenizeInlineContent(input);

    expect(segments.length).toBeGreaterThan(1);

    // El primer segmento debe ser bold
    const boldSegment = segments[0];
    expect(boldSegment.type).toBe('bold');

    if (boldSegment.type === 'bold') {
      // Debe contener hijos internos
      expect(boldSegment.children.length).toBeGreaterThan(1);

      // Debe contener el segmento cientifico p^+
      const mathChild = boldSegment.children.find((c) => c.type === 'scientific');
      expect(mathChild).toBeDefined();
      if (mathChild && mathChild.type === 'scientific') {
        expect(mathChild.expression.rawExpression).toBe('p^+');
        expect(mathChild.expression.hasError).toBe(false);
      }
    }
  });

  it('debe tokenizar variables dentro de cursivas (*Numero atomico ($Z$)*)', () => {
    const input = '*Numero atomico ($Z$)* y *Numero de masa ($A$)*';
    const segments = tokenizeInlineContent(input);

    expect(segments.length).toBeGreaterThan(1);
    const italicSegment = segments[0];
    expect(italicSegment.type).toBe('italic');

    if (italicSegment.type === 'italic') {
      const mathChild = italicSegment.children.find((c) => c.type === 'scientific');
      expect(mathChild).toBeDefined();
      if (mathChild && mathChild.type === 'scientific') {
        expect(mathChild.expression.rawExpression).toBe('Z');
      }
    }
  });

  it('debe procesar variables complejas como $N_A$ y $m_l$ dentro de negrita', () => {
    const input = '**Numero de Avogadro ($N_A$):** Valor $6.022 \\times 10^{23}\\text{ mol}^{-1}$';
    const segments = tokenizeInlineContent(input);

    const boldSegment = segments.find((s) => s.type === 'bold');
    expect(boldSegment).toBeDefined();

    if (boldSegment && boldSegment.type === 'bold') {
      const mathChild = boldSegment.children.find((c) => c.type === 'scientific');
      expect(mathChild).toBeDefined();
      if (mathChild && mathChild.type === 'scientific') {
        expect(mathChild.expression.rawExpression).toBe('N_A');
      }
    }
  });
});
