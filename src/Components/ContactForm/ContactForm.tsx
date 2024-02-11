import "./ContactForm.css";
export const ContactForm = () => {
  console.log("contact form");
  return (
    <section className="contact-form">
      <div className="contact-form__content">
        <p className="contact-form__paragraph">
          Feel free reaching out to me on linked, github or submit the form and
          it will send an email to :ahmedelsayed11595@gmail.com also reacing out
          by email directly is welcomed
        </p>
        <form>
          <label className="contact-form__label">
            email
            <input
              type="email"
              name="email"
              minLength={1}
              maxLength={60}
            ></input>
          </label>
          <label className="contact-form__label">
            name
            <input type="text" name="name" minLength={1} maxLength={30}></input>
          </label>
          <label className="contact-form__label">
            message
            <textarea name="message" rows={4} cols={5}></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
