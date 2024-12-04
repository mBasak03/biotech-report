import React from 'react'

const FC = ({fullName, education, joiningDate, position, backgroundColor}) => {
  return (
    <div>
        {/* portion-1 */}
      <div>
        <div>
            <h2>Professor</h2>
            <p>{fullName}</p>
        </div>
        <div>
            <p>Education</p>
            <ul>
                {
                    education.map((index, item)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
      </div>

      {/* portion-2 */}
      <div className={`${backgroundColor} text-white p-4 rounded-lg shadow-md w-64`}>
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full h-32 w-32 object-cover"
        />
      </div>
      {/* Text Information */}
      <div className="text-center">
        <h2 className="text-xl font-bold">{fullName}</h2>
        <p className="text-sm">{position}</p>
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
  )
}

export default FC
