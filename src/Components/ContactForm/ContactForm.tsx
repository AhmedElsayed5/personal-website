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

// initializeEmailJS()
//   .then((value) => {
//     console.log("resolved", value);
//   })
//   .catch((error) => {
//     console.log("rejected", error);
//   });

export const ContactForm: React.FC<Props> = (values) => {
  // (function () {
  //   // https://dashboard.emailjs.com/admin/account
  //   emailjs.init({
  //     publicKey: "JLNsv5Pd155nZ60eD",
  //   });
  // })();
  // function initializeEmailJS(): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     // https://dashboard.emailjs.com/admin/account
  //     emailjs.init({
  //       publicKey: "JLNsv5Pd155nZ60eD",
  //     });
  //   });
  // }

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
  function sendEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.currentTarget.value,
        "JLNsv5Pd155nZ60eD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  // const sendEmail = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> => {
  //   e.preventDefault();

  //   try {
  //     const result = await emailjs.sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       e.currentTarget,
  //       "YOUR_USER_ID"
  //     );

  //     console.log(result.text);
  //   } catch (error) {
  //     console.log(error?.text);
  //   }
  // };

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
          Feel free reaching out to me on linked, github or submit the form and
          it will send an email to :ahmedelsayed11595@gmail.com also reacing out
          by email directly is welcomed
        </p>
        <form id="contact-form" onSubmit={sendEmail}>
          {/* <input type="hidden" name="contact_number" /> */}
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
        {/* <form>
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
        </form> */}
      </div>
    </section>
  );
};
