import { FaGithub , FaLinkedin , FaDev } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" flex md:flex-row flex-col justify-between gap-3 mt-10 md:px-20 px-10 py-3 items-center bg-gradient-to-r from-[#5500e972] to-[#005288]">
      <p className=" sm:text-[16px] text-[16px]">all right reserved <span className="text-[#0046e9f7] font-bold">Samra Sam</span> 2024</p>
      <ul className="flex gap-4 text-2xl">
        <li>
            <Link className="hover:text-[#17b5e164]" href="https://github.com/samra-sam"> <FaGithub />  </Link>
        </li>
        <li>
            <Link className="hover:text-[#17b5e164]" href="https://www.linkedin.com/in/samra-sam-9a03b329b"> <FaLinkedin /> </Link>
        </li>
        <li>
            <Link className="hover:text-[#17b5e164]" href="https://vercel.com/new?teamSlug=samras-projects-27f95b85"> <FaDev /> </Link>
        </li>
      </ul>
      <p className=" sm:text-[16px] text-[14px]">samrahameed7@gmail.com</p>
    </div>
  )
}

export default Footer