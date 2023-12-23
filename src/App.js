
import './App.css';
import Navbar from './Pages/Navbar';
import MainSection from './Pages/MainSection';


function App() {
  return (
    <div className=" flex">
      <div>
        <Navbar />
      </div>
      <div className=' w-full'>
        <MainSection />
      </div>
    </div>
  );
}

export default App;
