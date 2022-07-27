import Image from 'next/image';

export default function Portfolio() {
    return (
        <section className="my-20">
            <div className="container xl:max-w-screen-xl mx-auto px-4 py-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-title mb-10">
                    PORTFOLIO
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 w-full">
                    <div className="">
                        <div className={" relative z-10 w-full "}>
                            <Image src="/assets/case1.jpg" width="542px" height="375px" alt="Steps to get started" className='mx-auto w-full' />
                        </div>
                        <div className="py-8">
                            <h2 className="text-3xl font-title tracking-[2.5px] uppercase">
                                LITTLE TOWN
                            </h2>
                            <p className="text-lg text-dark tracking-[1.5px] leading-loose my-2">
                                Alessia Clarke works on this new experience-led home at 7th Avenue of New York, USA.
                                She calls it a little town. Read her case study
                            </p>
                            <button className="border border-primary w-56 py-4 uppercase text-lg text-primary text-center tracking-[2.5px]">
                                Read case study
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div className={" relative z-10 w-full md:mb-[40px] flex items-center justify-center h-[212px] md:h-fit overflow-y-hidden md:overflow-visible"}>
                            <Image src="/assets/case2.jpg" width="610px" height="714px" alt="Steps to get started" className='mx-auto w-full' />
                        </div>
                        <div className="py-8 mb-10">
                            <h2 className="text-3xl font-title tracking-[2.5px] uppercase">
                                REFURNISHED K
                            </h2>
                            <p className="text-lg text-dark tracking-[1.5px] leading-loose my-2">
                                A full refurnished office of Shopify, bursting with vibrant,
                                comfort and high-tech friendly enivornment to boost creativity and team work.
                            </p>
                            <button className="border border-primary w-56 py-4 uppercase text-lg text-primary text-center tracking-[2.5px]">
                                Read case study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
