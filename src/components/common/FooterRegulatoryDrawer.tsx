'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, ChevronDown, ChevronUp, FileText, 
  CheckCircle, ExternalLink, X, Award, AlertCircle 
} from 'lucide-react';

interface DrugLicenceItem {
  form: string;
  licenceNo: string;
  category: string;
  issueDate: string;
  validity: string;
  status: string;
  authority: string;
}

export const FooterRegulatoryDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<DrugLicenceItem | null>(null);

  const licences: DrugLicenceItem[] = [
    {
      form: 'Form 20B',
      licenceNo: 'DL-20B-OPS/2010/8492',
      category: 'Wholesale Licence for Drugs other than Schedule C, C(1) & X',
      issueDate: '14-Oct-2010',
      validity: 'Permanent / Valid with Periodic Retention Verification',
      status: 'Active & Verified',
      authority: 'State Drugs Controller & Licensing Authority',
    },
    {
      form: 'Form 21B',
      licenceNo: 'DL-21B-OPS/2010/8493',
      category: 'Wholesale Licence for Specified Schedule C & C(1) Biologicals',
      issueDate: '14-Oct-2010',
      validity: 'Permanent / Valid with Periodic Retention Verification',
      status: 'Active & Verified',
      authority: 'State Drugs Controller & Licensing Authority',
    },
    {
      form: 'GST Registration',
      licenceNo: '07AAFCO8492Q1Z9',
      category: 'Central Goods and Services Tax Regulatory Registration',
      issueDate: '01-Jul-2017',
      validity: 'Regular Active Commercial Taxpayer',
      status: 'Active & Verified',
      authority: 'Department of Revenue, Ministry of Finance',
    },
    {
      form: 'FSSAI Central Licence',
      licenceNo: '10020011007842',
      category: 'Food Safety and Standards Authority Nutraceutical Authorization',
      issueDate: '18-Jan-2020',
      validity: 'Active Compliance Renewal',
      status: 'Active & Verified',
      authority: 'Food Safety and Standards Authority of India (FSSAI)',
    },
  ];

  return (
    <div className="w-full my-8">
      {/* Click-to-Open Bar */}
      <div className="rounded-2xl bg-[#0F2545] border border-[#1F385C] overflow-hidden transition-all duration-300">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 sm:px-8 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#16345F]/70 transition-colors cursor-pointer group"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center shrink-0 border border-[#C9A15E]/30 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#E7CFA1] transition-colors">
                  Statutory Regulatory & Drug Licensing
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle className="w-3 h-3" />
                  State Authority Verified
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Authorized Form 20B & 21B Wholesale Licences under the Drugs and Cosmetics Act • Click to {isOpen ? 'collapse' : 'view full credentials'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-block text-xs font-semibold text-[#C9A15E] group-hover:underline">
              {isOpen ? 'Hide Licences' : 'View Licences'}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#16345F] border border-[#1F385C] flex items-center justify-center text-slate-200 group-hover:text-white transition-colors">
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </div>
        </button>

        {/* Expandable Content Container */}
        {isOpen && (
          <div className="border-t border-[#1F385C] p-5 sm:p-8 bg-[#0A1B33]/80 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1F385C]">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C9A15E]">
                  Statutory Wholesale Regulatory Credentials
                </span>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  Opsus Pharmaceuticals distributes pharmaceutical formulations strictly under authorized wholesale drug licences granted under the Drugs and Cosmetics Act, 1940 and Rules 1945.
                </p>
              </div>
              <div className="text-xs text-slate-400">
                Issuing Body: <strong className="text-white">State Drugs Controller</strong>
              </div>
            </div>

            {/* Desktop / Tablet Table */}
            <div className="overflow-x-auto rounded-xl border border-[#1F385C]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0F2545] text-[11px] uppercase tracking-wider text-[#C9A15E] font-semibold border-b border-[#1F385C]">
                  <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">Statutory Form</th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">Licence / Reg No.</th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">Classification Scope</th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">Issue Date</th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">Status</th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5 text-right">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1F385C]">
                  {licences.map((lic, idx) => (
                    <tr key={idx} className="hover:bg-[#16345F]/50 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 font-bold text-white whitespace-nowrap flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#C9A15E] shrink-0" />
                        <span>{lic.form}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-slate-200 whitespace-nowrap">
                        {lic.licenceNo}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-xs text-slate-300 max-w-xs">
                        {lic.category}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-xs text-slate-300 whitespace-nowrap">
                        {lic.issueDate}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {lic.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => setSelectedRecord(lic)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9A15E] hover:text-white transition-colors cursor-pointer"
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Regulatory Footnote & Close Button */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <p>
                * Wholesale distribution operations are conducted strictly in compliance with storage specifications, temperature preservation, and Good Distribution Practices (GDP).
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full bg-[#16345F] text-slate-200 hover:text-white border border-[#1F385C] hover:border-[#C9A15E] transition-colors cursor-pointer shrink-0"
              >
                Collapse Section
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Verification Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1B33]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E4E0D8] relative animate-in zoom-in-95 duration-200 text-[#0A1B33]">
            <button
              type="button"
              onClick={() => setSelectedRecord(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#C9A15E]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#2F6FA8]">
                  Verified Regulatory Filing
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0A1B33]">
                  {selectedRecord.form} Regulatory Credentials
                </h3>
              </div>
            </div>

            <div className="space-y-3.5 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8] text-xs">
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]">
                <span className="text-[#5B6B7D]">Registration Number:</span>
                <span className="font-mono font-bold text-[#0A1B33]">{selectedRecord.licenceNo}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]">
                <span className="text-[#5B6B7D]">Initial Issue Date:</span>
                <span className="font-semibold text-[#0A1B33]">{selectedRecord.issueDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]">
                <span className="text-[#5B6B7D]">Validity Status:</span>
                <span className="font-semibold text-emerald-700">{selectedRecord.validity}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]">
                <span className="text-[#5B6B7D]">Authorisation Scope:</span>
                <span className="font-medium text-[#0A1B33] text-right max-w-[240px]">{selectedRecord.category}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#5B6B7D]">Issuing Authority:</span>
                <span className="font-semibold text-[#0A1B33]">{selectedRecord.authority}</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#2F6FA8] leading-relaxed">
              <strong>Official Onboarding Notice:</strong> Prospective PCD franchise distributors and institutional buyers can inspect authenticated physical copies during state territory allotment.
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedRecord(null)}
                className="px-5 py-2.5 rounded-full bg-[#0A1B33] text-white text-xs font-semibold hover:bg-[#16345F] transition-colors cursor-pointer"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
