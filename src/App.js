import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SummaryPage from './Components/SummaryPage';
import Homepage from './Components/Homepage';

function App() {

  return (

    <div>

      <Router>
        <Header />
        <Routes>
          <>
            <Route path='/' element={<Homepage />} />
            <Route path='/summary' element={<SummaryPage />} />
          </>
        </Routes>
        <Footer />
      </Router >
    </div>
  );
}

export default App;
