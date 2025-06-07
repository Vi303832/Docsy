import React from 'react'

function Hero1() {
    return (
        <section className="py-20 flex justify-center">
            <div className='bg-amber-800  relative inline-block '>


                <div className='flex  flex-row relative'>
                    <div className='flex flex-col relative '>

                        <div className='text-8xl font-sans py-5   rounded-xl rounded-br-none bg-amber-300  whitespace-nowrap px-3 grow relative ' >Business Intelligence</div>

                        <div className='flex flex-row justify-between'>
                            <div className='py-15 px-50 mt-10 mr-10  rounded-t-xl bg-neutral-200' />

                            <div className='flex flex-col'>
                                <div className='text-8xl font-sans py-5 mb-10  rounded-bl-xl rounded-br-none bg-amber-300  whitespace-nowrap px-3 grow relative ' >built around</div>

                            </div>



                        </div>

                    </div>
                    <div className='px-25 py-25  rounded-2xl ml-10 mb-20 bg-amber-900 relative'>
                        kareoe
                    </div>

                </div>
                <div className='flex flex-row '>
                    <div>
                        <div className='py-30 px-90   bg-neutral-200 rounded-r-2xl' />

                    </div>
                    <div className=' relative shrink' >
                        <div className="py-5 text-8xl  ml-10 relative bottom-10 bg-amber-300 font-sans whitespace-nowrap text-start px-3 rounded-xl rounded-tl-none">
                            data teams
                        </div>


                    </div>

                </div>


            </div>

        </section>
    )
}

export default Hero1