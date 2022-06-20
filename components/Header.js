

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <header className="header relative shadow py-5">
            <div className="container mx-auto px-4 text-center">
                <Image src="/assets/logo-dark.png" width="192px" height="19px" className='mx-auto' />
                {/* <Image src='/logo.png' width='91px' height='90px' /> */}
                <button className="absolute top-0 bottom-0 right-0 bg-primary bg-opacity-70 px-4" onClick={handleClick}>
                    <Image src="/assets/menu.png" width="25px" height="23px" className='mx-auto' />
                </button>
                {active && <div className="absolute top-full right-0 z-30 bg-white px-8">
                    <nav className="nav w-[250px] min-h-[90vh] flex justify-start items-center text-left">
                        <ul className="">
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <a href="" className="">
                                    About
                                </a>
                                {/* <Link href="/">
                                </Link> */}
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/service">
                                    Services
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <a href="" className="">
                                    PORTFOLIO
                                </a>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>}
            </div>
        </header>
    )
}


export default Header;