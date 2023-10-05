import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Courseify Web App",
      buttons: [
        {
          text: "View in Github",
          link: "https://github.com/Madhumini98/Courseify.git",
        },
        {
          text: "UIUX Design",
          link: "https://dribbble.com/shots/22450537-Courseify-UIUX-Designs",
        },
      ],
    },
    {
      img: project2,
      name: "Netmedic Mobile App",
      buttons: [
        {
          text: "UIUX Design",
          link: "https://dribbble.com/shots/22463090-Netmedic-Mobile-Application-UIUX-Designs",
        },
      ],
    },
    {
      img: project3,
      name: "ToDo App",
      buttons: [
        {
          text: "View in Github",
          link: "https://github.com/Madhumini98/My_ToDo_App",
        },
        {
          text: "Live Demo",
          link: "https://mytodoapp98.netlify.app",
        },
      ],
    },
    {
      img: project4,
      name: "YumEats",
      buttons: [
        {
          text: "View in Github",
          link: "https://github.com/Dushmanthr/food-order.git",
        },
        {
          text: "UIUX Design",
          link: "https://dribbble.com/shots/22626949-YumEats-Online-Food-Ordering-System",
        },
      ],
    },
    {
      img: project5,
      name: "Quick Quiz App",
      github_link: "",
      live_link: "",
      buttons: [
        {
          text: "View in Github",
          link: "https://github.com/Madhumini98/Quiz-app.git",
        },
        {
          text: "Live Demo",
          link: "https://quickquizapp98.netlify.app",
        },
      ],
    },
    {
      img: project6,
      name: "Revision Iskole",
      buttons: [
        {
          text: "UIUX Design",
          link: "https://dribbble.com/shots/22704738-Revision-Iskole-UIUX-Designs",
        },
      ],
    },
    {
      img: project7,
      name: "My Portfolio",
      buttons: [
        {
          text: "View in Github",
          link: "https://github.com/Madhumini98/my_portfolio.git",
        },
        {
          text: "Live Demo",
          link: "https://madhumini98.netlify.app/",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Herein are a selection of projects I have undertaken so far.</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center">
        <div className="w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    {project_info.buttons.map((button, j) => (
                      <a
                        key={j}
                        href={button.link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        {button.text}
                      </a>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
