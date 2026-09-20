import { TeamDetails } from "@/components/team-details";

export const metadata = {
  title: "Team Details · SOD: Design Challenge (#BNB2026)",
  description: "Official team roster, research assignments, and submission dossier for School of Design, IIT Jodhpur Designathon.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#EDEDED] flex flex-col items-center justify-start p-0 sm:p-8 space-y-8 font-sans selection:bg-[#CFFD3E] selection:text-black">
      <main className="w-full max-w-[1383px]">
        <TeamDetails />
      </main>
    </div>
  );
}
