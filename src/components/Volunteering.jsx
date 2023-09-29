import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import local images
import volunteering1 from "../assets/images/wie.png";
import volunteering2 from "../assets/images/pathforward.png";
import volunteering3 from "../assets/images/socs.png";
import volunteering4 from "../assets/images/wie.png";
import volunteering5 from "../assets/images/ieee.jpg";
import volunteering6 from "../assets/images/aiesec.jpg";
import volunteering7 from "../assets/images/school.png";
import volunteering8 from "../assets/images/school.png";
import volunteering9 from "../assets/images/school.png";

const Volunteering = () => {
  const volunteeringWorks = [
    {
      logoUrl: volunteering1,
      name: "Event Coordinator",
      level: "IEEE WIE Affinity Group of SUSL",
      description: "Aug 2023 - Present",
    },
    {
      logoUrl: volunteering2,
      name: "Main Coordinator",
      level: "Path Forward Career Guidance Sessions",
      description: "Feb 2023 - Sep 2023",
    },
    {
      logoUrl: volunteering3,
      name: "Vice Secretary",
      level: "Society of Computer Sciences",
      description: "May 2022 - May 2023",
    },
    {
      logoUrl: volunteering4,
      name: "Assistant Secretary",
      level: "IEEE WIE Affinity Group of SUSL",
      description: "Jun 2021 - Oct 2022",
    },
    {
      logoUrl: volunteering5,
      name: "Active Member",
      level: "IEEE Student Branch of SUSL",
      description: "Jun 2021 - Present",
    },
    {
      logoUrl: volunteering6,
      name: "Active Member",
      level: "AIESEC in Sri Lanka",
      description: "May 2021 - Present",
    },
    {
      logoUrl: volunteering7,
      name: "Super Senior Prefect",
      level: "H/Tangalle Girls' School",
      description: "2013 - 2016",
    },
    {
      logoUrl: volunteering8,
      name: "Treasurer",
      level: "H/Tangalle Girls' School - Media Unit",
      description: "2012",
    },
    {
      logoUrl: volunteering9,
      name: "Secretary",
      level: "H/Tangalle Girls' School - English Literary Association",
      description: "2011",
    },
  ];

  return (
    <section id="volunteering" className="py-10 bg-gray-800 relative">
      <div className="text-center text-gray-100">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Volunteering</span> Experiences
        </h3>
        <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
          <div className="w-full">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={2} // Adjust the gap here
              breakpoints={{
                768: {
                  slidesPerView: 5,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {volunteeringWorks.map((work, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="border-2 group border-cyan-600 relative w-[16rem] h-[22.5rem] bg-gray-900 p-10 rounded-xl flex flex-col items-center" // Set a fixed width and height
                  >
                    <div
                      style={{
                        backgroundImage: `url(${work.logoUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="w-32 h-32 rounded-full"
                    ></div>
                    <h3 className="text-xl mt-3">{work.name}</h3>
                    <p className="text-gray-400 mt-0.05">{work.level}</p>
                    <p className="text-gray-450 mt-3">{work.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
