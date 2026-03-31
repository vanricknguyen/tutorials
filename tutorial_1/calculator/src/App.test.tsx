import { calFuncs } from './App';
import { describe, test, expect } from 'vitest';

describe('add function', () => {
  test('add two numbers correctly', () => {
    expect(calFuncs.add(2, 3)).toBe(5);
  });
});

describe('minus function', () => {
  test('minus two numbers correctly', () => {
    expect(calFuncs.subtract(2, 3)).toBe(-1);
  });
});

describe('multiply function', () => {
  test('multiply two numbers correctly', () => {
    expect(calFuncs.multiply(2, 3)).toBe(6);
  });
});

describe('divide function', () => {
  test('divide two numbers correctly', () => {
    expect(calFuncs.divide(2, 2)).toBe(1);
  });
});
