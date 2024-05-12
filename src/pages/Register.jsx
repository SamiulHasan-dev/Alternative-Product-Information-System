import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoURL = form.get("photoURL");
        const email = form.get("email");
        const password = form.get("password");

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lower case characters.');
            return;
        }
        
        try {
            const result =  createUser(email, password, name, photoURL);
            console.log("User registered:", result.user);
            toast.success('Registration Successfully');
            setTimeout(() => {
                navigate('/');
            }, 1500);
            
        } 
        catch (error) {
            console.error("Registration failed:", error.message);
            toast.error('Registration Failed');
        }

        


    };
    
    return (
        <div className="my-10">
            
            <h2 className="text-3xl  text-center font-bold py-5 rounded-lg ">Register Here!</h2>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative mb-4">
                        <input
                            className="w-full py-2 px-4 input input-bordered"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="" required />
                        <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-[#2d3142] text-white">Register</button>
                </div>
            </form>
            <p className="text-center mb-4">Already have an account? <Link className="text-yellow-600 font-bold" to="/login">Login</Link></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;