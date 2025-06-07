import React from 'react'

function Section() {
    return (
        <section className="pt-20 pb-5 px-8 bg-transparent min-h-screen relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col">
                    {/* Top Row */}
                    <div className="flex px-5">
                        {/* Top Left - 2/5 width */}
                        <div className="w-2/5 bg-slate-50 rounded-3xl shadow-xl relative p-8 rounded-b-none">

                            <h2 className="text-4xl font-bold text-teal-800 mb-6 leading-tight">
                                Made for your<br />legal team
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                In Docsy, AI-powered contract drafting, review tools and
                                collaboration features are all connected to help you
                                deliver legal documents faster than ever. No rigid legal
                                workflow should stand in the way of the speed your
                                business needs, big and small.
                            </p>
                        </div>

                        <div className="w-5"></div>

                        {/* Top Right - 3/5 width */}
                        <div className="w-3/5 bg-lime-300 rounded-3xl shadow-xl relative p-8 mb-5 rounded-br-none overflow-hidden">
                            {/* Decorative elements */}
                            <svg className="absolute top-6 left-6 w-10 h-10 text-green-500 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5,21L9,13L13,17L19,7V21H5M5,19H7V17H5V19M9,19H11V15H9V19M13,19H15V16H13V19M17,19H19V9H17V19Z" />
                            </svg>
                            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-200/20 to-transparent rounded-br-full"></div>

                            {/* Contract Analytics Dashboard */}
                            <div className="flex justify-between items-end mb-4">
                                <div className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                    Contract Analytics
                                </div>
                                <div className="bg-lime-500 text-slate-800 px-6 py-2 rounded-lg text-sm font-bold">
                                    Export
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {/* Chart */}
                                <div className="bg-slate-800 p-4 rounded-2xl flex-1">
                                    <div className="text-slate-300 text-xs mb-2">Contract Volume by Month</div>
                                    <div className="flex items-end gap-1 h-28 mb-4">
                                        <div className="bg-emerald-400 w-3 h-12 rounded-t"></div>
                                        <div className="bg-emerald-500 w-3 h-20 rounded-t"></div>
                                        <div className="bg-emerald-600 w-3 h-24 rounded-t"></div>
                                        <div className="bg-emerald-500 w-3 h-16 rounded-t"></div>
                                        <div className="bg-emerald-400 w-3 h-22 rounded-t"></div>
                                        <div className="bg-emerald-600 w-3 h-28 rounded-t"></div>
                                        <div className="bg-emerald-500 w-3 h-18 rounded-t"></div>
                                        <div className="bg-emerald-400 w-3 h-14 rounded-t"></div>
                                        <div className="bg-emerald-500 w-3 h-20 rounded-t"></div>
                                        <div className="bg-emerald-600 w-3 h-16 rounded-t"></div>
                                    </div>
                                    {/* Status indicators */}
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                                        <div className="text-slate-400 text-xs">Executed</div>
                                        <div className="bg-yellow-500 w-2 h-2 rounded-full ml-2"></div>
                                        <div className="text-slate-400 text-xs">In Review</div>
                                    </div>
                                </div>

                                {/* Side panels */}
                                <div className="w-32 space-y-3">
                                    <div className="bg-slate-800 p-3 rounded-lg">
                                        <div className="text-slate-300 text-xs mb-2">Status</div>
                                        <div className="bg-emerald-400 h-3 rounded w-full mb-1"></div>
                                        <div className="bg-yellow-400 h-2 rounded w-3/4"></div>
                                    </div>
                                    <div className="bg-slate-800 p-3 rounded-lg">
                                        <div className="text-slate-300 text-xs mb-2">Contract Types</div>
                                        <div className="bg-lime-400 h-2 rounded w-4/5 mb-1"></div>
                                        <div className="bg-lime-300 h-2 rounded w-3/5 mb-1"></div>
                                        <div className="bg-lime-200 h-2 rounded w-2/5"></div>
                                    </div>
                                    <div className="bg-slate-800 p-3 rounded-lg">
                                        <div className="text-slate-300 text-xs mb-1">Teams</div>
                                        <div className="flex gap-1 mb-2">
                                            <div className="bg-blue-400 w-4 h-4 rounded-full text-xs text-white flex items-center justify-center">L</div>
                                            <div className="bg-purple-400 w-4 h-4 rounded-full text-xs text-white flex items-center justify-center">S</div>
                                            <div className="bg-orange-400 w-4 h-4 rounded-full text-xs text-white flex items-center justify-center">F</div>
                                        </div>
                                        <div className="bg-slate-600 text-white text-xs px-2 py-1 rounded">3 Active</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex px-5 items-start justify-center  ">
                        {/* Bottom Left - 3/5 width */}
                        <div className="w-3/5 bg-slate-50 rounded-3xl shadow-xl relative p-8 mr-5 rounded-tl-none overflow-hidden flex items-center justify-center pb-20 ">

                            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-slate-200/20 to-transparent rounded-br-full"></div>

                            {/* Contract Editor Mockup */}
                            <div className="bg-slate-800 rounded-2xl p-4 shadow-lg w-full ">
                                <div className="bg-slate-700 text-white px-4 py-2 rounded-t-lg text-sm font-semibold flex justify-between items-center">
                                    <span>Contract Editor</span>
                                    <div className="flex gap-2">
                                        <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-teal-600 text-xs">AI Powered</span>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-b-lg">
                                    <div className="flex">
                                        <div className="w-8 text-slate-400 text-sm font-mono pr-4">
                                            <div>1</div>
                                            <div>2</div>
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex gap-2">
                                                <div className="h-3 bg-emerald-300 rounded w-16"></div>
                                                <div className="h-3 bg-slate-300 rounded w-24"></div>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded w-full"></div>
                                            <div className="flex gap-2">
                                                <div className="h-3 bg-yellow-300 rounded w-12"></div>
                                                <div className="h-3 bg-slate-300 rounded w-20"></div>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                                            <div className="h-2 bg-slate-200 rounded w-3/5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-700 rounded-b-lg p-3 flex gap-2">
                                    <div className="bg-emerald-500 text-white px-3 py-1 rounded text-sm font-medium">
                                        Review
                                    </div>
                                    <div className="bg-lime-500 text-slate-800 px-3 py-1 rounded text-sm font-medium">
                                        AI Check
                                    </div>
                                    <div className="bg-slate-600 text-white px-3 py-1 rounded text-sm">
                                        Template
                                    </div>
                                    <div className="bg-slate-600 text-white px-3 py-1 rounded text-sm">
                                        Export
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Bottom Right - 2/5 width */}
                        <div className="w-2/5 bg-lime-300 rounded-3xl shadow-xl relative p-8 bottom-5 rounded-t-none overflow-hidden flex flex-col shrink ">
                            {/* Decorative elements */}
                            <svg className="absolute bottom-6 right-6 w-10 h-10 text-green-600 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4ZM8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6ZM8 13C11.3137 13 14 15.6863 14 19V21H2V19C2 15.6863 4.68629 13 8 13ZM16 13C18.2091 13 20 14.7909 20 17V21H15V19C15 16.7909 16.7909 15 19 15H16Z" />
                            </svg>
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-200/25 to-transparent rounded-bl-full"></div>

                            <h2 className="text-4xl font-bold text-teal-800 mb-6 leading-tight relative z-10">
                                And the teams<br />you work with
                            </h2>
                            <p className="text-teal-700 text-lg leading-relaxed relative z-10">
                                Deliver tools for easy, trusted collaboration, in
                                real-time. Because everyone's contract workflow
                                tools can live in one place, Docsy becomes a
                                central hub full of easy-to-understand legal docs,
                                managed by the legal team, without long
                                implementation times or tedious
                                maintenance.
                            </p>

                            {/* Team icons */}
                            <div className="flex gap-3 mt-6">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                    <span className="text-green-800 text-sm font-medium">Legal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-green-800 text-sm font-medium">Sales</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-green-800 text-sm font-medium">Finance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section