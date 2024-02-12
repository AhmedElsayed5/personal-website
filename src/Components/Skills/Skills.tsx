import "./Skills.css";
import skillsList from "../../utils/skills.json";
export const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills__list">
        {skillsList.map((value) => (
          <li key={value.name} className={"skills__item"}>
            {value.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
