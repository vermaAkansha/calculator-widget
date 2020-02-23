import React from 'react';
import './Calculator.css';
import InstallmentContext from '../../contexts/InstallmentContext';

/**
 * Calculator component
 */
const Calculator = () => {
  const [amount, setAmount] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const installmentContext = React.useContext(InstallmentContext);

  /**
   * Handler for submit event for calculator form
   * @param {Event} event 
   */
  const onSubmit = (event) => {
    let url = new URL('https://api.myjson.com/bins/ta1sf');
    url.search = new URLSearchParams({
      'amount': amount,
      'duration': duration
    });
    event.preventDefault();

    /**
     * Pass Url to aync data loader in context provider
     */
    installmentContext.getInstallmentData(url);
  }

    return (
      <form onSubmit={onSubmit} className="calculator-widget panel">
        <div className="input-container">
          <label htmlFor="amount">Amount: </label>
          <input type="number" id="amount" onChange={e => {setAmount(e.target.value)}} value={amount} required/>
        </div>
        <div className="input-container">
          <label htmlFor="duration">Duration: </label>
          <input type="number" id="duration" onChange={e => {setDuration(e.target.value)}} value={duration} required/>
        </div>
        <div className="input-container">
          <button type="submit">Ok</button>
        </div>
      </form>
    );
}

export default Calculator;