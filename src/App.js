import './App.css';
import "../src/Components/Header/Header";
import Header from '../src/Components/Header/Header';
import About from "../src/Components/Main/About";
import Ourcourses from './Components/Main/Ourcourses';
import Testominal from './Components/Main/Testominal';
import Explore from './Components/Main/Explore';
import Blog from './Components/Main/Blog';
import Price from './Components/Main/Price';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
   <Header />
   <About />
   <Explore />
   <Ourcourses />
   <Testominal />
   <Blog />
   <Price />
   <Footer />
    </>
  );
}

export default App;
