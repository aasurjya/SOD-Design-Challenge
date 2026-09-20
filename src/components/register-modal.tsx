"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    teamName: "",
    leadName: "",
    email: "",
    institution: "",
    track: "PROBLEM → PROOF",
    problemSummary: "",
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
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      teamName: "",
      leadName: "",
      email: "",
      institution: "",
      track: "PROBLEM → PROOF",
      problemSummary: "",
    });
    onClose();
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
            <span>CHALLENGE REGISTRATION / #BNB2026</span>
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
                REGISTRATION CONFIRMED
              </h3>
              <p className="text-xs text-neutral-700 max-w-sm mx-auto leading-relaxed">
                Welcome to <span className="font-bold text-black">BEYOND NORMAL BELIEFS (#BNB2026)</span>. Your team registration has been logged for Gate 01 review. Check your inbox for briefing credentials.
              </p>
              <div className="p-4 bg-white border border-black text-left text-xs font-mono space-y-1">
                <div><span className="text-neutral-500">TEAM:</span> {formData.teamName || "SOD Innovators"}</div>
                <div><span className="text-neutral-500">LEAD:</span> {formData.leadName || "Participant"}</div>
                <div><span className="text-neutral-500">GATE 01 DEADLINE:</span> 05 OCT 2026 (11:59 PM IST)</div>
              </div>
              <button
                onClick={handleReset}
                className="w-full h-11 bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                CLOSE & VIEW PROBLEM PHASE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-neutral-600 uppercase block mb-1">
                  01 · PARTICIPANT DETAILS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase block">Team Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Studio Unserious"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase block">Team Lead Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sharma"
                      value={formData.leadName}
                      onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                      className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="lead@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase block">College / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="IIT Jodhpur / Other Institute"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase block">Select Track</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full h-10 px-3 border border-[#000000] bg-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                >
                  <option value="PROBLEM → PROOF">PROBLEM PHASE → PROOF (Main Designathon)</option>
                  <option value="WORKSHOPS">RAPID PROTOTYPING LABS</option>
                  <option value="INDUSTRY CHALLENGE">FOR INDUSTRY LIVE CHALLENGE</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase block">
                  Problem Framing (Optional 1-Sentence Pitch)
                </label>
                <textarea
                  rows={2}
                  placeholder="What real-world friction are you investigating?"
                  value={formData.problemSummary}
                  onChange={(e) => setFormData({ ...formData, problemSummary: e.target.value })}
                  className="w-full p-3 border border-[#000000] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E] resize-none"
                />
              </div>

              <div className="p-3 bg-[#CFFD3E]/30 border border-[#000000] flex items-start gap-2 text-[10px] text-neutral-800">
                <AlertCircle className="w-4 h-4 shrink-0 text-black mt-0.5" />
                <span>
                  <span className="font-bold">Rule:</span> Every project without empirical user validation will be subject to Gate 01 elimination on 11 Oct.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#000000] hover:bg-neutral-800 text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#000000] transition-colors"
              >
                {isSubmitting ? "PROCESSING..." : "SUBMIT REGISTRATION"} <ArrowRight className="w-4 h-4 text-[#CFFD3E]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
