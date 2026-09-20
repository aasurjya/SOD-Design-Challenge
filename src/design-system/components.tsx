"use client";

import React from "react";

export function BrutalistButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "volt" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const baseStyles =
    "font-['Inter',sans-serif] font-[900] uppercase tracking-wider border border-[#000000] flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-95 select-none";

  const sizeStyles = {
    sm: "h-8 px-3 text-[10px]",
    md: "h-11 px-5 text-xs",
    lg: "h-14 px-8 text-sm",
  }[size];

  const variantStyles = {
    primary: "bg-[#000000] text-white hover:bg-[#CFFD3E] hover:text-[#000000]",
    secondary: "bg-[#EDEDED] text-[#000000] hover:bg-[#000000] hover:text-white",
    volt: "bg-[#CFFD3E] text-[#000000] hover:bg-[#000000] hover:text-white",
    outline: "bg-white text-[#000000] hover:bg-[#EDEDED]",
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}

export function BrutalistBadge({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "volt" | "dark";
  className?: string;
}) {
  const baseStyles =
    "inline-flex items-center px-2 py-0.5 border border-[#000000] text-[10px] font-mono font-extrabold uppercase select-none";

  const variantStyles = {
    default: "bg-[#EDEDED] text-[#000000]",
    volt: "bg-[#CFFD3E] text-[#000000]",
    dark: "bg-[#000000] text-white",
  }[variant];

  return <span className={`${baseStyles} ${variantStyles} ${className}`}>{children}</span>;
}

export function BrutalistCard({
  children,
  className = "",
  hoverable = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <div
      className={`border border-[#000000] bg-[#EDEDED] p-6 transition-all duration-200 ${
        hoverable ? "hover:-translate-y-0.5 hover:shadow-md hover:bg-white" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
