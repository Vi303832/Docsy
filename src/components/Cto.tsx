import React from 'react'

function Cto() {
    return (
        <section className="bg-transparent text-white relative overflow-hidden py-32">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-32 w-4 h-4 bg-[#C8F169] rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-3 h-3 bg-[#4ECDC4] rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-44 right-40 w-2 h-2 bg-[#B8E553] rounded-full animate-pulse delay-200"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Main Headlines */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Ready to revolutionize legal workflows?
                    </h1>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#C8F169] leading-relaxed">
                        It's time to experience intelligent legal solutions for yourself!
                    </h2>

                    {/* Large CTA Button */}
                    <div className="pt-12">
                        <button className="inline-flex items-center justify-center px-16 py-6 bg-white text-[#043F2E] text-2xl md:text-3xl font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform min-w-[400px] group">
                            Start Your Legal Journey
                            <span className="ml-4 text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="pt-8">
                        <p className="text-lg md:text-xl text-emerald-200 max-w-3xl mx-auto">
                            Join thousands of legal professionals who have already transformed their practice with our AI-powered platform.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom right corner decoration */}
            <div className="absolute bottom-10 right-10 opacity-20">
                <svg className="w-16 h-16 text-[#C8F169]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 7,18C8,17 20,16 20,16" />
                </svg>
            </div>
        </section>
    )
}

export default Cto