import React from 'react'

function Hero1() {
    return (
        <section className="py-20 flex justify-center">
            <div className='bg-amber-800  relative inline-block '>


                <div className='flex  flex-row relative'>
                    <div className='flex flex-col relative '>

                        <div className='text-8xl font-sans py-5   rounded-xl rounded-br-none bg-amber-300  whitespace-nowrap  grow relative text-center' >Contract Intelligence</div>

                        <div className='flex flex-row justify-between'>
                            <div className='py-15 px-50 mt-10 mr-10  rounded-t-xl bg-neutral-200' />

                            <div className='flex flex-col'>
                                <div className='text-8xl font-sans  mb-10  rounded-bl-xl rounded-br-none bg-amber-300  whitespace-nowrap px-3 grow relative ' >built around</div>

                            </div>



                        </div>

                    </div>
                    <div className='px-25 py-25  rounded-2xl ml-10 mb-20 bg-amber-900 relative'>
                        kareoe
                    </div>

                </div>
                <div className='flex flex-row '>
                    <div>
                        <div className='py-40 px-90   bg-neutral-200 rounded-r-2xl' />

                    </div>
                    <div className=' relative ' >
                        <div className=" text-[92px]  ml-10 relative bottom-10 bg-amber-300 font-sans whitespace-nowrap text-start px-3 rounded-xl rounded-tl-none ">
                            legal teams
                        </div >
                        <div>
                            <div className='text-lg ml-10 relative font-sans text-start inline-block shrink px-3'>
                                Docsy is the smart way to get your organization's contracts <br />   and proposals done faster with AI-powered drafting, review, <br /> and collaboration tools.
                            </div>
                            <div className="flex flex-row gap-4 mt-8 ml-10 ">
                                <button className="bg-neutral-100 text-primary-dark font-semibold px-7 py-3 rounded-md shadow border-2 border-neutral-100 transition hover:brightness-95 focus:outline-none">
                                    Try for free
                                </button>
                                <button className="bg-transparent text-neutral-100 font-semibold px-7 py-3 rounded-md border-2 border-neutral-100 transition hover:bg-neutral-100 hover:text-primary-dark focus:outline-none">
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