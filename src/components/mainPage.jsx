import { useState, useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './navbar.jsx';
import Sidebar from './sidebar.jsx';

const HalamanUtama = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="page1 flex flex-col h-auto md:h-screen mx-auto">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} menuEnabled={true} />
      <div className="isikonten w-full mx-auto flex h-auto">
          <div
            className={`
              fixed top-16 self-start h-screen left-0 transition-transform duration-300 w-1/2 md:w-auto md:ps-8 pe-4
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              bg-blue-600
            `}
          >
            <Sidebar
              sidebarList={[
                { judul: "Pengantar OSI Model", materi: "/mainPage/osiLayer" },
                { judul: "Lapisan OSI Model", materi: "/mainPage/pengertianLayer" },
                { judul: "Physical Layer", materi: "/mainPage/physicalLayer" },
                { judul: "Data Link Layer", materi: "/mainPage/DataLink" },
                { judul: "Network Layer", materi: "/mainPage/networklayer" },
                { judul: "Transport Layer", materi: "/mainPage/transportlayer" },
                { judul: "Session Layer", materi: "/mainPage/sessionlayer" },
                { judul: "Presentation Layer", materi: "/mainPage/presentationlayer" },
                { judul: "Application Layer", materi: "/mainPage/applicationlayer" },
              ]}
            />
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
