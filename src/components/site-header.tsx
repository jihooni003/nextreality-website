"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "서비스", href: "#services" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "개발 프로세스", href: "#process" },
  { label: "기술", href: "#technologies" },
  { label: "회사 소개", href: "#why" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#hero" onClick={close} className="flex items-center gap-3" aria-label="NextReality home">
          <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white p-1.5 shadow-lg shadow-slate-900/10 ring-1 ring-slate-200">
            <Image
              src="/nextreality-logo.png"
              alt=""
              width={36}
              height={30}
              priority
              className="h-auto w-full object-contain"
            />
          </span>
          <span className="text-xl font-extrabold tracking-normal text-slate-950">NextReality</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-bold text-slate-800 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-indigo-600">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-[8px] bg-[linear-gradient(135deg,#2563eb,#7c3aed)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-indigo-500/35 lg:inline-flex"
        >
          프로젝트 문의하기
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-slate-200 text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-[8px] px-3 py-3 text-base font-bold text-slate-800 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 rounded-[8px] bg-indigo-600 px-4 py-3 text-center font-bold text-white"
            >
              프로젝트 문의하기
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
