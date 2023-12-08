/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import DepositeContext from '../../Context/DepositeContext';
import './Modal3.css';

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

    if (
      value.fromCurrency === 'USD' &&
      value.toCurrency === 'EUR' &&
      +value.amount <= currency1
    ) {
      const val = currency1 - +value.amount;
      setCurrency1(val);
      setCurrency2(currency2 + +value.amount * 0.93);
      setIsOpen(false);
    } else if (
      value.fromCurrency === 'USD' &&
      value.toCurrency === 'XAF' &&
      +value.amount <= currency1
    ) {
      const val = currency1 - +value.amount;
      setCurrency1(val);
      setCurrency3(currency3 + +value.amount * 610.76);
      setIsOpen(false);
    } else if (
      value.fromCurrency === 'EUR' &&
      value.toCurrency === 'USD' &&
      +value.amount <= currency2
    ) {
      const val = currency2 - +value.amount;
      setCurrency2(val);
      setCurrency1(currency1 + +value.amount * 1.07);
      setIsOpen(false);
    } else if (
      value.fromCurrency === 'EUR' &&
      value.toCurrency === 'XAF' &&
      +value.amount <= currency2
    ) {
      const val = currency2 - +value.amount;
      setCurrency2(val);
      setCurrency3(currency3 + +value.amount * 655.76);
      setIsOpen(false);
    } else if (
      value.fromCurrency === 'XAF' &&
      value.toCurrency === 'USD' &&
      +value.amount <= currency3
    ) {
      const val = currency3 - +value.amount;
      setCurrency3(val);
      setCurrency1(currency1 + +value.amount * 0.0016);
      setIsOpen(false);
    } else if (
      value.fromCurrency === 'XAF' &&
      value.toCurrency === 'EUR' &&
      +value.amount <= currency3
    ) {
      const val = currency3 - +value.amount;
      setCurrency3(val);
      setCurrency2(currency2 + +value.amount * 0.0015);
      setIsOpen(false);
    } else {
      alert(
        'The amount is greater than your balance or the selected currencies are the same'
      );
    }
  };
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(true)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">TRANSFER MONEY</h5>
          </div>
          <form onSubmit={handelSubmit}>
            <div className="modalContent">
              <button
                type="button"
                className="closeBtn"
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div>
                <label className="modalContentLabel" htmlFor="amount">
                  Amount:
                  <input
                    id="amount"
                    name="amount"
                    className="modalContentsInput"
                    placeholder="Please enter amount"
                    type="number"
                  />
                </label>
              </div>
              <div className="modalContentContainer">
                <div>
                  <label htmlFor="from">
                    From:
                    <select name="fromCurrency" id="from">
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="XAF">XAF</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label htmlFor="to">
                    To:
                    <select name="toCurrency" id="to">
                      <option value="EUR">EUR</option>
                      <option value="USD">USD</option>
                      <option value="XAF">XAF</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="actionsContainers">
              <button type="submit" className="saveBtn">
                Transfer
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