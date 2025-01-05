

import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import PropertiesPage from './pages/PropertiesPage';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';
import Favorite from './pages/FavoritesPage';




const App =() => {

  return (
    <>

    
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/properties" element={<PropertiesPage/>}/>
          <Route path="/favorites" element={<Favorite/>}/>          
          <Route path="/propertyDetails/:id" element={<PropertyDetails />} /> 
        </Routes>
      </BrowserRouter>
    

    </>
  );
}

export default App
