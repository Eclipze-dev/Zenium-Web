"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ZeniumArchitecture from "@/components/ZeniumArchitecture";

const IndiaBuiltMap = dynamic(() => import("@/components/IndiaBuiltMap"), {
  ssr: false,
});
import SiteHeader from "@/components/SiteHeader";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cpu,
  Download,
  FileText,
  Gauge,
  Globe2,
  Lightbulb,
  Network,
  Radio,
  ShieldCheck,
  Sparkles,
  Zap,
  BarChart3,
  CheckSquare,
  Play,
  Server,
  Gauge as GaugeIcon,
  Database,
  MapPin,
  RadioTower,
} from "lucide-react";

const journey = [
  {
    label: "CONNECT",
    title: "Smart Meters + HES",
    text: "Connect and acquire data across diverse meter and communication environments.",
    icon: Radio,
  },
  {
    label: "MANAGE",
    title: "MDM - Meter Data Management",
    text: "Validate, manage and create a trusted foundation from high-volume meter data.",
    icon: Network,
  },
  {
    label: "UNDERSTAND",
    title: "Analytics & AI",
    text: "Turn trusted utility data into meaningful insights and visibility.",
    icon: Sparkles,
  },
  {
    label: "ACT",
    title: "Utility Intelligence",
    text: "Build toward smarter decisions, proactive operations and intelligent utility management.",
    icon: Gauge,
  },
];

const capabilities = [
  [
    "Open by Design",
    "Built on open technologies to support flexibility, extensibility and reduced vendor dependency.",
  ],
  [
    "Interoperable",
    "Designed to work across multiple HES platforms, meter makes and utility environments.",
  ],
  [
    "Cloud Flexible",
    "Supports cloud, on-premise and hybrid deployment models.",
  ],
  [
    "Built to Evolve",
    "Microservices-based and containerized architecture designed for modular development and scale.",
  ],
  [
    "Secure by Design",
    "Security built into the technology architecture and deployment approach.",
  ],
  [
    "Operational Visibility",
    "Customizable dashboards, widgets and visualizations help utility teams monitor what matters.",
  ],
];

const audiences = [
  [
    "Utilities",
    "Build the digital foundation for smarter metering, data management and utility operations.",
    Radio,
  ],
  [
    "Commercial & Industrial",
    "Gain greater visibility into energy data, consumption and operational performance.",
    Zap,
  ],
  [
    "Smart Cities",
    "Enable connected, data-driven infrastructure across energy and municipal environments.",
    Globe2,
  ],
  [
    "Microgrids",
    "Support increasingly distributed and interconnected energy environments.",
    Network,
  ],
  [
    "Prosumers",
    "Enable greater visibility and intelligence across two-way energy participation.",
    Cpu,
  ],
];

const partners = [
  [
    "Meter Manufacturers",
    "Connect Zenium technology with diverse metering ecosystems.",
  ],
  [
    "AMI Service Providers",
    "Combine Zenium technology capabilities with AMI implementation and operational expertise.",
  ],
  [
    "System Integrators",
    "Bring together Zenium technology, integration expertise and large-scale implementation capabilities.",
  ],
];

const resources = [
  {
    type: "CASE STUDY",
    title: "Punjab: Building a Smarter Utility Ecosystem",
    text: "How Zenium brings together utility data, systems and intelligence to improve visibility, reliability and operational decision-making.",
    cta: "Read Case Study",
    icon: FileText,
    action: "read",
  },
  {
    type: "WHITEPAPER",
    title: "Modernising Utilities: From Data to Intelligence",
    text: "Explore the technologies, architecture and strategies enabling utilities to build scalable, interoperable and future-ready digital ecosystems.",
    cta: "Download Whitepaper",
    icon: BookOpen,
    action: "download",
  },
  {
    type: "INSIGHT",
    title: "Why Utility Intelligence Starts with Connected Data",
    text: "A practical perspective on turning fragmented utility data into actionable intelligence for better planning, faster decisions and stronger operations.",
    cta: "Read Insight",
    icon: Lightbulb,
    action: "read",
  },
];

const heroPhrases = [
  "Connect every meter.",
  "Trust every data point.",
  "Understand what matters.",
  "Act with intelligence.",
];

const networkNodes = [
  { label: "Enterprise Systems", Icon: Server, pos: "left-[8%] top-[3%]" },
  {
    label: "Smart Meters",
    Icon: GaugeIcon,
    pos: "left-[1%] top-[28%] [animation-delay:0.5s]",
  },
  {
    label: "HES",
    Icon: RadioTower,
    pos: "left-[0%] top-[57%] [animation-delay:1s]",
  },
  {
    label: "MDMS",
    Icon: Database,
    pos: "left-[11%] bottom-[2%] [animation-delay:1.5s]",
  },
  {
    label: "IoT",
    Icon: Radio,
    pos: "left-[34%] bottom-[0%] [animation-delay:2s]",
  },
  {
    label: "GIS",
    Icon: MapPin,
    pos: "right-[8%] bottom-[5%] [animation-delay:2.5s]",
  },
];

const insightCards = [
  {
    title: "INSIGHT",
    text: "Pattern identified",
    Icon: BarChart3,
    pos: "top-[20%]",
  },
  {
    title: "DECISION",
    text: "Action queued",
    Icon: CheckSquare,
    pos: "top-[43%] [animation-delay:1s]",
  },
  {
    title: "ACTION",
    text: "Workflow triggered",
    Icon: Play,
    pos: "top-[66%] [animation-delay:2s]",
  },
];

const ringSpans = [
  { cls: "inset-[-5%] [transform:rotate(45deg)_skewX(-20deg)]" },
  { cls: "inset-[4%] [transform:rotate(-35deg)_skewX(-24deg)]" },
  { cls: "inset-[14%] [transform:rotate(80deg)_skewX(-18deg)]" },
  { cls: "inset-[24%] [transform:rotate(-10deg)_skewX(-15deg)]" },
];

function Button({
  children,
  outline = false,
  onClick,
}: {
  children: React.ReactNode;
  outline?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[7px] rounded-[3px] border px-[17px] py-[11px] text-[15px] transition-all duration-200 [&>svg]:block [&>svg]:shrink-0 ${
        outline
          ? "border-white bg-transparent text-white hover:bg-white/10"
          : "border-orange bg-orange text-white hover:border-orange-dark hover:bg-orange-dark hover:-translate-y-0.5"
      }`}
    >
      {children}
    </button>
  );
}

function SectionIntro({
  eyebrow,
  children,
  text,
  centered = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  text?: string;
  centered?: boolean;
}) {
  return (
    <header
      className={`max-w-[630px] ${centered ? "max-w-[1050px] mx-auto text-center" : ""}`}
    >
      <p className="text-[clamp(14px,1.4vw,21px)] leading-[1.2] tracking-[0.02em] mb-[clamp(12px,1.5vw,20px)] text-white font-normal">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(30px,4.5vw,65px)] font-normal leading-[1.08] tracking-[-0.045em] m-0 max-sm:text-[clamp(26px,8vw,34px)] [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold">
        {children}
      </h2>
      {text && (
        <p className="text-muted text-base leading-[1.5] max-w-[950px] mx-auto mt-[22px]">
          {text}
        </p>
      )}
    </header>
  );
}

function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const stateRef = useRef({
    phase: "typing" as "typing" | "pausing" | "deleting" | "switching",
    start: 0,
    charCount: 0,
  });

  useEffect(() => {
    const phrase = heroPhrases[phraseIndex];
    const s = stateRef.current;
    let rafId = 0;
    const tick = (now: number) => {
      if (!s.start) s.start = now;
      const elapsed = now - s.start;
      if (s.phase === "typing") {
        const duration = phrase.length * 55;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        const chars = Math.round(eased * phrase.length);
        if (chars !== s.charCount) {
          s.charCount = chars;
          setText(phrase.slice(0, chars));
        }
        if (progress >= 1) {
          s.phase = "pausing";
          s.start = now;
        }
      } else if (s.phase === "pausing") {
        if (elapsed >= 1800) {
          s.phase = "deleting";
          s.start = now;
        }
      } else if (s.phase === "deleting") {
        const duration = phrase.length * 30;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress * progress;
        const chars = Math.round((1 - eased) * phrase.length);
        if (chars !== s.charCount) {
          s.charCount = chars;
          setText(phrase.slice(0, chars));
        }
        if (progress >= 1) {
          s.phase = "switching";
          s.start = now;
        }
      } else if (s.phase === "switching") {
        if (elapsed >= 300) {
          setPhraseIndex((i) => (i + 1) % heroPhrases.length);
          s.phase = "typing";
          s.start = 0;
          s.charCount = 0;
          setText("");
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phraseIndex]);

  return (
    <strong className="block min-h-[1.06em] text-orange font-bold">
      {text}
      <span
        className="inline-block w-[0.05em] bg-orange ml-[0.04em] animate-caret-blink"
        aria-hidden="true"
      >
        &nbsp;
      </span>
    </strong>
  );
}

export default function Home() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div id="top" className="bg-zen-bg">
      <SiteHeader />
      <main className="overflow-x-clip">

      {/* Hero */}
      <section
        className="relative flex items-center min-h-[100svh] pt-[40px] px-[clamp(20px,5vw,80px)] pb-[60px] bg-[radial-gradient(ellipse_at_70%_45%,rgba(240,127,37,0.1),transparent_40%),#0D1722] overflow-hidden max-md:pt-[32px] max-md:px-5 max-md:pb-[50px] max-sm:pt-[24px] max-sm:px-4 max-sm:pb-[40px]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-[1640px] w-full mx-auto grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(20px,4vw,60px)] items-center max-lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] max-lg:gap-[30px] max-md:grid-cols-1 max-md:gap-[40px]">
          <div className="max-w-[640px] relative z-[2] max-md:max-w-full">
            <p className="text-[clamp(14px,1.4vw,21px)] leading-[1.2] tracking-[0.02em] mb-[clamp(12px,1.5vw,20px)] text-white font-normal">
              ENERGY INTELLIGENCE
            </p>
            <h1
              id="hero-title"
              className="text-[clamp(32px,4.2vw,62px)] leading-[1.06] font-normal tracking-[-0.035em] m-0 max-w-full max-sm:text-[clamp(28px,7vw,40px)]"
            >
              Turn energy data into intelligence.
              <Typewriter />
            </h1>
            <p className="text-muted text-[clamp(14px,1.2vw,17px)] leading-[1.5] mt-[clamp(14px,1.8vw,22px)] max-w-[520px] max-sm:text-[14px]">
              Building smart-grid intelligence on a trusted HES and MDM
              foundation.
            </p>
            <div className="flex flex-wrap gap-[10px] mt-[clamp(18px,2.5vw,30px)]">
              <Button>Request a Demo</Button>
              <Button outline>Explore Zenium</Button>
            </div>
          </div>

          {/* Hero Network Graphic */}
          <div
            className="relative w-full aspect-[1/0.82] max-h-[560px] opacity-95 max-lg:max-h-[440px] max-md:max-h-[400px] max-md:max-w-[500px] max-md:mx-auto max-sm:max-h-[340px] max-sm:max-w-[340px]"
            aria-label="Zenium intelligence network animation"
          >
            <div className="absolute rounded-[50%] bg-[repeating-radial-gradient(circle,transparent_0_3.5%,rgba(240,127,37,0.15)_3.6%_3.7%)] animate-network-pulse inset-[15%_20%_15%_8%]">
              {ringSpans.map((ring, i) => (
                <span
                  key={i}
                  className={`absolute border border-[rgba(240,127,37,0.18)] rounded-[50%] ${ring.cls}`}
                />
              ))}
            </div>
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="fill-none stroke-[rgba(240,127,37,0.48)] stroke-[0.4] [stroke-dasharray:1.5_2.5] animate-data-flow"
                d="M36 42 L10 9 M36 42 L3 28 M36 42 L4 55 M36 42 L13 72 M36 42 L36 78 M36 42 L58 72"
              />
              <path
                className="fill-none stroke-[rgba(240,127,37,0.25)] stroke-[0.4] [stroke-dasharray:1.5_2.5] animate-data-flow [animation-duration:5s]"
                d="M36 42 C50 25 62 15 75 18 M36 42 C52 38 66 40 80 42 M36 42 C50 55 62 60 75 65"
              />
            </svg>
            <div className="absolute left-[32%] top-[38%] w-[22%] aspect-square border-[2px] border-orange rounded-[50%] grid place-items-center text-center bg-[radial-gradient(circle,#162536_0%,#0d1520_70%)] animate-core-glow shadow-[0_0_0_12px_rgba(240,127,37,0.08),0_0_50px_rgba(240,127,37,0.3)]">
              <div className="absolute inset-[9px] border border-[rgba(240,127,37,0.45)] rounded-[50%]" />
              <div>
                <b className="block text-orange text-[clamp(9px,1.3vw,17px)] tracking-[0.18em]">
                  ZENIUM
                </b>
                <span className="block text-[rgba(255,255,255,0.5)] text-[clamp(5px,0.7vw,8px)] tracking-[0.22em] mt-[6px]">
                  INTELLIGENCE
                </span>
              </div>
            </div>
            {networkNodes.map(({ label, Icon, pos }) => {
              const NodeIcon = Icon as typeof Server;
              return (
                <div
                  key={label}
                  className={`absolute ${pos} w-[13%] aspect-square border border-orange rounded-[50%] bg-[#101d2b] flex flex-col items-center justify-center text-center gap-[3px] animate-node-float shadow-[0_0_20px_rgba(240,127,37,0.12)]`}
                >
                  <span className="grid text-orange place-items-center">
                    <NodeIcon />
                  </span>
                  <b className="text-[clamp(6px,0.8vw,10px)] leading-[1.1] max-sm:text-[7px]">
                    {label}
                  </b>
                </div>
              );
            })}
            {insightCards.map(({ title, text, Icon, pos }) => {
              const InsightIcon = Icon as typeof BarChart3;
              return (
                <div
                  key={title}
                  className={`absolute right-0 ${pos} w-[26%] min-w-[130px] max-w-[175px] border border-[rgba(240,127,37,0.65)] rounded-[4px] bg-[rgba(12,25,39,0.88)] flex items-center gap-2 p-[8px_10px] animate-card-float max-md:min-w-[96px] max-md:w-[34%] max-sm:min-w-[88px] max-sm:p-[6px_8px] max-sm:gap-[6px]`}
                >
                  <InsightIcon className="text-orange w-[16px] shrink-0 max-sm:w-[12px]" />
                  <div>
                    <b className="block text-orange text-[clamp(8px,0.9vw,11px)] tracking-[0.13em]">
                      {title}
                    </b>
                    <span className="block text-[rgba(255,255,255,0.58)] text-[clamp(7px,0.75vw,10px)] mt-[3px]">
                      {text}
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="absolute right-0 bottom-0 w-[34%] min-w-[150px] max-w-[230px] border border-[rgba(240,127,37,0.48)] rounded-[6px] bg-[rgba(9,19,30,0.92)] p-[10px_12px] shadow-[0_12px_30px_rgba(0,0,0,0.25)] max-md:min-w-[110px] max-sm:min-w-[100px] max-sm:p-[8px_10px]">
              <span className="inline-block w-[7px] h-[7px] bg-orange rounded-[50%] mr-[7px] shadow-[0_0_10px_#f07f25]" />
              <span className="text-[clamp(7px,0.8vw,9px)] tracking-[0.12em] text-[rgba(255,255,255,0.55)]">
                LIVE · INTELLIGENCE LAYER
              </span>
              <p className="text-[clamp(9px,1vw,12px)] text-[rgba(255,255,255,0.65)] mt-[7px] m-0">
                Grid Health <b className="float-right text-orange">98.4%</b>
              </p>
              <p className="text-[clamp(9px,1vw,12px)] text-[rgba(255,255,255,0.65)] mt-[7px] m-0">
                Peak Forecast{" "}
                <b className="float-right text-orange">+12% Zone 04</b>
              </p>
              <p className="text-[clamp(9px,1vw,12px)] text-[rgba(255,255,255,0.65)] mt-[7px] m-0">
                Anomalies <b className="float-right text-orange">2 detected</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section
        className="py-[100px] px-[clamp(20px,8vw,122px)] max-md:px-5 max-sm:py-[70px] max-sm:px-4"
        id="solutions"
      >
        <SectionIntro centered eyebrow="PROVEN AT UTILITY SCALE">
          Built on real-world utility <strong>experience.</strong>
        </SectionIntro>
        <div className="max-w-[1500px] mx-auto mt-[75px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-6 max-sm:grid-cols-1">
          {[
            ["5 Million", "Meter-point MDM deployment"],
            ["2 Million+", "Meters onboarded"],
            ["1 Million", "Meter-point HES deployment"],
            ["12 Million+", "Simulated DLMS meters tested"],
            ["12 Cities", "Smart-streetlight implementations"],
          ].map(([value, label], i) => (
            <div
              key={value}
              className={`px-[24px] border-l border-line max-md:border-l-0 max-md:border-t max-md:px-0 max-md:pt-[20px] max-md:[&:nth-child(-n+2)]:border-t-0 max-md:[&:nth-child(-n+2)]:pt-0 ${i === 0 ? "border-l-0 pl-0" : ""}`}
            >
              <b className="text-[30px] font-semibold text-muted block">
                {value}
              </b>
              <span className="text-[14px] leading-[1.4] text-muted block mt-[18px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="py-[80px] px-[clamp(20px,8vw,122px)] max-md:px-5 max-sm:py-[70px] max-sm:px-4">
        <SectionIntro
          centered
          eyebrow="ONE CONNECTED INTELLIGENCE JOURNEY"
          text="Zenium connects the utility data journey end to end — collecting data through HES, creating a trusted foundation in MDM, and building toward deeper analytics and intelligence."
        >
          From meter to insight. From insight to <strong>action.</strong>
        </SectionIntro>
        <div className="grid grid-cols-4 gap-[10px] max-w-[1630px] mx-auto mt-[75px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {journey.map(({ label, title, text, icon: Icon }) => (
            <article
              key={label}
              className="bg-card rounded-[8px] p-[42px] min-h-[280px] transition-all duration-250 hover:bg-white/10 hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0"
            >
              <Icon className="text-orange w-8 h-8 mb-[22px]" />
              <span className="text-[15px] text-muted block">{label}</span>
              <h3 className="text-[22px] leading-[1.18] my-[14px] mx-0 mb-[18px]">
                {title}
              </h3>
              <p className="text-muted text-base leading-[1.5] m-0">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Edge */}
      <section
        className="py-[80px] px-[clamp(20px,8vw,122px)] max-w-[1800px] mx-auto max-md:px-5 max-sm:py-[70px] max-sm:px-4"
        id="resources"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(360px,1.2fr)] gap-[60px] items-start max-lg:grid-cols-1 max-lg:gap-[40px] max-sm:gap-[30px]">
          <div>
            <SectionIntro
              eyebrow="THE ZENIUM EDGE"
              text="Zenium combines proven utility technology with an architecture designed for scale, interoperability and operational reliability."
            >
              Engineered for the <strong>complexity</strong> of modern
              utilities.
            </SectionIntro>
            <div className="mt-[80px] max-md:mt-[60px] max-sm:mt-[50px]">
              {capabilities.map(([title, text], index) => (
                <button
                  className={`block text-left w-full border-0 bg-transparent text-white pb-[28px] mb-[10px] ${activeCapability === index ? "[&_.capability-line]:before:content-[''] [&_.capability-line]:before:block [&_.capability-line]:before:h-[2px] [&_.capability-line]:before:w-[22%] [&_.capability-line]:before:bg-[#eee]" : ""}`}
                  key={title}
                  onClick={() => setActiveCapability(index)}
                >
                  <span className="block h-px bg-line mb-[26px] relative" />
                  <b className="text-[16px]">{title}</b>
                  {activeCapability === index && (
                    <p className="text-muted text-base leading-[1.5] mt-[9px]">
                      {text}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="relative w-full min-h-[680px] border border-line rounded-[10px] bg-zen-bg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-md:min-h-[520px] max-sm:min-h-[560px]">
            <ZeniumArchitecture />
          </div> */}
          <div className="sticky top-[24px] self-start w-full max-lg:static">
            <div className="relative w-full min-h-[620px] max-w-full rounded-[10px] overflow-hidden max-lg:min-h-[520px] max-sm:min-h-[420px]">
              <img
                src="/aqwe.png"
                alt="Zenium platform architecture diagram"
                className="absolute inset-0 object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* India */}
      <section className="grid grid-cols-[minmax(360px,1fr)_minmax(0,1fr)] gap-[55px] max-w-[1480px] mx-auto py-[80px] px-[clamp(20px,8vw,122px)] items-center max-lg:grid-cols-1 max-md:px-5 max-sm:py-[70px] max-sm:px-4">
        <div className="min-h-[540px] relative grid place-items-center max-lg:min-h-[440px] max-sm:min-h-[280px]">
          <Suspense fallback={null}>
            <IndiaBuiltMap />
          </Suspense>
        </div>
        <div>
          <SectionIntro eyebrow="BUILT FOR INDIA. READY FOR SCALE.">
            <strong>India</strong>-built technology for modern utilities.
          </SectionIntro>
          <div className="mt-[70px]">
            {[
              {
                b: "Make in India",
                em: "Built in India. Built for India's utility ecosystem.",
                p: "Enterprise-grade utility technology engineered, developed, and delivered from India.",
              },
              {
                b: "CMMI Level 3",
                em: "Engineering and delivery built for enterprise requirements.",
                p: "Proven process maturity aligned with the demands of large-scale technology delivery.",
              },
              {
                b: "Data & Security",
                em: "Designed for cloud, on-premise, and hybrid utility environments.",
                p: "Secure data management and deployment designed to meet evolving requirements.",
              },
            ].map((item) => (
              <article key={item.b} className="border-t border-line py-[24px]">
                <b className="block text-[16px]">{item.b}</b>
                <em className="block text-[16px] text-orange my-2 italic">
                  {item.em}
                </em>
                <p className="text-muted text-base leading-[1.5] m-0">
                  {item.p}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pt-[80px] px-[clamp(20px,8vw,122px)] text-center max-md:px-5 max-sm:px-4">
        <SectionIntro centered eyebrow="CUSTOMER STORY">
          <p className="text-[clamp(38px,4.5vw,65px)] font-normal leading-[1.08] tracking-[-0.045em] m-0 [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold">
            Proven in the field. One of <strong>India's large-scale</strong>{" "}
            electricity deployments.
          </p>
        </SectionIntro>
        <p className="text-muted text-base leading-[1.5] my-[20px] mb-[65px] max-sm:text-[12px]">
          Punjab electricity deployment{" "}
          <i className="not-italic text-orange px-2 font-bold max-sm:px-[3px]">
            ·
          </i>{" "}
          5 million meter-point MDM{" "}
          <i className="not-italic text-orange px-2 font-bold max-sm:px-[3px]">
            ·
          </i>{" "}
          2 million+ meters onboarded
        </p>
        <article className="max-w-[995px] mx-auto bg-white rounded-[8px] text-[#1a1a1a] p-[45px_60px] flex flex-col items-center gap-6 max-md:p-[32px_24px] max-sm:p-[28px_20px]">
          <div className="text-[22px] font-bold text-[#2d5e9f] tracking-[0.04em]">
            PUNJAB
            <span className="block text-[10px] text-orange tracking-[0.2em]">
              POWER
            </span>
          </div>
          <blockquote className="text-[20px] leading-[1.6] font-light max-w-[850px] m-0 max-sm:text-[16px] max-sm:leading-[1.5]">
            "ZENIUM has helped us modernize our utility operations with a
            technology platform that is reliable, scalable, and built around our
            real-world requirements. Their understanding of utility workflows
            and focus on seamless implementation made the entire deployment much
            more efficient."
          </blockquote>
          <b className="text-orange text-[16px]">Rajesh Kumar</b>
          <span className="text-[15px]">
            Chief Technology Officer · Punjab State Power Utility
          </span>
        </article>
        <div className="flex justify-center gap-[6px] mt-[28px]">
          {[0, 1, 2, 3, 4].map((slide) => (
            <button
              key={slide}
              onClick={() => setActiveSlide(slide)}
              className={`h-[6px] p-0 border-0 rounded-[50%] bg-white transition-all ${activeSlide === slide ? "w-[30px] rounded-[4px]" : "w-[6px]"}`}
              aria-label={`Show story ${slide + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section
        className="grid grid-cols-[385px_1fr] gap-[75px] max-w-[1800px] mx-auto py-[100px] px-[clamp(20px,8vw,122px)] items-center max-lg:grid-cols-1 max-lg:gap-[40px] max-md:px-5 max-sm:py-[70px] max-sm:px-4"
        id="who-we-serve"
      >
        <div>
          <SectionIntro eyebrow="WHO WE SERVE">
            <strong>Intelligence</strong> across the energy ecosystem.
          </SectionIntro>
          <p className="text-muted text-base leading-[1.5] my-[20px] mb-[26px]">
            Zenium's technology is designed for the evolving needs of utilities
            and the wider energy ecosystem.
          </p>
          <Button>
            <span>Explore Who We Serve</span>
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-6 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {audiences.map(([title, text, Icon], i) => {
            const AudienceIcon = Icon as typeof Radio;
            return (
              <article
                key={title as string}
                className={`bg-card rounded-[8px] p-[35px] min-h-[230px] transition-all duration-250 hover:bg-white/10 hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0 ${
                  i < 3
                    ? "col-span-2 max-lg:col-span-1"
                    : "col-span-3 max-lg:col-span-1"
                }`}
              >
                <AudienceIcon className="text-orange w-8 h-8 mb-[22px]" />
                <h3 className="text-[22px] leading-[1.18] my-[14px] mx-0 mb-[18px]">
                  {title as string}
                </h3>
                <p className="text-muted text-base leading-[1.5] m-0">
                  {text as string}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Partners */}
      <section
        className="py-[80px] px-[clamp(20px,8vw,122px)] text-center max-md:px-5 max-sm:py-[70px] max-sm:px-4"
        id="partners"
      >
        <SectionIntro
          centered
          eyebrow="PARTNERS"
          text="Utility transformation takes an ecosystem. Zenium works with technology and implementation partners to bring together the capabilities required to deliver complex utility programs at scale."
        >
          Better utility transformation, <strong>together.</strong>
        </SectionIntro>
        <div className="grid grid-cols-3 gap-[10px] max-w-[1650px] mx-auto mt-[75px] text-left max-md:grid-cols-2 max-sm:grid-cols-1">
          {partners.map(([title, text], index) => {
            const PartnerIcon = [Radio, Network, ShieldCheck][index];
            return (
              <article
                key={title}
                className="bg-card rounded-[8px] p-[42px] min-h-[300px] transition-all duration-250 hover:bg-white/10 hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0"
              >
                <PartnerIcon className="text-orange w-8 h-8 mb-[22px]" />
                <h3 className="text-[22px] leading-[1.18] my-[14px] mx-0 mb-[18px]">
                  {title}
                </h3>
                <p className="text-muted text-base leading-[1.5] m-0">{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Insights */}
      <section
        className="py-[80px] px-[clamp(20px,8vw,122px)] text-center max-md:px-5 max-sm:py-[70px] max-sm:px-4"
        id="company"
      >
        <SectionIntro
          centered
          eyebrow="INSIGHTS & RESOURCES"
          text="Explore ideas, experiences and perspectives shaping the future of smarter, more connected utilities."
        >
          Thinking beyond the <strong>meter.</strong>
        </SectionIntro>
        <div className="grid grid-cols-3 gap-[10px] max-w-[1650px] mx-auto mt-[75px] text-left max-md:grid-cols-2 max-sm:grid-cols-1">
          {resources.map(({ type, title, text, cta, icon: Icon, action }) => (
            <article
              key={title}
              className="group bg-card rounded-[8px] p-[42px] flex flex-col min-h-[300px] transition-all duration-250 hover:bg-white/10 hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0"
            >
              <div className="flex justify-between items-center mb-[22px]">
                <span className="flex items-center text-orange">
                  <Icon size={30} />
                </span>
                {/* <span className="text-white/30 transition-all duration-250 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  {action === "download" ? (
                    <Download size={15} />
                  ) : (
                    <ArrowUpRight size={15} />
                  )}
                </span> */}
              </div>
              <span className="flex items-center gap-[7px] text-[15px] pb-4 font-bold tracking-[0.12em] text-orange">
                {type}
              </span>
              <h3 className="text-[22px] leading-[1.18] my-0 mx-0 mb-[14px]">
                {title}
              </h3>
              <p className="text-muted text-base leading-[1.5] m-0 flex-1">
                {text}
              </p>
              <button className="inline-flex items-center self-start gap-2 h-[20px] mt-[22px] p-0 border-0 bg-none text-orange text-[14px] font-semibold leading-[20px] whitespace-nowrap transition-all duration-250 hover:gap-3">
                <span className="block h-[20px] leading-[20px]">{cta}</span>
                <div className="pl-1">
                  {action === "download" ? (
                    <Download size={24} />
                  ) : (
                    <ArrowUpRight size={24} />
                  )}
                </div>
              </button>
            </article>
          ))}
        </div>
        <div className="mt-[50px]">
          <Button outline>
            <span>Explore All Resources</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-[70px] px-[clamp(20px,8vw,122px)] pb-[35px] border-t border-line flex justify-between items-center text-muted text-[11px] tracking-[0.14em] max-md:px-5 max-sm:flex-col max-sm:gap-[22px] max-sm:items-start max-sm:px-4">
        <a
          className="flex items-center gap-2 h-9 font-bold tracking-[0.1em] text-white"
          href="#top"
        >
          <img
            src="/ZENIUM_light_logo.png"
            alt="Zenium"
            className="h-9 w-auto block max-sm:h-7"
          />
        </a>
        <span>ENERGY INTELLIGENCE, BUILT FOR SCALE.</span>
      </footer>
    </main>
    </div>
  );
}
