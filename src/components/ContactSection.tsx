import React, { useState } from 'react';
import { Mail, MessageSquare, Instagram, Send, CheckCircle2, AlertCircle, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Orlando & Central Florida');
  const [firstTimeBuyer, setFirstTimeBuyer] = useState<'Yes' | 'No' | 'Not Sure Yet'>('Yes');
  const [interest, setInterest] = useState('New Construction Homes');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam protection

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [preparedEmailLink, setPreparedEmailLink] = useState<string>('');
  const [preparedSmsLink, setPreparedSmsLink] = useState<string>('');
  const [copiedInquiry, setCopiedInquiry] = useState(false);

  const interestOptions = [
    'New Construction Homes',
    'First-Time Home Buying',
    'Exploring Communities',
    'Relocating to Florida',
    'General Home-Buying Questions',
    'Other'
  ];

  const locationOptions = [
    'Orlando & Central Florida',
    'Tampa Bay Area',
    'Jacksonville & Northeast FL',
    'Southwest Florida (Naples / Ft. Myers)',
    'Space Coast / Brevard County',
    'South Florida / Treasure Coast',
    'Undecided / Exploring Florida'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot check
    if (honeypot.trim() !== '') {
      return;
    }

    // Input Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    const phoneClean = phone.replace(/[^0-9+]/g, '');
    if (!phoneClean || phoneClean.length < 7) {
      setErrorMessage('Please provide a valid phone number so we can reach you.');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('Please share a brief note or question so I can best prepare.');
      return;
    }

    setIsSubmitting(true);

    // Assemble formatted inquiry for direct email & SMS transmission
    const subject = encodeURIComponent(`New Home Inquiry: ${fullName} (${location})`);
    const emailBody = encodeURIComponent(
      `Hi Rony,\n\nI visited ronysellshomes and would like to learn more about new construction opportunities in Florida.\n\n` +
      `Here are my details:\n` +
      `• Name: ${fullName}\n` +
      `• Email: ${email}\n` +
      `• Phone: ${phone}\n` +
      `• Preferred Florida Location: ${location}\n` +
      `• First-Time Homebuyer: ${firstTimeBuyer}\n` +
      `• Primary Interest: ${interest}\n\n` +
      `My Message / Questions:\n${message}\n\n` +
      `Thank you!`
    );

    const smsBody = encodeURIComponent(
      `Hi Rony! My name is ${fullName}. I am interested in ${interest} in ${location}. Preferred contact: ${phone} / ${email}. Note: ${message.slice(0, 100)}`
    );

    const mailtoUrl = `mailto:rsaintaubin@drhorton.com?subject=${subject}&body=${emailBody}`;
    const smsUrl = `sms:+14077229956?body=${smsBody}`;

    setPreparedEmailLink(mailtoUrl);
    setPreparedSmsLink(smsUrl);

    // Simulate backend verification and provide explicit delivery options
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 700);
  };

  const handleCopyInquiry = () => {
    const textToCopy = `Inquiry from ronysellshomes:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nFirst-Time Buyer: ${firstTimeBuyer}\nInterest: ${interest}\nMessage: ${message}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedInquiry(true);
      setTimeout(() => setCopiedInquiry(false), 2500);
    }
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
            Direct Connection
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
            Let&apos;s Start Your <br />
            <span className="italic font-light text-[#493B32]">Home Journey.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#493B32]/85 font-light leading-relaxed [text-wrap:balance]">
            Whether you&apos;re exploring new construction homes, looking for home-buying information, or simply have a question, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#FAF8F4] border border-[#D5C2A5] p-6 sm:p-10 shadow-xs">
            {submitSuccess ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif text-[#292925] mb-2">
                    Inquiry Prepared Successfully!
                  </h3>
                  <p className="text-sm text-[#493B32] leading-relaxed">
                    Thank you, <span className="font-semibold text-[#292925]">{fullName}</span>. Your inquiry details for <span className="font-semibold">{location}</span> are organized and ready for direct delivery to <span className="font-semibold">rsaintaubin@drhorton.com</span>.
                  </p>
                </div>

                {/* 1-Click Instant Action Buttons */}
                <div className="p-6 bg-[#E9DFD0]/50 border border-[#D5C2A5] space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#292925]">
                    Select Your Preferred Delivery Channel:
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={preparedEmailLink}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>

                    <a
                      href={preparedSmsLink}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#D5C2A5] text-[#292925] hover:bg-[#E9DFD0] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send as Text Message</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider border border-[#D5C2A5] bg-[#FAF8F4] text-[#493B32] hover:bg-[#E9DFD0] transition-colors"
                    >
                      {copiedInquiry ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedInquiry ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#A99A87] pt-2">
                    Clicking either option opens your device&apos;s email or messaging app with your details prefilled for immediate transmission to Rony.
                  </p>
                </div>

                {/* Real Integration Setup Notice (Transparency requirement) */}
                <div className="p-4 bg-[#FAF8F4] border border-[#E9DFD0] text-xs text-[#A99A87] leading-relaxed">
                  <span className="font-semibold text-[#493B32] block mb-1">
                    Direct Integration Notice:
                  </span>
                  Inquiries are routed directly to consultant email <code className="text-[#292925]">rsaintaubin@drhorton.com</code> and text line <code className="text-[#292925]">+1 407-722-9956</code>. For headless automated server-side email dispatching without opening the user client, connect a transactional API service (e.g. Resend / SendGrid) to the backend.
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="text-xs uppercase tracking-wider text-[#493B32] hover:text-[#292925] underline pt-2 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Honeypot Spam Field (Hidden) */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this field</label>
                  <input
                    id="hp_field"
                    type="text"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Field 1: Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                    Full Name <span className="text-[#B69A70]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D5C2A5] text-sm text-[#292925] placeholder-[#A99A87] focus:outline-none focus:border-[#493B32] focus:ring-1 focus:ring-[#493B32] transition-colors"
                  />
                </div>

                {/* Field 2 & 3: Email and Phone (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                      Email Address <span className="text-[#B69A70]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D5C2A5] text-sm text-[#292925] placeholder-[#A99A87] focus:outline-none focus:border-[#493B32] focus:ring-1 focus:ring-[#493B32] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                      Phone Number <span className="text-[#B69A70]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 407-555-0192"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D5C2A5] text-sm text-[#292925] placeholder-[#A99A87] focus:outline-none focus:border-[#493B32] focus:ring-1 focus:ring-[#493B32] transition-colors"
                    />
                  </div>
                </div>

                {/* Field 4: Preferred Florida Location */}
                <div>
                  <label htmlFor="location" className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                    Preferred Florida Location
                  </label>
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D5C2A5] text-sm text-[#292925] focus:outline-none focus:border-[#493B32] focus:ring-1 focus:ring-[#493B32] transition-colors cursor-pointer"
                  >
                    {locationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 5: Are You a First-Time Homebuyer? */}
                <div>
                  <span className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                    Are You a First-Time Homebuyer?
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Yes', 'No', 'Not Sure Yet'] as const).map((choice) => (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => setFirstTimeBuyer(choice)}
                        className={`py-2.5 px-3 text-xs font-medium text-center border transition-colors cursor-pointer ${
                          firstTimeBuyer === choice
                            ? 'bg-[#493B32] text-[#FAF8F4] border-[#493B32]'
                            : 'bg-[#FAF8F4] text-[#493B32] border-[#D5C2A5] hover:bg-[#E9DFD0]/40'
                        }`}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 6: What Are You Interested In? */}
                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                    What Are You Interested In?
                  </label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D5C2A5] text-sm text-[#292925] focus:outline-none focus:border-[#493B32] focus:ring-1 focus:ring-[#493B32] transition-colors cursor-pointer"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 7: Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-[#292925] mb-2">
                    Additional Message <span className="text-[#B69A70]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me a little about your timeline, ideal home features, or questions you have..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D5C2A5] text-sm text-[#292925] placeholder-[#A99A87] focus:outline-none focus:border-[#493B32] focus:ring-1 focus:ring-[#493B32] transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Your Details...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D5C2A5]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#A99A87] text-center">
                  Your information is kept strictly confidential and used solely to respond to your home-buying inquiry.
                </p>
              </form>
            )}
          </div>

          {/* Right: Direct Contact Information (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Card */}
            <div className="bg-[#E9DFD0]/40 border border-[#D5C2A5] p-8 sm:p-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B69A70] block mb-2">
                Direct Channels
              </span>
              <h3 className="text-2xl font-serif text-[#292925] mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A99A87] block font-medium">
                      Direct Email
                    </span>
                    <a
                      href="mailto:rsaintaubin@drhorton.com"
                      className="text-base font-medium text-[#292925] hover:text-[#B69A70] transition-colors break-all flex items-center gap-1 group"
                    >
                      <span>rsaintaubin@drhorton.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </a>
                    <span className="text-xs text-[#A99A87]">
                      Prompt email response for new construction inquiries
                    </span>
                  </div>
                </div>

                {/* Texting & Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A99A87] block font-medium">
                      Text & Call Line
                    </span>
                    <a
                      href="sms:+14077229956"
                      className="text-base font-semibold text-[#292925] hover:text-[#B69A70] transition-colors flex items-center gap-1 group font-mono"
                    >
                      <span>+1 407-722-9956</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </a>
                    <div className="flex items-center gap-2 text-xs text-[#A99A87] mt-0.5">
                      <a href="sms:+14077229956" className="text-[#493B32] hover:underline font-medium">
                        Send SMS
                      </a>
                      <span aria-hidden="true">·</span>
                      <a href="tel:+14077229956" className="text-[#493B32] hover:underline font-medium flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A99A87] block font-medium">
                      Instagram Profile
                    </span>
                    <a
                      href="https://www.instagram.com/ronysellshomes?srtk=Nmx3YXZzcnNyc3N4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#292925] hover:text-[#B69A70] transition-colors flex items-center gap-1 group"
                    >
                      <span>@ronysellshomes</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </a>
                    <span className="text-xs text-[#A99A87]">
                      Updates, video walkthroughs, and Florida lifestyle
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Service Area Badge */}
            <div className="p-6 bg-[#FAF8F4] border border-[#D5C2A5] text-xs text-[#493B32] leading-relaxed">
              <span className="font-semibold text-[#292925] block mb-1 uppercase tracking-wider">
                Florida Service Coverage:
              </span>
              Providing guidance across Florida&apos;s most dynamic residential growth corridors. Whether you are relocating from out-of-state or currently living in Florida, reach out for honest direction on newly constructed homes.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
