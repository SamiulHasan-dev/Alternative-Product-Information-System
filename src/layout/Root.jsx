import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar/NavBar";


const Root = () => {
    return (
        <div className=" bg-base-200">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;