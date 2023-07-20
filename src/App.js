import './App.css';
import ChooseItemHeader from "./components/ChooseItemHeader";
import ChooseItem from "./components/ChooseItem";
import image1 from "./components/Image/image1.svg";
import image2 from "./components/Image/image2.svg";
import image3 from "./components/Image/image3.svg";
import image4 from "./components/Image/image4.svg";
import image5 from "./components/Image/image5.svg";
function App() {
  return (
    <div className="About-Us">
      <ChooseItemHeader/>
      <ChooseItem image={image1} heading1={"Choose Your"} heading2={"Local Targeting"} text={"Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."}/>      
      <ChooseItem image={image2} heading1={"Track Your"} heading2={"Conversion"} text={"Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."}/>      
      <ChooseItem image={image3} heading1={"Customized"} heading2={"Campaigns"} text={"Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."}/>      
      <ChooseItem image={image4} heading1={"Get Dedicated "} heading2={"Support Team"} text={"Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."}/>      
      <ChooseItem image={image5} heading1={"Quality"} heading2={" Assurance"} text={"Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."}/>      
    </div>
  );
}

export default App;
