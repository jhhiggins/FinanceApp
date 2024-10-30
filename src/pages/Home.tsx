import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Home.css';

// Example page components
const Home: React.FC = () => {

    return (
    <div className="Home">
        <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
                Home Page
            </p>
        </header>
    </div>
    );
}

export default Home;