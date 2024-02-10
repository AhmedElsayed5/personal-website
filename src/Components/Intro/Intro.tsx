import "./Intro.css";
import pic from "../../images/ahmed.png";
export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__info">
        <h1>hello this is Ahmed</h1>
        <h1>fullstack developer</h1>
        <button></button>
        <button></button>
      </div>
      <img className="intro__image" src={pic} />
    </section>
  );
};
