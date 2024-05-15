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
            <h2 className='text-4xl font-bold text-yellow-500 mb-2'>FAQs</h2>
            <Fade> 
                <p className="text-center w-[70%] mx-auto text-slate-600">Have any questions? Here you will find the answer most valued by our partners, along with access to step-by-step instructions and support</p>
            </Fade>
           
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center'>
                <div className='flex-1' data-aos="zoom-in" data-aos-duration="4000">
                <img src={faqImg} alt="" />
            </div>
            <div className="join join-vertical w-full flex-1" data-aos="fade-right" data-aos-duration="4000">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    How does the online group study work?
                    </div>
                    <div className="collapse-content">
                        <p>Our platform facilitates real-time collaboration among students. You can join existing study groups or create your own. Once in a group, you can discuss topics, share resources, and work together on assignments or projects.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Is the platform accessible on all devices?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, our website is optimized for use on desktops, laptops, tablets, and smartphones. You can participate in group study sessions from any device with an internet connection.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do I join a study group?
                    </div>
                    <div className="collapse-content">
                        <p>Simply browse through the available study groups on our platform and join the ones that match your interests or academic needs. You can also send invitations to friends or classmates to join your study group.</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default FaqSection;