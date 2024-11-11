import Image from 'next/image'
import project1 from '../public/images/project1.png'
import project2 from '../public/images/project2.png'
import project3 from '../public/images/project3.png'
import project4 from '../public/images/project4.png'
import project5 from '../public/images/project5.png'
// import project6 from '../../../public/images/project6.png'
const page = () => {
  return (
    <div className='flex flex-col gap-8 items-center lg:my-10 my-28  md:mx-20'>
      <h1 className="sm:text-5xl text-4xl text-[#5500e9]">PORTFOLIO</h1>
      <p className='text-center mx-16'>Explore our diverse portfolio showcasing successful projects in web development, mobile app creation, and web design. Each project highlights our commitment to quality, creativity, and functionality, tailored to meet client needs and goals.</p>
      
      <div className='flex md:gap-5 gap-10 md:flex-row flex-col md:flex-wrap flex-nowrap justify-center my-10'>
        <div className='lg:w-[350px] md:w-[250px] w-full h-[200px]'>
           <Image className='w-[100%] h-[100%]' src={project1} alt='project1'></Image>
        </div>
        <div className='lg:w-[350px] md:w-[250px] w-full h-[200px] '>
        <Image className='w-[100%] h-[100%]' src={project2} alt='project1'></Image>
        </div>
        <div className='lg:w-[350px] md:w-[250px] w-full h-[200px]'>
        <Image className='w-[100%] h-[100%]' src={project3} alt='project1'></Image>
        </div>
        <div className='lg:w-[350px] md:w-[250px] w-full h-[200px] '>
        <Image className='w-[100%] h-[100%]' src={project4} alt='project1'></Image>
        </div>
        <div className='lg:w-[350px] md:w-[250px] w-full h-[200px] '>
        <Image className='w-[100%] h-[100%]' src={project5} alt='project1'></Image>
        </div>
        {/* <div className='lg:w-[350px] md:w-[250px] w-full h-[200px] '>
        <Image className='w-[100%] h-[100%]' src={project6} alt='project1' ></Image>
        </div> */}
      </div>

      <button className='bg-white text-[#5500e9] py-2 px-10 rounded-full'>See More</button>
    </div>
  )
}

export default page