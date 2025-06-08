"use client"

import { useState, useEffect } from "react"
import { Plus, Minus, Play } from "lucide-react"

export default function Extra() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev + 0.3)
        }, 50)
        return () => clearInterval(interval)
    }, [])

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "How does AI-powered contract analysis revolutionize legal workflows?",
            answer:
                "Our advanced AI algorithms analyze contracts in seconds, identifying potential risks, suggesting clause improvements, and ensuring compliance with regulatory standards. This dramatically reduces review time from hours to minutes while maintaining the highest accuracy standards. The system learns from your preferences and past decisions, becoming more intelligent with each use."
        },
        {
            question: "What makes our collaborative legal platform different from traditional tools?",
            answer:
                "Unlike traditional legal software, our platform enables real-time collaboration between legal teams, clients, and stakeholders. Features include live document editing, instant feedback loops, automated workflow tracking, and seamless integration with existing legal databases. Teams report 70% faster project completion rates and significantly improved client satisfaction."
        },
        {
            question: "How secure is our legal document management system?",
            answer:
                "Security is our top priority. We employ bank-grade encryption, multi-factor authentication, and comply with GDPR, HIPAA, and SOC 2 standards. All documents are stored in certified data centers with 99.9% uptime guarantee. Regular security audits and penetration testing ensure your sensitive legal data remains protected at all times."
        },
        {
            question: "Can the platform scale for enterprise-level legal operations?",
            answer:
                "Absolutely! Our platform is designed to scale from solo practitioners to multinational law firms. It supports unlimited users, custom workflows, advanced analytics, API integrations, and dedicated support. Enterprise clients enjoy priority support, custom training sessions, and tailored features to meet specific organizational needs and compliance requirements."
        },
    ]

    // Meaningful words for legal theme: LEGAL, DOCS, SMART, TEAM, WORK, AI
    const orbitElements = [
        // LEGAL
        { type: "avatar", content: "/placeholder.svg?height=40&width=40" },
        { type: "letter", content: "L", color: "#C8F169" },
        { type: "letter", content: "E", color: "#B8E553" },

        { type: "letter", content: "G", color: "#C8F169" },
        { type: "letter", content: "A", color: "#B8E553" },
        { type: "letter", content: "L", color: "#C8F169" },
        // DOCS  
        { type: "avatar", content: "/placeholder.svg?height=40&width=40" },
        { type: "letter", content: "D", color: "#4ECDC4" },

        { type: "letter", content: "O", color: "#5FDDD4" },
        { type: "letter", content: "C", color: "#4ECDC4" },
        { type: "letter", content: "S", color: "#5FDDD4" },
        // SMART
        { type: "avatar", content: "/placeholder.svg?height=40&width=40" },
        { type: "letter", content: "S", color: "#A8D943" },

        { type: "letter", content: "M", color: "#B8E553" },
        { type: "letter", content: "A", color: "#A8D943" },
        { type: "letter", content: "R", color: "#B8E553" },
        { type: "letter", content: "T", color: "#A8D943" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#043F2E] from-0% via-[#1a5d1e] via-70% to-[#043F2E] to-100% text-white relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Left side - Text Content */}
                        <div className="flex-1 max-w-3xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                                <span className="text-[#C8F169] block mb-4">Smart Legal Intelligence.</span>
                                <span className="text-emerald-100">Transforming how legal teams collaborate and deliver exceptional results</span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#C8F169] to-[#B8E553] hover:from-[#B8E553] hover:to-[#A8D943] text-[#043F2E] font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#C8F169]/30 hover:scale-105 transform">
                                    Start Your Legal Journey
                                    <Play className="w-5 h-5 ml-2" />
                                </button>
                                <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#C8F169] text-[#C8F169] font-semibold rounded-xl hover:bg-[#C8F169] hover:text-[#043F2E] transition-all duration-300">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Right side - Circular Rotating Elements */}
                        <div className="relative w-96 h-96 flex-shrink-0">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#C8F169] to-[#B8E553] rounded-full flex items-center justify-center shadow-2xl shadow-[#C8F169]/30 group hover:scale-110 transition-all duration-300">
                                    <Play className="w-10 h-10 text-[#043F2E] ml-1" />
                                </div>
                            </div>
                            {orbitElements.map((element, index) => {
                                const angle = (index * 360) / orbitElements.length + rotation
                                const radius = 160
                                const x = Math.cos((angle * Math.PI) / 180) * radius
                                const y = Math.sin((angle * Math.PI) / 180) * radius

                                return (
                                    <div
                                        key={index}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-linear"
                                        style={{
                                            left: `calc(50% + ${x}px)`,
                                            top: `calc(50% + ${y}px)`,
                                        }}
                                    >
                                        {element.type === "letter" ? (
                                            <div className="w-14 h-14 flex items-center justify-center group hover:scale-125 transition-all duration-300">
                                                <span
                                                    className="text-4xl font-black transform hover:rotate-12 transition-all duration-300 drop-shadow-lg"
                                                    style={{ color: element.color }}
                                                >
                                                    {element.content}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#C8F169] shadow-lg hover:shadow-[#C8F169]/50 hover:scale-110 transition-all duration-300">
                                                <div className="w-full h-full bg-gradient-to-br from-[#C8F169] to-[#4ECDC4] flex items-center justify-center">
                                                    <span className="text-[#043F2E] font-bold text-xs">👤</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="px-6 py-24">
                <div className="px-22">
                    <div className="mb-16">
                        <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-6">
                            Legal.
                            <br />
                            <span className="text-[#C8F169]">Questions.</span>
                            <br />
                            <span className="text-[#4ECDC4]">Answered.</span>
                        </h2>
                        <p className="text-xl text-emerald-200 max-w-3xl">
                            Everything you need to know about our revolutionary legal intelligence platform
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/15 shadow-lg hover:shadow-xl"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-6 text-left flex items-center justify-between text-white hover:text-[#C8F169] transition-all duration-300 group"
                                >
                                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                                    <div className="flex-shrink-0 ml-4">
                                        <div className={`p-2 rounded-full bg-[#C8F169]/20 transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-[#C8F169]/40' : 'group-hover:bg-[#C8F169]/30'}`}>
                                            {openFaq === index ? (
                                                <Minus className="w-6 h-6 text-[#C8F169]" />
                                            ) : (
                                                <Plus className="w-6 h-6 text-[#C8F169]" />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {openFaq === index && (
                                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-500">
                                        <div className="pt-4">
                                            <p className="text-emerald-100 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}
