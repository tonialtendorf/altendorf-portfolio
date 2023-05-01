import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState } from "react";
import Navigation from './components/Navigation';
import Page from './components/Page'


function App() {
  const [pages] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ])


const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
        <Header>
          <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Navigation>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
        <Footer />
    </div>
    
  );
}


export default App;
