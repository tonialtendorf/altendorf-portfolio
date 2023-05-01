import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
//import Resume from './components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <ContactForm />;
      // case 'resume':
      //   return <Resume />;
      default:
        return <About />;
    }
  };


  return (
    <section>
      <h2>{currentPage.name}</h2>
      <section>{renderPage()}</section>
    </section>
  )
}
export default Page;