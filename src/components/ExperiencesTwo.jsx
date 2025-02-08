import { check } from "../assets";
import uh from "../assets/experiences/uh.png";
import red_check_main from "../assets/red_check_main.png";
import { collabApps, experience2, experience2Text1 } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import headstarter from "../assets/headstarter.jpeg";
import headstarter_two from "../assets/headstarter.png";

const ExperiencesTwo = () => {
  return (
    <Section>
      <div className="container lg:flex -mt-[10rem]">
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {experience1Text}
          </p> */}

          <div
            className="relative left-[6rem] top-[0rem] flex w-[20rem] h-[17rem] aspect-square border border-n-6 rounded-lg -translate-x-1/2 scale-75 md:scale-100"
            style={{
              marginTop: window.innerWidth <= 640 ? "7rem" : "0rem",
              marginLeft: window.innerWidth <= 640 ? "5rem" : "0rem",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <img
                src={headstarter}
                width={308}
                height={108}
                alt="uh"
                className="rounded-5px"
                style={{
                  // border: "2px solid white",
                  maxWidth: "95%", // Restricts the width to fit within the box
                  maxHeight: "95%",
                  // filter: "drop-shadow(0 0 35px rgba(0, 123, 255, 0.6))",
                  borderRadius: "10px",
                }}
              />
            </div>

            <RightCurve />
          </div>
          {window.innerWidth > 640 && (
            <div className="relative left-[23rem] top-[3rem] flex w-[20rem] h-[17rem] aspect-square border border-n-6 rounded-lg -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={headstarter_two}
                  width={308}
                  height={108}
                  alt="uh"
                  style={{
                    maxWidth: "95%",
                    maxHeight: "95%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="max-w-[70rem]">
          <h3 className="h2 mb-4 md:mb-8 mr-[4rem] text-right">Headstarter</h3>
          <h5 className="h5 mb-4 md:mb-8 mr-[4rem] text-right">
            Software Engineering Fellow
          </h5>

          <ul className="max-w-[38rem] mb-10 md:mb-14">
            {experience2.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex justify-end items-center gap-2">
                  <h6 className="body-2 text-right mr-[1rem] ">{item.title}</h6>
                  <img
                    src={check}
                    width={24}
                    height={24}
                    alt="check"
                    className="mr-[4rem]"
                  />
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4 text-right mr-[4rem] ">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {/* <Button>Check it Out </Button> */}
        </div>
      </div>
    </Section>
  );
};

export default ExperiencesTwo;
