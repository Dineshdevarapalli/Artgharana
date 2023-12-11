import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { codes } from 'country-calling-code'
import toast from 'react-hot-toast'
import { Api } from '../utils/Api'
import { getContactPageData, getContactPageSeoData } from '../utils/ServerCalls'
import Meta from '../components/common/meta'
import Spinner from '../components/common/spinner'
import NotFound from '../components/common/notfound'
import ContactForm from '../components/contact/contactForm'
import LocateIcon from '../../../public/icons/address.svg'
import PhoneIcon from '../../../public/icons/phone-call.svg'
import styles from './contact.module.scss'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [cvFile, setCvFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, for example, by sending the data to an API
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('cv', cvFile);

    // Replace with your API endpoint
    fetch('/api/contact', {
      method: 'POST',
      body: data,
    }).then((response) => {
      // Handle the response from the server
    });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      {/* Repeat for lastName, phone, email */}
      <textarea
        className={styles.textArea}
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <input
        className={styles.fileInput}
        type="file"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        required
      />
      <button className={styles.submitButton} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

// export default ContactUs
