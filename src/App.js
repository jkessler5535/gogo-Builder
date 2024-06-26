import React from "react";
import "./index.scss";



//Pages
import Header from "./components/Pages/header.js";
import BuilderDash from "./components/Pages/builder-dash.js"
import GogoBuilder2 from "./components/Pages/gogo-builder2.js";
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
      <GogoBuilder2/>
      <Footer/>
    </div>
 );
}

export default App;
