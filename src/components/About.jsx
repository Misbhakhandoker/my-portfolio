const About = () => {
  return (
    <>
      <section className="w-full h-auto px-5 pt-10 md:pt-0">
        <h1 className="pb-12 text-5xl font-bold text-center text-yellow-500">
          About US
        </h1>
        <div className="flex flex-col items-center justify-around w-full gap-5 md:flex-row ">
          <div className="w-[50%]">
            <img
              className="rounded-lg w-96"
              src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/447272361_854204823206949_5181411721104318352_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=idjVGh-uYcMQ7kNvgFxjABs&_nc_ht=scontent.fdac11-1.fna&oh=00_AYDx-wSV852Q7_dAJpHkGfacpxKHrQsFcwB4UJy5wV9PNw&oe=668CCB6F"
              alt=""
            />
          </div>
          <div className="w-[40%] text-white">
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
