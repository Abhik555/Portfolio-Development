import { FormEvent } from "react";

export default function ContactWidget() {
  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target);
    //to be implimented
  }

  return (
    <div className="flex flex-col justify-center items-center p-2 w-full h-80 bg-white text-black m-3 shadow-md rounded-md">
      <form onSubmit={onSubmit} className="flex flex-col justify-center items-center w-full gap-3 p-5 mt-5">
        <h1 className="font-bold text-2xl">Send me a Message</h1>
        <div>
          <p>Email:</p>
          <input
            type="email"
            name="mail"
            placeholder="Enter email"
            className="border-2 w-72 border-black"
          ></input>
          <br />
          <br />
          <p>Message:</p>
          <textarea
            name="msg"
            placeholder="Enter a message"
            className="border-2 border-black w-72 h-16 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="m-5 text-white font-semibold bg-gradient-to-br from-blue-800 to-cyan-600 rounded-md p-3 shadow-md hover:p-[13px] ease-in-out duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
