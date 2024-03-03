import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_vxli3h9",
        "template_cjq8lf9",
        form.current,
        "gu1HnNavQ_Uc5twi0"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = '<p className="success">Message send</p>';

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            '<p className="error">Error! Message not send, please try again!</p>';
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Mensaje:</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required
            >
              {" "}
            </textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Enviar
          </button>
        </form>
        <div className="form-message"></div>
      </div>
    </div>
  );
};

export default ContactForm;
