import React from 'react'
import hero2 from "../../public/hero2.jpeg"
import bg from "../../public/bg.png"
import Image from 'next/image'

function Hero1() {
    return (

        <section className="py-20 flex justify-center ">

            <div className='relative inline-block '>

                {/* SVG Curves between containers and triangle connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 900" fill="none">
                    {/* Background organic shapes */}
                    <path
                        d="M0 100 Q200 80 400 120 Q600 160 800 140 Q1000 120 1200 150 Q1400 180 1400 200 L1400 0 L0 0 Z"
                        fill="url(#grad1)"
                        opacity="0.2"
                    />

                    <path
                        d="M0 400 Q300 380 600 420 Q900 460 1200 440 Q1350 430 1400 440 L1400 300 Q1200 290 900 320 Q600 350 300 320 Q150 305 0 320 Z"
                        fill="url(#grad2)"
                        opacity="0.25"
                    />

                    {/* Gradient Definitions */}
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#84cc16" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#84cc16" stopOpacity="0.7" />
                            <stop offset="50%" stopColor="#10b981" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                        </linearGradient>
                    </defs>

                    {/* Connecting curved lines between elements */}
                    <path
                        d="M250 180 Q450 160 650 190 Q850 220 1050 200"
                        stroke="#f59e0b"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.6"
                        strokeDasharray="10,5"
                        strokeLinecap="round"
                    />

                    <path
                        d="M150 350 Q400 330 650 370 Q900 410 1150 390"
                        stroke="#84cc16"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.7"
                        strokeLinecap="round"
                    />

                    <path
                        d="M300 580 Q550 560 800 600 Q1050 640 1300 620"
                        stroke="#06b6d4"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.6"
                        strokeDasharray="8,4"
                        strokeLinecap="round"
                    />

                    {/* Decorative circles with custom colors */}
                    <circle cx="180" cy="200" r="8" fill="#f59e0b" opacity="0.5" />
                    <circle cx="820" cy="250" r="6" fill="#84cc16" opacity="0.6" />
                    <circle cx="1100" cy="180" r="10" fill="#10b981" opacity="0.5" />
                    <circle cx="400" cy="400" r="7" fill="#06b6d4" opacity="0.5" />
                    <circle cx="950" cy="450" r="9" fill="#8b5cf6" opacity="0.5" />

                    {/* Floating elements with gradient */}
                    <path
                        d="M600 100 Q620 80 640 100 Q620 120 600 100"
                        fill="#fbbf24"
                        opacity="0.7"
                    />
                    <path
                        d="M1200 300 Q1220 280 1240 300 Q1220 320 1200 300"
                        fill="#34d399"
                        opacity="0.6"
                    />

                    {/* Triangle corner connections between containers */}
                    {/* Contract Intelligence top-right to built around top-left */}
                    <path
                        d="M580 50 Q650 45 720 60"
                        stroke="#84cc16"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.8"
                        strokeDasharray="4,3"
                        strokeLinecap="round"
                    />

                    {/* Contract Intelligence bottom-left to image top area */}
                    <path
                        d="M100 130 Q80 200 70 280 Q65 350 80 420"
                        stroke="#10b981"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                        strokeDasharray="3,4"
                        strokeLinecap="round"
                    />

                    {/* built around bottom-right to notebook top-left */}
                    <path
                        d="M820 180 Q900 160 980 140"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.8"
                        strokeLinecap="round"
                    />

                    {/* built around top-left to legal teams top-right */}
                    <path
                        d="M720 120 Q800 200 880 280 Q960 360 1020 440"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                        strokeDasharray="5,3"
                        strokeLinecap="round"
                    />

                    {/* notebook bottom-right to legal teams top-right */}
                    <path
                        d="M1150 240 Q1120 300 1080 360 Q1040 420 1020 480"
                        stroke="#34d399"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.8"
                        strokeDasharray="3,5"
                        strokeLinecap="round"
                    />

                    {/* image bottom-right to legal teams bottom-left */}
                    <path
                        d="M350 520 Q500 510 650 520 Q800 530 920 540"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                        strokeLinecap="round"
                    />

                    {/* Notebook all corners interconnection (internal triangle connections) */}
                    <path
                        d="M1020 140 Q1080 160 1140 140 Q1120 200 1140 240 Q1080 220 1020 240 Q1040 180 1020 140"
                        stroke="#22c55e"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="2,2"
                    />
                </svg>

                <div className='flex  flex-row relative'>
                    <div className='flex flex-col relative '>

                        <div className='text-8xl font-sans py-5   rounded-xl rounded-br-none bg-gradient-to-r from-amber-300 to-lime-300  whitespace-nowrap  grow relative text-center text-slate-800' >
                            Contract Intelligence
                            {/* Corner triangle SVGs */}
                            <svg className="absolute top-0 right-0 w-8 h-8" viewBox="0 0 32 32" fill="none">
                                <path d="M32 0 L32 32 L0 0 Z" fill="#059669" opacity="0.3" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 w-8 h-8" viewBox="0 0 32 32" fill="none">
                                <path d="M0 32 L32 32 L0 0 Z" fill="#059669" opacity="0.3" />
                            </svg>
                        </div>

                        <div className='flex flex-row justify-between'>

                            <div className='py-15 px-50 mt-10 mr-10  rounded-t-xl  relative overflow-hidden '>
                                <Image src={bg} alt="bg" className='w-full h-full object-cover object-bottom-left relative  ' fill />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-8xl font-sans  mb-10  rounded-bl-xl rounded-br-none bg-gradient-to-r from-lime-300 to-emerald-300  whitespace-nowrap px-3 grow relative text-slate-800' >
                                    built around
                                    {/* Corner triangle SVGs */}
                                    <svg className="absolute top-0 left-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M0 0 L24 0 L0 24 Z" fill="#14532d" opacity="0.4" />
                                    </svg>
                                    <svg className="absolute bottom-0 right-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M24 24 L0 24 L24 0 Z" fill="#14532d" opacity="0.4" />
                                    </svg>
                                </div>

                            </div>



                        </div>

                    </div>

                    <div className='px-31 py-25  rounded-2xl ml-10 mb-20 bg-green-600 relative flex justify-center items-center'>
                        {/* Corner triangle SVGs for notebook container */}
                        <svg className="absolute top-2 left-2 w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M0 0 L24 0 L0 24 Z" fill="#166534" opacity="0.6" />
                        </svg>
                        <svg className="absolute top-2 right-2 w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M24 0 L0 0 L24 24 Z" fill="#166534" opacity="0.6" />
                        </svg>
                        <svg className="absolute bottom-2 left-2 w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M0 24 L24 24 L0 0 Z" fill="#166534" opacity="0.6" />
                        </svg>
                        <svg className="absolute bottom-2 right-2 w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M24 24 L0 24 L24 0 Z" fill="#166534" opacity="0.6" />
                        </svg>

                        <div className='absolute '>
                            <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
                                <rect x="10" y="10" width="80" height="100" rx="8" fill="#22c55e" stroke="#16a34a" strokeWidth="2" />
                                <rect x="15" y="15" width="70" height="15" rx="3" fill="#dcfce7" />
                                <text x="50" y="26" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Notebook</text>
                                <rect x="20" y="40" width="10" height="3" rx="1" fill="#3b82f6" />
                                <rect x="35" y="40" width="40" height="3" rx="1" fill="#e5e7eb" />
                                <rect x="20" y="50" width="50" height="3" rx="1" fill="#e5e7eb" />
                                <rect x="20" y="60" width="45" height="3" rx="1" fill="#e5e7eb" />
                                <rect x="20" y="75" width="15" height="3" rx="1" fill="#3b82f6" />
                                <rect x="40" y="75" width="25" height="3" rx="1" fill="#e5e7eb" />
                            </svg>
                        </div>
                        {/* Notebook SVG Icon */}

                    </div>
                </div>
                <div className='flex flex-row '>
                    <div>
                        <div className='py-42 px-90 bg-neutral-200 rounded-r-2xl relative overflow-hidden'>
                            {/* Corner triangle SVGs for image container */}
                            <svg className="absolute top-2 right-2 w-6 h-6 z-10" viewBox="0 0 24 24" fill="none">
                                <path d="M24 0 L0 0 L24 24 Z" fill="#374151" opacity="0.4" />
                            </svg>
                            <svg className="absolute bottom-2 right-2 w-6 h-6 z-10" viewBox="0 0 24 24" fill="none">
                                <path d="M24 24 L0 24 L24 0 Z" fill="#374151" opacity="0.4" />
                            </svg>
                            <Image
                                src={hero2}
                                alt="hero2"
                                className='w-full h-full object-cover object-bottom-left relative  '
                                fill
                            />
                        </div>
                    </div>
                    <div className=' relative ' >
                        <div className=" text-[92px]  ml-10 relative bottom-10 bg-gradient-to-r from-emerald-300 to-cyan-300 font-sans whitespace-nowrap text-start px-3 rounded-xl rounded-tl-none text-slate-800">
                            legal teams
                            {/* Corner triangle SVGs */}
                            <svg className="absolute top-0 right-0 w-8 h-8" viewBox="0 0 32 32" fill="none">
                                <path d="M32 0 L32 32 L0 0 Z" fill="#0f766e" opacity="0.5" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 w-8 h-8" viewBox="0 0 32 32" fill="none">
                                <path d="M0 32 L32 32 L0 0 Z" fill="#0f766e" opacity="0.5" />
                            </svg>
                        </div >
                        <div>
                            <div className='text-lg ml-10 relative font-sans text-start inline-block shrink px-3 text-white'>
                                Docsy is the smart way to get your organization's contracts <br />   and proposals done faster with AI-powered drafting, review, <br /> and collaboration tools.
                            </div>
                            <div className="flex flex-row gap-4 mt-8 ml-10 ">
                                <button className="bg-white text-teal-800 font-semibold px-7 py-3 rounded-md shadow border-2 border-white transition hover:brightness-95 focus:outline-none">
                                    Try for free
                                </button>
                                <button className="bg-transparent text-white font-semibold px-7 py-3 rounded-md border-2 border-white transition hover:bg-white hover:text-teal-800 focus:outline-none">
                                    Request demo
                                </button>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

        </section>
    )
}

export default Hero1