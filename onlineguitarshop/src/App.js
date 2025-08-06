import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
/* import './App.css'; */
/* import Footer from './components/Footer/footer'; */
import ModelList from './Pages/Collections/ModelList';
import BrandList from './Pages/Store/BrandList';
import Support from './Pages/Support/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrandList />} />
        <Route path="/BrandList" element={<ModelList />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
       {/*  <Footer />  */}
    </Router>
    
  );
}

export default App;
