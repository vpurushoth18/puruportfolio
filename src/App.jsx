import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import FooterBottom from "./components/Footer/FooterBottom";
import Navbar from "./components/navbar/Index";
import Project from "./components/Project/Project";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <>
      <div className="w-full h-[100%] bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
          <Project />
          <Resume />

          <Contact />
          {/* <Footer /> */}
          <FooterBottom />
        </div>
      </div>
    </>
  );
}

export default App;
