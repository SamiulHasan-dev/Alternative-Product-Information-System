import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";



const HomeQueries = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/productsHome')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);

    return (
        <div className="max-w-5xl mx-auto">

            <div className="my-10 space-y-2">
                <h2 className="text-3xl font-bold text-center">Our Crafts</h2>
                <Fade>
                    <p className="text-center w-[70%] mx-auto text-slate-600">Our craft collection of DIY projects a community where crafters of all levels can come together to share ideas, tips, and inspiration, a creative outlet, or simply some inspiration, we invite you to dive into our craft section and unleash your imagination.</p>
                </Fade>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    products?.slice(0, 6).map(product =>
                        <div key={product._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={product.productImage} alt="Shoes" /></figure>
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