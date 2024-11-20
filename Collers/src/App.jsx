import Header from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Join from "./components/Join/Join";
import Review from "./components/Review/Review";
import Collection from "./components/Collection/Collection";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header />
      <Home />
      <Cards />
      <Join />
      <Review />
      <Collection />
      <Footer />
    </>

  )
}

export default App
