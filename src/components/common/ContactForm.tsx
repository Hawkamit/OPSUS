'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/common/Button';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

interface ContactFormProps {
  defaultInterest?: string;
  defaultMessage?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultInterest = 'General Enquiry',
  defaultMessage = '',
  className = '',
}) => {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    interest: defaultInterest,
    message: defaultMessage,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (values.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!values.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(values.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits)';
    }

    if (!values.interest) {
      newErrors.interest = 'Please select your area of interest';
    }

    if (!values.message.trim()) {
      newErrors.message = 'Please provide details about your enquiry';
    } else if (values.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate network delay for submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 sm:p-10 rounded-2xl bg-white border border-[#E4E0D8] shadow-sm text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-wider font-semibold text-[#2F6FA8]">
          Enquiry Received
        </span>
        <h3 className="font-serif text-2xl font-bold text-[#0A1B33] mt-1 mb-3">
          Thank You, {values.fullName}
        </h3>
        <p className="text-sm text-[#5B6B7D] max-w-md mx-auto mb-6 leading-relaxed">
          Your enquiry regarding <strong className="text-[#0A1B33]">{values.interest}</strong> has been transmitted to our corporate distribution desk. A territory representative will contact you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setValues({
              fullName: '',
              email: '',
              phone: '',
              interest: 'General Enquiry',
              message: '',
            });
          }}
          className="text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#E4E0D8] shadow-sm ${className}`}
    >
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-[#0A1B33]">
          Get in Touch
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6B7D] mt-1">
          Connect directly with our distribution and partnerships department.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={values.fullName}
            onChange={(e) => {
              setValues({ ...values, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="e.g. Dr. Rajesh Sharma / Rohit Kumar"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white transition-colors ${
              errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-[#E4E0D8] focus:border-[#C9A15E]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="name@organization.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white transition-colors ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-[#E4E0D8] focus:border-[#C9A15E]'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) => {
                setValues({ ...values, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white transition-colors ${
                errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-[#E4E0D8] focus:border-[#C9A15E]'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Interested In Dropdown */}
        <div>
          <label htmlFor="interest" className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
            I am Interested In <span className="text-rose-500">*</span>
          </label>
          <select
            id="interest"
            value={values.interest}
            onChange={(e) => {
              setValues({ ...values, interest: e.target.value });
              if (errors.interest) setErrors({ ...errors, interest: undefined });
            }}
            className="w-full px-4 py-3 rounded-xl border border-[#E4E0D8] text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white focus:border-[#C9A15E] transition-colors"
          >
            <option value="General Enquiry">General Corporate Enquiry</option>
            <option value="Product Enquiry">Specific Product / Availability Enquiry</option>
            <option value="PCD Franchise">PCD Franchise Monopoly Rights Partnership</option>
            <option value="Distributor Partnership">Wholesale Stockist & Distributor Partnership</option>
            <option value="Regulatory & Compliance">Regulatory & Licence Verification</option>
            <option value="Media & Communications">Media & Scientific Communications</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
            Message / Details <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={values.message}
            onChange={(e) => {
              setValues({ ...values, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Please mention your location, territory requirement, or specific product inquiries..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white transition-colors ${
              errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-[#E4E0D8] focus:border-[#C9A15E]'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isLoading}
            className="w-full justify-center"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Enquiry...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
          <p className="text-[11px] text-[#5B6B7D] text-center mt-2.5">
            Your details are held in strict pharmaceutical business confidence. No spam.
          </p>
        </div>
      </div>
    </form>
  );
};
