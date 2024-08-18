import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SharePage from './components/sharePage';
import "./index.scss";



//Pages
import Header from "./components/Pages/header.js";
import GogoBuilder2 from "./components/Pages/gogo-builder2.js";
import Footer from "./components/Pages/footer.js";





function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<GogoBuilder2 />} />
          <Route path="/share" element={<SharePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
