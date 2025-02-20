import { curve, heroBackground, robot } from "../assets";
import avatar from "../assets/avatar.png";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CodingLanguages";
import "./Hero.css";
import robotar_no_bg from "../assets/robotar_final-2.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mb-[-15rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              Arjun Karnani{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full h-3 xl:-mt-2"
                width={624}
                height={38}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Driven by curiosity and innovation in Machine Learning, Data
            Science, and Computer Vision—building solutions that bridge ideas
            and impact.
          </p>
          <Button href="https://www.linkedin.com/in/arjun-karnani/" white>
            Let's Connect
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robotar_no_bg}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      {/* <div className="relative bottom-[43rem]">
        <BottomLine />
      </div> */}

      {/* <div className="mt-[27rem] mb-[8rem] ml-[8rem] relative z-[2]">
        <h3 className="h1 mb-[5rem] -mt[15rem] text-white mr-[8rem]">
          About Me
        </h3>

        <div className="mr-[36rem] mt-[-4rem]">
          <ul className="list-none space-y-[1.5rem] text-lg mt-[6rem] mx-auto">
            <li>
              Hi, I’m Arjun Karnani, a junior at the University of Houston
              majoring in Computer Science.
            </li>
            <li>
              I’m particularly interested in <strong>Machine Learning</strong>,{" "}
              <strong>Data Science</strong>, and{" "}
              <strong>Computer Vision</strong>.
            </li>
            <li>I enjoy working on projects that solve real-world problems.</li>
            <li>
              I love exploring new technologies, brainstorming creative
              solutions, and collaborating with others to bring ideas to life.
            </li>
            <li>
              When I’m not coding, I’m diving into financial markets or am at
              the gym.
            </li>
            <li>Thanks for stopping by—let’s connect!</li>
          </ul>
        </div>
      </div> */}

      <div
        className="mt-[15rem] mb-[8rem] ml-[3rem] relative z-[2] md:max-w-5xl sm:max-w-2"
        id="aboutme"
        style={{
          marginTop: window.innerWidth <= 640 ? "7rem" : "15rem",
          marginLeft: window.innerWidth <= 640 ? "8rem" : "3rem",
          marginBottom: window.innerWidth <= 640 ? "23rem" : "8rem",
        }}
      >
        <div className="card">
          <div className="card-content">
            <p className="card-title h1">About Me</p>
            <ul className="card-para">
              <li>
                Hi, I’m Arjun Karnani, a junior at the University of Houston
                majoring in Computer Science.
              </li>
              <li>
                I’m particularly interested in <strong>Machine Learning</strong>
                , <strong>Data Science</strong>, and{" "}
                <strong>Computer Vision</strong>.
              </li>
              <li className="hidden sm:block">
                I enjoy working on projects that solve real-world problems.
              </li>
              <li className="hidden sm:block">
                I love exploring new technologies, brainstorming creative
                solutions, and collaborating with others to bring ideas to life.
              </li>
              <li className="hidden sm:block">
                When I’m not coding, I’m diving into financial markets or am at
                the gym.
              </li>
              <li>Thanks for stopping by—let’s connect!</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden md:block ml-[64rem] relative w-[300px] h-[300px] top-[-650px]">
        <img
          src={image2}
          alt="Image 2"
          className="absolute top-[-20px] left-[-220px] w-[270px] h-auto border border-black object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10"
        />
        <img
          src={image4}
          alt="Image 4"
          className="absolute top-[100px] left-[0px] w-[200px] h-[350px] border border-conic-gradient object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10"
        />
        <img
          src={image3}
          alt="Image 3"
          className="absolute top-[420px] left-[-180px] w-[220px] h-auto border border-conic-gradient object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10"
        />
        <img
          src={image1}
          alt="Image 1"
          className="absolute top-[230px] left-[180px] w-[220px] h-auto border border-black object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10"
        />
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
