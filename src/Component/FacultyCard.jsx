import React from "react";
import { Separator } from "../components/ui/separator";

const FacultyCard = ({
  fullName,
  education,
  joiningDate,
  position,
  backgroundColor,
  displayPicture,
  index,
  additionalPosition,
  isLast
}) => {
  return (
    <div className=" flex flex-col">
      

  
    <div className={`flex flex-col ${index%2? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center gap-8 p-6`}>
      {/* Left Portion */}
      
      <div className="bg-neutral-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700">Professor</h2>
        <p className="text-lg text-yellow-600 mt-1">{fullName}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Education</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Portion */}
      <div
        className={`${backgroundColor} hover:opacity-90 text-white p-6 rounded-lg shadow-lg w-full max-w-xs flex flex-col items-center`}
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={displayPicture}
            alt="Profile"
            className="rounded-full h-32 w-32 object-cover"
          />
        </div>
        {/* Text Information */}
        <div className="text-center">
          <h2 className="text-xl font-bold">{fullName}</h2>
          <p className="text-sm">{position}</p>
          {
            additionalPosition && <p className=" text-xl">{additionalPosition}</p>
          }
          <p className="text-sm mt-1">Joined Institute In {joiningDate}</p>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <Separator orientation='horizontal' className= {`bg-separator w-[60%] h-[2px] mx-auto my-6 ${isLast && "opacity-0"}`} />
    </div>
  );
};

export default FacultyCard;
