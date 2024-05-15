import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const AddQueries = () => {
    const { user } = useContext(AuthContext);
    const startTime = Date.now()

    const handleAddQueries = event => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const productBand = form.productBand.value;
        const productImage = form.productImage.value;
        const queryTitle = form.queryTitle.value;
        const boycott = form.boycott.value;
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const currentTime = startTime;
        const recommendationCount = 0 ;
       
        const newProduct = { productName, productBand, productImage, queryTitle, boycott,name, email, image,  currentTime, recommendationCount }
        console.log(newProduct);

        fetch('https://product-verse-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
            })

            form.reset();

        
    }


    return (
        <div>
            <h2 className="  font-bold mt-7 text-3xl text-center w-full ">Add Your Queries</h2>
            <div className="card shrink-0 w-full">

                <form onSubmit={handleAddQueries} className="card-body">
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 1 Product Name and Product Brand*/}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Product Name</span>
                            </label>
                            <input name="productName" type="text" placeholder="Product Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Product Brand</span>
                            </label>
                            <input name="productBand" type="text" placeholder="Product Brand" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 2 Product Image-URL and Query TItle */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Product Image-URL</span>
                            </label>
                            <input name="productImage" type="text" placeholder="Product Image-URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Query TItle</span>
                            </label>
                            <input name="queryTitle" type="text" placeholder="Query TItle" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 3 Boycotting Reason Details  */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Boycotting Reason Details</span>
                            </label>
                            <input name="boycott" type="text" placeholder="Boycotting Reason Details" className="input input-bordered" required />
                        </div>
                        
                    </div>

     
                    
                    <div className="form-control mt-6">
                        <input  type="submit" className="btn text-white bg-[#2d3142]" value="ADD QUERIES" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQueries;