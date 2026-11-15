import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppEnquiryUrl,
  formatEnquiryMessage,
  normalizePhoneDigits,
  validateEnquiryForm,
} from './enquiry';
import { CONTACT_INFO, FLEET_VEHICLES, TOUR_PACKAGES } from './vjtours-data';

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
    message: 'Classic Munnar & Backwaters 5 Days / 4 Nights enquiry',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('buildWhatsAppEnquiryUrl encodes formatted message onto target WhatsApp number', () => {
  const values = {
    name: 'Ramesh Kumar',
    whatsapp: '+91 98765 43210',
    message: 'Grand Kerala & Kanyakumari enquiry',
  };
  const url = buildWhatsAppEnquiryUrl(values);
  assert.ok(url.startsWith('https://wa.me/917025304620?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.equal(decoded, formatEnquiryMessage(values));
});

test('fleet contains only WagonR and Ertiga and packages include 550 km and 1,300 km', () => {
  assert.deepEqual(
    FLEET_VEHICLES.map((v) => v.name),
    ['WagonR', 'Ertiga'],
  );
  assert.equal(TOUR_PACKAGES[0].distanceKm, '550 km');
  assert.equal(TOUR_PACKAGES[1].distanceKm, '1,300 km');
  const ig = CONTACT_INFO.socials.find((s) => s.label === 'Instagram');
  assert.equal(ig?.href, 'https://www.instagram.com/vj_travels_official_');
});
