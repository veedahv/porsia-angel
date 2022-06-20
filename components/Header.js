 

 import React, { useState } from 'react';
//  import Link from 'next/link';
 import Image from 'next/image';


const Header = () => {
    
      const [active, setActive ] = useState(false);
    
      const handleClick = () => {
        setActive(!active);
      }

    return (
        <header className="header relative">
            <div className="conatainer mx-auto px-4">
                <Image src="/assets/logo-dark.png" width="192px" height="19px" className='mx-auto' />
{/* <Image src='/logo.png' width='91px' height='90px' /> */}
                <button className="absolute top-0 bottom-0 right-0 bg-primary px-4"></button>
                </div>
            </header>
    )
}


export default Header;