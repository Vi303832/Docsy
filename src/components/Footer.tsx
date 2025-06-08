import React from 'react'
import { FiFileText, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-[#043F2E] text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 right-20 w-3 h-3 bg-[#C8F169] rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-32 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#C8F169] rounded-full animate-pulse delay-200"></div>

            <div className="container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Company Info */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="relative p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
                                <svg className="absolute top-0 right-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                                    <path d="M12 0 L12 12 L0 0 Z" fill="#065f46" opacity="0.4" />
                                </svg>
                                <FiFileText size={18} className="text-white relative z-10" />
                            </div>
                            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#C8F169] to-emerald-300 bg-clip-text text-transparent">
                                Docsy
                            </span>
                        </div>

                        <p className="text-[#EEF2E3] leading-relaxed">
                            AI-powered legal document management and analysis platform. Simplify complex legal processes, increase efficiency with smart solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-[#C8F169]">
                                <FiMail className="w-4 h-4" />
                                <span className="text-sm">info@docsy.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#C8F169]">
                                <FiPhone className="w-4 h-4" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#C8F169]">
                                <FiMapPin className="w-4 h-4" />
                                <span className="text-sm">New York, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-[#C8F169] font-semibold text-lg mb-6 relative">
                            Products
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#C8F169] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">AI Contract Analysis</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Smart Document Search</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Legal Workflows</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Team Management</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Compliance Tracking</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Risk Analysis</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-[#C8F169] font-semibold text-lg mb-6 relative">
                            Solutions
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#C8F169] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Law Firms</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Corporate Companies</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Startups</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Freelance Lawyers</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Law Schools</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Government Agencies</a></li>
                        </ul>
                    </div>

                    {/* Resources & Support */}
                    <div>
                        <h3 className="text-[#C8F169] font-semibold text-lg mb-6 relative">
                            Resources & Support
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#C8F169] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Documentation</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">API Guide</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Video Tutorials</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Blog</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Community Forum</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Support Center</a></li>
                            <li><a href="#" className="text-[#EEF2E3] hover:text-[#C8F169] transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-[#2A6F2B]/30 to-[#043F2E]/50 rounded-2xl p-8 mb-12 relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-24 h-24 bg-[#C8F169]/10 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#C8F169]/5 rounded-full"></div>

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-[#C8F169] mb-4">
                            Don't Miss Legal Tech Updates
                        </h3>
                        <p className="text-[#EEF2E3] mb-6">
                            Subscribe to our newsletter for the latest AI developments, legal tech trends, and platform updates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"

                                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-[#C8F169]/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8F169] focus:border-transparent"
                            />
                            <button className="bg-gradient-to-r from-[#C8F169] to-[#2A6F2B] text-[#043F2E] font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#C8F169]/30 transition-all duration-200 hover:scale-105">
                                Abone Ol
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#2A6F2B]/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Copyright & Legal */}
                        <div className="text-[#EEF2E3]/80 text-sm space-y-2 md:space-y-0">
                            <p>&copy; 2025 Docsy. Tüm hakları saklıdır.</p>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <a href="#" className="hover:text-[#C8F169] transition-colors">Gizlilik Politikası</a>
                                <a href="#" className="hover:text-[#C8F169] transition-colors">Kullanım Şartları</a>
                                <a href="#" className="hover:text-[#C8F169] transition-colors">KVKK</a>
                                <a href="#" className="hover:text-[#C8F169] transition-colors">Çerez Politikası</a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center gap-4">
                            <span className="text-[#EEF2E3] text-sm mr-2">Bizi takip edin:</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-[#C8F169]/20 rounded-full flex items-center justify-center hover:bg-[#C8F169]/30 transition-all duration-200 hover:scale-110">
                                    <svg className="w-5 h-5 text-[#C8F169]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#C8F169]/20 rounded-full flex items-center justify-center hover:bg-[#C8F169]/30 transition-all duration-200 hover:scale-110">
                                    <svg className="w-5 h-5 text-[#C8F169]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#C8F169]/20 rounded-full flex items-center justify-center hover:bg-[#C8F169]/30 transition-all duration-200 hover:scale-110">
                                    <svg className="w-5 h-5 text-[#C8F169]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom wave */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8F169] via-[#2A6F2B] to-[#C8F169]"></div>
        </footer>
    )
}

export default Footer