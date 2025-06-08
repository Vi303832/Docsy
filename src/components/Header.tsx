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

            {/* Logo Section */}
            <div className="flex items-center gap-4 relative z-10 group">
                <div className="relative p-2.5 bg-gradient-to-br from-[#C8F169] to-[#B8E553] rounded-xl shadow-lg shadow-[#C8F169]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#C8F169]/30">
                    {/* Decorative corner elements */}
                    <svg className="absolute -top-1 -right-1 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M16 0 L16 16 L0 0 Z" fill="#043F2E" opacity="0.2" />
                    </svg>
                    <svg className="absolute -bottom-1 -left-1 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M0 16 L0 0 L16 16 Z" fill="#043F2E" opacity="0.2" />
                    </svg>
                    <FiFileText size={20} className="text-[#043F2E] relative z-10" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#C8F169] to-[#B8E553] bg-clip-text text-transparent">
                        Docsy
                    </span>
                    <span className="text-xs text-emerald-200/80 font-medium tracking-wide">
                        Legal Intelligence
                    </span>
                </div>
            </div>

            {/* Center Navigation */}
            <nav className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-4 bg-gradient-to-r from-lime-100/80 to-lime-200/80 backdrop-blur-sm px-8 py-2.5 rounded-full shadow-lg border border-lime-200/50 text-sm font-medium relative group hover:border-lime-300/60 transition-all duration-300">
                    {/* Minimal corner accents */}
                    <svg className="absolute top-0 left-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M0 0 L12 0 L0 12 Z" fill="#14532d" opacity="0.15" />
                    </svg>
                    <svg className="absolute bottom-0 right-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M12 12 L0 12 L12 0 Z" fill="#14532d" opacity="0.15" />
                    </svg>

                    <Link
                        href="#features"
                        className="relative px-2 py-1 text-lime-800/90 hover:text-lime-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-lime-500 hover:after:w-full after:transition-all after:duration-300 hover:font-semibold"
                    >
                        Features
                    </Link>
                    <Link
                        href="#pricing"
                        className="relative px-2 py-1 text-lime-800/90 hover:text-lime-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-lime-500 hover:after:w-full after:transition-all after:duration-300 hover:font-semibold"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#about"
                        className="relative px-2 py-1 text-lime-800/90 hover:text-lime-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-lime-500 hover:after:w-full after:transition-all after:duration-300 hover:font-semibold"
                    >
                        About
                    </Link>

                    {/* Divider and Search Icon */}
                    <div className="flex items-center">
                        <div className="h-6 w-[2px] bg-lime-800/50 mx-2"></div>
                        <button className="p-1.5 rounded-full hover:bg-lime-300/40 transition-colors duration-200 group">
                            <svg
                                className="w-4 h-4 text-lime-800/90 group-hover:text-lime-900 transition-colors duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sağdaki butonlar */}
            <div className="flex items-center gap-4 relative z-10">
                <Link
                    href="#login"
                    className="text-[#C8F169] hover:text-white font-medium transition-colors duration-200"
                >
                    Log in
                </Link>

                <Link
                    href="#signup"
                    className="text-[#C8F169] hover:text-white font-medium transition-colors duration-200"
                >
                    Sign up
                </Link>

                <Link
                    href="#demo"
                    className="bg-white text-[#043F2E] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#C8F169] hover:text-[#043F2E] transition-all duration-200 hover:shadow-lg shadow-sm"
                >
                    Book a demo
                </Link>
            </div>
        </header>
    );
}
