import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Budget.css';

// Example page components
const Budget: React.FC = () => {

    return (
    <div className="Budget">
        <header className="Budget-header">
            <img src={logo} className="Budget-logo" alt="logo" />
            <p>
                REMEMBER TO IMPORT IN APP.TSX
            </p>
        </header>
    </div>
    );
}

export default Budget;