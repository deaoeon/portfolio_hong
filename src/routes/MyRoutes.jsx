import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import { About, Home } from '../pages';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
