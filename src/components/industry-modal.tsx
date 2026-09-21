"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface IndustryFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  interest: string;
  message: string;
}

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
}

const initialFormData: IndustryFormData = {
  companyName: "",
  contactPerson: "",
  email: "",
  interest: "CHALLENGE SPONSORSHIP",
  message: "",
};

export function IndustryModal({ isOpen, onClose, returnFocusRef }: IndustryModalProps) {
  const formId = useId();
  const resultRef = useRef<HTMLHeadingElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const contactPersonRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof IndustryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen && isSubmitted) resultRef.current?.focus();
  }, [isOpen, isSubmitted]);

  const updateField = (field: keyof IndustryFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Partial<Record<keyof IndustryFormData, string>> = {};
    if (!formData.companyName.trim()) nextErrors.companyName = "Enter a company or studio name.";
    if (!formData.contactPerson.trim()) nextErrors.contactPerson = "Enter a contact person.";
    if (!formData.email.trim()) {
      nextErrors.email = "Enter an email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    const firstInvalidField = ([
      ["companyName", companyNameRef],
      ["contactPerson", contactPersonRef],
      ["email", emailRef],
    ] as const).find(([field]) => nextErrors[field]);

    if (firstInvalidField) {
      firstInvalidField[1].current?.focus();
      return;
    }

    setIsSubmitted(true);
  };

  const errorFor = (field: keyof IndustryFormData) =>
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
            <DialogTitle>FOR INDUSTRY & PARTNERS / SOD IITJ</DialogTitle>
          </div>

          <DialogClose
            aria-label="Close industry inquiry preview"
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
                The industry inquiry preview passed validation. Nothing was sent to School of Design, IIT Jodhpur or saved.
              </DialogDescription>
              <div className="p-4 bg-white border border-black text-left text-xs font-mono space-y-1">
                <div><span className="text-neutral-500">ORGANIZATION:</span> {formData.companyName}</div>
                <div><span className="text-neutral-500">CONTACT:</span> {formData.contactPerson}</div>
                <div><span className="text-neutral-500">INTEREST:</span> {formData.interest}</div>
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
                <span className="font-bold text-black">DEMO PREVIEW:</span> This inquiry checks your entries locally. Nothing is sent or saved.
              </DialogDescription>

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
                  <label htmlFor={`${formId}-companyName`} className="text-[11px] font-bold uppercase block">Company / Studio</label>
                  <input
                    id={`${formId}-companyName`}
                    ref={companyNameRef}
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="e.g. Design Studio X"
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    aria-invalid={Boolean(errors.companyName)}
                    aria-describedby={errors.companyName ? `${formId}-companyName-error` : undefined}
                    className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                  {errorFor("companyName")}
                </div>
                <div className="space-y-1">
                  <label htmlFor={`${formId}-contactPerson`} className="text-[11px] font-bold uppercase block">Contact Person</label>
                  <input
                    id={`${formId}-contactPerson`}
                    ref={contactPersonRef}
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    value={formData.contactPerson}
                    onChange={(e) => updateField("contactPerson", e.target.value)}
                    aria-invalid={Boolean(errors.contactPerson)}
                    aria-describedby={errors.contactPerson ? `${formId}-contactPerson-error` : undefined}
                    className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                  />
                  {errorFor("contactPerson")}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor={`${formId}-email`} className="text-[11px] font-bold uppercase block">Corporate Email</label>
                <input
                  id={`${formId}-email`}
                  ref={emailRef}
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  className="w-full h-10 px-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                />
                {errorFor("email")}
              </div>

              <div className="space-y-1">
                <label htmlFor={`${formId}-interest`} className="text-[11px] font-bold uppercase block">Area of Interest</label>
                <select
                  id={`${formId}-interest`}
                  value={formData.interest}
                  onChange={(e) => updateField("interest", e.target.value)}
                  className="w-full h-10 px-3 border border-black bg-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CFFD3E]"
                >
                  <option value="CHALLENGE SPONSORSHIP">CHALLENGE SPONSORSHIP & PROBLEM PROVIDER</option>
                  <option value="HIRING & RECRUITMENT">TALENT RECRUITMENT & PORTFOLIO REVIEW</option>
                  <option value="JURY & MENTORSHIP">JURY EVALUATION & KEYNOTE WORKSHOP</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor={`${formId}-message`} className="text-[11px] font-bold uppercase block">Notes / Inquiry (Optional)</label>
                <textarea
                  id={`${formId}-message`}
                  rows={2}
                  placeholder="Describe your industry requirements or challenge theme..."
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full p-3 border border-black bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#CFFD3E] resize-none"
                />
              </div>

              <div className="grid gap-2">
                <button
                  type="submit"
                  className="w-full h-12 bg-black hover:bg-neutral-800 text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
                >
                  PREVIEW INQUIRY <ArrowRight className="w-4 h-4 text-[#CFFD3E]" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialFormData);
                    setErrors({});
                    setIsSubmitted(false);
                    companyNameRef.current?.focus();
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
