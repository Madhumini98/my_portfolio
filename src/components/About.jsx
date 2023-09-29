import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Completed Projects", count: "07" },
    { text: "Volunteering Experience", count: "08" },
    { text: "Hackathons", count: "10" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a motivated individual with a strong passion for continuous learning and growth. I possess good organizational and communication skills, thrive under pressure, and enjoy taking on leadership roles. My enthusiasm and ability to work independently make me a valuable team member. I am dedicated to pursuing opportunities in the IT industry to further develop my skills and knowledge.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src\assets\Madhumini Kodithuwakku.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
            <img
              src={aboutImg}
              alt=""
              className="w-full object-cover transform scale-200"
              />
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
