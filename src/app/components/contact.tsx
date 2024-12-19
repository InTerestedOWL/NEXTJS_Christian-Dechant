'use client';
import ContactBox from "./shared/contactBox";
import { IContactBox } from "../interfaces";
import Title from "./shared/title";
import {  useState } from "react";
import { sendMail } from "../../api/send-mail";


export default function Contact({ contactBoxes }: { contactBoxes: IContactBox[] }) {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('');
  const [loading, setLoading] = useState(false)
  const [ submitted, setSubmitted ] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    console.log('Sending')

    sendMail({ name, text: message, email, sendTo: email }).then(() => {
      console.log('Response received')
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setLoading(false)
    })
  }

  return (
    <div className="container py-16 md:py-20" id="contact">
      <Title title="Here's a contact form"
             subtitle="Do you Have Any Questions?"
             text="Currently, there's just this contact form available. Feel free to reach out with any questions or ideas you have—I’d love to hear from you! In the future, I’ll be adding a management platform where you can check my availability and book me for your projects. For now, I’m looking forward to learning more about your needs!"></Title>
      <div id="success-message" className={`mx-auto w-full pt-10 sm:w-3/4 ${!submitted ? `hidden` : ''}`}>
        <div className="bg-primary border-t-4 text-white p-4 mb-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-semibold">Success!</span>
          </div>
          <p>Your message has been successfully sent. I will get back to you soon!</p>
        </div>
      </div>
      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <input
            className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            onChange={ (e) => {
              setName(e.target.value);
              setSubmitted(false);
            } } name='name'
            value={ name }
            type="text"
            id="name"
            required
          />
          <input
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email"
            onChange={ (e) => {
              setEmail(e.target.value);
              setSubmitted(false);
            } } name='name'
            value={ email }
            type="email"
            id="email"
            required
          />
        </div>
        <textarea
          className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          onChange={ (e) => {
            setMessage(e.target.value);
            setSubmitted(false);
          } } name='name'
          value={ message }
          id="message"
          cols={ 30 }
          rows={ 10 }
          required
        ></textarea>
        <button type="submit" disabled={ loading }
                className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
        >
          { loading ? 'Sending.....' : 'Send' }
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        { contactBoxes.map((item: IContactBox, index) => (
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