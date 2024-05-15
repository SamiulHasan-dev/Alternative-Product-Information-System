import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const RecommendationsForMe = () => {
    const {user} = useContext(AuthContext);
    const [queries, setQueries] = useState([])

    console.log(queries)

    useEffect(() => {
        fetch(`https://product-verse-server.vercel.app/recommendOthers/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setQueries(data);
            })
    }, [user]);

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
          </tr>
        )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RecommendationsForMe;