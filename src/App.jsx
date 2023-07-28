import React from "react"
import Nav from '../src/components/nav/Nav';
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Agens from "./components/agensengin/Agens";
import AgenEnterprise from "./components/agenEnterprise/AgenEnterprise";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/subFooter/SubFooter";





const App = () => {
    return (
        <>
    <Nav/>
    <About/>
    <Experience/>
    <Agens/>
    <AgenEnterprise/>
    <Footer/>
    <SubFooter/>
   
   

        </>
    )
}
export default App