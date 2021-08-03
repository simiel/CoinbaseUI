import Navbar from './components/navbar';
import HeroSection from './components/Hero';
import Table from './components/Table';
import Earn from './components/Earn';
import Manage from './components/Manage';
import Trusted from './components/Trusted';
import Banner from './components/Banner';
import Started from './components/Started';
import Full from './components/Full';
import Almost from './components/Almost';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Table />
      <Earn />
      <Manage />
      <Trusted />
      <Banner />
      <Started />
      <Full />
      <Almost />
    </div>
  );
}

export default App;
