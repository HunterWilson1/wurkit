import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-rose-400 border-b-4 border-primary p-2">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-gray-700 text-2xl font-bold">
          WurkIt
        </Link>
        <nav>
          <div>
            <Link to="/login" className="mr-4 font-bold">
              Login
            </Link>
            <Link to="/signup" className="font-bold">
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
