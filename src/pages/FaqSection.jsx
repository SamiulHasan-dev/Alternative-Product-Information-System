import { Fade } from 'react-awesome-reveal';
import faqImg from '../../public/FAQ-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FaqSection = () => {

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className='max-w-5xl mx-auto my-14'>
            <div className='text-center'>
            <h2 className='text-4xl font-bold text-yellow-500 mb-5'>FAQ</h2>
            <Fade> 
                <p className="text-center w-[70%] mx-auto text-slate-600">Have any questions? Here You will find the all solution of your question for our product to make your life easier.</p>
            </Fade>
           
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center'>
                <div className='flex-1' data-aos="zoom-in" data-aos-duration="4000">
                <img src={faqImg} className='w-full' alt="" />
            </div>
            <div className="join join-vertical w-full flex-1" data-aos="fade-right" data-aos-duration="4000">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    What is the Alternative Product Information System (APIS)?
                    </div>
                    <div className="collapse-content">
                        <p>APIS is a comprehensive database and platform designed to provide alternative product information to consumers. It offers detailed insights into products that are eco-friendly, sustainable, ethically sourced, or meet specific dietary or lifestyle preferences.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Is the information on APIS reliable?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we strive to ensure the accuracy and reliability of the information provided on APIS. We source data from reputable sources, including product manufacturers, certification bodies, and user-contributed reviews. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Can I contribute to APIS by submitting product information or reviews?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we welcome contributions from users to enhance the database and provide more comprehensive information to the community. You can submit product information, reviews, or corrections through the APIS website,</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default FaqSection;