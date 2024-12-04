import React from 'react'
import FacultyCard from '../Component/FacultyCard'
import { faculties } from '../assets/faculties'
import { Button } from '../components/ui/button'
const Faculty = () => {
 

  
  return (
    <div className=' bg-bgBrown flex flex-col'>
      <div className=" flex flex-col items-center justify-center">
        <p className=" text-navYellow font-semibold text-[64px]">Meet Our</p>
        <p className="text-navGreen font-semibold text-[64px]  mt-[-50px] ml-16">Faculty.</p>
      </div>

      {
        faculties.map((item, index)=>(
          
          <FacultyCard
          fullName={item.fullName}
          education={item.education}
          joiningDate={item.joiningDate}
          position={item.position}
          backgroundColor={item.backgroundColor}
          displayPicture={item.displayPicture}
          index={index}
          additionalPosition={item.additionalPosition}
          isLast={index === faculties.length - 1}
          />
        ))
      }

      <div className=' flex items-center justify-center py-4 mb-6 bg-bgBrown'>
        <a href="https://nitdgp.ac.in/department/biotechnology/faculty-2">
        <Button className="bg-navGreen w-[100%]">More...</Button>
        </a>
      </div>
      
    </div>
  )
}

export default Faculty
