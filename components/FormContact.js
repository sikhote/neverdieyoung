import { useForm, ValidationError } from "@formspree/react";

const FormContact = () => {
  return (
    <form
      className="form-contact"
      action="https://formspree.io/f/mvodqryp"
      method="POST"
    >
      <label className="text-tile-text-minor" htmlFor="name">
        <p>Name:</p>
        <input className="form-boxes small-box" name="name" />
      </label>
      <label className="text-tile-text-minor" htmlFor="email">
        <p>Email:</p>
        <input className="form-boxes small-box" name="email" />
      </label>
      <label className="text-tile-text-minor" htmlFor="message">
        Enter Message:
      </label>
      <textarea
        className="form-boxes"
        rows={10}
        name="message"
        id="message"
        defaultValue={" "}
      ></textarea>
      <button type="submit" className="button">
        - Submit -
      </button>
    </form>
  );
};
export default FormContact;
