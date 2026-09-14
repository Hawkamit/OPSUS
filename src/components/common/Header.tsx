'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/common/Button';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Therapeutic Areas', href: '/therapeutic-areas' },
    { label: 'Quality', href: '/quality' },
    { label: 'PCD Franchise', href: '/pcd-franchise' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E4E0D8]/80 py-3.5'
            : 'bg-white border-b border-[#E4E0D8]/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Centered Nav */}
            <nav
              className="hidden xl:flex items-center gap-7 2xl:gap-8"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[14.5px] font-medium transition-colors duration-200 py-1 ${
                      active
                        ? 'text-[#0A1B33] font-semibold'
                        : 'text-[#5B6B7D] hover:text-[#0A1B33]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A1B33] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA Pill */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Button
                href="/pcd-franchise"
                variant="primary"
                size="sm"
                showArrow
                className="hidden md:inline-flex"
              >
                Partner With Us
              </Button>

              {/* Hamburger Button (Mobile / Tablet) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-[#0A1B33] hover:bg-slate-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger (visible on < sm screens) */}
            <div className="sm:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#0A1B33] hover:bg-slate-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Panel Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0A1B33]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF8F3] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E4E0D8]">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-200/60 text-[#0A1B33] transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="py-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        active
                          ? 'bg-[#0A1B33] text-white font-semibold'
                          : 'text-[#0A1B33] hover:bg-white/80'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        className={`w-4 h-4 ${
                          active ? 'text-[#C9A15E]' : 'text-slate-400'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#E4E0D8] flex flex-col gap-3">
              <Button
                href="/pcd-franchise"
                variant="gold"
                size="md"
                showArrow
                className="w-full justify-center shadow-md"
              >
                Become a PCD Partner
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                className="w-full justify-center"
              >
                Contact Our Team
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-[#5B6B7D] pt-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#2F6FA8]" />
                <span>Pan-India Distribution Network</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
