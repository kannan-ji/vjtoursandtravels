import { WHATSAPP_NUMBER } from './vjtours-data';

export interface EnquiryFormValues {
  name: string;
  whatsapp: string;
  message: string;
}

export interface EnquiryValidationErrors {
  name?: string;
  whatsapp?: string;
  message?: string;
}

export interface EnquiryValidationResult {
  valid: boolean;
  errors: EnquiryValidationErrors;
}

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function validateEnquiryForm(values: EnquiryFormValues): EnquiryValidationResult {
  const errors: EnquiryValidationErrors = {};
  const trimmedName = values.name.trim();
  const trimmedWhatsapp = values.whatsapp.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const digits = normalizePhoneDigits(trimmedWhatsapp);
  if (digits.length < 10 || digits.length > 15) {
    errors.whatsapp = 'Please enter a valid 10-digit WhatsApp or phone number.';
  }

  if (trimmedMessage.length < 5) {
    errors.message = 'Please share your trip dates, route, or vehicle requirement.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatEnquiryMessage(values: EnquiryFormValues): string {
  const name = values.name.trim();
  const whatsapp = values.whatsapp.trim();
  const message = values.message.trim();

  return [
    'Hello VJ Tours and Travels,',
    `Name: ${name}`,
    `WhatsApp: ${whatsapp}`,
    `Enquiry: ${message}`,
  ].join('\n');
}

export function buildWhatsAppEnquiryUrl(
  values: EnquiryFormValues,
  targetNumber: string = WHATSAPP_NUMBER,
): string {
  const text = encodeURIComponent(formatEnquiryMessage(values));
  return `https://wa.me/${targetNumber}?text=${text}`;
}
