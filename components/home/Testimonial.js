import React, { useState } from 'react';
import Image from 'next/image';
// import "react-multi-carousel/lib/styles.css";
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from '../../styles/Home.module.css';

const Testimonial = () => {
    const allTestimonials = [
        {
            id: 1,
            name: 'Falomo Sharon',
            testimonial: "I participated in Bootcamp 2.0 front-end web development and it was amazing, I really enjoyed my time in the Bootcamp. Especially meeting our facilitators for questions and then giving us assignments. I started this Bootcamp not being able to make a responsive website now I make great responsive websites you should definitely join this Bootcamp."
        },
        {
            id: 2,
            name: 'Nancy Olatuja',
            testimonial: "My Experience at EHC Mentorship Academy 1 and BootCamp Cohort 2 is one I will never forget. Starting as a front-end development newbie without any prior knowledge to being able to create user-friendly websites and communicate ideas. Facilitators and team members were always available to meet with whatever difficult situation you face. I'm grateful I have this community to help in my tech journey."
        },
        {
            id: 3,
            name: 'Jessica Joseph',
            testimonial: "My experience at EHC cohort 2 Bootcamp is definitely one to remember. I didn’t just gain the knowledge I also found my tech family. After graduation, all the knowledge I acquired from my facilitators improved me, as I went from being a basic frontend developer to a React developer in three months."
        },
        {
            id: 4,
            name: 'Jessica Joseph',
            testimonial: "My experience at EHC cohort 2 Bootcamp is definitely one to remember. I didn’t just gain the knowledge I also found my tech family. After graduation, all the knowledge I acquired from my facilitators improved me, as I went from being a basic frontend developer to a React developer in three months."
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
            <div className="container mx-auto px-4 py-14">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl text-center font-title tracking-[2.5px] my-4">
                        WHAT OUR CUSTOMERS ARE SAYING
                    </h2>
                    <div className="flex relative z-10 mt-3">
                        <div className="overlow-hidden relative min-h-[480px] sm:min-h-[360px] xl:min-h-[340px] z-20 flex-auto">
                            <div className={`overflow-hidden relative z-10 w-full h-full flex items-center`}>
                                {
                                    allTestimonials.map((testimonial, i) => {
                                        return (
                                            <div className="overflow-hidden absolute z-10 w-full h-full flex items-center justify-center flex-none" style={{ transform: `translateX(${(i - currentIndex) * 100}%)`, transition: 'all 0.5s' }} key={i}>
                                                {/* <div className="font-normal md:text-lg text-sm leading-6 bg-no-repeat bg-cover bg-right-top w-full h-full"> */}
                                                <div className="bg-white text-dark text-center px-14 md:px-20 py-2 w-full">
                                                    <p className="my-5 text-lg tracking-[1.5px] leading-loose">
                                                        PORSIA & ANGEL for me, is synonymous of high quality,
                                                        passion and commitment for interior designs that contributed to our brand’s magic in the region.
                                                        {testimonial.testimonial}
                                                    </p>
                                                    <small className="text-sm tracking-[2.5px] my-5 block">
                                                        SONIA GVINEY/
                                                        <span className="font-bold">APPLE</span>
                                                        {testimonial.name}
                                                    </small>
                                                </div>
                                                {/* </div> */}
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
                            <button className="block opacity-30 hover:opacity-80 lg:opacity-100" onClick={prevFunc}>
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
                            <button className="block opacity-30 hover:opacity-80 lg:opacity-100" onClick={nextFunc}>
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