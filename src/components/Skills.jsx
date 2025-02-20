import Section from "./Section";
import CompanyLogos from "./CodingLanguages";
import CodingLanguages from "./CodingLanguages";

const Skills = () => {
  return (
    <Section crosses id="features">
      <h1 className="h1 mb-[5rem] -mt-[5rem]  text-white text-center">
        Skills
      </h1>
      <div className="container relative z-2">
        <CodingLanguages className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Skills;
