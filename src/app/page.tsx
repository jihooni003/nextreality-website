import Image from "next/image";
import {
  ArrowRight,
  Binary,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Eye,
  Layers3,
  Mail,
  PenTool,
  Rocket,
  ScanSearch,
  Smartphone,
  TestTube2,
} from "lucide-react";
import {
  FaGlasses,
  FaVrCardboard,
} from "react-icons/fa6";
import {
  SiBlender,
  SiFlutter,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSwift,
  SiUnity,
} from "react-icons/si";
import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteHeader } from "@/components/site-header";

const heroStats = [
  { label: "AI Solution", value: "생성형 AI / AI 에이전트", icon: BrainCircuit },
  { label: "Web & App", value: "웹앱 개발 / SaaS", icon: Smartphone },
  { label: "XR Contents", value: "VR / AR / MR", icon: Eye },
  { label: "Interactive", value: "체험형 인터랙션", icon: Cpu },
];

const services = [
  {
    title: "AI 웹 & 앱 개발",
    description: "생성형 AI를 활용한 웹서비스, 모바일 앱, SaaS 플랫폼을 기획부터 개발까지 제공합니다.",
    icon: Binary,
  },
  {
    title: "AI 에이전트 개발",
    description: "업무 자동화, 고객 응대, 문서 처리, 데이터 분석을 위한 AI 에이전트를 구축합니다.",
    icon: Bot,
  },
  {
    title: "XR 콘텐츠 개발",
    description: "Meta Quest 3, Apple Vision Pro용 VR·AR·MR 기반 교육, 체험, 전시, 산업훈련 콘텐츠를 개발합니다.",
    icon: Eye,
  },
  {
    title: "AI & AR 글래스 개발",
    description: "Ray-Ban Meta AI glasses와 Xreal AURA AR글래스를 위한 AI 연동 콘텐츠를 개발합니다.",
    icon: FaGlasses,
  },
  {
    title: "인터랙티브 콘텐츠",
    description: "카메라, 센서, 컴퓨터 비전 기술을 활용한 체험형 콘텐츠를 제작합니다.",
    icon: ScanSearch,
  },
  {
    title: "3D 시뮬레이션",
    description: "Unity 기반 실시간 3D 시뮬레이션과 디지털 트윈 솔루션을 개발합니다.",
    icon: Boxes,
  },
];

const portfolio = [
  {
    title: "SHUROOP",
    description: "발달장애 아동을 위한 AI·XR 기반 생활훈련 콘텐츠",
    visual: "from-sky-300 via-indigo-300 to-violet-500",
    image: "/shuroop-project.png",
  },
  {
    title: "AI Business Solutions",
    description: "기업 맞춤형 AI 웹서비스와 업무 자동화 시스템",
    visual: "from-slate-950 via-indigo-900 to-blue-500",
    image: "/ai-business-solutions.png",
  },
  {
    title: "XR Experience",
    description: "교육, 전시, 산업 분야를 위한 실감형 XR 콘텐츠",
    visual: "from-cyan-300 via-blue-600 to-slate-950",
    image: "/xr-experience.png",
  },
];

const process = [
  { title: "기획", description: "요구사항 분석, 목표 설정, 기능 정의", icon: Layers3 },
  { title: "디자인", description: "와이어프레임, UI·UX 디자인, 프로토타입", icon: PenTool },
  { title: "개발", description: "프런트엔드, 백엔드, AI 및 XR 기능 개발", icon: Code2 },
  { title: "테스트", description: "기능, 반응형, 사용성, 성능 테스트", icon: TestTube2 },
  { title: "배포 및 운영", description: "서비스 배포, 유지보수, 기능 개선", icon: Rocket },
];

const reasons = [
  { title: "AI와 XR 통합 개발", icon: BrainCircuit },
  { title: "원스톱 개발", icon: Rocket },
  { title: "통합 솔루션 제공", icon: Layers3 },
  { title: "최신 기술 활용", icon: Cpu },
  { title: "사용자 중심 설계", icon: PenTool },
  { title: "다양한 산업 경험", icon: Boxes },
];

const technologies = [
  { name: "Unity", icon: SiUnity },
  { name: "C#", icon: null },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "SwiftUI", icon: SiSwift },
  { name: "Blender", icon: SiBlender },
  { name: "Python", icon: SiPython },
  { name: "VR", icon: FaVrCardboard },
  { name: "AR", icon: FaGlasses },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <SiteHeader />

      <section id="hero" className="soft-grid relative min-h-screen overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_24%,rgba(109,40,217,.18),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(37,99,235,.12),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-14 pt-10 md:px-8 lg:grid-cols-[.92fr_1.08fr] lg:pt-16">
          <MotionReveal>
            <div>
              <div className="mb-7 inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 ring-1 ring-indigo-100">
                AI · XR · Web · App Studio
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-normal text-slate-950 md:text-7xl">
                AI와 XR로 아이디어를 현실로 만듭니다.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-600 md:text-xl">
                넥스트리얼리티는 AI와 XR 기술을 기반으로 웹·앱 개발부터 AI 에이전트,
                실감형 콘텐츠까지 기업의 디지털 혁신을 함께 만드는 기술 파트너입니다.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-[8px] bg-[linear-gradient(135deg,#2563eb,#7c3aed)] px-6 py-4 font-bold text-white shadow-xl shadow-indigo-500/25 transition hover:-translate-y-0.5"
                >
                  프로젝트 문의하기
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-indigo-200 bg-white px-6 py-4 font-bold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300"
                >
                  포트폴리오 보기
                </a>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative mx-auto aspect-[1.12/1] w-full max-w-3xl lg:translate-x-4">
              <div className="absolute inset-8 rounded-full bg-indigo-300/25 blur-3xl" />
              <div className="absolute -right-4 top-10 h-16 w-16 rounded-full bg-violet-300/70 shadow-2xl shadow-violet-500/30" />
              <div className="absolute bottom-12 left-2 h-11 w-11 rounded-full bg-blue-200/80 shadow-2xl shadow-blue-400/30" />
              <Image
                src="/hero-ai-xr.png"
                alt="VR 헤드셋을 착용한 사용자가 AI 홀로그램 인터페이스와 상호작용하는 모습"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="relative z-10 rounded-[8px] object-cover object-center shadow-2xl shadow-indigo-500/16"
              />
            </div>
          </MotionReveal>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-3 px-5 pb-12 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          {heroStats.map((item) => (
            <div key={item.label} className="rounded-[8px] border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-indigo-50 text-indigo-600">
                  <item.icon size={22} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-400">{item.label}</div>
                  <div className="mt-1 text-sm font-bold text-slate-800">{item.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading kicker="Services" title="우리가 만드는 기술" description="AI와 XR 기술로 더 빠르고, 더 가치 있는 디지털 경험을 제공합니다." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.04}>
              <article className="group flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-7 text-center card-shadow transition hover:-translate-y-2 hover:border-indigo-200 hover:shadow-indigo-500/12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[8px] bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <service.icon size={30} />
                </div>
                <h3 className="mt-7 text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm font-medium leading-7 text-slate-600">{service.description}</p>
                <span className="mx-auto mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-100 text-indigo-600">
                  <ChevronRight size={17} />
                </span>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading align="left" kicker="Portfolio" title="대표 프로젝트" description="다양한 분야에서 AI와 XR 기술을 혁신적인 프로젝트로 수행했습니다." />
          <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-indigo-300 hover:text-indigo-700">
            모든 프로젝트 보기
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {portfolio.map((project, index) => (
            <MotionReveal key={project.title} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/12">
                <div className={`relative h-56 bg-gradient-to-br ${project.visual}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} 프로젝트 이미지`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(255,255,255,.42),transparent_24%),linear-gradient(120deg,transparent,rgba(255,255,255,.22))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-white/25 bg-white/16 p-4 text-white backdrop-blur">
                    <div className="text-sm font-bold uppercase text-white/70">NextReality Project</div>
                    <div className="mt-2 text-2xl font-black">{project.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
                  <p className="mt-3 min-h-14 text-sm font-medium leading-7 text-slate-600">{project.description}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-indigo-600">
                    자세히 보기
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section id="process" className="bg-slate-50 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Process" title="우리의 개발 프로세스" description="체계적인 프로세스로 기획부터 운영까지 함께합니다." />
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {process.map((step, index) => (
              <MotionReveal key={step.title} delay={index * 0.04}>
                <div className="relative text-center">
                  {index < process.length - 1 ? (
                    <div className="absolute left-[62%] top-8 hidden h-px w-[76%] bg-slate-300 md:block" />
                  ) : null}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-600 shadow-lg shadow-slate-900/5">
                    <step.icon size={25} />
                  </div>
                  <div className="mt-5 text-sm font-black text-indigo-600">0{index + 1}.</div>
                  <h3 className="mt-1 text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{step.description}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading kicker="Why NextReality" title="왜 NextReality인가?" description="전략, 디자인, 개발, 운영을 하나의 흐름으로 연결합니다." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {reasons.map((reason, index) => (
            <MotionReveal key={reason.title} delay={index * 0.035}>
              <div className="h-full rounded-[8px] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[8px] bg-indigo-50 text-indigo-600">
                  <reason.icon size={25} />
                </div>
                <h3 className="mt-5 text-base font-black text-slate-950">{reason.title}</h3>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section id="technologies" className="bg-[var(--navy)] px-5 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.25fr_.75fr] lg:items-center">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.28em] text-blue-300">Technologies</div>
            <h2 className="mt-3 text-3xl font-black">우리가 사용하는 주요 기술</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
            {technologies.map((tech) => (
              <div key={tech.name} className="grid justify-items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-white/8 text-blue-100 ring-1 ring-white/10 transition hover:bg-white/12 hover:text-white">
                  {tech.icon ? <tech.icon size={28} aria-hidden="true" /> : <span className="text-lg font-black">C#</span>}
                </div>
                <div className="max-w-24 text-xs font-bold leading-4 text-white/82">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#06102b] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(124,58,237,.36),transparent_34%),radial-gradient(circle_at_22%_78%,rgba(37,99,235,.24),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[.72fr_1fr_.68fr]">
          <MotionReveal>
            <div>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">함께 새로운 경험을 만들어 보세요.</h2>
              <p className="mt-6 max-w-md text-lg font-medium leading-8 text-white/70">
                AI 웹·앱 개발부터 XR 콘텐츠까지, NextReality가 함께합니다.
              </p>
              <div className="mt-8 grid gap-4 text-sm font-semibold text-white/78">
                <a className="flex items-center gap-3" href="mailto:official@nextreality.co.kr">
                  <Mail size={18} />
                  official@nextreality.co.kr
                </a>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} />
                  010-칠구칠구-칠구육칠
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} />
                  울산 남구
                </div>
              </div>
            </div>
          </MotionReveal>

          <ContactForm />

          <MotionReveal delay={0.14}>
            <div className="hidden h-full min-h-80 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-950/40 lg:flex">
              <div className="relative flex h-56 w-56 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-300/30" />
                <div className="absolute inset-8 rounded-full border border-violet-300/30" />
                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[8px] bg-white p-4 shadow-2xl shadow-blue-500/20">
                  <Image
                    src="/nextreality-logo.png"
                    alt="NextReality 로고"
                    width={108}
                    height={90}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#06102b] px-5 py-8 text-white/55 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium md:flex-row md:items-center md:justify-between">
          <p>© 2026 NextReality. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="transition hover:text-white">
              개인정보처리방침
            </a>
            <a href="#contact" className="transition hover:text-white">
              이용약관
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: {
  kicker: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <MotionReveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <div className="text-xs font-black uppercase tracking-[0.28em] text-indigo-600">{kicker}</div>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">{title}</h2>
        <p className="mt-4 text-base font-medium leading-7 text-slate-600">{description}</p>
      </div>
    </MotionReveal>
  );
}
