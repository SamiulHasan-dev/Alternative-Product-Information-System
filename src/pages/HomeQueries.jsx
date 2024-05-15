import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';



const HomeQueries = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        fetch('https://product-verse-server.vercel.app/productsHome')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);

    return (
        <div className="max-w-5xl mx-auto">

            <div className="my-10 space-y-2">
            <h2 className="text-3xl font-bold text-center text-yellow-500 ">Our Product</h2>
                <Fade>
                <p className="text-center text-slate-600">A focus on seamless integration and intuitive control, our system brings together cutting-edge technology and elegant design to elevate every corner of your home. Imagine effortlessly adjusting lighting, temperature, and ambiance to suit</p>
                </Fade>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    products?.slice(0, 6).map(product =>
                        <div key={product._id} data-aos="zoom-in">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={product.productImage} alt="Shoes" className="w-full" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-extrabold">{product.productName}</h2>
                                    <p><span className="font-bold text-base">Brand: </span> {product.productBand}</p>
                                    <p><span className="font-bold text-base">Alternation Reason:</span> {product.boycott}</p>
                                    <p><span className="font-bold text-base">Title:</span> {product.queryTitle}</p>

                                    <div className="card-actions">
                                        <p><span className="font-bold text-base underline">Product Added By</span>: {product.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }



            </div>



        </div>
    );
};

export default HomeQueries;