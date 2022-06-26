import React, { useState } from 'react';
import Image from 'next/image';

const Testimonial = () => {
    const allTestimonials = [
        {
            id: 1,
            name: 'SONIA GVINEY',
            testimonial: `PORSIA & ANGEL for me, is synonymous of high quality, passion and commitment for interior designs that contributed to our brand’s magic in the region.`
        },
        {
            id: 2,
            name: 'SONIA GVINEY',
            testimonial: `PORSIA & ANGEL for me, is synonymous of high quality, passion and commitment for interior designs that contributed to our brand’s magic in the region.`
        },
        {
            id: 3,
            name: 'SONIA GVINEY',
            testimonial: `PORSIA & ANGEL for me, is synonymous of high quality, passion and commitment for interior designs that contributed to our brand’s magic in the region.`
        },
        {
            id: 4,
            name: 'SONIA GVINEY',
            testimonial: `PORSIA & ANGEL for me, is synonymous of high quality, passion and commitment for interior designs that contributed to our brand’s magic in the region.`
        },
    ]
    const [prevIndex, setPrevIndex] = useState(2);
    const [nextIndex, setNextIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevFunc = () => {
        setPrevIndex(
            prevIndex <= 0 ? allTestimonials.length - 1 : prevIndex - 1
        )
        setNextIndex(
            nextIndex <= 0 ? allTestimonials.length - 1 : nextIndex - 1
        )
        setCurrentIndex(
            currentIndex <= 0 ? allTestimonials.length - 1 : currentIndex - 1
        )
    }
    const nextFunc = () => {
        setTimeout(() => {
            setPrevIndex(
                prevIndex >= allTestimonials.length - 1 ? 0 : prevIndex + 1
            )
            setNextIndex(
                nextIndex >= allTestimonials.length - 1 ? 0 : nextIndex + 1
            )
            setCurrentIndex(
                currentIndex >= allTestimonials.length - 1 ? 0 : currentIndex + 1
            )

        }, 100);
    }
    return (
        <section className="bg-[url('/assets/home-hero-bg.jpg')] bg-[#151515A1] bg-blend-overlay bg-cover bg-norepeat bg-center text-white w-full relative">
            <div className="container xl:max-w-screen-xl mx-auto px-4 py-14">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl text-center font-title tracking-[2.5px] my-4">
                        WHAT OUR CUSTOMERS ARE SAYING
                    </h2>
                    <div className="bg-white flex relative z-10 my-3">
                        <div className="overlow-hidden relative min-h-[480px] sm:min-h-[360px] xl:min-h-[340px] z-20 flex-auto">
                            <div className={`overflow-hidden relative z-10 w-full h-full flex items-center`}>
                                {
                                    allTestimonials.map((testimonial, i) => {
                                        return (
                                            <div
                                                className="overflow-hidden absolute z-10 w-full h-full flex items-center justify-center flex-none"
                                                style={{ transform: `translateX(${(i - currentIndex) * 100}%)`, transition: 'all 0.5s' }}
                                                key={i}
                                            >
                                                <div className="text-dark text-center px-14 md:px-20 py-2 w-full">
                                                    <p className="my-5 text-lg tracking-[1.5px] leading-loose">
                                                        {testimonial.testimonial}
                                                    </p>
                                                    <small className="text-sm tracking-[2.5px] my-5 block">
                                                        SONIA GVINEY/
                                                        <span className="font-bold">APPLE</span>
                                                        {/* {testimonial.name} */}
                                                    </small>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-1">
                        {
                            currentIndex > 0 &&
                            <button className="block hover:opacity-80 lg:opacity-100" onClick={prevFunc}>
                                <Image src="/assets/arrow-left.svg" width="26px" height="9px" alt="testimonial left button icon" />
                            </button>
                        }
                        <span className="">
                            {currentIndex + 1}
                        </span>
                        <span className="">
                            /
                        </span>
                        <span className="">
                            {allTestimonials.length}
                        </span>
                        {
                            currentIndex < allTestimonials.length - 1 &&
                            <button className="block hover:opacity-80 lg:opacity-100" onClick={nextFunc}>
                                <Image src="/assets/arrow-right.svg" width="26px" height="9px" alt="testimonial right button icon" />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial