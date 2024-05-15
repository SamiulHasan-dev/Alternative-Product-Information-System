import { Link } from "react-router-dom";
import img1 from '../../../public/Pc-removebg-preview.png'
import img2 from '../../../public/technology-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";




const Banner = () => {


    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className="bg-[#2d3142]" >
            <div className="max-w-6xl mx-auto ">
                <div className="hero md:h-[80vh] ">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className='w-1/2'>

                            <div className="carousel ">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src={img1} className="rounded-lg md:h-[350px] w-full md:w-[450px]" />
                                    <div className=" absolute flex  gap-3 justify-between transform -translate-y-1/2  bottom-5 right-8">
                                        <a href="#slide2" className="btn btn-circle bg-[#2d3142] text-white border-none">❮</a>
                                        <a href="#slide2" className="btn btn-circle bg-[#2d3142] text-white border-none">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src={img2} className="rounded-lg md:h-[350px] w-full md:w-[650px]" />
                                    <div className="absolute flex  gap-3 justify-between transform -translate-y-1/2  bottom-5 right-8">
                                        <a href="#slide1" className="btn btn-circle bg-[#2d3142] text-white border-none">❮</a>
                                        <a href="#slide1" className="btn btn-circle bg-[#2d3142] text-white border-none">❯</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='md:w-1/2 space-y-3' data-aos="fade-right" data-aos-duration="4000">
                            <h3 className="font-bold text-base text-yellow-700">Dive into Vast</h3>
                            <h1 className="font-bold text-3xl text-white">Where Innovation Meets Information <br />
                                Welcome to<span className="font-bold text-yellow-500">, ProductVerses</span></h1>
                            <p className=" text-white w-2/3">Your gateway to a world of alternative product insights. Dive deep into a diverse spectrum of innovative perspectives.</p>
                            <Link to="/register"><button className="btn bg-yellow-600 text-white border-0 md:mt-4">Register Here</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


