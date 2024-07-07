import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import News from './components/News';
import TopHeadlines from './components/TopHeadlines';
import CntNews from './components/CntNews';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/> 
      <Routes>
          <Route path="/" element={<News/>} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CntNews/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
