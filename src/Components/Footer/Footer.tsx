import "./Footer.css";
import githubIcon from "../../images/github-mark-white.png";
import linkedIcon from "../../images/linkedin-logo.png";
export const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__name">Ahmed Awad</p>
      <div className="footer__logo-section">
        <a
          href="https://www.linkedin.com/in/ahmed-awad95"
          rel="noreferrer"
          target="_blank"
        >
          <img className="footer__logo" src={linkedIcon} alt="linkedin link" />
        </a>

        <a
          href="https://github.com/AhmedElsayed5"
          rel="noreferrer"
          target="_blank"
        >
          <img className="footer__logo" src={githubIcon} alt="github link" />
        </a>
      </div>
    </section>
  );
};
