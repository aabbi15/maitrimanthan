import Footer from "./components/footer";
import Navbar, { ComplexNavbar } from "./components/header";

export default function App(){
  return(
    <div>
      <Navbar/>

      <div className="h-screen bg-slate-100"></div>

      <Footer/>
    </div>
    
  )
}