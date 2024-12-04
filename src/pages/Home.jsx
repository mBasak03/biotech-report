import { Separator } from '../components/ui/separator'
import React from 'react'

const Home = () => {
  return (
    <div className=' h-[100%] w-[100%] flex items-center flex-col px-[10%] bg-bgBrown'>
      <div>
        {/* Intro Section */}
        <p className=' text-navYellow italic  text-4xl font-bold'>What's New In</p>
        <p className=' font-sans font-semibold  text-8xl text-navGreen'>Biotechnology</p>
      </div>
      <div className=' bg-bgBrown'>
        {/* Body Section */}

        {/*///////////////// Part 1 //////////////////////// */}
        <div className=' flex flex-row gap-10 flex-1  px-5 mt-6 items-center justify-center '>

          <div>
          <img src="https://s3-alpha-sig.figma.com/img/739d/4aa9/b316d6b71152a800578248bb08980ba9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nnURZHdHG9KbfpExrJ6C7eGQ1kmaUcya3r8JL51RdPwcPhBiRmb27RX6yyPF6uQDfXAXHhNBjfHOBVpXsyByP8RI4i5-XY-bI~o7ZwMaNaASKMQhapI2K4RoKUf2UnQxNqSAv-Mt~iRxxZff2DFeGRTMeyUDXENKaMjdL7p4fUBoC7wAnqmszZGm-D4vA21Ki53lfS0i0864McKg9RTXTiLb8AWcQYRLeakI4o6Yx0Rf6sqVW2sGvC2JicQXJH-pNYNDyW~AnJHMg-jNogpp7Zyh5TZKa98SsoVx3Y8zB0BIREfkI4s7YSPAcLuuCB4P~DD8kdNaiegYzn46~Xt7cA__" alt="" className='w-[513px]  h-[269px] object-cover' />

          </div>
          {/* Paragraph */}
          <div className=' max-w-[300px]'>
             <p className=' font-medium text-[40px] leading-[48.8px] font-sans'>Recent Advances in the Field of <span className=' text-navGreen'>Science.</span></p>
            <p>Lorem ipsum dolor sit amet consectetur. Est turpis orci vehicula pellentesque potenti faucibus pretium pulvinar adipiscing. Urna ut volutpat quisque nisl odio accumsan parturient ligula. Commodo velit ac ac diam leo odio lobortis nulla volutpat. Morbi nunc mauris neque tellus sit eget.</p>
            
          </div>
        </div>
        <Separator orientation='horizontal' className=' bg-separator w-[60%] h-[2px] mx-auto my-6'/>

        {/* ////////////////////////// part 2 ///////////// */}
        <div className=' flex flex-row gap-10 flex-2  px-[10%] mt-6 ml-[10%] items-center justify-center bg-bgBrown'>
          
          
          {/* Paragraph */}
          <div className=' mt-[-260px]'>
             <div className=' flex flex-col space-y-[-12px]'>
              <p className=' text-4xl font-semibold'>Know</p>
              <p className=' text-4xl text-navYellow font-semibold ml-10'>About</p>
             </div>
            <p className=' font-normal text-xl font-sans'>Jacques Lucien Monod was a French biochemist who won the Nobel Prize in Physiology or Medicine in 1965, sharing it with François Jacob and André Lwoff "for their discoveries concerning genetic control of enzyme and virus synthesis"</p>
          </div>
          <div className=' mt-[-140px]'>
            {/* image */}
            <img src="https://s3-alpha-sig.figma.com/img/fcb1/cc2f/e567c07e749f4cd7c964a8e3603a5d2e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dm-kb7WWonkZRAQhC0fAmEKnYQG64VUoiM2B1ier1ggDJdly6xPgw3HkM6pTBj~ot-wLQIakkkQxSqP03~Crn2lhakpqee0TcNHkrQy8aOvl9O30U72OzWR5FdC8qJybjKkyg9EpO7cr-bfNnJ8LAj~Xd7kXTFaEOZYiP~2Ee7i-U1jucRx7IrWJEGOfPppTtAsz~lrKOizJDYuqK3ox7CRqhsvNNVaWY5WapgpTTMB9ECX~nGoZbgu0x6XuiNOJxMeXGDZW-yOZiVoWZuamX3lBaOvRk1M1pLVErhIKwPR-NU2D18oVTgGNBIEDcKYchIumSyn5dGvMIEFq2hSxFw__" alt="" className=' w-[2506px] h-[538px] object-cover' />
          </div>

          {/* paragraph */}
          <div className=' bg-bgBrown'>
            <p className=' font-normal text-xl font-sans max-w-[50%] ml-20'>In addition to sharing a Nobel Prize, Monod was also a recipient of the <span className=' underline'>Légion d'honneur</span>  and elected member of the <span className=' underline'>American Academy of Arts and Sciences</span>  in 1960. He was elected a member of the <span>National Academy of Sciences</span> , the <span className=' underline'>American Philosophical Society</span> , and a <span className=' underline'>Foreign Member of the Royal Society in 1968</span>.The Institut Jacques Monod, funded jointly by the CNRS and the University of Paris, is one of the main centers for basic research in biology in the Paris area. It is headed by Michel Werner, Research Director.</p>
          </div>
        </div>
        <Separator orientation='horizontal' className=' bg-separator w-[60%] h-[2px] mx-auto my-6'/>
        {/*//////////////////// Part 3/////////////////////// */}
        <div className=' flex flex-row gap-10 flex-1  px-5 mt-6 items-center justify-center bg-bgBrown mb-10'>
          <div className=' bg-bgBrown'>
          {/* image */}
          <img src="https://s3-alpha-sig.figma.com/img/5d7c/e07d/213f0ea0ea8db9f9be640ecd62a283e8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dt12dtvU8vqMdWjM5suSQraU92pEb~xNvIGeDucQVe5FX5k9AEt2E4gExta9OUfhAhZmiuP~Ek4WiBlIm14LFOXiHAkT8T9XZLWmEqwOqnL~E7JB1jDtE0icLiPoX3Ql59WpYt-0hLQru~iy1riWM4gQ6-apMneXa95eqMgzTJQ4~8EHqN4lpGz93R8JIU12f8qXQz6iKJqW16krtGakBzBAiyFFA4TzfFCACtM7cQgNA5yxOFJsweKD0JvTNEAbBNziMPEcZaswMOvMLeLe2CQhKx9Y0GXbdajijauQ7h-a41inIxNeC66lv1Smdy3yQWe3C0loRkWgNq2~1h3t4w__" alt="" className=' w-[445px]  h-[618px] object-cover' />

          </div>
          {/* Paragraph */}
          <div>
             <p className=' text-4xl font-semibold'>Areas of <span className=' text-navGreen'>Research</span></p>
            <p className='font-normal text-xl leading-[48.8px] font-sans'>
              The major thrust iof the department includes:
              <ul className=' list-disc px-5'>
                <li>Cell and Molecular Biotechnology</li>
                <li>Plant Biotechnology</li>
                <li>Immunology and Infection Biology</li>
                <li>Bioprocess Engineering</li>
                <li>Food Biotechnology</li>
                <li>Microbial and Environmental Biotechnology</li>
                <li>Computational Biology and Bioinformatics</li>
                <li>Drug Delivery and Nano Biotechnology</li>
              </ul>
              
            </p>
            
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home
