import React from 'react'
import Image from 'next/image'
import box1 from "../../public/box1.png"
import { FaArrowRight } from "react-icons/fa"
import box2 from "../../public/box2.png"

function Content2() {
    return (
        <section className="relative">
            <div className="container mx-auto px-24 py-10">

                <div className="w-full mx-auto ">
                    <div className="relative w-full bg-white/95 rounded-3xl shadow-2xl flex flex-col overflow-hidden" style={{ boxSizing: "border-box" }}>
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 md:px-12 pt-8 pb-0">
                            <h1 className="text-xl md:text-4xl font-bold text-slate-800">
                                One workspace for your team's projects and rooms
                            </h1>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C8F169] text-[#043F2E]">
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
                                        className="shadow-2xl rounded-2xl"
                                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 boxes layout like photo */}
                <div className="grid md:grid-cols-3 gap-8  mt-10">
                    {/* Left big box - same style as box1 with box2.png inside */}
                    <div className="md:col-span-2">
                        <div className="relative w-full bg-white/95 rounded-3xl shadow-2xl flex flex-col overflow-hidden min-h-[500px] md:min-h-[650px]" style={{ boxSizing: "border-box" }}>
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 md:px-12 pt-8 pb-0">
                                <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                                    Level up the collaboration with shared rooms
                                </h1>
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#043F2E] text-white">
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
                                            className="shadow-2xl rounded-2xl object-top "
                                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right single tall box */}
                    <div className="md:col-span-1">
                        <div className="relative w-full bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl shadow-2xl overflow-hidden min-h-[500px] md:min-h-[650px] flex flex-col">
                            {/* Header section */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-white font-bold text-lg md:text-xl leading-tight">
                                        Save and share your favorite templates
                                    </h2>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white flex-shrink-0">
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* GIF section - takes remaining space */}
                            <div className="flex-1 p-6 md:p-8 pt-0 flex items-end justify-center">
                                <div className="w-full max-w-[200px] h-[200px] md:h-[300px] bg-white/10 rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2pkdzFnaTk1bnBwZjJwaHcyeTV5b2RpZzRpNmFlNjNzb3M0bWx1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JedTTnDTPXSmPYs/giphy.gif"
                                        alt="Animated collaboration"
                                        className="w-full h-full object-cover"
                                        width={200}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content2