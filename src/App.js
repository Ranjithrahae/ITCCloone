import Navbar from './components/navbar';
import Hero from './components/hero'
import Ourbrands from './components/ourbrands';
import Fmcg from './components/fmcg';
import Portfolio from './components/portfolio';
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Fmcg/>
     <Portfolio/>
     <Ourbrands/>
     <Footer/>
    </div>
  );
}

export default App;
