import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = ({ SuccessMessage }) => {
  const form = useRef();
  // todo: gérer un état de declenchement de l'envoi du mail null, true or false

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jfkxr6l", "template_bw52vp8", form.current, {
        publicKey: "Lf2MLVTJQLw1al_H8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          SuccessMessage(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // todo: mise en place d'un useEffect pour gérer l'affichage du message de succès

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-2 w-full items-center"
    >
      <input
        type="text"
        name="user_name"
        className="input input-bordered input-info w-full max-w-sm"
        placeholder="Nom"
      />

      <input
        type="email"
        name="user_email"
        className="input input-bordered input-info w-full max-w-sm"
        placeholder="Email"
      />
      <textarea
        name="message"
        className="textarea textarea-info w-full max-w-sm"
        placeholder="Tapez votre message, suggestion ou feedback ici"
      />
      <input
        type="submit"
        value="Send"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      />
    </form>
  );
};
