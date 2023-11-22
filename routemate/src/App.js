import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { AllRoutes } from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
        <main>
          <AllRoutes></AllRoutes>
        </main>
        
      <Footer></Footer>          

    </div>
  );
}

export default App;
