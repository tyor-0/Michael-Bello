import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";



function Home() {
  return (
    <div className="min-h-screen bg-[#101010] text-white" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Work />
      <Info />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
 
export default Home;
 