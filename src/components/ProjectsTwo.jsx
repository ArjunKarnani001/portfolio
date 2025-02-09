import { projects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLightPurple } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import library_video from "../assets/library_video.webm";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "./ProjectsTwo.css";

const Projects = () => {
  return (
    <Section crosses id="projects">
      <h1
        className="mt-[-3rem] h1 md:max-w-md lg:max-w-2xl"
        style={{
          marginLeft: window.innerWidth <= 640 ? "6rem" : "26rem",
          marginBottom: window.innerWidth <= 640 ? "2rem" : "3rem",
        }}
      >
        Academic Projects
      </h1>
      <div
        className="flex flex-col md:flex-col gap-0 mb-[15rem] mt-[-21rem]"
        style={{
          marginTop: window.innerWidth <= 640 ? "-2rem" : "-21rem",
        }}
      >
        {projects.map((item, index) => (
          <div
            className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[25rem] border-2 ${
              index % 2 === 0 ? "md:self-end" : "md:self-start md:mt-[2rem]"
            } ${index > 0 && index % 2 === 0 ? "mt-[0rem]" : "mt-[0rem]"}`}
            style={{
              maxWidth:
                window.innerWidth < 640
                  ? "90%" // Extra small screens
                  : window.innerWidth < 768
                  ? "90%" // Small screens
                  : "32rem",

              backgroundImage: `url(${item.backgroundUrl})`,
              left:
                window.innerWidth > 768
                  ? index % 2 === 0
                    ? "-12rem"
                    : "12rem"
                  : "1.3rem",
              top:
                window.innerWidth > 768
                  ? index % 2 === 0
                    ? "20rem"
                    : "20rem"
                  : "2rem",
              marginTop: window.innerWidth < 768 ? "2rem" : "0rem",
              borderRadius: "20px",
              borderImage:
                "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876) 1",
            }}
            key={item.id}
          >
            {/* Hover Effect Trigger - Disabled on Mobile */}
            {window.innerWidth > 768 && (
              <div
                className={`hover-trigger z-3 top-[2.7rem] right-[3.3rem] absolute pointer-events-auto ${
                  index % 2 === 0 ? "hover-left" : "hover-right"
                }`}
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                  alt="visible--v1"
                  className="cursor-pointer transition-opacity duration-500 hover:opacity-0"
                />
              </div>
            )}

            <div className="relative hover-target z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none transform transition-transform duration-1000 ease-extra-slow">
              <div className="hover-border-target-one">
                <h5 className="h5 mb-5">{item.title}</h5>
              </div>
              <div className="hover-border-target-two">
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {/* Links and Arrow - Wrapped in a <div> to fix JSX error */}
              <div className="flex items-center mt-auto mb-[-3rem]">
                <a
                  href={item.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto"
                >
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="cursor-pointer"
                  />
                </a>
                <a
                  href={item.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto mr-[-1rem] font-code text-xs font-bold text-n-1 uppercase tracking-wider pointer-events-auto"
                  style={{
                    fontSize: window.innerWidth < 768 ? "13px" : "14px",
                  }}
                >
                  {item.title === "Diabetes Type II Research"
                    ? "Check out the Poster"
                    : "Check out the Website"}
                </a>
                <Arrow />
              </div>
            </div>
            {item.light && <GradientLightPurple />}
            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#projects)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <ClipPath />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
