import Topheader from "./components/Topheader/page";
import Hero from "./components/Hero/page";
import Editors from "./components/editorspick/page";
import Classman from "./components/Classman/page";
import Navbar from "./components/Navbar/page";
import Products from "./components/products-Card/page";
import Universe from "./components/Universe/page";
import FuturePost from "./components/Futured/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
   <> 

       <Topheader />
      <Navbar />
      
      <Hero />
      <Editors />
       <Products />
       <Classman />
       <Universe />
      <FuturePost />
      <Footer />
       </>
  );
}
