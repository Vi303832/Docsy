import React from 'react'

function Content() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#043F2E] from-0%  via-[#1a5d1e] via-70% to-[#043F2E] to-100% text-white relative overflow-hidden pt-30">
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
                        Stop the annoying work,<br />
                        start the important work.
                    </h1>

                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#EEF2E3]">
                            Connect anything
                        </h2>
                        <p className="text-lg text-[#C8F169] max-w-3xl mx-auto">
                            Introduce transparent, controlled collaboration<br />
                            across teams and systems.
                        </p>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - AI Summary */}
                    <div className="bg-gradient-to-br from-[#2A6F2B] to-[#043F2E] rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold">
                                    Summarize your<br />
                                    sessions instantly<br />
                                    with AI
                                </h3>
                                <div className="bg-white/20 rounded-full p-2">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* AI Avatar illustration */}
                            <div className="bg-black/30 rounded-2xl p-4 mb-4">
                                <div className="flex space-x-2">
                                    <div className="w-12 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    </div>
                                    <div className="w-12 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                        <div className="absolute top-4 right-8 w-1 h-1 bg-white/60 rounded-full"></div>
                    </div>

                    {/* Card 2 - Search */}
                    <div className="bg-gradient-to-br from-[#C8F169] to-[#2A6F2B] rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-white">
                                    Find what you need in<br />
                                    a snap
                                </h3>
                                <div className="bg-white/20 rounded-full p-2">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Search interface mockup */}
                            <div className="bg-white/90 rounded-xl p-4 mb-4">
                                <div className="flex items-center space-x-2 mb-3">
                                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                                    <div className="flex-1 text-gray-700 text-sm">We...</div>
                                </div>
                                <div className="bg-[#C8F169] px-2 py-1 rounded text-[#043F2E] text-sm inline-block font-semibold">
                                    Brainstorm Canvas
                                </div>
                                <p className="text-gray-600 text-xs mt-2">and me that 30'</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Interactive Transcript */}
                    <div className="bg-gradient-to-br from-[#043F2E] to-[#1a5d1e] rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold">
                                    Jump to key moments with<br />
                                    the interactive transcript
                                </h3>
                                <div className="bg-white/20 rounded-full p-2">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Transcript interface mockup */}
                            <div className="bg-white/90 rounded-xl p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs">Summary  Timeline  Chat  Notes  Resources  People</span>
                                </div>

                                <div className="space-y-2 text-xs">
                                    <div>
                                        <span className="text-gray-500">38:27 Sonic</span>
                                        <p className="text-gray-700">Absolutely</p>
                                    </div>

                                    <div>
                                        <span className="text-gray-500">39:49 Chris</span>
                                        <p className="text-gray-700">8. Ideas mapping Big bold transforming lens</p>
                                    </div>

                                    <div>
                                        <span className="text-gray-500">39:44 Sarah</span>
                                        <p className="text-gray-700">
                                            Thank you both! These are all brilliant ideas. By focusing on sustainable, co-creative and culturally-responsive approaches to leadership development, improving communication, organizing team-building activities, and celebrating achievements, we can build a collaborative and high-performing team. Together, we can accomplish great things!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4 text-xs text-white/60">Windows</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content