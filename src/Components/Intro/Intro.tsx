import "./Intro.css";
import pic from "../../images/ahmed.png";

export interface Props {
  contact: () => void;
}

export const Intro: React.FC<Props> = () => {
  return (
    <section className="intro">
      <div className="intro__info">
        <h1>Hello this is Ahmed,</h1>
        <h1>Fullstack Developer</h1>
        <a
          className="intro__button-link"
          href="https://drive.google.com/file/d/10qAJ-O24TqayDAB6h2AjfQscH0NHBDPL/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
         
        </a>
        
      </div>
      <img className="intro__image" src={pic} alt="personal photo" />
    </section>
  );
};
