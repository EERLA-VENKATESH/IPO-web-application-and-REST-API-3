import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IPOList from './pages/IPOList';
import IPODetail from './pages/IPODetail';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen p-4 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipos" element={<IPOList />} />
          <Route path="/ipo/:id" element={<IPODetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
