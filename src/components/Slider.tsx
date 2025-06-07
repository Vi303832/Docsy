"use client"
import React from 'react'
import { FaReddit, FaDocker, FaSlack } from 'react-icons/fa'
import { SiCanva, SiCoinbase, SiSnowflake } from 'react-icons/si'
import { MdRestaurant } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'
import { RiSecurePaymentLine } from 'react-icons/ri'

function Slider() {
    const companies = [
        { name: "OpenTable", icon: <MdRestaurant className="w-5 h-5" /> },
        { name: "reddit", icon: <FaReddit className="w-5 h-5" /> },
        { name: "snowflake", icon: <SiSnowflake className="w-5 h-5" /> },
        { name: "SOPHOS", icon: <RiSecurePaymentLine className="w-5 h-5" /> },
        { name: "sprinklr", icon: null },
        { name: "Canva", icon: <SiCanva className="w-5 h-5" /> },
        { name: "Chegg", icon: <HiAcademicCap className="w-5 h-5" /> },
        { name: "coinbase", icon: <SiCoinbase className="w-5 h-5" /> },
        { name: "docker", icon: <FaDocker className="w-5 h-5" /> }
    ];

    return (
        <div className="w-full py-16 bg-transparent overflow-hidden">
            <div className="flex animate-marquee items-center">
                {[...companies, ...companies, ...companies].map((company, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 mx-12 flex-shrink-0"
                    >
                        {company.icon && (
                            <div className="text-white/80">
                                {React.cloneElement(company.icon, { className: "w-8 h-8" })}
                            </div>
                        )}
                        <span className="text-white/70 font-semibold text-xl whitespace-nowrap">
                            {company.name}
                        </span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default Slider