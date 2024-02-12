import "./ProjectsSection.css";
import projectsToShow from "../../utils/projectsdb.json";
import { Project } from "../Project/Project";
export const ProjectSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-section__container">
        {projectsToShow.map((item) => (
          <Project {...item} key={item.name} />
        ))}
      </div>
    </section>
  );
};
