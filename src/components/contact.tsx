import React from "react";

const Contact = () => {
  return (
    <section className="py-8 flex flex-col items-center" id="contact">
      <h2 className="text-center font-medium uppercase text-[32px]">
        Contact Me
      </h2>
      <div className="flex flex-col gap-8 max-w-[700px] w-full">
        <div className="flex gap-2 flex-col">
          <label htmlFor="username">Name</label>
          <input
            className="border border-solid rounded-md px-4 py-2"
            id="username"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border border-solid rounded-md px-4 py-2"
            id="email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">How can we help?</label>
          <textarea
            rows={8}
            className="border border-solid rounded-md px-4 py-2"
            id="message"
          />
        </div>
        <button className="btn-primary my-4">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
