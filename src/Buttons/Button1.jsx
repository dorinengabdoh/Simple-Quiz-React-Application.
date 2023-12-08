import React, { useState } from 'react';
import './Button.css';
import Modal from '../Modals/Modal1/Modal1';

function Button() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="Btn" type="button">
        Add Currency
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Button;