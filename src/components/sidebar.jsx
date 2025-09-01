import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarList }) => {
  const location = useLocation();

  return (
    <div className="container z-40 p-4 pt-8 bg-blue-600 ps-6 text-white h-screen">
      <ul className="flex flex-col gap-2">
        {sidebarList.map(({ judul, materi }, index) => {
          const isActive = location.pathname === materi; // ✅ bandingkan langsung dengan materi

          return (
            <li key={index}>
              <Link
                to={materi}
                className={`block p-2 rounded transition ${
                  isActive ? "font-bold bg-blue-700" : "font-normal hover:bg-blue-500"
                }`}
              >
                <h2>{judul}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;