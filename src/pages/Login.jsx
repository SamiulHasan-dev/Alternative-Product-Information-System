import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";


const Login = () => {

    const { signIn, logInWithGoogle, logInWithGitHub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('location in login page',location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login successfully');

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500)

            })
            .catch(error => {
                console.error(error);
                toast.error('Invalid email or password');
            })
    }

    
    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Google logged successfully');

                // navigate after login
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500)
            })
            .catch(error => {
                console.error(error);
                toast.error('Google Login Failed');
            })
    }

    const handleGitHubLogIn = () =>{
        logInWithGitHub()
        .then(result =>{
            console.log(result.user);
            toast.success('GitHub Login Successfully');

            
            setTimeout(() => {
                navigate(location?.state ? location.state : '/');
            }, 1500)
        })
        .catch(error =>{
            console.error(error);
            toast.error('GitHub Login Failed');
        })
    }

    return (
        <div className="my-10 max-w-6xl mx-auto bg-base-200">
            <h2 className="text-3xl text-center font-bold py-10 rounded-lg mb-5 ">Login Now!</h2>

            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center flex-1">

                    <form onSubmit={handleLogin} className="card-body w-full mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#2d3142] text-white">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have an account? <Link className=" font-bold text-yellow-600" to="/register">Register</Link></p>

                </div>
                <div className="divider lg:divider-horizontal">OR</div>

                <div className="grid flex-1 flex-grow card rounded-box place-items-center">
                    <div className="card-body mx-auto w-full">

                        <div className="mx-auto">
                        <img src={"https://www.merideanoverseas.in/frontend/images/web-student-login-img.png"}  className="h-[300px] w-[450px]" alt="" />
                        </div>

                        <button onClick={handleGoogleLogIn} className="btn bg-[#2d3142] text-white "><AiFillGoogleCircle className="text-lg"></AiFillGoogleCircle > Login With Google</button>



                        <button onClick={handleGitHubLogIn} className="btn bg-[#2d3142] text-white"><FaGithub className="text-lg"></FaGithub> Login With GitHub</button>

                        


                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Login;