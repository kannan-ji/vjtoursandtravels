import test from 'node:test';
import assert from 'node:assert/strict';
import { formatSlideCounter, getNextSlideIndex, getPrevSlideIndex } from './carousel';

test('getNextSlideIndex advances and wraps cleanly', () => {
  assert.equal(getNextSlideIndex(0, 4), 1);
  assert.equal(getNextSlideIndex(3, 4), 0);
  assert.equal(getNextSlideIndex(0, 0), 0);
});

test('getPrevSlideIndex decrements and wraps cleanly', () => {
  assert.equal(getPrevSlideIndex(2, 4), 1);
  assert.equal(getPrevSlideIndex(0, 4), 3);
  assert.equal(getPrevSlideIndex(0, 0), 0);
});

test('formatSlideCounter formats 1-indexed i/n counter safely', () => {
  assert.equal(formatSlideCounter(0, 4), '1/4');
  assert.equal(formatSlideCounter(2, 4), '3/4');
  assert.equal(formatSlideCounter(10, 4), '4/4');
  assert.equal(formatSlideCounter(0, 0), '0/0');
});
