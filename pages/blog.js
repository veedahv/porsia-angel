// import Head from 'next/head';

export default function Blog() {
    return (
        <div className="">
            <section className="my-20">
                <div className="container xl:max-w-screen-xl mx-auto px-4 py-10">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-title my-5">
                                BLOG
                            </h1>
                    <div className="columns-1 md:columns-2 w-full">
                        <div className="max-w-[610px] mt-5 mb-20">
                            <span className="text-2xl font-title tracking-[2.5px] uppercase">
                                7 APR 2022
                            </span>
                            <Image src="/assets/blog/blog1.jpg" width="610px" height="247px" alt="Steps to get started" className='mx-auto w-full' />
                            <div className="py-2">
                                <h2 className="text-2xl sm:text-3xl font-title tracking-[2.5px] uppercase">
                                    CHOOSING THE RIGHT COLOR
                                </h2>
                                <a className="cursor-pointer text-lg text-dark tracking-[1.5px] leading-loose my-2 line-truncate block">
                                    Colors have psychology on ous and choosinng the right one can be very difficult. The emotion, brand and taste is all depend on the color you pick for your.....
                                </a>
                            </div>
                        </div>
                        <div className="max-w-[400px] mb-20">
                            <span className="text-2xl font-title tracking-[2.5px] uppercase">
                                12 JAN 2022
                            </span>
                            <Image src="/assets/blog/blog2.jpg" width="400px" height="247px" alt="Steps to get started" className='mx-auto w-full' />
                            <div className="py-2">
                                <h2 className="text-2xl sm:text-3xl font-title tracking-[2.5px] uppercase">
                                A Design PORTFOLIO
                                </h2>
                                <a className="cursor-pointer text-lg text-dark tracking-[1.5px] leading-loose my-2 line-truncate block">
                                Portfolios are comprised of your projects and ideas coming to life. They are stories of your thoughts, best works...
                                </a>
                            </div>
                        </div>
                        <div className="max-w-[400px] mb-20 md:ml-auto">
                            <span className="text-2xl font-title tracking-[2.5px] uppercase">
                                12 JAN 2022
                            </span>
                            <Image src="/assets/blog/blog3.jpg" width="400px" height="433px" alt="Steps to get started" className='mx-auto w-full' />
                            <div className="py-2">
                                <h2 className="text-2xl sm:text-3xl font-title tracking-[2.5px] uppercase">
                                LAMPS AND ALL WE KNOW
                                </h2>
                                <a className="cursor-pointer text-lg text-dark tracking-[1.5px] leading-loose my-2 line-truncate block">
                                Let there be light! Even the tiniest decoration might seem lost in the background but first to use. In this article, we’ll discuss why lamps are very....
                                </a>
                            </div>
                        </div>
                        <div className="max-w-[610px] mb-20 md:ml-auto">
                            <span className="text-2xl font-title tracking-[2.5px] uppercase">
                                7 APR 2022
                            </span>
                            <Image src="/assets/blog/blog4.jpg" width="607px" height="249px" alt="Steps to get started" className='mx-auto w-full' />
                            <div className="py-2">
                                <h2 className="text-2xl sm:text-3xl font-title tracking-[2.5px] uppercase">
                                A KITCHEN SPACE
                                </h2>
                                <a className="cursor-pointer text-lg text-dark tracking-[1.5px] leading-loose my-2 line-truncate block">
                                The kitchen is known to be the heart of a home. 
                                There are many reasonw why we should consider designing the kitchen first before any other space in our home. 
                                In this article,  we discuss the various layout and styles of a modern kitchen and...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
