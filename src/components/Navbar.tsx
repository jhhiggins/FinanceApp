import React from 'react';
import '../styles/Navbar.nodule.css';

interface NavbarProps {
  // Define your props here
  title: string; // Example prop
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="Navbar">
      <h1>{title}</h1>
      {/* Add more JSX here */}
    </div>
  );
};

export default Navbar;