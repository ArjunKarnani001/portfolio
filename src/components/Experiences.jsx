import { check, brainwaveSymbol } from "../assets";
import uh from "../assets/experiences/uh.png";
import red_check_main from "../assets/red_check_main.png";
import {
  collabApps,
  experience1,
  experience1Text1,
  experience1Text2,
} from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Experiences = () => {
  return (
    <Section crosses id="experience">
      <h1 className="h1 mb-[5rem] -mt-[5rem]  text-white text-center">
        Experiences
      </h1>

      <div
        className="container lg:flex"
        style={{
          marginTop: window.innerWidth <= 640 ? "-3rem" : "0rem", // Moves up only on mobile
        }}
      >
        <div className="max-w-[70rem]">
          <h3 className="h2 mb-4 md:mb-8">University of Houston</h3>
          <h5 className="h5 mb-4 md:mb-8">ERAS Research Fellow</h5>

          {/* <h6 className="body-2 w-[20rem] ml-[30rem] relative left-[2rem] top-[13rem]">
            Languages & Frameworks
          </h6> */}

          <ul className="max-w-[35rem] mb-10 md:mb-14">
            {experience1.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* <Button>Check it Out </Button> */}
        </div>

        <div
          className="lg:ml-auto xl:w-[38rem] mt-4 sm:w-[20rem]"
          style={{
            marginTop: window.innerWidth <= 640 ? "-5rem" : "0rem", // Moves up only on mobile
          }}
        >
          {/* <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {experience1Text}
          </p> */}

          <div className="relative left-1/2 top-[3rem] flex w-[27rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-[0.75] md:scale-100 sm:scale-[0.3] xs:scale-[0.2]">
            <div className="flex w-[17rem] aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[7rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} width={68} height={68} alt="uh" />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.4em] flex w-[3.5rem] h-[3.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(0, 123, 255, 0.6))",
                        transition:
                          "filter 0.3s ease-in-out, transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.filter =
                          "drop-shadow(0 0 15px rgba(0, 123, 255, 1))";
                        e.currentTarget.style.transform = "scale(1.2)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.filter =
                          "drop-shadow(0 0 10px rgba(0, 123, 255, 0.6))";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* <LeftCurve /> */}
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
