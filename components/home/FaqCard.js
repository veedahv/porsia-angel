
// import styles from '../../../styles/Landing.module.css';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import { useRef, useState } from 'react'

export default function FaqCard({ index, title, children }) {
    const refText = useRef();
    const [active, setActive] = useState(false);
    const toggleCheck = () => {
        refText.current.checked = !refText.current.checked;
        // console.log(document.querySelectorAll('.faqradio').forEach(radio => radio.checked));

        // document.querySelectorAll('.faqradio').forEach(radio => {
        //     // console.log(radio);
        //     // console.log(refText.current);
        //     // console.log(radio.checked);

        //     refText.current === radio ?
        //         setActive(refText.current.checked) :
        //         setActive(false);
        //     refText.current === radio ?
        //         console.log(refText.current.checked) :
        //         console.log("hoy");
        // });
        // document.querySelectorAll('.faqradio').forEach(radio => console.log(radio.checked));
        // console.log(refText.current);
        // console.log(refText.current.checked);
    }
    const checkStatus = (e) => {
        // refText.current.checked = !refText.current.checked;
        // console.log(refText.current.checked);
        // setActive(refText.current.checked);
        console.log('e');
        console.log(e.target);
        console.log(e.target.checked);
    }

    return (
        // <label htmlFor={"faq" + index} className="block bg-white bg-opacity-80 p-12 rounded-[40px] my-5" onClick={() => toggleCheck()}>
        <li className="my-4" onClick={() => toggleCheck()}>
            {/* <li className="my-4"> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} className={styles.faqcheck + ' hidden'} onChange={(e) => checkStatus(e)} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} className={styles.faqcheck + ' '} onChange={(e) => checkStatus(e)} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' '} onClick={() => toggleCheck()} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' faqradio'} onChange={() => toggleCheck()} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} className={styles.faqcheck + ' hidden'} onChange={(e) => checkStatus(e)} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' hidden'} onChange={(e) => checkStatus(e)} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' hidden'} onChange={checkStatus} /> */}
            {/* <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' hidden faqradio'} /> */}
            <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' hidden'} />
            <div className={styles.faqhead + " flex gap-1 pr-2 w-fit text-[#616161] border-b border-current"}>
                <span className="text-sm tracking-[2.5px] uppercase">
                    {/* How do I choose a design style? */}
                    {title}
                    {/* {'isactive: ' + active} */}
                </span>
                {/* { JSON.stringify(refText) } */}
                {/* { refText?.current } */}
                {/* { refText.current?.checked } */}
                <span className={styles.open + " hidden"}>
                <Image src="/assets/arrow-up.svg" width="12px" height="6px" alt="accordion arrow key up" />
                    </span>
                <span className={styles.close + " inline-block"}>
                <Image src="/assets/arrow-down.svg" width="12px" height="6px" alt="accordion arrow key up" />
                    </span>
                {/* {
                    active ?
                    <Image src="/assets/arrow-up.svg" width="12px" height="6px" className='open-img' alt="accordion arrow key up" /> :
                <Image src="/assets/arrow-down.svg" width="12px" height="6px" className='close-img' alt="accordion arrow key up" />
                } */}
            </div>
            {/* <div className="py-4">
                <p className="text-lg tracking-[1.5px] leading-loose">
                  Go on Pinterest and pin some designs that you love.
                  Then try to categorize these designs! That’s what we did before we started.
                </p>
              </div> */}
            {/* <div className={styles.faqhead + " flex justify-between items-center gap-14 w-full"}>
                <h2 className="text-xl flex items-start">
                    <span className="mr-5 font-light">{index}.</span>
                    <span className="font-semibold">
                        {title}
                    </span>
                </h2>
            </div> */}
            <div className={styles.faqanswer + " max-h-0 text-lg overflow-hidden"}>
                {children}
            </div>
        </li>
        // <div className="block bg-white bg-opacity-80 p-12 rounded-[40px] my-5" onClick={() => toggleCheck()}>
        //     <input type="radio" name="faqs" id={"faq" + index} value={"faq" + index} ref={refText} className={styles.faqcheck + ' hidden'} />
        //     <div className={styles.faqhead + " flex justify-between items-center gap-14 w-full"}>
        //         <h2 className="text-xl flex items-start">
        //             <span className="mr-5 font-light">{index}.</span>
        //             <span className="font-semibold">
        //                 {title}
        //             </span>
        //         </h2>
        //         <img src={dropdown.src} alt="" className={styles.dropdown} />
        //     </div>
        //     <div className={styles.faqanswer + " max-h-0 text-lg overflow-hidden"}>
        //         { children }
        //     </div>
        // </div>
        // </label>
    )
}

