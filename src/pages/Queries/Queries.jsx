import {  Link, useLoaderData } from "react-router-dom";


const Queries = () => {
    const queries = useLoaderData();

    return (
        <div className="bg-base-100">
            <div className="bg-base-100 pb-14 max-w-5xl mx-auto">
            <h2 className=" p-5 rounded-lg font-bold text-2xl text-center w-full mb-10">All Queries</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    queries?.map(querie => <div key={querie._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={querie.productImage} className="w-full h-[230px]" alt="Shoes" /></figure>
                            <div className="card-body">
                                    <h2 className="card-title font-extrabold">{querie.productName}</h2>
                                    <p><span className="font-bold text-base">Brand: </span> {querie.productBand}</p>
                                    <p><span className="font-bold text-base">Alternation Reason:</span> {querie.boycott}</p>
                                    <p><span className="font-bold text-base">Title:</span> {querie.queryTitle}</p>

                                    <div className="card-actions">
                                        <p><span className="font-bold text-base underline">Product Added By:</span> {querie.name}</p>
                                        <p><span className="font-bold text-base underline">Recommendation: </span> {querie.recommendationCount}</p>
                                        
                                    </div>
                                    <div className="text-center space-x-5">
                                    <Link to={`/details/${querie._id}`} ><button className="btn bg-[#2d3142] text-white w-full">Recommendation</button></Link>
                                </div>
                                </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Queries;