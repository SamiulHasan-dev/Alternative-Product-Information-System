import { useContext, } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const RecommendationForm = () => {
    const queries = useLoaderData();
    const {user} = useContext(AuthContext);


    const queryIncrease = (queries.recommendationCount + 1);
    console.log(queryIncrease);
    console.log(queries._id);

    const handleCount = () =>{

         //send data to the server
         fetch(`http://localhost:5000/products/${queries._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(queryIncrease)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    } 
    

    const handleAddRecommended = event => {
        event.preventDefault();

        const form = event.target;
        const rTitle = form.rTitle.value;
        const rProductName = form.rProductName.value;
        const rProductImage = form.rProductImage.value;
        const rReason = form.rReason.value;

        const productId = queries._id;
        const productName= queries.productName;
        const userEmail = queries.email;
        const userName = queries.name;
        const recommenderEmail = user?.email;
        const recommenderName = user?.name;
        const newRecommendationCount = (queries.recommendationCount + 1) ;

       
        const newRecommendProduct = {rTitle,rProductName, rProductImage, rReason,  productId,productName, userEmail,userName , recommenderEmail, recommenderName, newRecommendationCount}
        console.log(newRecommendProduct);

        fetch('http://localhost:5000/recommendProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newRecommendProduct)
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



    console.log(queries);
    return (
        <div>
            <h2 className="  font-bold mt-7 text-3xl text-center w-full ">Add Your Recommendation</h2>
            <div className="card shrink-0 w-full">

                <form onSubmit={handleAddRecommended}  className="card-body">
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 1 Recommendation Title and Recommended product Name*/}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Recommendation Title</span>
                            </label>
                            <input name="rTitle" type="text" placeholder="Recommendation Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Recommended product Name</span>
                            </label>
                            <input name="rProductName" type="text" placeholder="Recommended product Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 2 Recommended Product Image and Recommendation reason */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Recommended Product Image URL</span>
                            </label>
                            <input name="rProductImage" type="text" placeholder="Recommended Product Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Recommendation reason</span>
                            </label>
                            <input name="rReason" type="text" placeholder="Recommendation reason" className="input input-bordered" required />
                        </div>
                    </div>
     
                    
                    <div className="form-control mt-6">
                        <input onClick={handleCount}  type="submit" className="btn text-white bg-[#2d3142]" value="ADD RECOMMENDATION PRODUCT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecommendationForm;