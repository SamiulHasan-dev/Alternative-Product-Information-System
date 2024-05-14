import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyQueries = () => {

    const [queries, setQueries] = useState(null)

    const { user } = useContext(AuthContext);

    console.log(queries)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setQueries(data);
            })
    }, [user]);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = queries.filter(itm => itm._id !== id);
                            setQueries(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div className="bg-base-100">
            <div className="hero" style={{ backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlMTlfM2RfZ3JheV9zdGFnZV9iYWNrZ3JvdW5kX3Byb2R1Y3RfZGlzcGxheV9fcG9kaV9hZmU1NmFmNi0xM2U4LTQ1YjItOGIwOC0yYjNjOWNkMDJmMjJfMS5qcGc.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">To Create new products, meticulously curated for quality and style. From electronics to decor, ADD the perfect Alternative Product for you!</p>
                        <Link to="/addQueries"><button className="btn text-yellow-500 border-yellow-500 btn-ghost">ADD YOUR QUERY</button></Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 pb-14 max-w-5xl mx-auto mt-6">
                {
                    queries?.length ? <h2 className=" p-5 rounded-lg font-bold text-2xl text-center w-full mb-10">Queries Added From Me</h2> 
                    :
                    <h2 className=" p-5 rounded-lg font-bold text-2xl text-center w-full my-7 md:my-16">Please Add Your Queries</h2>
                }
                
                

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
                                    <div className="text-center">
                                        <Link to={`/details/${querie._id}`}><button className="btn bg-[#2d3142] text-white w-full my-5">View Details</button></Link>

                                        <div className="flex gap-4">
                                            <Link className="flex-1" to={`/update/${querie._id}`}><button className="btn bg-yellow-500 text-white w-full">Update</button></Link>
                                            <button onClick={() => handleDelete(querie._id)} className="btn bg-red-500 text-white flex-1">Delete</button>
                                        </div>
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

export default MyQueries;