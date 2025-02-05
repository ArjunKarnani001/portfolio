import Section from "./Section";
import CompanyLogos from "./CodingLanguages";

const Contact = () => {
  return (
    <Section crosses id="contact">
      <h1 className="h1 mb-[5rem] -mt-[5rem]  text-white text-center">
        Reach out to me At
      </h1>
      <div className="container relative z-2">
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Contact;
