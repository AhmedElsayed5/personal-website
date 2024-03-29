import "./Intro.css";
import pic from "../../images/ahmed.png";

export interface Props {
  contact: () => void;
}

export const Intro: React.FC<Props> = (values) => {
  return (
    <section className="intro">
      <div className="intro__info">
        <h1>Hello this is Ahmed,</h1>
        <h1>Fullstack Developer</h1>
        <a
          className="intro__button-link"
          href="https://drive.google.com/file/d/1wjNboJpGHB_XiAH-cbB9o5AEr4jll7VW/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <button className="intro__button">Check my Resume</button>
        </a>
        <button className="intro__button" onClick={values.contact}>
          Contact Me
        </button>
      </div>
      <img className="intro__image" src={pic} alt="personal photo" />
    </section>
  );
};
