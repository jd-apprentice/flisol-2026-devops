import { describe, test, expect } from 'bun:test';
import { greet, farewell, calculate } from './index';

describe('FLISoL CLI', () => {
  describe('greet', () => {
    test('greets with name', () => {
      const result = greet('Juan');
      expect(result).toBe('¡Hola Juan! Bienvenido a FLISoL 2026 🚀');
    });

    test('handles empty name', () => {
      const result = greet('');
      expect(result).toContain('¡Hola');
    });
  });

  describe('farewell', () => {
    test('says goodbye with name', () => {
      const result = farewell('María');
      expect(result).toBe('¡Adiós María! Nos vemos en FLISoL 2026 👋');
    });

    test('handles empty name', () => {
      const result = farewell('');
      expect(result).toContain('¡Adiós');
    });
  });

  describe('calculate', () => {
    test('adds numbers', () => {
      expect(calculate(2, 3, 'add')).toBe(5);
    });

    test('subtracts numbers', () => {
      expect(calculate(10, 4, 'subtract')).toBe(6);
    });

    test('multiplies numbers', () => {
      expect(calculate(3, 4, 'multiply')).toBe(12);
    });

    test('divides numbers', () => {
      expect(calculate(10, 2, 'divide')).toBe(5);
    });

    test('throws on division by zero', () => {
      expect(() => calculate(5, 0, 'divide')).toThrow('Cannot divide by zero');
    });
  });
});
