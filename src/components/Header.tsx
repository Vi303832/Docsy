import Link from "next/link";
import { FiFileText } from "react-icons/fi";

export default function Header() {
    return (
        <header className="relative w-full flex items-center justify-between py-6 px-10 text-slate-800 font-bold bg-transparent">
            {/* Subtle Decorative Elements for Transparent Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 100" fill="none">
                {/* Minimal decorative connecting lines */}
                <path
                    d="M100 40 Q300 35 500 45 Q700 55 900 50"
                    stroke="url(#connectGrad)"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="3,6"
                />

                {/* Subtle floating elements */}
                <circle cx="250" cy="30" r="1.5" fill="#84cc16" opacity="0.6" />
                <circle cx="750" cy="45" r="2" fill="#10b981" opacity="0.5" />
                <circle cx="1150" cy="35" r="1.5" fill="#06b6d4" opacity="0.6" />

                {/* Gradient definition for connections */}
                <defs>
                    <linearGradient id="connectGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#84cc16" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Sol taraf: Logo */}
            <div className="flex items-center gap-3 relative z-10">
                <div className="relative p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
                    {/* Logo corner triangles */}
                    <svg className="absolute top-0 right-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M12 0 L12 12 L0 0 Z" fill="#065f46" opacity="0.4" />
                    </svg>
                    <FiFileText size={18} className="text-white relative z-10" />
                </div>
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Docsy
                </span>
            </div>

            {/* Ortadaki nav */}
            <nav className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-6 bg-gradient-to-r from-lime-300/90 to-emerald-300/90 backdrop-blur-md px-8 py-3 rounded-full shadow-xl border border-emerald-400/30 text-sm font-semibold relative">
                    {/* Nav corner triangles */}
                    <svg className="absolute top-1 left-1 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M0 0 L16 0 L0 16 Z" fill="#14532d" opacity="0.3" />
                    </svg>
                    <svg className="absolute bottom-1 right-1 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M16 16 L0 16 L16 0 Z" fill="#14532d" opacity="0.3" />
                    </svg>

                    <Link href="#features" className="hover:text-emerald-700 transition-colors duration-200 hover:scale-105 transform">
                        Features
                    </Link>
                    <Link href="#pricing" className="hover:text-emerald-700 transition-colors duration-200 hover:scale-105 transform">
                        Pricing
                    </Link>
                    <Link href="#about" className="hover:text-emerald-700 transition-colors duration-200 hover:scale-105 transform">
                        About
                    </Link>
                </div>
            </nav>

            {/* Sağdaki butonlar */}
            <div className="flex items-center gap-3 relative z-10">
                <Link
                    href="#login"
                    className="text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-gradient-to-r from-lime-200/80 to-emerald-200/80 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-emerald-300/60 hover:border-emerald-400 transition-all duration-200 hover:shadow-lg hover:bg-gradient-to-r hover:from-lime-300/90 hover:to-emerald-300/90 relative"
                >
                    <svg className="absolute top-0 right-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M12 0 L12 12 L0 0 Z" fill="#059669" opacity="0.3" />
                    </svg>
                    Login
                </Link>

                <Link
                    href="#signin"
                    className="text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-gradient-to-r from-emerald-200/80 to-cyan-200/80 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-cyan-300/60 hover:border-cyan-400 transition-all duration-200 hover:shadow-lg hover:bg-gradient-to-r hover:from-emerald-300/90 hover:to-cyan-300/90 relative"
                >
                    <svg className="absolute bottom-0 left-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M0 12 L12 12 L0 0 Z" fill="#0891b2" opacity="0.3" />
                    </svg>
                    Sign In
                </Link>

                <Link
                    href="#get-started"
                    className="bg-gradient-to-r from-amber-300 via-lime-300 to-emerald-300 text-slate-800 font-bold px-6 py-2.5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-all duration-200 hover:scale-105 transform relative overflow-hidden"
                >
                    {/* CTA button corner triangles */}
                    <svg className="absolute top-0 right-0 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M16 0 L16 16 L0 0 Z" fill="#065f46" opacity="0.4" />
                    </svg>
                    <svg className="absolute bottom-0 left-0 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M0 16 L16 16 L0 0 Z" fill="#065f46" opacity="0.4" />
                    </svg>

                    {/* Decorative shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                    <span className="relative z-10">Get Started</span>
                </Link>
            </div>
        </header>
    );
}
