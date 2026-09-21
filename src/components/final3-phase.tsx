const journeyStages = [
  { number: "01", title: "PROBLEM", detail: "8 DAYS\nINSIGHT", width: "min-[1383px]:w-[148px]", active: true },
  { number: "02", title: "PLAN", detail: "22 DAYS\nSTRATEGY", width: "min-[1383px]:w-[248px]" },
  { number: "03", title: "PROTOTYPE", detail: "29 DAYS · LONGEST BAND\nTESTING", width: "min-[1383px]:w-[316px]" },
  { number: "04", title: "PROOF", detail: "12 DAYS\nVALIDATION", width: "min-[1383px]:w-[196px]" },
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
      className="w-full max-w-[1327px] bg-white text-black border border-black font-sans overflow-hidden min-[1383px]:mt-[60px]"
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

      <div className="min-[1383px]:h-[304px] bg-[#F9FAFB] border-b border-black px-8 pt-6 flex flex-col gap-4">
        <div className="flex items-center gap-1.5">
          <span className="bg-black px-2 py-1 font-extrabold text-[10px] uppercase text-white">NOW</span>
          <span className="font-bold text-[11px]">11 OCT</span>
        </div>

        <div className="flex flex-col min-[1383px]:flex-row min-[1383px]:items-start">
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
                <div className="h-[155px] w-full min-[1383px]:w-9 bg-[#E5E7EB] border border-black flex items-center justify-center">
                  <span className="font-bold text-[8px] text-[#6B7280] min-[1383px]:rotate-90">REVIEW</span>
                </div>
              )}
            </div>
          ))}
          <div className="h-[155px] min-[1383px]:w-[247px] bg-[#F3F4F6] border border-[#E5E7EB] p-4 flex flex-col gap-2 text-[#6B7280]">
            <p className="font-extrabold text-[11px]">FINAL JURY<br />26-29 DEC</p>
            <p className="text-[10px]">INDUSTRY<br />PILOT →</p>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-2 pt-2 pb-4 text-[10px] text-[#6B7280]">
          <span>DUE 05 OCT</span>
          <span>DUE 02 NOV</span>
          <span>DUE 07 DEC</span>
          <span>DUE 25 DEC</span>
          <span>END</span>
        </div>
      </div>

      <div className="border-b border-black bg-[#181717] p-12 space-y-6">
        <div className="flex flex-col min-[1383px]:flex-row min-[1383px]:items-end justify-between gap-6">
          <h3 className="font-black text-[32px] leading-[1.05] uppercase">
            <span className="text-[#F8F5F5]">DIFFERENT MINDS.<br />SAME </span>
            <span className="text-[#CFFD3E]">PROBLEM.</span>
          </h3>
          <p className="font-semibold text-[11px] uppercase text-[#E5E7EB] text-left min-[1383px]:text-right">
            BRING YOUR PERSPECTIVE.<br />BUILD TOGETHER.
          </p>
        </div>

        <div className="grid min-[768px]:grid-cols-2 min-[1383px]:grid-cols-4 gap-4">
          {disciplines.map((item, index) => (
            <div
              key={item.title}
              className={`min-h-[136px] min-[1383px]:h-[137px] border p-4 flex flex-col gap-2 ${
                index === 0 ? "border-white" : "border-[#E5E7EB]"
              }`}
            >
              <h4 className="font-black text-[20px] uppercase text-[#EAE6E6]">{item.title}</h4>
              <p className="text-xs text-[#CFFD3E] uppercase">{item.subtitle}</p>
              <p className="text-xs leading-normal text-[#6B7280] whitespace-pre-line">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-3 text-[#6B7280] uppercase">
          {reservedBlocks.map((label) => (
            <div key={label} className="border border-dashed border-[#E5E7EB] p-4 space-y-2">
              <p className="font-medium text-[9px] tracking-[1px]">{label}</p>
              <p className="text-[10px] min-[1383px]:whitespace-nowrap">CONTENT GAP - NOT IN SOURCE. RESERVED BLOCK. DO NOT INVENT.</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-12">
        <div className="flex flex-col min-[1383px]:flex-row min-[1383px]:items-start justify-between gap-10">
          <h3 className="font-black text-[32px] uppercase">WHERE THIS<br />CAN LEAD.</h3>
          <div className="grid sm:grid-cols-2 gap-10 min-[1383px]:w-[800px]">
            <div className="space-y-4">
              <div>
                <p className="font-extrabold text-base uppercase">MENTORSHIP</p>
                <p className="text-[11px] text-[#6B7280]">Guidance as the work develops.</p>
              </div>
              <div>
                <p className="font-extrabold text-base uppercase">DEMO DAY</p>
                <p className="text-[11px] text-[#6B7280]">Show what you built.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-extrabold text-base uppercase">EXPERT / JURY EXPOSURE</p>
                <p className="text-[11px] text-[#6B7280]">Present, defend and discuss your work.</p>
              </div>
              <div>
                <p className="font-extrabold text-base uppercase">INDUSTRY PILOT PATHWAY</p>
                <p className="text-[11px] text-[#6B7280]">Take promising work towards real-world application.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
