const About = () => {
  return (
    <>
      <section id="about" className="w-full h-auto px-5 pt-10 md:pt-0">
        <h1 className="pb-12 text-5xl font-bold text-center text-yellow-500">
          About US
        </h1>
        <div className="flex flex-col items-center justify-center w-full gap-5 md:justify-around md:flex-row ">
          <div className="md:w-[50%] w-[100%] flex justify-center">
            <img
              className="rounded-lg w-96"
              src="../../public/about_img.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[40%] w-[100%] text-white">
            <h1><span>Hi ! 👋</span> I am Mijbah.</h1>
            <p>
              As an emerging MERN stack web developer, I am passionate about
              creating dynamic and user-friendly web applications. My skill set
              includes proficiency in MongoDB, Express.js, React, and Node.js,
              which allows me to develop comprehensive full-stack solutions. I
              am also well-versed in JavaScript, HTML, and CSS, which form the
              foundation of my web development expertise.
            </p>
            <p className="mt-5">
              In my projects, I focus on delivering clean, efficient, and
              maintainable code, ensuring that the applications I build are both
              scalable and robust. I am dedicated to learning and adopting the
              latest technologies and best practices in the industry, constantly
              improving my skills and knowledge.
            </p>

            <p className="mt-5">
              I enjoy collaborating with others and am eager to contribute to
              team efforts, bringing fresh ideas and a strong work ethic. My
              goal is to leverage my growing expertise in the MERN stack to
              create innovative and impactful web applications that enhance user
              experiences and meet business needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
