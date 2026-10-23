import { describe, it, expect } from 'vitest';
import { add, average } from '../src/math.js';

describe('math', () => {
  it('adds two numbers', () => expect(add(2, 3)).toBe(5));
  it('averages a list', () => expect(average([2, 4, 6])).toBe(4));
  it('averages an empty list to 0', () => expect(average([])).toBe(0));
});
