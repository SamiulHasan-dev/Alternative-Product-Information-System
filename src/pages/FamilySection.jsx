import { Fade } from "react-awesome-reveal";
import { HiOutlineUsers } from "react-icons/hi";
import {  MdOutlineRecommend, MdProductionQuantityLimits } from "react-icons/md";
import { SlCalender } from "react-icons/sl";


const FamilySection = () => {
    return (
        <div className="max-w-5xl mx-auto mb-8 mt-6">
            <div className=" py-4 rounded-lg mt-7 mb-1">
                <h2 className="text-3xl font-bold text-center text-yellow-500">About Family</h2>
            </div>
            <Fade>
            <p className="mb-7 text-center w-3/4 mx-auto text-slate-600"> Featuring modern amenities and plush furnishings to ensure a restful Products. </p>
            </Fade>

            <div className="flex flex-col md:flex-row md:gap-3">
                {/* card 1 */}
                <div className="card bg-base-100  flex-1" data-aos="fade-up"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        <SlCalender className="text-4xl font-extrabold text-[#0ea5e9]"></SlCalender>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">10+</h2>
                        <p className="text-lg ">Years</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100  flex-1" data-aos="fade-down"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                    <MdProductionQuantityLimits className="text-4xl font-extrabold text-[#a5d35b]" />
                        
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">54+</h2>
                        <p className="text-lg ">Products</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 flex-1" data-aos="fade-down"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        <HiOutlineUsers className="text-4xl font-extrabold text-[#f87171]"></HiOutlineUsers>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">25k+</h2>
                        <p className="text-lg">Users</p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card bg-base-100 flex-1" data-aos="fade-up"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        
                    <MdOutlineRecommend className="text-4xl font-extrabold text-[#06b6d4]" />
                        
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">6.5k</h2>
                        <p className="text-lg">Recommends</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default FamilySection;