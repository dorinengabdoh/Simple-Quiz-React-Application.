import React, { useState } from 'react';
import './Button.css';
import Modal from '../Modals/Modal2/Modal2';

function Button() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="Btn" type="button">
        Deposite Money
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Button;