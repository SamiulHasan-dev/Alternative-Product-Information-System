import { NavLink } from "react-router-dom";


const NavBar = () => {

    const navLink = <>
     <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-yellow-500 text-base' : ' text-white text-base'} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-yellow-500 text-base' : ' text-white text-base'} to="/allCraft">All Art & craft Items</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-yellow-500 text-base' : ' text-white text-base'} to="/addCraft">Add Craft Item</NavLink></li>
    </>


    return (
        <div className="bg-[#2d3142] border-b border-yellow-200 py-1">
            <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#2d3142]">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl md:text-3xl text-white">Product<span className="text-yellow-500">Verse</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;