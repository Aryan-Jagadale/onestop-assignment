import Footer from "./components/Footer";
import Gridimage from "./components/Gridimage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from "./components/Map";
export default function App() {
  return (
    <div>
      <div className="px-[30px] md:px-16 lg:px-24 xl:px-32">
        <Navbar />
        <Hero />
      </div>
      <Map/>
      <Gridimage/>
      <Footer />
      <ToastContainer/>
    </div>
  );
}
