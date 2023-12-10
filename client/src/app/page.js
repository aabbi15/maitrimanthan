import Card from "./components/cards";
import Footer from "./components/footer";
import Navbar, { ComplexNavbar } from "./components/header";

export default function App(){
  return(
    <div>
      <Navbar/>

      <div className="h-screen bg-slate-100">
        <Card/>
      </div>

      <Footer/>
    </div>
    
  )
}