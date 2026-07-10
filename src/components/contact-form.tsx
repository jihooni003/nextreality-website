"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";

const endpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mdarqzqz";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unconfigured">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    if (endpoint.includes("your-form-id")) {
      setStatus("unconfigured");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <MotionReveal delay={0.08}>
      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/82">이름</span>
            <input
              required
              name="name"
              className="rounded-[8px] border border-white/15 bg-white/7 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-indigo-300"
              placeholder="홍길동"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/82">이메일</span>
            <input
              required
              type="email"
              name="email"
              className="rounded-[8px] border border-white/15 bg-white/7 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-indigo-300"
              placeholder="hello@example.com"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/82">연락처</span>
            <input
              required
              name="phone"
              className="rounded-[8px] border border-white/15 bg-white/7 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-indigo-300"
              placeholder="010-1234-5678"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/82">문의 유형</span>
            <select
              required
              name="type"
              className="rounded-[8px] border border-white/15 bg-[#0b1736] px-4 py-3 text-white outline-none transition focus:border-indigo-300"
              defaultValue=""
            >
              <option value="" disabled>
                문의 유형을 선택하세요
              </option>
              <option>AI 웹 & 앱 개발</option>
              <option>AI 에이전트 개발</option>
              <option>XR 콘텐츠 개발</option>
              <option>인터랙티브 콘텐츠</option>
              <option>3D 시뮬레이션</option>
            </select>
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/82">문의 내용</span>
          <textarea
            required
            name="message"
            rows={6}
            minLength={10}
            className="resize-none rounded-[8px] border border-white/15 bg-white/7 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-indigo-300"
            placeholder="프로젝트의 목표, 일정, 필요한 기능을 알려주세요."
          />
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-white/70">
          <input
            required
            type="checkbox"
            name="privacy"
            className="mt-1 h-4 w-4 accent-indigo-500"
          />
          개인정보 수집 및 이용에 동의합니다.
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[linear-gradient(135deg,#2563eb,#7c3aed)] px-5 py-4 font-bold text-white shadow-xl shadow-indigo-500/25 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "전송 중..." : "문의하기"}
          <Send size={18} />
        </button>
        {status === "success" ? (
          <p className="flex items-center gap-2 rounded-[8px] border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-100">
            <CheckCircle2 size={18} />
            문의가 접수되었습니다. 빠르게 연락드리겠습니다.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-[8px] border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm font-semibold text-rose-100">
            전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
        ) : null}
        {status === "unconfigured" ? (
          <p className="rounded-[8px] border border-amber-300/30 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-amber-100">
            문의 전송 설정이 아직 연결되지 않았습니다. Formspree 엔드포인트를 설정해주세요.
          </p>
        ) : null}
      </form>
    </MotionReveal>
  );
}
