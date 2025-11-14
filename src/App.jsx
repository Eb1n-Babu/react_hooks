// App.jsx
import './App.css';
import UseRef from "./components/UseRef.jsx";
import Parent from "./components/UseCallBack/Parent.jsx";
import UseMemo from "./components/UseMemo.jsx";
import UseState from "./hook-demo-session-v2/useState.jsx";
import ChangeColour from "./change_colour/Change_colour.jsx";
import { useEffect, useRef } from "react";

function Firework() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.6; // Upper half
        const hue = Math.random() * 360;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.color = `hsl(${hue}, 100%, 70%)`;

        const remove = () => el.remove();
        el.addEventListener('animationend', remove);

        return () => el.removeEventListener('animationend', remove);
    }, []);

    return <div className="firework" ref={ref}></div>;
}

function App() {
    useEffect(() => {
        const createFirework = () => {
            const container = document.querySelector('.fireworks');
            if (!container) return;

            const fw = document.createElement('div');
            fw.className = 'firework';
            container.appendChild(fw);

            // Random position
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.7;
            const hue = Math.random() * 360;

            fw.style.left = `${x}px`;
            fw.style.top = `${y}px`;
            fw.style.setProperty('--hue', hue);

            // Remove after animation
            fw.addEventListener('animationend', () => fw.remove());
        };

        // Burst every 1-2.5 seconds
        const interval = setInterval(() => {
            const bursts = Math.random() > 0.5 ? 3 : 1;
            for (let i = 0; i < bursts; i++) {
                setTimeout(createFirework, i * 200);
            }
        }, 1500 + Math.random() * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            {/* Fireworks Layer */}
            <div className="fireworks"></div>

            {/* Textured Heading */}
            <h1 className="centered-heading">Happy Diwali!</h1>

            {/* Your Components */}
            {/* <ChangeColour /> */}
            {/* Uncomment others as needed */}
        </div>
    );
}

export default App;