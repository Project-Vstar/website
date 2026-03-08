/* eslint-disable react/react-in-jsx-scope */
export const metadata = {
  title: "VStar Shop",
  description: "Coming soon!",
};

export default function Shop() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white overflow-hidden">

      {/* Background */}
      <div className="hero-gradient absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-[0.04]" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <img src="/vstar.png" alt="VSTAR Logo" className="w-24 h-24 mb-8 drop-shadow-[0_0_24px_rgba(59,130,246,0.45)]" />
        <h1
          className="font-oswald font-bold uppercase tracking-tight leading-none mb-3"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          <span style={{ color: "#60a5fa" }}>VStar</span>
          <span className="text-gray-300 ml-3 font-thin">Shop</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg tracking-widest uppercase font-light">
          Coming soon!
        </p>
      </div>

    </div>
  );
}
