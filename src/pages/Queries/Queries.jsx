import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
    const queries = useLoaderData();
    const [layout, setLayout] = useState('grid-cols-3');
    const [searchText, setSearchText] = useState('');
    const [filteredQueries, setFilteredQueries] = useState([]);

    useEffect(() => {
        const filtered = queries.filter(query =>
            query.productName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredQueries(filtered);
    }, [queries, searchText]);

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.text.value;
        setSearchText(text);
    }

    return (
        <div className="bg-base-100">
            <div className="bg-base-100 pb-14 max-w-5xl mx-auto">
                <h2 className="mt-10 rounded-lg font-bold text-2xl text-center w-full mb-5">All Queries</h2>

                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-4">
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <div>
                                <input name='text' className="input input-bordered join-item" placeholder="Search" />
                            </div>
                            <div className="indicator">
                                <input className="btn join-item bg-[#2d3142] text-white" type="submit" value="Search" />
                            </div>
                        </div>
                    </form>
                    
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 bg-[#2d3142] text-white">Click To Change Layout <MdKeyboardArrowDown className="text-2xl" /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#2d3142] text-white rounded-box w-52">
                            <li onClick={() => handleLayoutChange('grid-cols-2')}><a>Column 2</a></li>
                            <li onClick={() => handleLayoutChange('grid-cols-3')}><a>Column 3</a></li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className={`grid grid-cols-2 md:${layout} gap-4 md:gap-10`}>
                    {filteredQueries.map(querie => (
                        <div key={querie._id}>
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
                                        <Link to={`/details/${querie._id}`}><button className="btn bg-[#2d3142] text-white w-full">Recommendation</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Queries;
