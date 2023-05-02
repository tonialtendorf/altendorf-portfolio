import React from 'react';
import Navigation from "../components/Navigation"
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return <div>
        <Navigation />
        <ContactForm />
        <Footer />
    </div>
}



// function ContactForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//     };
  
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handleMessageChange = (event) => {
//       setMessage(event.target.value);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(`Submitting Name: ${name}, Email: ${email}, Message: ${message}`);

//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={handleMessageChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
  
  export default Contact;