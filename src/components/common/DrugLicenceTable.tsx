'use client';

import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, ExternalLink, X, Building2, Calendar, Award } from 'lucide-react';
import { drugLicences } from '@/data/company';

export const DrugLicenceTable: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const selectedLicence = drugLicences.find((item) => item.form === activeModal);

  return (
    <div className="w-full">
      {/* Table Card Container */}
      <div className="bg-white rounded-2xl border border-[#E4E0D8] shadow-sm overflow-hidden">
        {/* Card Header Bar */}
        <div className="px-6 py-5 bg-[#FAF8F3] border-b border-[#E4E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0A1B33]">
                Statutory Regulatory & Drug Licensing
              </h3>
              <p className="text-xs text-[#5B6B7D]">
                Wholesale Drug Licences under the Drugs and Cosmetics Act & State Licensing Authority
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5" />
              State Authority Verified
            </span>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#FAF8F3]/60 text-xs uppercase tracking-wider text-[#0A1B33] font-semibold border-b border-[#E4E0D8]">
              <tr>
                <th scope="col" className="px-6 py-4">Statutory Form</th>
                <th scope="col" className="px-6 py-4">Licence Number</th>
                <th scope="col" className="px-6 py-4">Classification</th>
                <th scope="col" className="px-6 py-4">Initial Issue</th>
                <th scope="col" className="px-6 py-4">Current Status</th>
                <th scope="col" className="px-6 py-4 text-right">Certificate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E0D8]">
              {drugLicences.map((licence, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#FAF8F3]/40 transition-colors duration-150"
                >
                  <td className="px-6 py-4 font-bold text-[#0A1B33] whitespace-nowrap flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#2F6FA8] shrink-0" />
                    <span>{licence.form}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-[#0A1B33] whitespace-nowrap">
                    {licence.licenceNo}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#5B6B7D] max-w-xs truncate">
                    {licence.category}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#5B6B7D] whitespace-nowrap">
                    {licence.issueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {licence.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => setActiveModal(licence.form)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] hover:underline cursor-pointer"
                    >
                      <span>View Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote Bar */}
        <div className="px-6 py-3.5 bg-[#FAF8F3] border-t border-[#E4E0D8] text-xs text-[#5B6B7D] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            * Wholesale drug distribution operations are strictly subject to compliance with the Drugs and Cosmetics Rules, 1945.
          </span>
          <span className="font-semibold text-[#0A1B33]">
            Issuing Authority: State Drugs Controller & Licensing Authority
          </span>
        </div>
      </div>

      {/* Modal for Certificate Inspection */}
      {activeModal && selectedLicence && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1B33]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E4E0D8] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#2F6FA8]">
                  Official Regulatory Filing
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0A1B33]">
                  {selectedLicence.form} Verification
                </h3>
              </div>
            </div>

            <div className="space-y-4 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8] text-xs">
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]/60">
                <span className="text-[#5B6B7D]">Licence No.:</span>
                <span className="font-mono font-bold text-[#0A1B33]">{selectedLicence.licenceNo}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]/60">
                <span className="text-[#5B6B7D]">Initial Issue Date:</span>
                <span className="font-semibold text-[#0A1B33]">{selectedLicence.issueDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]/60">
                <span className="text-[#5B6B7D]">Current Validity:</span>
                <span className="font-semibold text-emerald-700">{selectedLicence.validity}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4E0D8]/60">
                <span className="text-[#5B6B7D]">Authorisation Scope:</span>
                <span className="font-medium text-[#0A1B33] text-right max-w-[240px]">{selectedLicence.category}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#5B6B7D]">Entity Role:</span>
                <span className="font-semibold text-[#0A1B33]">Wholesale Marketing & Distribution</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-[#2F6FA8] leading-relaxed">
              <strong>Partner Verification Notice:</strong> Prospective PCD franchise partners and stockists may request certified true copies during formal onboarding and territory allotment.
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-full bg-[#0A1B33] text-white text-xs font-semibold hover:bg-[#16345F] transition-colors"
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
