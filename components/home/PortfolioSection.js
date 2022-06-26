import Image from 'next/image';

import styles from '../../styles/Home.module.css';



export default function PortfolioSection() {
    return (
        <section className="overflow-x-hidden">
            <div className="container xl:max-w-screen-xl mx-auto px-4 py-10">
                <div className="columns-2 gap-10 lg:gap-16">
                    <div className="">
                        <div className={styles.case1 + " relative z-10 w-full "}>
                            {/* <div className={" flex-auto w-full "}> */}
                            <Image src="/assets/case1.jpg" width="542px" height="375px" alt="Steps to get started" className='mx-auto w-full' />
                        </div>
                        <div className="w-[300px] lg:w-full flex-none">
                            <h2 className="text-3xl font-title tracking-[2.5px]">
                                Shop & Transform
                            </h2>
                            <p className="text-lg tracking-[1.5px] leading-loose">
                                After you receive your final design,
                                a shopping list of products can be purchased at an exclusive discount via our trade partnerships.
                                Begin designing your home with your designer.
                            </p>
                            <button className="border border-primary bg-white w-56 px-1 py-4 text-lg text-primary text-center tracking-[2.5px] mx-auto lg:mx-0">
                                START NOW
                            </button>
                        </div>
                    </div>
                    <button className="border border-primary bg-primary w-56 px-1 py-4 text-lg text-white text-center tracking-[2.5px] my-14 mx-auto lg:mx-0">
                        START NOW
                    </button>
                    <div className="">
                        <div className={styles.case2 + " relative z-10 w-full "}>
                            {/* <div className={" flex-auto w-full "}> */}
                            <Image src="/assets/case2.jpg" width="610px" height="714px" alt="Steps to get started" className='mx-auto w-full' />
                        </div>
                        <div className="w-[300px] lg:w-full flex-none">
                            <h2 className="text-3xl font-title tracking-[2.5px]">
                                Shop & Transform
                            </h2>
                            <p className="text-lg tracking-[1.5px] leading-loose">
                                After you receive your final design,
                                a shopping list of products can be purchased at an exclusive discount via our trade partnerships.
                                Begin designing your home with your designer.
                            </p>
                            <button className="border border-primary bg-white w-56 px-1 py-4 text-lg text-primary text-center tracking-[2.5px] mx-auto lg:mx-0">
                                START NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
