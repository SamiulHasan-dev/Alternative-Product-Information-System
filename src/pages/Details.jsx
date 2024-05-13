import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData();

    return (
        <div>
            <h2>Details {product._id}</h2>
        </div>
    );
};

export default Details;