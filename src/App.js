import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./components/basics/about/About";
import Main from "./components/main/Main"
import Vision from "./components/basics/vision/Vision";
import Services from "./components/basics/services/Services";
import services_data from '../src/components/servicesApi'
import Footer from './components/shared/footer/Footer'
import './App.css';
import { useState } from "react";
import HCards from "./components/basics/h_cards/HCards";
import SPolicy from "./components/basics/policy/SPolicy";
import Brands from "./components/basics/brands/Brands";
import Test from "./components/basics/test/Test"
import TopFooter from "./components/shared/footer/TopFooter";
import Form from "./components/basics/Form/Form";
import Header from "./components/shared/head/Header";
function App() {
  const [serviceData] = useState(services_data)
  return (
<>
<Header/>
{/* <Main/> */}
{/* <Test/> */}
<About/>
<Vision/>
<Services serviceData={serviceData}/>
<HCards/>
<SPolicy/>
<Brands/>
<Form/>
<TopFooter/>
<Footer/>
</>
  );
}

export default App;
