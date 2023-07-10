import foody from "../assest/images/thumb-238653.jpg"
import { cart } from "../assest/icons"
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <nav id="Header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                   <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text">
                   <img src={foody} alt="logo" className="w-30 h-20 object-cover"/>
                   </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart">
                        {cart}
                    </Link>
                    <Link to="/login">log In</Link>
                    <Link to ="/register">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}