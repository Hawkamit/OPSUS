'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Building, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/common/Button';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi NCR', 'Jammu & Kashmir'
];

interface PcdFormProps {
  className?: string;
  id?: string;
}

export const PcdEnquiryForm: React.FC<PcdFormProps> = ({ className = '', id = 'pcd-form' }) => {
  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    district: '',
    experience: '3-5 years',
    investment: '₹50,000 - ₹2,00,000',
    drugLicence: 'Have Valid Drug Licence (Form 20B/21B)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!values.fullName.trim()) errs.fullName = 'Full name is required';
    if (!values.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(values.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!values.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = 'Valid email is required';
    }

    if (!values.state) errs.state = 'Please select your target state';
    if (!values.district.trim()) errs.district = 'Target district/headquarter is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#0A1B33', '#C9A15E', '#2F6FA8'],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div id={id} className={`p-8 sm:p-12 rounded-3xl bg-white border border-[#C9A15E] shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="text-xs uppercase tracking-widest font-bold text-[#C9A15E]">
          Application Received
        </span>
        <h3 className="font-serif text-3xl font-bold text-[#0A1B33] mt-1 mb-3">
          Franchise Territory Application Submitted
        </h3>
        <p className="text-sm text-[#5B6B7D] max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-[#0A1B33]">{values.fullName}</strong>. We have logged your monopoly territory application for <strong className="text-[#0A1B33]">{values.district}, {values.state}</strong>. Our franchise business manager will reach out within 24–48 hours with our complete product catalogue and monopoly agreement terms.
        </p>
        <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8] max-w-md mx-auto text-xs text-[#16345F] mb-6">
          <p className="font-semibold mb-1">Assigned Reference Number: OPS-PCD-{Math.floor(100000 + Math.random() * 900000)}</p>
          <p className="text-slate-500">A confirmation SMS & email will be dispatched to {values.phone}.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setValues({
              fullName: '',
              phone: '',
              email: '',
              state: '',
              district: '',
              experience: '3-5 years',
              investment: '₹50,000 - ₹2,00,000',
              drugLicence: 'Have Valid Drug Licence (Form 20B/21B)',
              message: '',
            });
          }}
          className="text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] underline cursor-pointer"
        >
          Submit another territory application
        </button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-10 rounded-3xl bg-white border border-[#E4E0D8] shadow-xl ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#C9A15E]" />
        <span className="text-xs uppercase tracking-widest font-bold text-[#C9A15E]">
          Exclusive Territory Allotment
        </span>
      </div>
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1B33]">
        Apply for PCD Pharma Monopoly Franchise
      </h3>
      <p className="text-xs sm:text-sm text-[#5B6B7D] mt-1.5 mb-6">
        Secure monopoly marketing rights in your target district with marketing promotional materials and competitive trade margins.
      </p>

      <div className="space-y-4">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Full Name / Enterprise Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={values.fullName}
              onChange={(e) => {
                setValues({ ...values, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              placeholder="e.g. Sunil Mehra / Apex Pharma"
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

          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Mobile / WhatsApp Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              value={values.phone}
              onChange={(e) => {
                setValues({ ...values, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="+91 98765 XXXXX"
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

        {/* Row 2: Email & State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              value={values.email}
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="sunil@example.com"
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
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              State of Interest <span className="text-rose-500">*</span>
            </label>
            <select
              value={values.state}
              onChange={(e) => {
                setValues({ ...values, state: e.target.value });
                if (errors.state) setErrors({ ...errors, state: undefined });
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white transition-colors ${
                errors.state ? 'border-rose-400 bg-rose-50/30' : 'border-[#E4E0D8] focus:border-[#C9A15E]'
              }`}
            >
              <option value="">Select State</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.state}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: District & Pharma Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Target District / City <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={values.district}
              onChange={(e) => {
                setValues({ ...values, district: e.target.value });
                if (errors.district) setErrors({ ...errors, district: undefined });
              }}
              placeholder="e.g. Varanasi, Lucknow, Patna, Jaipur"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white transition-colors ${
                errors.district ? 'border-rose-400 bg-rose-50/30' : 'border-[#E4E0D8] focus:border-[#C9A15E]'
              }`}
            />
            {errors.district && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.district}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Pharma Marketing Experience
            </label>
            <select
              value={values.experience}
              onChange={(e) => setValues({ ...values, experience: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E4E0D8] text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white focus:border-[#C9A15E]"
            >
              <option value="New Entrant / Aspiring Entrepreneur">New Entrant / Aspiring Entrepreneur</option>
              <option value="1-3 years">1–3 years (Medical Representative / Stockist)</option>
              <option value="3-5 years">3–5 years (Senior MR / Field Executive)</option>
              <option value="5-10 years">5–10 years (ASM / Pharma Distributor)</option>
              <option value="10+ years">10+ years (Established Pharma Franchise Owner)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Investment Capacity & Drug Licence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Anticipated Investment Range
            </label>
            <select
              value={values.investment}
              onChange={(e) => setValues({ ...values, investment: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E4E0D8] text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white focus:border-[#C9A15E]"
            >
              <option value="₹25,000 - ₹50,000">₹25,000 – ₹50,000 (Initial Trial Basket)</option>
              <option value="₹50,000 - ₹2,00,000">₹50,000 – ₹2,00,000 (Standard District Launch)</option>
              <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 – ₹5,00,000 (Multi-District Monopoly)</option>
              <option value="₹5,00,000+">₹5,00,000+ (Regional Super-Stockist)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
              Drug Licence / GST Status
            </label>
            <select
              value={values.drugLicence}
              onChange={(e) => setValues({ ...values, drugLicence: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E4E0D8] text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white focus:border-[#C9A15E]"
            >
              <option value="Have Valid Drug Licence (Form 20B/21B)">Have Valid Wholesale Drug Licence (Form 20B/21B)</option>
              <option value="Have GST & Applying for Drug Licence">Have GST & Currently Applying for Drug Licence</option>
              <option value="Will Partner with Existing Stockist">Will Route Billing Through Existing Stockist</option>
              <option value="Need Guidance on Regulatory Documentation">Need Guidance on Regulatory Documentation</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-[#0A1B33] mb-1.5">
            Key Therapeutic Segments of Interest / Message
          </label>
          <textarea
            rows={3}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            placeholder="e.g. Interested in Orthopaedics, Antibiotics, and Gastro range for Lucknow and Barabanki districts..."
            className="w-full px-4 py-3 rounded-xl border border-[#E4E0D8] text-sm text-[#0A1B33] bg-[#FAF8F3]/50 focus:bg-white focus:border-[#C9A15E]"
          />
        </div>

        {/* Submit */}
        <div className="pt-3">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            disabled={isLoading}
            className="w-full justify-center shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Checking Territory Availability...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Check Territory Availability & Apply</span>
                <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
          <p className="text-[11px] text-[#5B6B7D] text-center mt-2.5">
            Opsus provides complete marketing visual aids, MR bags, visiting cards, catch covers, and product literature with every new partnership.
          </p>
        </div>
      </div>
    </form>
  );
};
