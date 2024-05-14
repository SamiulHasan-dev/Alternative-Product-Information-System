import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AllRecommendation = () => {
    const [queries, setQueries] = useState(null)

    const { user } = useContext(AuthContext);

    console.log(queries);

    useEffect(() => {
        fetch(`http://localhost:5000/recommendProduct`)
            .then(res => res.json())
            .then(data => {
                setQueries(data);
            })
    }, [user]);

    return (
        <div>
            
        </div>
    );
};

export default AllRecommendation;