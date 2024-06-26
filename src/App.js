import React from "react";
import "./index.scss";



//Pages
import Header from "./components/Pages/header.js";
import BuilderDash from "./components/Pages/builder-dash.js"
import PageBody from "./components/Pages/pagebody.js";
import Footer from "./components/Pages/footer.js";




//Logo
import Avatar from "./components/logos/avatar";
import ShareIcon from "./components/logos/share";
import DownloadIcon from "./components/logos/download";



function App() {
  return (
    <div>
      <Header/>
      <BuilderDash  />
      <PageBody />
      <Footer/>
    </div>
 );
}

export default App;
