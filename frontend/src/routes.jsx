import { BrowserRouter, Route, Routes } from 'react-router';
import Inicio from './pages/Inicio';
import Login from './pages/Login';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}