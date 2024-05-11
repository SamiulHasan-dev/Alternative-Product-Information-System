import img from '../../public/about.png'

const AboutUs = () => {
    return (
        <div className='max-w-5xl mx-auto my-8'>
            <div className='flex items-center flex-col md:flex-row'>
                <div  className='w-1/2 text-left space-y-3'>
                    <h4 className='text-lg underline text-yellow-700 font-bold'>About Us</h4>
                    <h2 className='text-3xl font-bold'>Timeline or narrative outlining <br /> the <span className='font-extrabold text-yellow-500'>ProductVerse</span></h2>
                    <p className='text-base'>At ProductVerse, we are passionate about exploring the cutting-edge world of tech gadgets and innovations. Our mission is to provide a curated platform where technology enthusiasts can discover, compare, and embrace the latest advancements in the tech industry. With a focus on quality, innovation, and sustainability...</p>
                </div>
                <div >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;