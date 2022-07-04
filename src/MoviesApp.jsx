import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages';

const MoviesApp = () => {
return (
    <Router>
        <Routes>
            <Route path='/' element={ <Home/> }/>
        </Routes>
    </Router>    
)}

export default MoviesApp;