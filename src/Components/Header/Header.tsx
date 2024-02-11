import "./Header.css";
import githubIcon from "../../images/github-mark-white.png";
import linkedIcon from "../../images/linkedin-logo.png";
export const Header = () => {
  return (
    <section className={"header"}>
      <p className="header__name">Ahmed Awad</p>
      <div className="header__logo-section">
        <a
          href="https://www.linkedin.com/in/ahmed-awad95"
          rel="noreferrer"
          target="_blank"
        >
          <img className="header__logo" src={linkedIcon} alt="linkedin link" />
        </a>

        <a
          href="https://github.com/AhmedElsayed5"
          rel="noreferrer"
          target="_blank"
        >
          <img className="header__logo" src={githubIcon} alt="github link" />
        </a>
      </div>
    </section>
  );
};
