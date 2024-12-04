import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    
      <div className=" bg-bgBrown">
        <nav >
          <div className="flex items-center justify-between px-[20%] py-4 max-w-screen-xl mx-auto">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 ml-[-80%] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/740e/5cb5/cc336ab0e9a675f40debd7e8e6796674?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m75huvxa88nZ3JS-73A0Dc9VW00h9HONYE04lvHK1YtOkWsvfYRqdVF5etK~RmfgXpTERYr18TMDyuf9jQteehNpqmu-wop~tzQobCEVCWivG-kW9EIWDdvo1xQCLiKK57eT0enPkKrkEWIelkXY1V4Ex194wCSV5dGDR5dFyJeE6L~hXG8iCnWGQIHipz~wVuelqkomVXebgaiWFBGRAmmaphW7Cl-gRHToa5qacuFtPmt2ak-p-9YAuH9XZQh5SBo729VN1s8hM0bNZvfBJC6E9VhWTCwwT1K76devmbqpNNKwXZE6wBThq-B2CiN-QhUOGIpdw88y8OT5oHED6w__"
                alt="Logo"
                className="w-[124px] h-[124px]"
              />
              
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-[100px] text-gray-800 text-xl">
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
      </div>

  );
}
