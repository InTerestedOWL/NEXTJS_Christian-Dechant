import TitleWithText from "./shared/titleWithText";
import ContactBox from "./shared/contactBox";

const contactBoxes = [
  { title: 'My Phone', text: '(+49) 179 43 52 34 7', icon: 'bx-phone' }
]

export default function Contact() {
  return (
    <div className="container py-16 md:py-20" id="contact">
      <TitleWithText title="Here's a contact form"
                     subtitle="Do you Have Any Questions?"
                     titleText="For now there is just this contact form. Feel free to message me, what ever you would like to know.
            Later on, there would be a management platform where you can see how I am available and where you can book
            me for one of your projects.
            For now, I would appreciate to hear from your need."></TitleWithText>
      <form className="mx-auto w-full pt-10 sm:w-3/4">
        <div className="flex flex-col md:flex-row">
          <input
            className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            type="text"
            id="name"
          />
          <input
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email"
            type="text"
            id="email"
          />
        </div>
        <textarea
          className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
        >
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        { contactBoxes.map((item, index) => (
          <ContactBox key={ index }
                      title={ item.title }
                      text={ item.text }
                      icon={ item.icon }>
          </ContactBox>
        )) }
      </div>
    </div>
  );
}