import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been removed.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="relative text-center max-w-2xl mx-auto">
          {/* Ambient glows */}
          <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-red-600/10 blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />

          {/* 404 number */}
          <p
            className="relative z-10 font-oswald font-bold leading-none mb-6 select-none"
            style={{
              fontSize: "clamp(7rem, 22vw, 14rem)",
              background: "linear-gradient(135deg, #f87171 0%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </p>

          {/* Title */}
          <h1 className="relative z-10 font-oswald text-3xl md:text-5xl font-bold uppercase tracking-tight mb-5">
            Page Not Found
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-white/15 mx-auto mb-6" />

          {/* Description */}
          <p className="relative z-10 text-slate-400 text-base md:text-lg leading-relaxed mb-3">
            The page you are looking for does not exist or has been removed.
          </p>

          {/* Talent hint */}
          <p className="relative z-10 text-slate-500 text-sm mb-12">
            Looking for a talent?{" "}
            <Link
              href="/talents"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
            >
              Visit our Talents page.
            </Link>
          </p>

          {/* Action buttons */}
          <div className="relative z-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-oswald font-semibold uppercase tracking-wide text-sm text-white border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              ← Back to Home
            </Link>
            <Link
              href="/talents"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-oswald font-semibold uppercase tracking-wide text-sm text-white border border-blue-500/40 hover:bg-blue-600/20 transition-all duration-200"
              style={{ background: "rgba(59,130,246,0.12)" }}
            >
              View Talents ›
            </Link>
          </div>

          {/* Brand watermark */}
          <p className="relative z-10 mt-16 font-oswald text-[10px] uppercase tracking-[0.4em] text-white/15">
            VSTAR PROJECT
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
