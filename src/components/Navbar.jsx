import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Bluestock IPO</Link>
      <div className="space-x-6">
        <Link to="/ipos" className="hover:underline">IPOs</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
