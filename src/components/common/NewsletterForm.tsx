'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  className = '',
  theme = 'dark',
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email');
      return;
    }

    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium ${className}`}>
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Thank you! You are subscribed to Opsus clinical and industry updates.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`max-w-md w-full ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-slate-400 pointer-events-none">
          <Mail className="w-4 h-4" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          placeholder="Enter your professional email..."
          className={`w-full pl-11 pr-32 py-3.5 rounded-full text-xs sm:text-sm transition-all focus:outline-none ${
            isDark
              ? 'bg-[#0F2545] text-white border border-[#1F385C] focus:border-[#C9A15E]'
              : 'bg-white text-[#0A1B33] border border-[#E4E0D8] focus:border-[#0A1B33]'
          }`}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-1.5 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            isDark
              ? 'bg-[#C9A15E] text-[#0A1B33] hover:bg-[#D8B475]'
              : 'bg-[#0A1B33] text-white hover:bg-[#16345F]'
          }`}
        >
          {isLoading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <>
              <span>Subscribe</span>
              <ArrowRight className="w-3 h-3" />
            </>
          )}
        </button>
      </div>
      {error && <p className="mt-1.5 pl-4 text-xs text-rose-400">{error}</p>}
    </form>
  );
};
