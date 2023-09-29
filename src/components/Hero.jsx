import React from "react";
import hero from "../assets/images/hero.png";
import Typewriter from "react-typewriter-effect";

const social_media_links = [
  {
    icon: "logo-linkedin",
    link: "https://www.linkedin.com/in/madhumini-kodithuwakku-474354202/",
  },
  {
    icon: "logo-github",
    link: "https://github.com/Madhumini98",
  },
  {
    icon: "logo-medium",
    link: "https://medium.com/@kodithuwakkumadhumini12",
  },
  {
    icon: "logo-dribbble",
    link: "https://dribbble.com/Madhumi__98",
  },
  {
    icon: "logo-facebook",
    link: "https://www.facebook.com/madhumini.kodithuwakku?mibextid=ZbWKwL",
  },
  {
    icon: "logo-instagram",
    link: "https://instagram.com/madhumi___ni98?igshid=YTQwZjQ0NmI0OA==",
  },
];

const typewriterStrings = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Content Writer",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Madhumini <br /> Kodithuwakku</span>
          </h1>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media_links?.map((item) => (
              <a
                key={item.icon}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TypewriterComponent = () => {
  return (
    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
      <Typewriter
        options={{
          strings: typewriterStrings,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </h4>
  );
};

export default Hero;
