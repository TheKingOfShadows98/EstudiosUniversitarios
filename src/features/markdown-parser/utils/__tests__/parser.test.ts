/**
 * @file parser.test.ts
 * @description Pruebas unitarias para el tokenizador, generador de AST y extractor de examenes.
 */

import { describe, it, expect } from 'vitest';
import { generateSlug } from '../slugUtils';
import { parseAttributes, tokenizeCustomMarkdown } from '../tagTokenizer';
import { buildCustomAst } from '../astBuilder';
import { extractQuestionsFromAst } from '../examExtractor';

describe('slugUtils', () => {
  it('debe generar slugs limpios y normalizados sin acentos', () => {
    expect(generateSlug('Árboles Binarios de Búsqueda')).toBe('arboles-binarios-de-busqueda');
    expect(generateSlug('Factor de Equilibrio (AVL) - Nivel 1')).toBe('factor-de-equilibrio-avl-nivel-1');
  });

  it('debe manejar entradas vacias de forma segura', () => {
    const slug = generateSlug('');
    expect(slug).toMatch(/^item-[a-z0-9]+$/);
  });
});

describe('tagTokenizer', () => {
  it('debe parsear atributos en formato directo con comillas', () => {
    const attrs = parseAttributes('"Fundamentos de Grafos"');
    expect(attrs['nombre']).toBe('Fundamentos de Grafos');
  });

  it('debe parsear atributos con signo igual directo', () => {
    const attrs = parseAttributes('= "Grafos Dirigidos"');
    expect(attrs['nombre']).toBe('Grafos Dirigidos');
  });

  it('debe parsear atributos clave-valor estandar', () => {
    const attrs = parseAttributes('nombre="Arboles" tipo="opcion_multiple" correcta="true"');
    expect(attrs['nombre']).toBe('Arboles');
    expect(attrs['tipo']).toBe('opcion_multiple');
    expect(attrs['correcta']).toBe('true');
  });

  it('debe tokenizar un texto completo con etiquetas y contenido intermedio', () => {
    const input = `
      [TEMA nombre="Arboles"]
      Texto de introduccion.
      [DEFINICION nombre="Raiz"]
      Nodo superior.
      [/DEFINICION]
      [/TEMA]
    `;

    const tokens = tokenizeCustomMarkdown(input);
    expect(tokens.length).toBeGreaterThan(4);

    const openTema = tokens.find((t) => t.type === 'open_tag' && t.tagName === 'TEMA');
    expect(openTema).toBeDefined();

    const openDef = tokens.find((t) => t.type === 'open_tag' && t.tagName === 'DEFINICION');
    expect(openDef).toBeDefined();
  });
});

describe('astBuilder', () => {
  it('debe construir un AST con temas, definiciones y preguntas correctamente anidadas', () => {
    const markdown = `
      [TEMA nombre="Estructuras Jerarquicas"]
      Introduccion teorica.

      [DEFINICION nombre="Nodo Hoja"]
      Nodo sin descendencia.

      [PREGUNTA tipo="opcion_multiple"]
      Tiene hijos una hoja?
      [RESPUESTA correcta="true"]No[/RESPUESTA]
      [RESPUESTA]Si[/RESPUESTA]
      [EXPLICACION]
      Un nodo hoja se caracteriza por tener grado cero.
      [/EXPLICACION]
      [/PREGUNTA]
      [/DEFINICION]
      [/TEMA]
    `;

    const ast = buildCustomAst(markdown);
    expect(ast.type).toBe('root');
    expect(ast.children.length).toBe(1);

    const topic = ast.children[0];
    expect(topic.type).toBe('tema');
    if (topic.type === 'tema') {
      expect(topic.name).toBe('Estructuras Jerarquicas');
      expect(topic.id).toBe('estructuras-jerarquicas');

      const definition = topic.children.find((c) => c.type === 'definicion');
      expect(definition).toBeDefined();

      if (definition && definition.type === 'definicion') {
        expect(definition.name).toBe('Nodo Hoja');

        const question = definition.children.find((c) => c.type === 'pregunta');
        expect(question).toBeDefined();

        if (question && question.type === 'pregunta') {
          expect(question.questionType).toBe('opcion_multiple');
          expect(question.prompt).toContain('Tiene hijos una hoja?');
          expect(question.options.length).toBe(2);
          expect(question.options[0].text).toBe('No');
          expect(question.options[0].isCorrect).toBe(true);
          expect(question.options[1].text).toBe('Si');
          expect(question.options[1].isCorrect).toBe(false);
          expect(question.explanation).toContain('grado cero');
        }
      }
    }
  });

  it('debe tolerar texto Markdown estandar sin etiquetas especiales', () => {
    const markdown = '# Titulo\nParrafo estandar con **negrita**.';
    const ast = buildCustomAst(markdown);

    expect(ast.type).toBe('root');
    expect(ast.children.length).toBe(1);
    expect(ast.children[0].type).toBe('markdown');
  });
});

describe('examExtractor', () => {
  it('debe recopilar todas las preguntas dispersas en temas y definiciones', () => {
    const markdown = `
      [TEMA nombre="Tema 1"]
      [PREGUNTA tipo="opcion_multiple"]
      Pregunta en Tema
      [RESPUESTA correcta="true"]A[/RESPUESTA]
      [/PREGUNTA]

      [DEFINICION nombre="Def 1"]
      [PREGUNTA tipo="opcion_multiple"]
      Pregunta en Definicion
      [RESPUESTA correcta="true"]B[/RESPUESTA]
      [/PREGUNTA]
      [/DEFINICION]
      [/TEMA]
    `;

    const ast = buildCustomAst(markdown);
    const questions = extractQuestionsFromAst(ast);

    expect(questions.length).toBe(2);
    expect(questions[0].prompt).toContain('Pregunta en Tema');
    expect(questions[1].prompt).toContain('Pregunta en Definicion');
  });
});
