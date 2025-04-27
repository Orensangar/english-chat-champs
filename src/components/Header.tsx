
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-blue flex items-center gap-2">
          <span className="text-brand-yellow">English</span>Chat Champs
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/level-selection" className="text-gray-700 hover:text-brand-blue transition-colors">
                Pilih Level
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
