import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MovingBanner from './components/MovingBanner'
import FlexBoard from './components/FlexBoard'
import FlexBoard2 from './components/FlexBoard2'
import FlexBoard3 from './components/FlexBoard3'
import Sarees from './pages/Sarees'
import Suits from './pages/Suits'
import Coords from './pages/Coords'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <MovingBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <FlexBoard />
              <FlexBoard2 />
              <FlexBoard3 />
            </>
          } />
          <Route path="/sarees" element={<Sarees />} />
          <Route path="/suits" element={<Suits />} />
          <Route path="/coords" element={<Coords />} />
        </Routes>
        <Footer />      
      </div>
    </Router>
  )
}

export default App
