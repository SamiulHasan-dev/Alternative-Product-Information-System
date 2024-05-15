import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const MyRecommendation = () => {
    const [queries, setQueries] = useState([])

    const { user } = useContext(AuthContext);

    console.log(queries)

    useEffect(() => {
        fetch(`http://localhost:5000/recommendProduct/${user?.email}`, {credentials: 'include'})
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
                fetch(`http://localhost:5000/recommendProductId/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
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
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Recommender Product</th>
        <th>Recommender Name</th>
        <th>Recommender Reason</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
            queries?.map((query, idx) => 
            <tr key={query._id}>
            <th>{idx+1}</th>
            <td>{query.productName}</td>
            <td>{query.rProductName}</td>
            <td>{query.recommenderName}</td>
            <td>{query.rReason}</td>
            <td onClick={()=> handleDelete(query._id)} className="btn btn-error text-white my-2"><MdDeleteForever /></td>
          </tr>
        )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyRecommendation;