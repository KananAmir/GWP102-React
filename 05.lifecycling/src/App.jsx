
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/header'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import ProductPage from './pages/products'

function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
    </Routes>
     
    </>
  )
}

export default App
