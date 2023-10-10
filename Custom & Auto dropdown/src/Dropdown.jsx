import React, { useState } from 'react';
import './Dropdown.scss'; // Import your Sass stylesheet

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Handle option click event here
  };

  return (
    <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Dropdown <span className={`arrow ${isOpen ? 'down' : 'up'}`}>&#9660;</span>
      </button>
      <ul className="dropdown-list">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;
