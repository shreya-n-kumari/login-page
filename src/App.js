import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'

const App = () => {
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
        </Routes>
        </BrowserRouter>      
    </div>
}

export default App;
