"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, ArrowLeft, Plus, CheckCircle2, ShieldCheck, Mail, GitBranch, ExternalLink, Award } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  email: string;
  portfolio: string;
  isLead?: boolean;
}

export function TeamDetails() {
  const [teamInfo, setTeamInfo] = useState({
    teamName: "STUDIO UNSERIOUS",
    projectTitle: "AUGMENTED TACTILE FEEDBACK FOR DISTRIBUTED TEAMS",
    track: "PROBLEM → PROOF (MAIN DESIGNATHON)",
    gateStatus: "GATE 01 VERIFIED",
    repoUrl: "https://github.com/aasurjya/SOD-Design-Challenge",
    figmaUrl: "https://www.figma.com/design/71J7xt6jCh3nohTfer22uV/Design-Challenge",
  });

  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Maya Sharma",
      role: "DESIGN & RESEARCH LEAD",
      institution: "School of Design, IIT Jodhpur",
      email: "sharma.maya@iitj.ac.in",
      portfolio: "https://portfolio.design/maya",
      isLead: true,
    },
    {
      id: "2",
      name: "Arjun Verma",
      role: "SYSTEMS ARCHITECT",
      institution: "Dept of Computer Science, IIT Jodhpur",
      email: "verma.arjun@iitj.ac.in",
      portfolio: "https://github.com/arjunv",
    },
    {
      id: "3",
      name: "Rhea Iyer",
      role: "BEHAVIORAL RESEARCHER",
      institution: "School of Design, IIT Jodhpur",
      email: "iyer.rhea@iitj.ac.in",
      portfolio: "https://rhea-research.io",
    },
  ]);

  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "PROTOTYPE ENGINEER",
    institution: "IIT Jodhpur",
    email: "",
    portfolio: "",
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMember.name || !newMember.email) return;

    setMembers([
      ...members,
      {
        id: String(Date.now()),
        ...newMember,
      },
    ]);
    setNewMember({
      name: "",
      role: "PROTOTYPE ENGINEER",
      institution: "IIT Jodhpur",
      email: "",
      portfolio: "",
    });
    setIsAddingMember(false);
  };

  return (
    <div className="w-full max-w-[1383px] bg-[#EDEDED] text-[#000000] border border-[#000000] flex flex-col items-start p-0 relative font-['Inter',sans-serif] shadow-2xl">
      {/* ------------------------------------------------ HEADER */}
      <header className="w-full h-[56px] border-b border-[#000000] flex flex-row justify-between items-center bg-[#EDEDED] px-4 sm:px-6 select-none">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-extrabold text-[11px] uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO CHALLENGE
          </Link>
          <div className="w-[1px] h-4 bg-black hidden sm:block" />
          <span className="font-extrabold text-[11px] uppercase tracking-tight hidden sm:inline">
            SCHOOL OF DESIGN · IIT JODHPUR
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-[#CFFD3E] border border-black px-2.5 py-1 text-[10px] font-mono font-black uppercase">
            #BNB2026 TEAM PORTAL
          </span>
          <div className="w-8 h-8 rounded-full border border-black bg-white flex items-center justify-center p-0.5">
            <img src="/images/iitj-crest.png" alt="IITJ" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </header>

      {/* ------------------------------------------------ TEAM HERO BANNER */}
      <div className="w-full p-6 sm:p-10 border-b border-black bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5 uppercase">
              TEAM CODE: SOD-2026-042
            </span>
            <span className="text-[10px] font-mono font-bold bg-[#CFFD3E] text-black px-2 py-0.5 border border-black uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> {teamInfo.gateStatus}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-[900] uppercase tracking-tight">
            {teamInfo.teamName}
          </h1>
          <p className="text-sm font-bold text-neutral-700 max-w-2xl uppercase">
            PROJECT: {teamInfo.projectTitle}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 shrink-0 w-full md:w-auto">
          <a
            href={teamInfo.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-4 border border-black bg-white hover:bg-neutral-100 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            FIGMA WORKSPACE <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={teamInfo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-4 border border-black bg-black text-white hover:bg-[#CFFD3E] hover:text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            GITHUB DOSSIER <GitBranch className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ------------------------------------------------ MAIN CONTENT GRID */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-b border-black">
        {/* Left Column: Team Members Roster (8 cols) */}
        <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-black p-6 sm:p-10 space-y-6 bg-[#EDEDED]">
          <div className="flex items-center justify-between pb-3 border-b border-black">
            <span className="font-extrabold text-xs uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4" /> ROSTER & RESEARCH ASSIGNMENTS ({members.length} MEMBERS)
            </span>
            <button
              onClick={() => setIsAddingMember(!isAddingMember)}
              className="px-3 py-1 bg-black text-white hover:bg-[#CFFD3E] hover:text-black border border-black text-[10px] font-extrabold uppercase tracking-wider transition-colors flex items-center gap-1"
            >
              <Plus className="w-3 h-3" /> {isAddingMember ? "CANCEL" : "ADD MEMBER"}
            </button>
          </div>

          {/* Add Member Form */}
          {isAddingMember && (
            <form
              onSubmit={handleAddMember}
              className="p-5 border border-black bg-white space-y-3 animate-in fade-in"
            >
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-500 block">
                REGISTER NEW TEAM CO-INNOVATOR
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="h-9 px-3 border border-black text-xs"
                />
                <input
                  type="email"
                  required
                  placeholder="Institutional Email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  className="h-9 px-3 border border-black text-xs"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Role (e.g. Prototyper)"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  className="h-9 px-3 border border-black text-xs"
                />
                <input
                  type="text"
                  placeholder="Portfolio / GitHub Link"
                  value={newMember.portfolio}
                  onChange={(e) => setNewMember({ ...newMember, portfolio: e.target.value })}
                  className="h-9 px-3 border border-black text-xs"
                />
              </div>
              <button
                type="submit"
                className="w-full h-9 bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                SAVE MEMBER TO ROSTER
              </button>
            </form>
          )}

          {/* Members List */}
          <div className="space-y-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="p-5 border border-black bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-[900] text-base uppercase">{member.name}</span>
                    {member.isLead && (
                      <span className="bg-[#CFFD3E] border border-black text-[9px] font-mono font-bold px-1.5 py-0.2">
                        LEAD
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-600 uppercase block">
                    {member.role} · {member.institution}
                  </span>
                  <div className="text-[11px] font-mono text-neutral-500 flex items-center gap-3 pt-1">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3" /> {member.email}
                    </span>
                  </div>
                </div>

                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border border-black bg-[#F3F4F6] hover:bg-black hover:text-white font-mono text-[10px] font-bold uppercase transition-colors shrink-0"
                  >
                    PORTFOLIO →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Milestones & Mentors (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-10 space-y-6 bg-white">
          {/* Submission Gate Progress */}
          <div className="p-5 border border-black bg-[#EDEDED] space-y-3">
            <span className="text-[10px] font-mono font-extrabold text-neutral-500 uppercase block">
              CHALLENGE PIPELINE
            </span>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center border-b border-black/20 pb-1.5">
                <span className="font-bold">GATE 01: PROBLEM PROOF</span>
                <span className="text-emerald-700 font-bold">PASSED ✓</span>
              </div>
              <div className="flex justify-between items-center border-b border-black/20 pb-1.5">
                <span className="font-bold">GATE 02: PLAN DOSSIER</span>
                <span className="text-amber-600 font-bold">DUE 11 NOV</span>
              </div>
              <div className="flex justify-between items-center border-b border-black/20 pb-1.5">
                <span className="font-bold">GATE 03: CONCEPT PROOF</span>
                <span className="text-neutral-400 font-bold">DUE 05 DEC</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-bold text-black">STAGE FINALE</span>
                <span className="bg-[#CFFD3E] px-1.5 py-0.5 border border-black text-[10px] font-bold">
                  27-29 DEC
                </span>
              </div>
            </div>
          </div>

          {/* SOD IIT Jodhpur Mentors */}
          <div className="p-5 border border-black bg-white space-y-3">
            <span className="text-[10px] font-mono font-extrabold text-neutral-500 uppercase flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-black" /> ASSIGNED FACULTY MENTORS
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-3 border border-neutral-200 bg-[#F3F4F6] space-y-0.5">
                <span className="font-extrabold uppercase block">DR. R. CHOUDHURY</span>
                <span className="text-[11px] text-neutral-600 font-mono block">
                  Professor of Systems Design, SOD IIT Jodhpur
                </span>
              </div>
              <div className="p-3 border border-neutral-200 bg-[#F3F4F6] space-y-0.5">
                <span className="font-extrabold uppercase block">PROF. S. MEHTA</span>
                <span className="text-[11px] text-neutral-600 font-mono block">
                  Director of Multidisciplinary Prototyping Labs
                </span>
              </div>
            </div>
          </div>

          {/* Venue Notes */}
          <div className="p-4 border border-black bg-[#CFFD3E] text-black text-xs font-mono space-y-1">
            <span className="font-black uppercase block">CAMPUS SHOWCASE VENUE:</span>
            <p className="leading-snug">
              Design Innovation Pavilion, School of Design, IIT Jodhpur, NH 62, Karwar, Rajasthan.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ FOOTER */}
      <footer className="w-full h-[40px] border-t border-[#000000] bg-[#EDEDED] flex items-center justify-between px-6 font-extrabold text-[11px] uppercase tracking-wider">
        <span>SCHOOL OF DESIGN · IIT JODHPUR</span>
        <span>#BNB2026 OFFICIAL TEAM DOSSIER</span>
      </footer>
    </div>
  );
}
