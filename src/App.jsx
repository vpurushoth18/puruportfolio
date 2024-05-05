import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/navbar/Index";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/*   <Features />
          <Projects />
          <Resume />
          {/* <Testimonial /> */}
          {/* <Contact /> */}
          {/* <Footer /> */}
          {/* <FooterBottom /> */}
        </div>
      </div>
    </>
  );
}

export default App;
