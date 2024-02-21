import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Audience from './pages/Audience';
import DashBoard from './pages/DashBoard';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Campaign from './pages/Campaign';
import Content from './pages/Content';
import Settings from './pages/Settings';
import Flows from './pages/Flows';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/content" element={<Content />} />
        <Route path="/" element={<Audience />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/flows" element={<Flows />} />

      </Routes>
    </Router>
  )
}

export default App
