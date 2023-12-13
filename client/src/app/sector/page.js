
import Card from "../components/cards";
import Footer from "../components/footer";
import Navbar, { ComplexNavbar } from "../components/header";

export default function App(){
  return(
    <div>
      <Navbar/>

      <div className="min-h-screen px-40 pt-24 bg-gray-900">
        <Card/>
        <Card/>
        <Card/>
      </div>

      <Footer/>
    </div>
    
  )
}