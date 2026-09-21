const journeyStages = [
  { number: "01", title: "PROBLEM", detail: "8 DAYS\nINSIGHT", width: "lg:w-[148px]", active: true },
  { number: "02", title: "PLAN", detail: "22 DAYS\nSTRATEGY", width: "lg:w-[248px]" },
  { number: "03", title: "PROTOTYPE", detail: "29 DAYS · LONGEST BAND\nTESTING", width: "lg:w-[316px]" },
  { number: "04", title: "PROOF", detail: "12 DAYS\nVALIDATION", width: "lg:w-[196px]" },
];

const disciplines = [
  {
    title: "DESIGN",
    subtitle: "HUMAN EXPERIENCE",
    body: "Bring empathy, interaction and\nhuman-centred thinking.",
  },
  {
    title: "ENGINEERING",
    subtitle: "TECHNICAL FEASIBILITY",
    body: "Turn ideas into things that can actually work.",
  },
  {
    title: "MANAGEMENT",
    subtitle: "MARKET / VIABILITY",
    body: "Think about value, adoption and what\nhappens beyond the prototype.",
  },
  {
    title: "RESEARCH",
    subtitle: "SCIENTIFIC / BEHAVIOURAL DEPTH",
    body: "Bring evidence, context and rigour.",
  },
];

const reservedBlocks = ["ELIGIBILITY", "TEAM SIZE", "TEAM FORMATION"];

export function Final3Phase() {
  return (
    <section
      id="final-3"
      className="w-full max-w-[1383px] bg-white text-black border border-black font-sans overflow-hidden"
    >
      <div className="h-[100px] border-b border-black px-8 py-7 flex items-center justify-between gap-6">
        <h2 className="font-black text-4xl uppercase">THE ENTIRE JOURNEY</h2>
        <p className="font-semibold text-[11px] uppercase text-[#6B7280] whitespace-nowrap">
          27 SEP - 29 DEC
        </p>
      </div>

      <div className="h-9 border-b border-black flex">
        <div className="w-[120px] bg-black px-4 py-3 font-extrabold text-[10px] uppercase text-white">
          YOU ARE HERE 01
        </div>
      </div>

      <div className="min-h-[304px] bg-[#F9FAFB] border-b border-black px-8 pt-6 flex flex-col gap-4">
        <div className="flex items-center gap-1.5">
          <span className="bg-black px-2 py-1 font-extrabold text-[10px] uppercase text-white">NOW</span>
          <span className="font-bold text-[11px]">11 OCT</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:h-[155px]">
          {journeyStages.map((stage, index) => (
            <div key={stage.number} className="contents">
              <div
                className={`h-[155px] p-4 flex flex-col gap-2 whitespace-pre-line ${
                  stage.active
                    ? "bg-[#CFFD3E] border-2 border-black text-black"
                    : "bg-[#0F0E0E] text-white"
                } ${stage.width}`}
              >
                <p className="font-bold text-xs">{stage.number}</p>
                <p className="font-extrabold text-sm">{stage.title}</p>
                <p className={`text-[10px] ${stage.active ? "text-[#6B7280]" : "text-white"}`}>{stage.detail}</p>
              </div>
              {index < journeyStages.length - 1 && (
                <div className="h-[155px] w-full lg:w-9 bg-[#E5E7EB] border border-black flex items-center justify-center">
                  <span className="font-bold text-[8px] text-[#6B7280] lg:rotate-90">REVIEW</span>
                </div>
              )}
            </div>
          ))}
          <div className="h-[155px] lg:w-[247px] bg-[#F3F4F6] border border-[#E5E7EB] p-4 flex flex-col gap-2 text-[#6B7280]">
            <p className="font-extrabold text-[11px]">FINAL JURY<br />26-29 DEC</p>
            <p className="text-[10px]">INDUSTRY<br />PILOT →</p>
          </div>
        </div>

        <div className="hidden lg:flex items-start justify-between pt-2 pb-4 text-[10px] text-[#6B7280]">
          <span>DUE 05 OCT</span>
          <span>DUE 02 NOV</span>
          <span>DUE 07 DEC</span>
          <span>DUE 25 DEC</span>
          <span>END</span>
        </div>
      </div>

      <div className="border-b border-black p-12 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h3 className="font-black text-4xl leading-normal uppercase">
            DIFFERENT MINDS.<br />SAME PROBLEM.
          </h3>
          <p className="font-semibold text-[11px] uppercase text-[#6B7280] text-left lg:text-right">
            BRING YOUR PERSPECTIVE.<br />BUILD TOGETHER.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplines.map((item) => (
            <div key={item.title} className="min-h-[136px] border border-black p-5 flex flex-col gap-3">
              <h4 className="font-black text-[22px] uppercase">{item.title}</h4>
              <p className="text-xs text-[#6B7280] uppercase">{item.subtitle}</p>
              <p className="text-xs leading-normal text-[#6B7280] whitespace-pre-line">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-3 text-[#6B7280] uppercase">
          {reservedBlocks.map((label) => (
            <div key={label} className="border border-dashed border-[#E5E7EB] p-4 space-y-2">
              <p className="font-medium text-[9px] tracking-[1px]">{label}</p>
              <p className="text-[11px]">CONTENT GAP - NOT IN SOURCE. RESERVED BLOCK. DO NOT INVENT.</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-black p-12 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <h3 className="font-black text-[32px] uppercase">WHERE THIS<br />CAN LEAD.</h3>
          <div className="grid sm:grid-cols-2 gap-10 lg:w-[800px]">
            <div className="space-y-4">
              <div>
                <p className="font-extrabold text-base uppercase">MENTORSHIP</p>
                <p className="text-[11px] text-[#6B7280]">AT D-03 PROTOTYPE · MID-SPRINT BUILD WINDOW</p>
              </div>
              <div>
                <p className="font-extrabold text-base uppercase">DEMO DAY</p>
                <p className="text-[11px] text-[#6B7280]">AFTER GATE 03 · FORMAT UNRESOLVED</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-extrabold text-base uppercase">EXPERT / JURY EXPOSURE</p>
                <p className="text-[11px] text-[#6B7280]">AT D-04 PROOF · DEFEND TO PEOPLE WHO BUY THINGS</p>
              </div>
              <div>
                <p className="font-extrabold text-base uppercase">INDUSTRY PILOT PATHWAY</p>
                <p className="text-[11px] text-[#6B7280]">AFTER JURY · THE AXIS CONTINUES PAST 29 DEC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block border border-dashed border-[#E5E7EB] rounded-[2px] px-2.5 py-1.5">
          <p className="font-semibold text-[9px] tracking-[0.5px] uppercase text-[#6B7280]">
            ANN · PARTICIPANT PAYOFF ONLY. NO SPONSOR LOGOS, NO TIERS, NO PRICING ANYWHERE IN THIS FLOW.
          </p>
        </div>
      </div>
    </section>
  );
}
