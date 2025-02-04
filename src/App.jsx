import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import ProjectsTwo from "./components/ProjectsTwo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import ExperiencesTwo from "./components/ExperiencesTwo";
import ExperiencesThree from "./components/ExperiencesThree";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Experiences />
        <ExperiencesTwo />
        <ExperiencesThree />

        <ProjectsTwo />
        <Skills />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
