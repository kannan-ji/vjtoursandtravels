import test from 'node:test';
import assert from 'node:assert/strict';
import { extractSectionId, getCleanUrlWithoutHash } from './navigation';

test('extractSectionId parses valid in-page anchor hrefs', () => {
  assert.equal(extractSectionId('#contact-us'), 'contact-us');
  assert.equal(extractSectionId('#tour-packages'), 'tour-packages');
  assert.equal(extractSectionId('#hero'), 'hero');
  assert.equal(extractSectionId('#'), null);
  assert.equal(extractSectionId('https://wa.me/917025304620'), null);
});

test('getCleanUrlWithoutHash preserves pathname and search while omitting hash', () => {
  assert.equal(getCleanUrlWithoutHash('/', ''), '/');
  assert.equal(getCleanUrlWithoutHash('/vjtours/', '?utm_source=test'), '/vjtours/?utm_source=test');
  assert.equal(getCleanUrlWithoutHash('', ''), '/');
});
