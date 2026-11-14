'use client';

import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
} from 'lucide-react';
import {
  buildWhatsAppEnquiryUrl,
  formatEnquiryMessage,
  validateEnquiryForm,
  type EnquiryValidationErrors,
} from '@/lib/enquiry';
import { CONTACT_INFO } from '@/lib/vjtours-data';

interface ContactSectionProps {
  message: string;
  onMessageChange: (value: string) => void;
  prefillVersion: number;
  selectedContextLabel: string | null;
  onClearContext: () => void;
}

export default function ContactSection({
  message,
  onMessageChange,
  prefillVersion,
  selectedContextLabel,
  onClearContext,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [submittedState, setSubmittedState] = useState<{
    version: number;
    url: string;
    summary: string;
  } | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (prefillVersion > 0) {
      nameInputRef.current?.focus({ preventScroll: true });
    }
  }, [prefillVersion]);

  const activeSubmission =
    submittedState && submittedState.version === prefillVersion ? submittedState : null;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateEnquiryForm({ name, whatsapp, message });
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedState({
      version: prefillVersion,
      url: buildWhatsAppEnquiryUrl({ name, whatsapp, message }),
      summary: formatEnquiryMessage({ name, whatsapp, message }),
    });
  }

  function handleReset() {
    setSubmittedState(null);
  }

  return (
    <section id="contact-us" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Dispatch Hub Details */}
          <div className="lg:col-span-5">
            <p className="font-display text-sm font-semibold tracking-wide text-[#0D6E4E] tabular-nums">
              04
            </p>
            <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight text-[#141A17] sm:text-4xl [text-wrap:balance]">
              {CONTACT_INFO.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4E5953]">
              {CONTACT_INFO.subheading}
            </p>

            <div className="mt-10 divide-y divide-[#E2DFD7] border-t border-b border-[#E2DFD7]">
              {/* Hub Address */}
              <div className="py-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0D6E4E]" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#141A17]">
                      {CONTACT_INFO.businessName}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4E5953]">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#0D6E4E]">
                      {CONTACT_INFO.airportNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="py-6">
                <div className="flex items-start gap-3.5">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[#0D6E4E]" />
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#4E5953]">
                      {CONTACT_INFO.emailLabel}
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 inline-block text-base font-semibold text-[#141A17] underline decoration-[#D8D4CA] underline-offset-4 transition-colors hover:text-[#0D6E4E] hover:decoration-[#0D6E4E]"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Call Numbers */}
              <div className="py-6">
                <div className="flex items-start gap-3.5">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#0D6E4E]" />
                  <div className="w-full">
                    <p className="text-xs font-semibold tracking-wide text-[#4E5953]">
                      {CONTACT_INFO.callLabel}
                    </p>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {CONTACT_INFO.phones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm bg-[#141A17] px-4 py-2.5 text-sm font-semibold text-white tabular-nums transition-colors duration-150 hover:bg-[#0D6E4E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
                        >
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          <span>{phone.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="py-6">
                <p className="text-xs font-semibold tracking-wide text-[#4E5953]">
                  {CONTACT_INFO.socialLabel}
                </p>
                <div className="mt-3 flex items-center gap-6">
                  {CONTACT_INFO.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#141A17] underline decoration-[#D8D4CA] underline-offset-4 transition-colors hover:text-[#0D6E4E] hover:decoration-[#0D6E4E]"
                    >
                      <span>{social.label}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated WhatsApp Enquiry Desk */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[#D8D4CA] bg-[#F7F6F2] p-8 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#D8D4CA] pb-5">
                <h3 className="font-display text-2xl font-semibold text-[#141A17]">
                  {CONTACT_INFO.formTitle}
                </h3>
                {selectedContextLabel && (
                  <div className="flex items-center gap-3 text-xs font-medium text-[#0D6E4E]">
                    <span>Selected: {selectedContextLabel}</span>
                    <button
                      type="button"
                      onClick={onClearContext}
                      className="underline underline-offset-2 hover:text-[#141A17] cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              {activeSubmission ? (
                <div
                  className="mt-8 space-y-6 rounded-sm border border-[#0D6E4E]/30 bg-white p-6 sm:p-8"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#0D6E4E]" />
                    <div>
                      <h4 className="font-display text-xl font-semibold text-[#141A17]">
                        Enquiry Ready for WhatsApp
                      </h4>
                      <p className="mt-1 text-sm text-[#4E5953]">
                        Click below to send your pre-filled trip details directly to our Perumbavoor
                        dispatch team.
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap rounded-sm border border-[#E2DFD7] bg-[#F7F6F2] p-4 font-sans text-sm leading-relaxed text-[#2D3631]">
                    {activeSubmission.summary}
                  </pre>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={activeSubmission.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#0D6E4E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#09543B] whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" />
                      <span>Continue to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-[#D8D4CA] bg-white px-5 py-3 text-sm font-semibold text-[#141A17] transition-colors hover:bg-[#ECEAE3] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <RotateCcw className="h-4 w-4 shrink-0" />
                      <span>Edit Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-6">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-sm font-semibold text-[#141A17]"
                    >
                      {CONTACT_INFO.fields.nameLabel}
                    </label>
                    <input
                      ref={nameInputRef}
                      id="enquiry-name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={CONTACT_INFO.fields.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                      className="mt-2 block w-full rounded-sm border border-[#D8D4CA] bg-white px-4 py-3 text-base text-[#141A17] placeholder:text-[#7B847F] focus:border-[#0D6E4E] focus:outline-none focus:ring-1 focus:ring-[#0D6E4E]"
                    />
                    {errors.name && (
                      <p id="enquiry-name-error" className="mt-1.5 text-xs font-medium text-[#B42318]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-whatsapp"
                      className="block text-sm font-semibold text-[#141A17]"
                    >
                      {CONTACT_INFO.fields.whatsappLabel}
                    </label>
                    <input
                      id="enquiry-whatsapp"
                      name="whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => {
                        setWhatsapp(e.target.value);
                        if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
                      }}
                      placeholder={CONTACT_INFO.fields.whatsappPlaceholder}
                      aria-invalid={Boolean(errors.whatsapp)}
                      aria-describedby={errors.whatsapp ? 'enquiry-whatsapp-error' : undefined}
                      className="mt-2 block w-full rounded-sm border border-[#D8D4CA] bg-white px-4 py-3 text-base text-[#141A17] tabular-nums placeholder:text-[#7B847F] focus:border-[#0D6E4E] focus:outline-none focus:ring-1 focus:ring-[#0D6E4E]"
                    />
                    {errors.whatsapp && (
                      <p
                        id="enquiry-whatsapp-error"
                        className="mt-1.5 text-xs font-medium text-[#B42318]"
                      >
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-sm font-semibold text-[#141A17]"
                    >
                      {CONTACT_INFO.fields.messageLabel}
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        onMessageChange(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder={CONTACT_INFO.fields.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                      className="mt-2 block w-full rounded-sm border border-[#D8D4CA] bg-white px-4 py-3 text-base text-[#141A17] placeholder:text-[#7B847F] focus:border-[#0D6E4E] focus:outline-none focus:ring-1 focus:ring-[#0D6E4E]"
                    />
                    {errors.message && (
                      <p
                        id="enquiry-message-error"
                        className="mt-1.5 text-xs font-medium text-[#B42318]"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-sm bg-[#0D6E4E] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#09543B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>{CONTACT_INFO.fields.submitLabel}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
