import Navbar from "../shared/Navbar";
import {NavLink }from "react-router-dom"

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero ">
  <div className="hero-content flex-col ">
    <p className="text-2xl">Please Login here</p>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body ">
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="pb-4 px-3">Do not have an Account? <NavLink to="/register" className="text-green-700 font-bold">Register</NavLink></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;