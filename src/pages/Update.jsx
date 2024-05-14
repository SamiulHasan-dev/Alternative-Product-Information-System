import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const query = useLoaderData();

    const handleUpdateQueries = event => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const productBand = form.productBand.value;
        const productImage = form.productImage.value;
        const queryTitle = form.queryTitle.value;
        const boycott = form.boycott.value;
       
        const newProduct = { productName, productBand, productImage, queryTitle, boycott }
        console.log(newProduct);

        //send data to the server
        fetch(`http://localhost:5000/products/${query._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Updated'
                    })

                }
            })
    }


    return (
        <div>
            <h2 className="  font-bold mt-7 text-3xl text-center w-full ">Add Your Queries</h2>
            <div className="card shrink-0 w-full">

                <form onSubmit={handleUpdateQueries} className="card-body">
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 1 Product Name and Product Brand*/}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Product Name</span>
                            </label>
                            <input defaultValue={query.productName} name="productName" type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Product Brand</span>
                            </label>
                            <input defaultValue={query.productBand} name="productBand" type="text" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 2 Product Image-URL and Query TItle */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Product Image-URL</span>
                            </label>
                            <input defaultValue={query.productImage} name="productImage" type="text"  className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Query TItle</span>
                            </label>
                            <input defaultValue={query.queryTitle} name="queryTitle" type="text" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 3 Boycotting Reason Details  */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Boycotting Reason Details</span>
                            </label>
                            <input defaultValue={query.boycott} name="boycott" type="text"  className="input input-bordered" required />
                        </div>
                        
                    </div>

     
                    
                    <div className="form-control mt-6">
                        <input  type="submit" className="btn text-white bg-[#2d3142]" value="UPDATE QUERIES" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;