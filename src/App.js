
import Back from './components/Back';
import Featuredcollections from './components/Featuredcollections';
import Footer from './components/Footer';
import Look from './components/Look';
import Menubar from './components/Menubar';
import Slider from './components/Slider';
import { Toptrending } from './components/Toptrending';

function App() {
  return (
    <div >
     <Menubar />
     <Slider />
     <Featuredcollections />
     <Look />
     <Toptrending />
     <Back />
     <Footer />
    </div>
  );
}

export default App;
