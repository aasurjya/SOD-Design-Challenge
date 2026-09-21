"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { X, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface RegisterFormData {
  teamName: string;
  leadName: string;
  email: string;
  institution: string;
  track: string;
  problemSummary: string;
}

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
}

const initialFormData: RegisterFormData = {
  teamName: "",
  leadName: "",
  email: "",
  institution: "",
  track: "PROBLEM → PROOF",
  problemSummary: "",
};

export function RegisterModal({ isOpen, onClose, returnFocusRef }: RegisterModalProps) {
  const formId = useId();
  const resultRef = useRef<HTMLHeadingElement>(null);
  const teamNameRef = useRef<HTMLInputElement>(null);
  const leadNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const institutionRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen && isSubmitted) resultRef.current?.focus();
  }, [isOpen, isSubmitted]);

  const updateField = (field: keyof RegisterFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Partial<Record<keyof RegisterFormData, string>> = {};
    if (!formData.teamName.trim()) nextErrors.teamName = "Enter a team name.";
    if (!formData.leadName.trim()) nextErrors.leadName = "Enter the team lead's name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Enter an email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.institution.trim()) nextErrors.institution = "Enter a college or organization.";

    setErrors(nextErrors);
    const firstInvalidField = ([
      ["teamName", teamNameRef],
      ["leadName", leadNameRef],
      ["email", emailRef],
      ["institution", institutionRef],
    ] as const).find(([field]) => nextErrors[field]);

    if (firstInvalidField) {
      firstInvalidField[1].current?.focus();
      return;
    }

    setIsSubmitted(true);
  };

  const errorFor = (field: keyof RegisterFormData) =>
    errors[field] ? (
      <p id={`${formId}-${field}-error`} className="text-[10px] font-bold text-red-700">
        {errors[field]}
      </p>
    ) : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        presentation="panel"
        showCloseButton={false}
        overlayClassName="bg-black/60 supports-backdrop-filter:backdrop-blur-sm"
        onCloseAutoFocus={(event) => {
          if (returnFocusRef?.current) {
            event.preventDefault();
            returnFocusRef.current.focus();
          }
        }}
        className="max-h-[calc(100dvh-2rem)] max-w-lg flex flex-col overflow-hidden border-2 border-black bg-[#EDEDED] text-black shadow-2xl"
      >
        <div className="h-[55px] shrink-0 border-b border-black flex items-center justify-between px-6 bg-[#EDEDED]">
          <div className="flex items-center gap-2 font-extrabold text-[12px] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#CFFD3E] border border-black" aria-hidden="true" />
            <DialogTitle>CHALLENGE REGISTRATION / #BNB2026</DialogTitle>
          </div>

          <DialogClose
            aria-label="Close registration preview"
            className="w-11 h-11 -mr-2 flex items-center justify-center border border-black hover:bg-black hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </DialogClose>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4" aria-live="polite">
              <div className="w-14 h-14 bg-[#CFFD3E] border-2 border-black text-black mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 ref={resultRef} tabIndex={-1} className="text-2xl font-[900] uppercase tracking-tight outline-none">
                DEMO PREVIEW COMPLETE
              </h3>
              <DialogDescription className="text-xs text-neutral-700 max-w-sm mx-auto leading-relaxed">
                The registration preview passed validation for <span className="font-bold text-black">BEYOND NORMAL BELIEFS (#BNB2026)</span>. Nothing was sent or saved.
              </DialogDescription>
              <div className="p-4 bg-white border border-black text-left text-xs font-mono space-y-1">
                <div><span className="text-neutral-500">TEAM:</span> {formData.teamName}</div>
                <div><span className="text-neutral-500">LEAD:</span> {formData.leadName}</div>
                <div><span className="text-neutral-500">TRACK:</span> {formData.track}</div>
              </div>
              <div className="grid gap-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full h-11 border border-black bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
                >
                  EDIT RESPONSES
                </button>
                <DialogClose className="w-full h-11 bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2">
                  CLOSE
                </DialogClose>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <DialogDescription className="p-3 bg-[#CFFD3E]/30 border border-black text-[10px] leading-snug text-neutral-800">
                <span className="font-bold text-black">DEMO PREVIEW:</span> This form checks your entries locally. Nothing is sent or saved.
              </DialogDescription>

              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-neutral-600 uppercase block mb-1">
                  01 · PARTICIPANT DETAILS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor={`${formId}-teamName`} className="text-[11px] font-bold uppercase block">Team Name</label>
                    <input
                      id={`${formId}-teamName`}
                      ref={teamNameRef}
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="e.g. Studio Unserious"
                      value={formData.teamName}
                      onChange={(e) => updateField("teamName", e.target.value)}
                      aria-invalid={Boolean(errors.teamName)}
                      aria-describedby={errors.teamName ? `${formId}-teamName-error` : undefined}
                      className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                    />
                    {errorFor("teamName")}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor={`${formId}-leadName`} className="text-[11px] font-bold uppercase block">Team Lead Name</label>
                    <input
                      id={`${formId}-leadName`}
                      ref={leadNameRef}
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Maya Sharma"
                      value={formData.leadName}
                      onChange={(e) => updateField("leadName", e.target.value)}
                      aria-invalid={Boolean(errors.leadName)}
                      aria-describedby={errors.leadName ? `${formId}-leadName-error` : undefined}
                      className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                    />
                    {errorFor("leadName")}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor={`${formId}-email`} className="text-[11px] font-bold uppercase block">Email Address</label>
                  <input
                    id={`${formId}-email`}
                    ref={emailRef}
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="lead@university.edu"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                  {errorFor("email")}
                </div>
                <div className="space-y-1">
                  <label htmlFor={`${formId}-institution`} className="text-[11px] font-bold uppercase block">College / Organization</label>
                  <input
                    id={`${formId}-institution`}
                    ref={institutionRef}
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="IIT Jodhpur / Other Institute"
                    value={formData.institution}
                    onChange={(e) => updateField("institution", e.target.value)}
                    aria-invalid={Boolean(errors.institution)}
                    aria-describedby={errors.institution ? `${formId}-institution-error` : undefined}
                    className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                  {errorFor("institution")}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor={`${formId}-track`} className="text-[11px] font-bold uppercase block">Select Track</label>
                <select
                  id={`${formId}-track`}
                  value={formData.track}
                  onChange={(e) => updateField("track", e.target.value)}
                  className="w-full h-10 px-3 border border-black bg-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                >
                  <option value="PROBLEM → PROOF">PROBLEM PHASE → PROOF (Main Designathon)</option>
                  <option value="WORKSHOPS">RAPID PROTOTYPING LABS</option>
                  <option value="INDUSTRY CHALLENGE">FOR INDUSTRY LIVE CHALLENGE</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor={`${formId}-problemSummary`} className="text-[11px] font-bold uppercase block">
                  Problem Framing (Optional 1-Sentence Pitch)
                </label>
                <textarea
                  id={`${formId}-problemSummary`}
                  rows={2}
                  placeholder="What real-world friction are you investigating?"
                  value={formData.problemSummary}
                  onChange={(e) => updateField("problemSummary", e.target.value)}
                  className="w-full p-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E] resize-none"
                />
              </div>

              <div className="p-3 bg-[#CFFD3E]/30 border border-black flex items-start gap-2 text-[10px] text-neutral-800">
                <AlertCircle className="w-4 h-4 shrink-0 text-black mt-0.5" aria-hidden="true" />
                <span>
                  <span className="font-bold">Rule:</span> Every project without empirical user validation will be subject to Gate 01 elimination on 11 Oct.
                </span>
              </div>

              <div className="grid gap-2">
                <button
                  type="submit"
                  className="w-full h-12 bg-black hover:bg-neutral-800 text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
                >
                  PREVIEW REGISTRATION <ArrowRight className="w-4 h-4 text-[#CFFD3E]" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialFormData);
                    setErrors({});
                    setIsSubmitted(false);
                    teamNameRef.current?.focus();
                  }}
                  className="h-9 text-[10px] font-bold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
                >
                  CLEAR FORM
                </button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
