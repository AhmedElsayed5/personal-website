import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Intro } from "./Components/Intro/Intro";
import { Footer } from "./Components/Footer/Footer";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { ProjectSection } from "./Components/ProjectsSection/ProjectsSection";
import { Skills } from "./Components/Skills/Skills";

function App() {
  const [activeView, setActiveView] = useState("");

  const changeView = () => {
    setActiveView("ContactForm");
  };

  return (
    <>
      <Header />
      <Intro contact={changeView} />
      <ProjectSection />
      <Skills />
      <Footer />
      {activeView === "ContactForm" && <ContactForm />}
    </>
  );
}

export default App;
