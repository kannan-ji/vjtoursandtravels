import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildPackagePrefill,
  buildVehiclePrefill,
  buildWhatsAppEnquiryUrl,
  formatEnquiryMessage,
  normalizePhoneDigits,
  validateEnquiryForm,
} from './enquiry';

test('normalizePhoneDigits strips spaces, pluses, and dashes', () => {
  assert.equal(normalizePhoneDigits('+91 98765-43210'), '919876543210');
});

test('validateEnquiryForm rejects empty or short inputs', () => {
  const result = validateEnquiryForm({ name: ' ', whatsapp: '12345', message: 'hi' });
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.whatsapp);
  assert.ok(result.errors.message);
});

test('validateEnquiryForm accepts valid enquiry values', () => {
  const result = validateEnquiryForm({
    name: 'Ramesh Kumar',
    whatsapp: '+91 98765 43210',
    message: 'Munnar 3N/4D trip for 4 guests in Ertiga',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('buildWhatsAppEnquiryUrl encodes formatted message onto target WhatsApp number', () => {
  const values = {
    name: 'Ramesh Kumar',
    whatsapp: '+91 98765 43210',
    message: 'Munnar and Alleppey enquiry',
  };
  const url = buildWhatsAppEnquiryUrl(values);
  assert.ok(url.startsWith('https://wa.me/917025304620?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.equal(decoded, formatEnquiryMessage(values));
});

test('prefill helpers include exact package and vehicle details', () => {
  const pkgMsg = buildPackagePrefill(
    '3N / 4D',
    'Munnar Tea Valley & Cochin Heritage',
    'COCHIN → MUNNAR → COCHIN',
  );
  assert.ok(pkgMsg.includes('3N / 4D'));
  assert.ok(pkgMsg.includes('Munnar Tea Valley & Cochin Heritage'));

  const vehMsg = buildVehiclePrefill('Ertiga', '5-6 passengers');
  assert.ok(vehMsg.includes('Ertiga'));
  assert.ok(vehMsg.includes('5-6 passengers'));
});
