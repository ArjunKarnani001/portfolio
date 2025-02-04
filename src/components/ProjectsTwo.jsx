import { projects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLightPurple } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

import "./ProjectsTwo.css";

const Projects = () => {
  return (
    <Section crosses id="features">
      <Heading
        className="mt-[-3rem] h1 md:max-w-md lg:max-w-2xl"
        title="Academic Projects"
      />

      <div className="flex flex-col gap-0 mb-[15rem] mt-[-20rem]">
        {projects.map((item, index) => (
          <div
            className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[25rem] mt-[-5rem] border-2 ${
              index % 2 === 0 ? "self-end" : "self-start mt-[-2rem]"
            } ${index > 0 && index % 2 == 0 ? "mt-[0rem]" : "mt-[3rem]"}`}
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
              left: index % 2 === 0 ? "-12rem" : "12rem", // Shift right or left
              top: index % 2 == 0 ? "17.5rem" : "16rem",

              borderRadius: "20px",
              borderImage:
                "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876) 1",
            }}
            key={item.id}
          >
            {/* New div with image to trigger the hover effect */}
            <div
              className={`hover-trigger z-3 top-[2.7rem] right-[3.3rem] absolute pointer-events-auto ${
                index % 2 === 0 ? "hover-left" : "hover-right"
              }`}
              // style={{
              //   right: index % 2 === 0 ? "[2rem]" : "0",
              //   left: index % 2 === 0 ? "0" : "auto",
              // }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                alt="visible--v1"
                className="cusrsor-pointer transition-opacity duration-500 hover:opacity-0"
              />
            </div>

            <div className="relative hover-target z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none transform transition-transform duration-1000 ease-extra-slow">
              <div className="hover-border-target-one">
                <h5 className="h5 mb-5">{item.title}</h5>
              </div>
              <div className="hover-border-target-two">
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {/* Other elements remain unaffected by the hover */}
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
                  href="https://arjunkarnani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto mr-[-1rem] font-code text-xs font-bold text-n-1 uppercase tracking-wider pointer-events-auto"
                  style={{ fontSize: "14px" }}
                >
                  Check out the Website
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
