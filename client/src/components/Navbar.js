import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white border-b-4 border-primary">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-gray-700 text-2xl font-bold">
          WurkIt
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
