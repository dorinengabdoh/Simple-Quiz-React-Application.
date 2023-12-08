/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import DepositeContext from '../../Context/DepositeContext';
import './Modal2.css';

function Modal({ setIsOpen }) {
  const {
    setCurrency1,
    setCurrency2,
    setCurrency3,
    currency1,
    currency2,
    currency3,
  } = useContext(DepositeContext);

  const handelSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());

    if (value.currency === 'USD') {
      setCurrency1(currency1 + +value.amount);
      setIsOpen(false);
    } else if (value.currency === 'EUR') {
      setCurrency2(currency2 + +value.amount);
      setIsOpen(false);
    } else {
      setCurrency3(currency3 + +value.amount);
      setIsOpen(false);
    }
  };
  return (
    <div>
      <div className="darkBG" onClick={() => setIsOpen(true)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">DEPOSITE MONEY</h5>
          </div>
          <form onSubmit={handelSubmit}>
            <button
              type="button"
              className="closeBtn"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: '-3px' }} />
            </button>
            <div className="modalContents">
              <div>
                <label className="modalContentLabel" htmlFor="amount">
                  Amount:
                  <input
                    id="amount"
                    name="amount"
                    className="modalContentInput"
                    placeholder="Please enter the amount"
                    type="number"
                  />
                </label>
              </div>
              <div>
                <label className="modalContentLabel" htmlFor="currency">
                  Select Currency:
                  <select
                    className="modalContentSelect"
                    name="currency"
                    id="currency"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="XAF">XAF</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="modalActions">
              <button type="submit" className="saveBtn">
                Deposite
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
    </div>
  );
}

export default Modal;