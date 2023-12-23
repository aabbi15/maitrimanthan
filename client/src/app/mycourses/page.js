
import Card2 from "../components/card2";
import Card3 from "../components/card3";
import Card1 from "../components/cards";
import Card from "../components/cards";
import Footer from "../components/footer";
import Navbar, { ComplexNavbar } from "../components/header";

export default function App(){
  return(
    <div>
      <Navbar/>

      <div className="min-h-screen px-5 md:px-20 lg:px-40 pt-24 bg-gray-900">
        <Card1/>
        <Card2/>
        <Card3/>
      </div>

      <Footer/>
    </div>
    
  )
}