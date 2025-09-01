import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar, menuEnabled = true}) => {
  const navigate = useNavigate();

  return (
    <section className="flex shadow-md fixed justify-between p-4 px-10 md:px-16 mx-auto w-full z-[9999] bg-white">
      <ul className="flex items-center gap-4">
        <li>
          <button onClick={toggleSidebar} className={`${menuEnabled ? "block" : "hidden"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="#272727"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 152h336M88 256h336M88 360h336"
              />
            </svg>
          </button>
        </li>
        <li className="font-semibold text-2xl text-blue-500">LetsLearning</li>
      </ul>

      <button
        onClick={() => navigate("/")} 
        className="flex items-center rounded transition-transform duration-75 gap-2 p-2 px-6 md:px-2 text-white bg-blue-500 hover:bg-blue-400 font-semibold"
      >
        <span className="hidden md:block">Keluar</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 8 8">
          <path fill="#ffffff" d="M4 3L3 5h1v3H3V6H2v1H0V6h1l1-3H1L0 4V2h4l1-1l-1-1l-1 1l2 2h1v1H5m2-3H6L5 0h3v8H7"></path>
        </svg>
      </button>
    </section>
  );
};

export default Navbar;