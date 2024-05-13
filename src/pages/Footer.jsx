import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../public/logo-removebg-preview.png'



const Footer = () => {
    return (
        <div className="">
            <div className="bg-[#2d3142]">
            <footer className="footer p-10  max-w-7xl mx-auto text-white">
                <nav>
                    <div className="flex items-center gap-2 ">
                    <img src={logo} alt="" className="w-[60px] h-[50px]" />
                    <h6 className="text-2xl text-yellow-500 font-bold">Product Verse</h6>
                    </div>
                    <p className="mb-3 "><small>Providing Alternative Product service since 2004</small></p>
                    <div className="flex items-center justify-around w-full">
                        <p className="text-2xl"><FaFacebook /></p>
                        <p className="text-2xl"><FaLinkedin /></p>
                        <p className="text-2xl"><FaTwitter /></p>
                        <p className="text-2xl"><FaGithub /></p>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-yellow-500 font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-yellow-500 font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="text-yellow-500 font-bold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-1/2 md:w-full join-item" />
                            <button className="btn bg-yellow-600 text-black join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
        </div>
    );
};

export default Footer;