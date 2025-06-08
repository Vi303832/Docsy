import React from 'react'
import Image from 'next/image'
import box1 from "../../public/box1.png"
import { FaArrowRight } from "react-icons/fa"
import box2 from "../../public/box2.png"

function Content2() {
    return (
        <section className="relative">
            <div className="container mx-auto px-24 py-10">

                {/* Box 1 - Başta beyaz, hover'da lime tema */}
                <div className="w-full mx-auto ">
                    <div className="relative w-full rounded-3xl shadow-2xl flex flex-col overflow-hidden group bg-white transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#F7FEE7] hover:via-[#ECFCCB] hover:to-[#BEF264] hover:bg-opacity-90" style={{ boxSizing: "border-box" }}>
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 md:px-12 pt-8 pb-0">
                            <h1 className="text-xl md:text-4xl font-bold text-[#2E3A1B] group-hover:text-[#4D7C0F] transition-colors duration-500">
                                One workspace for your team's projects and rooms
                            </h1>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BEF264] text-[#2E3A1B] group-hover:scale-110 group-hover:bg-[#ECFCCB] transition-all duration-500">
                                <FaArrowRight size={22} />
                            </div>
                        </div>
                        {/* Image - bottom right, large, only top/left margin */}
                        <div className="flex-1 relative min-h-[340px] md:min-h-[480px] lg:min-h-[600px]">
                            <div className="absolute left-4 md:left-10 top-6 right-0 bottom-0 flex items-end justify-end">
                                <div className="w-[97%] md:w-[95%] h-[90%]">
                                    <Image
                                        src={box1}
                                        alt="Workspace dashboard preview"
                                        className="shadow-2xl rounded-2xl group-hover:shadow-[#BEF264]/30 transition-all duration-500 hover:object-bottom! object-top!"
                                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 boxes layout like photo */}
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {/* Left big box - Başta beyaz, hover'da yeşil tema */}
                    <div className="md:col-span-2">
                        <div className="relative w-full rounded-3xl shadow-2xl flex flex-col overflow-hidden min-h-[500px] md:min-h-[650px] group bg-white transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#F0FFF4] hover:via-[#C8F169]/60 hover:to-[#B8E553]/70 hover:bg-opacity-90" style={{ boxSizing: "border-box" }}>
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 md:px-12 pt-8 pb-0">
                                <h1 className="text-xl md:text-2xl font-bold text-[#1B3A2F] group-hover:text-[#65a30d] transition-colors duration-500">
                                    Level up the collaboration with shared rooms
                                </h1>
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C8F169] text-[#1B3A2F] group-hover:scale-110 group-hover:bg-[#B8E553] transition-all duration-500">
                                    <FaArrowRight size={16} />
                                </div>
                            </div>
                            {/* Image - bottom right, large, only top/left margin */}
                            <div className="flex-1 relative">
                                <div className="absolute left-4 md:left-10 top-6 right-0 bottom-0 flex items-end justify-end">
                                    <div className="w-[97%] h-[95%] rounded-2xl">
                                        <Image
                                            src={box2}
                                            alt="Collaboration workspace"
                                            className="shadow-2xl rounded-2xl object-top group-hover:shadow-[#C8F169]/30 transition-all duration-500 hover:object-bottom!   "
                                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right single tall box - Başta beyaz, hover'da yeşil tema */}
                    <div className="md:col-span-1">
                        <div className="relative w-full rounded-3xl shadow-2xl overflow-hidden min-h-[500px] md:min-h-[650px] flex flex-col group bg-white transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-emerald-300 hover:via-emerald-200 hover:to-emerald-100">
                            {/* Header section */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-[#1B3A2F] font-bold text-lg md:text-xl leading-tight group-hover:text-[#064e3b] transition-colors duration-500">
                                        Save and share your favorite templates
                                    </h2>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C8F169] text-[#1B3A2F] flex-shrink-0 group-hover:bg-emerald-400 group-hover:scale-110 transition-all duration-500">
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* GIF section - takes remaining space */}
                            <div className="flex-1 relative">
                                <div className="absolute inset-4 md:inset-6">
                                    <Image
                                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2pkdzFnaTk1bnBwZjJwaHcyeTV5b2RpZzRpNmFlNjNzb3M0bWx1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JedTTnDTPXSmPYs/giphy.gif"
                                        alt="Animated collaboration"
                                        className="w-full h-full object-cover rounded-xl transition-all duration-500 shadow-lg group-hover:shadow-emerald-300/50"
                                        width={800}
                                        height={800}
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content2