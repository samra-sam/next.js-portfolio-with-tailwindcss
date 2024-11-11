import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:my-10 md:my-24 lg:mx-52 md:mx-16 sm:mx-20 mx-12 my-24 gap-6'>
      <h1 className='md:text-5xl sm:text-4xl text-3xl uppercase text-[#5500e9] '>My Services</h1>
      <p className='text-center text-[17px]'>Our services include expert web development, seamless mobile app development, and innovative web design to create engaging, high-performance digital solutions tailored to elevate your online presence and user experience.</p>

      <div className="service-box flex md:flex-row flex-col gap-16 text-[16px] mt-6">

        <div className='flex flex-col gap-6 items-center'>
            <FaLaptopCode className="text-[150px]" />
            <h1 className='md:text-[20px] text-[22px]'>Web Development</h1>
            <p className='text-center'>We build responsive, fast, and scalable websites tailored to your needs, ensuring optimal performance and user-friendly experiences for your audience.</p>
        </div>
        <div className='flex flex-col gap-6 items-center'>
            <TbDeviceMobileCode className="text-[150px]" />
            <h1 className='text-[20px] text-[#5500e9]'>App Development</h1>
            <p className='text-center'>Our mobile app development services deliver custom, feature-rich applications for iOS and Android, providing a seamless and engaging user experience.</p>
        </div>
        <div className='flex flex-col gap-6 items-center'>
            <MdOutlineDesignServices className="text-[150px]"/>
            <h1 className='text-[20px]'>Web Design</h1>
            <p className='text-center'>Experience creative web design that prioritizes aesthetics, functionality, and user interaction, making your brand stand out with a unique, professional look.</p>
        </div>
      </div>

      <button className="bg-[#5500e9cf] w-[150px] py-2 rounded-full">
      <Link href='/contact'>Hire Me</Link>
      </button>
    </div>
  )
}

export default page