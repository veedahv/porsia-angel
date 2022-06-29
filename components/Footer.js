import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer relative bg-primary text-white py-10">
            <div className="container xl:max-w-screen-xl mx-auto px-4">
                <div className="my-14">
                    <div className="text-5xl md:text-7xl font-title">
                        PORSIA & ANGEL
                    </div>
                </div>
                <div className="my-14 hidden md:flex gap-5">
                    <a href="" className="border border-white w-56 px-1 py-5 text-lg text-center tracking-[2.5px]">
                        START A PROJECT
                    </a>
                    <a href="" className="border border-white w-56 px-1 py-5 text-lg text-center tracking-[2.5px]">
                        OUR SERVICES
                    </a>
                </div>
                <div className="max-w-3xl my-10">
                    <div className="flex flex-wrap justify-between gap-y-5 gap-x-14 sm:gap-x-24 w-full">
                        <div className="md:order-1">
                            <h2 className="text-sm uppercase tracking-[2.5px] my-3">
                                Contact Us:
                            </h2>
                            <a href="mailto:interior@p&a.com" className="text-lg tracking-[1.5px] block my-3">interior@p&a.com</a>
                            <a href="tel:+971582674671" className="text-lg tracking-[1.5px] block my-3">+971 58 267 4671</a>
                        </div>
                        <ul className="md:order-3">
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <Link href="/about">
                                    <a href="" className="">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <Link href="/service">
                                    Services
                                </Link>
                            </li>
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="md:order-5">
                            <h2 className="text-sm uppercase tracking-[2.5px] my-3">
                                CAREERS
                            </h2>
                            <a href="" className="text-lg tracking-[1.5px] block my-3">
                                Become part of the team
                            </a>
                            <a href="" className="text-lg tracking-[1.5px] block my-3">
                                Become a designer
                            </a>
                        </div>
                        <ul className="md:order-4">
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                {/* <Link href="/">
                                </Link> */}
                                <a href="" className="">
                                    DESIGNERS
                                </a>
                            </li>
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <Link href="/#faq">
                                    <a href="" className="">
                                        faq
                                    </a>
                                </Link>
                            </li>
                            <li className="text-sm uppercase tracking-[2.5px] my-3">
                                <a href="" className="">
                                    PARTNERS
                                </a>
                            </li>
                        </ul>
                        <div className="text-center w-full md:w-fit md:order-2">
                            <h2 className="text-sm uppercase tracking-[2.5px] my-3">
                                FOLLOW Us:
                            </h2>
                            <div className="flex gap-3 justify-center">
                                <a href="" className="text-lg tracking-[1.5px] block my-3">
                                    <Image src="/assets/linkedin.svg" alt='Porsia and angel logo' width="33px" height="33px" className='my-10' />
                                </a>
                                <a href="" className="text-lg tracking-[1.5px] block my-3">
                                    <Image src="/assets/instagram.svg" alt='Porsia and angel logo' width="33px" height="33px" className='my-10' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;