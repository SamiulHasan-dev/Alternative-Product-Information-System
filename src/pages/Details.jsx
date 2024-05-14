
import {  Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const querie = useLoaderData();
    console.log(querie);


   

    return (
        <div className="max-w-5xl mx-auto my-14">
            <h2 className="text-center font-bold text-3xl mt-5 mb-14">Details Products</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="flex items-center flex-col md:flex-row">
                <figure><img src={querie.productImage} className="rounded-lg"  alt="Album" /></figure>
                <div>
                <div className="card-body space-y-4">
                    <h2 className="card-title font-extrabold">{querie.productName}</h2>
                    <p><span className="font-bold text-base">Brand: </span> {querie.productBand}</p>
                    <p><span className="font-bold text-base">Alternation Reason:</span> {querie.boycott}</p>
                    <p><span className="font-bold text-base">Title:</span> {querie.queryTitle}</p>

                    <div className="card-actions">
                        <p><span className="font-bold text-base underline">Product Added By:</span> {querie.name}</p>
                        <p><span className="font-bold text-base underline">Recommendation: </span> {querie.recommendationCount}</p>

                    </div>
                    <div className="text-center">
                        <Link to={`/recommendationForm/${querie._id}`}><button className="btn bg-[#2d3142] text-white w-full" >Recommendation</button></Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Details;