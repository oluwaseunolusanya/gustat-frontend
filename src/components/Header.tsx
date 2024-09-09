import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className='border-b-2 border-b-red-800 py-6'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link 
                to="/"
                className="flex gap-2 text-3xl font-bold tracking-tight text-red-800"
            >
                <img src={logo} className="max-h-[36px] object-cover"/>
                <div>Gustat</div>
            </Link>
            <div className="md:hidden">
              <MobileNav />
            </div>
            <div className="hidden md:block">
              <MainNav />
            </div>
        </div>
    </div>
  );
};

export default Header;
