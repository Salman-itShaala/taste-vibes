import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex text-2xl items-center justify-between  max-w-7xl h-20 m-auto">
      <Link to="/" className="flex items-center gap-4 font-bold">
        <FaHamburger />
        Taste Vibes
      </Link>

      <div className="flex gap-4">
        <button className="cursor-pointer">
          <CiSearch />
        </button>
        <button className="cursor-pointer">
          <VscThreeBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
