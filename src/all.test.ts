import { expect, test } from 'vitest';
import { a } from './a';
import { b } from './b';
import { c } from './c';

test('all', () => {
  expect(a({})).toBe(false);
  expect(b()).toBeTypeOf('string');
  expect(c()).toBe('function');
});
