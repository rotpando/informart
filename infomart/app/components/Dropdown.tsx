import React, { useState } from 'react';

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;
