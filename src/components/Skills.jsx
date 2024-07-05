
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { MeteorsDemo } from "./ui/MeteorsDemo";

const Skills = () => {
  return (
    <> <h1 className="py-12 text-5xl font-bold text-center text-yellow-500">Skills</h1>
       <div className="flex flex-wrap items-center justify-center w-full h-screen px-5 gap-x-7 ">
      <MeteorsDemo title="HTML" color={"htmlColor"} image={<FaHtml5 />} />
      <MeteorsDemo title="CSS" color={"cssColor"} image={<FaCss3Alt />} />
      <MeteorsDemo title="JavaScript" color={"javaScriptColor"} image={<FaCss3Alt />} />
      <MeteorsDemo title="TypeScript" color={"typeColor"} image={<SiTypescript />} />
      <MeteorsDemo title="Tailwind Css" color={"tailwindColor"} image={<RiTailwindCssFill />} />
      <MeteorsDemo title="React js" color={"reactColor"} image={<FaReact />}/>
      <MeteorsDemo title="Node js" color={"nodeColor"} image={<FaNodeJs />} />
      <MeteorsDemo title="Express js" color={"nextColor"} image={<SiExpress />} />
      <MeteorsDemo title="Mongodb js" color={"mongodbColor"} image={<SiMongodb />} />
      <MeteorsDemo title="Next js" color={"nextColor"} image={<RiNextjsFill />} />
      <MeteorsDemo title="Git" color={"gitColor"} image={<FaGitAlt />} />
      {/* <StickyScrollRevealDemo /> */}
    </div>
    </>
   
  );
};

export default Skills;
