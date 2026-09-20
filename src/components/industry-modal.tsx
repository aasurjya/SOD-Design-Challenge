"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Building2, Briefcase, Award } from "lucide-react";

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IndustryModal({ isOpen, onClose }: IndustryModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    interest: "CHALLENGE SPONSORSHIP",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#EDEDED] text-[#000000] border-2 border-[#000000] shadow-2xl font-['Inter',sans-serif] z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="h-[55px] border-b border-[#000000] flex items-center justify-between px-6 bg-[#EDEDED] shrink-0">
          <div className="flex items-center gap-2 font-extrabold text-[12px] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#CFFD3E] border border-black" />
            <span>FOR INDUSTRY & PARTNERS / SOD IITJ</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center border border-[#000000] hover:bg-black hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#CFFD3E] border-2 border-[#000000] text-black mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-[900] uppercase tracking-tight">
                INQUIRY RECEIVED
              </h3>
              <p className="text-xs text-neutral-700 max-w-sm mx-auto leading-relaxed">
                Thank you for connecting with <span className="font-bold text-black">School of Design, IIT Jodhpur</span>. Our industry relations team will contact you within 24 hours with partnership decks.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full h-11 bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                DONE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-white border border-black text-xs space-y-1">
                <span className="font-extrabold uppercase text-[10px] text-neutral-500 block">
                  PARTNERSHIP TRACKS
                </span>
                <p className="text-neutral-700 leading-snug">
                  Sponsor real-world challenge briefs, recruit top multidisciplinary design graduates, or join our jury panel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase block">Company / Studio</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Design Studio X"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase block">Contact Person</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase block">Corporate Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase block">Area of Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                >
                  <option value="CHALLENGE SPONSORSHIP">CHALLENGE SPONSORSHIP & PROBLEM PROVIDER</option>
                  <option value="HIRING & RECRUITMENT">TALENT RECRUITMENT & PORTFOLIO REVIEW</option>
                  <option value="JURY & MENTORSHIP">JURY EVALUATION & KEYNOTE WORKSHOP</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase block">Notes / Inquiry (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Describe your industry requirements or challenge theme..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#000000] hover:bg-neutral-800 text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#000000] transition-colors"
              >
                {isSubmitting ? "SENDING..." : "CONNECT WITH SOD TEAM"} <ArrowRight className="w-4 h-4 text-[#CFFD3E]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
