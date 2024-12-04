import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    
      <>
        <nav className="bg-gradient-to-b from-gray-200 to-gray-100 shadow-md">
          <div className="flex items-center justify-between px-[20%] py-4 max-w-screen-xl mx-auto">
            {/* Logo Section */}
            {/* <div className="flex items-center space-x-2">
              <img
                src="/path/to/logo.png"
                alt="Logo"
                className="w-12 h-12"
              />
              <span className="font-semibold text-lg">Institute Name</span>
            </div> */}

            {/* Navigation Links */}
            <div className="flex space-x-[100px] text-gray-800 text-lg">
              <a href="/" className="hover:text-gray-600">Home</a>
              <a href="/courses" className="hover:text-gray-600">Courses</a>
              <a href="/faculty" className="hover:text-gray-600">Faculty</a>
              <a href="/contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </>

  );
}
