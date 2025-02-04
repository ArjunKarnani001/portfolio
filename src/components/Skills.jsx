import Section from "./Section";
import CompanyLogos from "./CompanyLogos";

const Skills = () => {
  return (
    <Section crosses id="features">
      <h1 className="h1 mb-[5rem] -mt-[5rem]  text-white text-center">
        Skills
      </h1>
      <div className="container relative z-2">
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Skills;
