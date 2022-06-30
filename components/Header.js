import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        active ?
            document.removeEventListener('click', checkClick) :
            document.addEventListener('click', checkClick);
        setActive(!active);
    }
    const checkClick = (e) => {
        if (e.target.classList.contains('navlink')) {
            setActive(false);
            document.removeEventListener('click', checkClick);
        }
    }
    const closeNav = () => {
        setActive(false);
        document.removeEventListener('click', checkClick);
    }

    return (
        <header className="header relative shadow py-5">
            <div className="container xl:max-w-screen-xl mx-auto px-4 text-center">
                <div className="text-3xl text-center font-title mx-auto">
                    PORSIA & ANGEL
                </div>
                <button className="absolute top-0 bottom-0 right-0 bg-primary bg-opacity-70 px-4 z-40" onClick={handleClick}>
                    <Image src="/assets/menu.png" width="25px" height="23px" alt="hamburger menu icon" className='mx-auto' />
                </button>
                {active && <div className="fixed top-0 right-0 bottom-0 left-0 z-20" onClick={() => closeNav()}>
                </div>}
                {active && <div className="absolute top-full right-0 z-40 bg-white px-8">
                    <nav className="nav w-[250px] min-h-[90vh] flex justify-start items-center text-left">
                        <ul className="">
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/">
                                    <a className='navlink'>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/about">
                                    <a className="navlink">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/service">
                                    <a className='navlink'>
                                        Services
                                    </a>
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/blog">
                                    <a className='navlink'>
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/portfolio">
                                    <a className="navlink">
                                        PORTFOLIO
                                    </a>
                                </Link>
                            </li>
                            <li className="text-base uppercase tracking-[2.5px] my-8">
                                <Link href="/contact">
                                    <a className='navlink'>
                                        Contact
                                    </a>
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