import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import '../css/app.css';
import Home from './Pages/Home';

const lenis = new Lenis({ duration: 1.2 });
function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <Home />
    </StrictMode>
);
