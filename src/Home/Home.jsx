/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Btn2 from '../Buttons/Button2';
import Btn3 from '../Buttons/Button3';
import DepositeContext from '../Context/DepositeContext';

function Home() {
  const [currency1, setCurrency1] = useState(100);
  const [currency2, setCurrency2] = useState(500);
  const [currency3, setCurrency3] = useState(10000);
  const [totalCurrency, setTotalCurrency] = useState(0);
  const [select, setSelect] = useState();

  useEffect(() => {
    if (select === undefined) {
      const defaultCurrency = `${(
        currency2 * 1.07 +
        currency3 * 0.0016 +
        currency1
      ).toFixed(2)} USD`;
      setTotalCurrency(defaultCurrency);
    } else if (select === 'USD') {
      const amount2 = currency2 * 1.07;
      const amount3 = currency3 * 0.0016;
      const total = `${(amount2 + amount3 + currency1).toFixed(2)} USD`;
      setTotalCurrency(total);
    } else if (select === 'EUR') {
      const amount1 = currency1 * 0.93;
      const amount3 = currency3 * 0.0015;
      const total = `${(amount1 + amount3 + currency2).toFixed(2)} EUR`;
      setTotalCurrency(total);
    } else {
      const amount1 = currency1 * 610.76;
      const amount2 = currency2 * 655.76;
      const total = `${(amount1 + amount2 + currency3).toFixed(2)} XAF`;
      setTotalCurrency(total);
    }
  });

  const handelSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <DepositeContext.Provider
      value={{
        setCurrency1,
        setCurrency2,
        setCurrency3,
        currency1,
        currency2,
        currency3,
      }}
    >
      <div className="Home__container">
        <div className="Home__column1">
          <div>
            <h2 className='hello'>CURRENCY BALANCE</h2>
            <p className="Home__column1__p1">USD Balance: {currency1} USD</p>
            <p className="Home__column1__p1">EUR Balance: {currency2} EUR</p>
            <p className="Home__column1__p1">XAF Balance: {currency3} XAF</p>
          </div>
          <div>
            <h2>TOTAL AMOUNT</h2>
            <p className="Home__column1__p2">{totalCurrency}</p>
          </div>
        </div>
        <div className="Home__column2">
          <h3 className='hellos'>E-CURRENCY WALLET APP</h3>
          <p>
            Deposite and transfert money <br />
            <br /> from one currency to anotheremail
          </p>
          <div>
            <div className="Home__column2__Currency">
              <label htmlFor="currency">
                Select Default Currency:
                <select onChange={handelSelect} id="currency">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="XAF">XAF</option>
                </select>
              </label>
            </div>
            <div className="Home__btn">
              <Btn2 />
              <Btn3 />
            </div>
          </div>
        </div>
      </div>
    </DepositeContext.Provider>
  );
}

export default Home;