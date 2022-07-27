
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useRef, useState } from 'react';

export default function FaqCard({ index, title, children }) {
    const refText = useRef();
    const toggleCheck = () => {
        refText.current.checked = !refText.current.checked;
    }

    return (
        <li className="my-4" onClick={() => toggleCheck()}>
            <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' hidden'} />
            <div className={styles.faqhead + " flex gap-1 pr-2 w-fit text-[#616161] border-b border-current"}>
                <span className="text-xs md:text-sm tracking-[1.5px] md:tracking-[2.5px] uppercase">
                    {title}
                </span>
                <span className={styles.open + " hidden"}>
                    <Image src="/assets/arrow-up.svg" width="12px" height="6px" alt="accordion arrow key up" />
                </span>
                <span className={styles.close + " inline-block"}>
                    <Image src="/assets/arrow-down.svg" width="12px" height="6px" alt="accordion arrow key up" />
                </span>
            </div>
            <div className={styles.faqanswer + " max-h-0 text-sm md:text-lg overflow-hidden"}>
                {children}
            </div>
        </li>
    )
}

