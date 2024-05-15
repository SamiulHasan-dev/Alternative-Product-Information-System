import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";



const AllRecommendation = () => {
    const [queries, setQueries] = useState(null)

    const { user } = useContext(AuthContext);

    console.log(queries);

    useEffect(() => {
        fetch(`https://product-verse-server.vercel.app/recommendProduct`)
            .then(res => res.json())
            .then(data => {
                setQueries(data);
            })
    }, [user]);

  

    return (
        <div className="max-w-5xl mx-auto my-10"> 
            <h2 className="text-3xl text-center font-bold my-8">All Recommendation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    queries?.slice(0, 6).map(query =>
                        <div key={query._id} >
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={query.rProductImage} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-extrabold">{query.rProductName}</h2>
                                    <p><span className="font-bold text-base">Replace From : </span> {query.productName}</p>
                                    <p><span className="font-bold text-base">Alternation Reason:</span> {query.rReason}</p>
                                    <p><span className="font-bold text-base">Title:</span> {query.rTitle}</p>

                                    <div className="card-actions">
                                        <p><span className="font-bold text-base underline">Recommender Name</span>: {query.recommenderName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }



            </div>
        </div>
    );
};

export default AllRecommendation;