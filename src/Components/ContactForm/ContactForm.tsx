import "./ContactForm.css";
import closeButton from "../../images/CloseButton.svg";
import emailjs from "@emailjs/browser";

export interface Props {
  close: () => void;
}
// function initializeEmailJS(): Promise<void> {
//   return new Promise<void>((resolve, reject) => {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init({
//       publicKey: "JLNsv5Pd155nZ60eD",
//     });
//   });
// }

export const ContactForm: React.FC<Props> = (values) => {
  // initializeEmailJS()
  //   .then((value) => {
  //     console.log("resolved", value);
  //   })
  //   .catch((error) => {
  //     console.log("rejected", error);
  //   });
  // window.onload = function () {
  //   document
  //     ?.getElementById("contact-form")
  //     ?.addEventListener("submit", function (event) {
  //       event.preventDefault();
  //       // these IDs from the previous steps
  //       emailjs?.sendForm("contact_service", "contact_form", this).then(
  //         () => {
  //           console.log("SUCCESS!");
  //         },
  //         (error: string) => {
  //           console.log("FAILED...", error);
  //         }
  //       );
  //     });
  // };
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(e.target.name);
    const form = e.currentTarget;

    // Access the form elements
    const formElements = form.elements;
    console.log(formElements);

    // Access a specific form element
    const userInput = formElements.namedItem("user_name") as HTMLInputElement;

    // Now you can use userInput.value
    console.log(userInput.value);
    // const form = e.currentTarget;
    // const formElements = form.elements as typeof form.elements & {
    //   userInput: HTMLInputElement;
    // };

    emailjs
      .sendForm("contact_service", "contact_form", form, "JLNsv5Pd155nZ60eD")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
    values.close();
  }

  return (
    <section className="contact-form">
      <div className="contact-form__content">
        <img
          onClick={values.close}
          className="contact-form__close-button"
          src={closeButton}
          alt={"Close Icon"}
        />
        <p className="contact-form__paragraph">
          Reach out to me on linked, github or by sending an email to
          :ahmedelsayed11595@gmail.com. Or you can use the form below.
        </p>
        <form
          id="contact-form"
          className="contact-form__form"
          onSubmit={sendEmail}
        >
          {/* <input type="hidden" name="contact_number" /> */}
          <label className="contact-form__label">
            Name
            <input
              type="text"
              className="contact-form__input"
              name="user_name"
              required
            />
          </label>
          <label className="contact-form__label">
            Email
            <input
              type="email"
              className="contact-form__input"
              name="user_email"
              required
            />
          </label>
          <label className="contact-form__label">
            Message
            <textarea name="message" required className="contact-form__input" />
          </label>
          <input
            type="submit"
            className="contact-form__submit-button"
            value="Send"
            required
          />
        </form>
      </div>
    </section>
  );
};
