import Link from "next/link";
import { FiFileText } from "react-icons/fi";

export default function Header() {
    return (
        <header className="relative w-full flex items-center justify-between py-6 px-10 text-off-white font-bold">
            {/* Sol taraf: Logo */}
            <div className="flex items-center gap-2">
                <FiFileText size={22} className="text-off-white" />
                <span className="font-bold text-base tracking-tight">Docsy</span>
            </div>

            {/* Ortadaki nav */}
            <nav className="absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-5 bg-[#CBF83E]/50 px-6 py-1.5 rounded-full shadow text-sm font-bold">
                    <Link href="#features" className="hover:underline">Features</Link>
                    <Link href="#pricing" className="hover:underline">Pricing</Link>
                    <Link href="#about" className="hover:underline">About</Link>
                </div>
            </nav>

            {/* Sağdaki butonlar */}
            <div className="flex items-center gap-1">
                <Link href="#login" className="text-sm text-off-white hover:underline bg-[#CBF83E]/50 px-4 py-1.5 rounded-lg">Login</Link>
                <Link href="#signin" className="text-sm text-off-white hover:underline bg-[#CBF83E]/50 px-4 py-1.5 rounded-lg">Sign In</Link>
                <Link
                    href="#get-started"
                    className="bg-[#CBF83E] text-[#103A2F] font-bold px-4 py-1.5 rounded-lg shadow text-sm hover:brightness-90 transition"
                >
                    Get Started
                </Link>
            </div>
        </header>
    );
}
