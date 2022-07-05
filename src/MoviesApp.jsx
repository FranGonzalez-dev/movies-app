import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header, Footer } from './components'
import { Home, Catalog, Detail } from './pages'


const MoviesApp = () => {
return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/:category/search/:keyword' element={ <Catalog/> }/>
            <Route path='/:category/:id' element={ <Detail/> }/>
            <Route path='/:category' element={ <Catalog/> }/>
            <Route path='/' element={ <Home/> }/>
        </Routes>
        <Footer />
    </Router>    
)}

export default MoviesApp;