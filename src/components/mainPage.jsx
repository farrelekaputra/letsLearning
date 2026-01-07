import { useState, useEffect } from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Navbar from './navbar.jsx';
import Sidebar from './sidebar.jsx';

const SidebarOsi = [
  { judul: "Pengantar OSI Model", materi: "/mainPage/osiLayer" },
  { judul: "Lapisan OSI Model", materi: "/mainPage/osi/pengertian" },
  { judul: "Physical Layer", materi: "/mainPage/osi/physical" },
  { judul: "Data Link Layer", materi: "/mainPage/osi/dataLink" },
  { judul: "Network Layer", materi: "/mainPage/osi/network" },
  { judul: "Transport Layer", materi: "/mainPage/osi/transport" },
  { judul: "Session Layer", materi: "/mainPage/osi/session" },
  { judul: "Presentation Layer", materi: "/mainPage/osi/presentation" },
  { judul: "Application Layer", materi: "/mainPage/osi/application" }
]

const SidebarWebDev = [
    { judul: "Pengantar Website", materi: "/mainPage/webDev" },
    { judul: "Apa itu HTML", materi: "/mainPage/webDev/penjelasanHTML" },
    { judul: "Apa itu CSS", materi: "/mainPage/webDev/penjelasanCSS" },
    { judul: "Apa itu Javascript", materi: "/mainPage/webDev/penjelasanDatabase" },
]

const SidebarDesainWeb = [
    { judul: "Apa itu Desain Web", materi: "/mainPage/desainWebsite" },
    { judul: "Fungsi Desain Web", materi: "/mainPage/desainWebsite/kegunaanDesainWeb" },
    { judul: "Elemen Desain Web", materi: "/mainPage/desainWebsite/elemenDesainWeb" },
    { judul: "Software Desain Web", materi: "/mainPage/desainWebsite/softwareDesainWeb" },
]

const HalamanUtama = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 LOGIKA REUSABLE SIDEBAR
  let sidebarList = [];

  if (pathname.startsWith("/mainPage/osi")) {
    sidebarList = SidebarOsi;
  } else if (pathname.startsWith("/mainPage/webDev")) {
    sidebarList = SidebarWebDev;
  } else if (pathname.startsWith("/mainPage/desainWebsite")) {
    sidebarList = SidebarDesainWeb;
  }

  return (
    <section className="page1 flex flex-col h-auto md:h-screen mx-auto">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} menuEnabled={true} />
      <div className="isikonten w-full mx-auto flex h-auto">
          <div
            className={`
              fixed top-16 self-start h-screen left-0 transition-transform duration-300 w-3/4 md:w-auto md:ps-8 pe-4
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              bg-blue-600
            `}
          >
            <Sidebar sidebarList={sidebarList} />
          </div>

          <div
            className={`
              flex w-full pt-20 transition-all duration-300 md:px-8 px-4 mb-8
              ${isSidebarOpen ? 'md:ms-64' : 'md:w-full'}
            `}
          >
            <Outlet />
          </div>
      </div>
    </section>
  );
};

export default HalamanUtama;
