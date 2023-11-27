import { Navbar } from "./components/Navbar";
import { Hero } from "./components/fitur/Hero";
import { Content } from "./components/fitur/Content";
import { Tutorial } from "./components/fitur/Tutorial";
import { AppDownload } from "./components/fitur/AppDownload";
import { Footer } from "./components/fitur/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Tutorial />
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
