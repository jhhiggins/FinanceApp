import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Test.css';

// Example page components
const Test: React.FC = () => {

    return (
    <div className="Test">
        <header className="Test-header">
            <img src={logo} className="Test-logo" alt="logo" />
            <p>
                REMEMBER TO IMPORT IN APP.TSX
            </p>
        </header>
    </div>
    );
}

export default Test;