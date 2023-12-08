/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import DepositeContext from '../../Context/DepositeContext';
import './Modal1.css';

function Modal({ setIsOpen }) {
  const { options, setOptions } = useContext(DepositeContext);

  const handelSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    const val = values.currency;

    setOptions(options.concat(val));
    setIsOpen(false);
  };
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(true)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">ADD CURRENCY</h5>
          </div>
          <button
            type="button"
            className="closeBtn"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <form onSubmit={handelSubmit}>
            <div className="modalContentsContainer">
              <label htmlFor="name">
                Name:
                <input
                  id="name"
                  name="currency"
                  placeholder="Please enter currency name"
                  type="text"
                />
              </label>
            </div>

            <div className="actionsContainer">
              <button type="submit" className="saveBtn">
                Add
              </button>
              <button
                type="button"
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;