import React from 'react'
import Content2 from './Content2'

function Content() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#043F2E] from-0%  via-[#1a5d1e] via-70% to-[#043F2E] to-100% text-white relative overflow-hidden pt-20">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-32 w-4 h-4 bg-[#C8F169] rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-44 right-40 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>

            {/* Eco/Leaf icon in top right */}
            <div className="absolute top-20 right-20">
                <svg className="w-8 h-8 text-[#C8F169]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 7,18C8,17 20,16 20,16" />
                </svg>
            </div>

            <div className="container mx-auto px-6 pt-10 pb-20 flex flex-col items-center justify-center text-center">
                {/* Main Hero Section */}
                <div className="max-w-6xl mb-20">
                    {/* Decorative lines as in the photo */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-1 bg-[#C8F169] rounded-full"></div>
                            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                            <div className="w-6 h-1 bg-green-400 rounded-full"></div>
                            <div className="w-4 h-1 bg-[#C8F169] rounded-full"></div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 text-center">
                        Stop the complex legal work,<br />
                        start the smart legal work.
                    </h1>

                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#EEF2E3]">
                            Connect legal workflows
                        </h2>
                        <p className="text-lg text-[#C8F169] max-w-3xl mx-auto">
                            Introduce AI-powered contract management and<br />
                            seamless collaboration across legal teams.
                        </p>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - AI Contract Analysis */}
                    <div className="bg-gradient-to-br from-[#FFE066] via-[#C8F169] to-[#B8E553] rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#C8F169]/30 transition-all duration-500">
                        {/* Gradient overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#043F2E]/5 via-transparent to-[#1a5d1e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-[#043F2E] group-hover:text-[#022A1F] transition-colors duration-300">
                                    AI-Powered Contract Analysis & Review
                                </h3>
                                <div className="bg-[#043F2E]/20 rounded-full p-2 group-hover:bg-[#043F2E]/30 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-[#043F2E]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Contract Document illustration */}
                            <div className="bg-[#043F2E]/15 rounded-2xl p-4 mb-4 group-hover:bg-[#043F2E]/20 transition-all duration-300">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-[#1a5d1e] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                        <div className="h-2 bg-[#043F2E]/60 rounded flex-1"></div>
                                    </div>
                                    <div className="h-1 bg-[#043F2E]/40 rounded w-4/5"></div>
                                    <div className="h-1 bg-[#043F2E]/40 rounded w-3/5"></div>
                                    <div className="flex items-center space-x-2 mt-3">
                                        <div className="w-3 h-3 bg-[#B8E553] rounded-full group-hover:scale-110 transition-transform duration-300 delay-75"></div>
                                        <div className="h-2 bg-[#043F2E]/60 rounded flex-1"></div>
                                    </div>
                                    <div className="h-1 bg-[#043F2E]/40 rounded w-2/3"></div>
                                    <div className="h-1 bg-[#043F2E]/40 rounded w-5/6 mt-3"></div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <div className="w-3 h-3 bg-[#FF6B6B] rounded-full group-hover:scale-110 transition-transform duration-300 delay-150"></div>
                                        <div className="h-2 bg-[#043F2E]/60 rounded w-3/4"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional features text */}
                            <div className="text-sm text-[#043F2E]/80 space-y-1 group-hover:text-[#043F2E] transition-colors duration-300">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#1a5d1e] rounded-full"></div>
                                    <span>Risk Detection</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#B8E553] rounded-full"></div>
                                    <span>Clause Suggestions</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full"></div>
                                    <span>Compliance Check</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Smart Document Search */}
                    <div className="bg-gradient-to-br from-lime-300 via-emerald-300 to-cyan-300 rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#4ECDC4]/30 transition-all duration-500">
                        {/* Gradient overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#043F2E]/5 via-transparent to-[#1a5d1e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                                    Smart Legal Document Search & Discovery
                                </h3>
                                <div className="bg-slate-800/20 rounded-full p-2 group-hover:bg-slate-800/30 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Search interface mockup */}
                            <div className="bg-white rounded-xl p-4 mb-4 group-hover:bg-slate-50 transition-all duration-300 group-hover:shadow-lg">
                                <div className="flex items-center space-x-2 mb-3">
                                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex-1 text-slate-700 text-sm">Search contracts, clauses, terms...</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-slate-800 px-3 py-1 rounded text-slate-100 text-sm inline-block font-semibold group-hover:bg-slate-900 transition-colors duration-300">
                                        NDA Agreement
                                    </div>
                                    <div className="bg-slate-100 px-3 py-1 rounded text-slate-700 text-sm inline-block group-hover:bg-slate-200 group-hover:text-slate-900 transition-colors duration-300">
                                        Employment Contract
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs mt-2">Found 847 legal documents</p>
                            </div>

                            {/* Search filters */}
                            <div className="space-y-2 mt-4">
                                <div className="text-sm font-semibold text-slate-800 mb-2">Quick Filters:</div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-slate-800/20 text-slate-800 px-2 py-1 rounded-full text-xs group-hover:bg-slate-800/30 transition-colors duration-300">Contracts</span>
                                    <span className="bg-slate-800/20 text-slate-800 px-2 py-1 rounded-full text-xs group-hover:bg-slate-800/30 transition-colors duration-300">NDAs</span>
                                    <span className="bg-slate-800/20 text-slate-800 px-2 py-1 rounded-full text-xs group-hover:bg-slate-800/30 transition-colors duration-300">Policies</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-slate-800/20 text-slate-800 px-2 py-1 rounded-full text-xs group-hover:bg-slate-800/30 transition-colors duration-300">Templates</span>
                                    <span className="bg-slate-800/20 text-slate-800 px-2 py-1 rounded-full text-xs group-hover:bg-slate-800/30 transition-colors duration-300">Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Legal search icon */}
                        <div className="absolute bottom-4 right-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-slate-800 opacity-30 group-hover:opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2V3a2 2 0 012 2v6a4 4 0 01-4 4H6a4 4 0 01-4-4V5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 3 - Real-time Legal Collaboration */}
                    <div className="bg-gradient-to-br from-[#043F2E] via-[#1a5d1e] to-[#4ECDC4] rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#C8F169]/30 transition-all duration-500">
                        {/* Gradient overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C8F169]/5 via-transparent to-[#4ECDC4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold font-serif tracking-wide text-white group-hover:text-[#C8F169] transition-colors duration-300">
                                    Real-time Legal Team Collaboration & Review
                                </h3>
                                <div className="bg-[#C8F169]/20 rounded-full p-2 group-hover:bg-[#C8F169]/30 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-[#C8F169]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Collaboration interface mockup */}
                            <div className="bg-white/95 rounded-xl p-4 space-y-3 group-hover:bg-white transition-all duration-300 group-hover:shadow-lg">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs">Comments  Reviews  Approvals  Legal Team  Clients</span>
                                </div>

                                <div className="space-y-3 text-xs">
                                    <div className="flex items-start space-x-2">
                                        <div className="w-6 h-6 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform duration-300">LT</div>
                                        <div className="flex-1">
                                            <span className="text-gray-700 font-semibold">Legal Team</span>
                                            <span className="text-gray-500 ml-2">2 min ago</span>
                                            <p className="text-gray-700 mt-1">Clause 3.2 needs revision. The termination period should be 30 days instead of 60.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <div className="w-6 h-6 bg-[#1a5d1e] rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform duration-300 delay-75">SM</div>
                                        <div className="flex-1">
                                            <span className="text-gray-700 font-semibold">Sarah Miller</span>
                                            <span className="text-gray-500 ml-2">5 min ago</span>
                                            <p className="text-gray-700 mt-1">✅ Approved payment terms in Section 5. Ready for final review.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <div className="w-6 h-6 bg-[#C8F169] rounded-full flex items-center justify-center text-[#043F2E] text-xs font-bold group-hover:scale-110 transition-transform duration-300 delay-150">CL</div>
                                        <div className="flex-1">
                                            <span className="text-gray-700 font-semibold">Client Legal</span>
                                            <span className="text-gray-500 ml-2">12 min ago</span>
                                            <p className="text-gray-700 mt-1">Can we add an intellectual property clause to cover software development?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collaboration icon */}
                        <div className="absolute bottom-4 right-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-[#C8F169] opacity-60 group-hover:opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Content2 />
            </div>

        </section>
    )
}

export default Content