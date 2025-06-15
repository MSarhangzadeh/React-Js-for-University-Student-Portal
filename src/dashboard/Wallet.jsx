import React, { useState } from 'react';

const Wallet = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');
  const [amount, setAmount] = useState('');
  const [walletBalance, setWalletBalance] = useState(100); // Initial dummy balance

  const handleCardChange = (value, index) => {
    if (/^\d{0,4}$/.test(value)) {
      const updated = [...cardNumber];
      updated[index] = value;
      setCardNumber(updated);
    }
  };

  const handleCharge = () => {
    const totalCard = cardNumber.join('');
    if (totalCard.length !== 16 || !cvv || !expiry || !amount) {
      alert('Please fill in all the fields correctly.');
      return;
    }
    setWalletBalance(prev => prev + parseFloat(amount));
    setCardNumber(['', '', '', '']);
    setCvv('');
    setExpiry('');
    setAmount('');
    alert('Wallet successfully charged!');
  };

  return (
    <div className="container">
      <h3 className="mb-4 text-start">💳 Wallet</h3>

      <div className="card p-4 shadow-sm mb-4">
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <div className="d-flex gap-2">
            {cardNumber.map((num, idx) => (
              <input
                key={idx}
                type="text"
                maxLength="4"
                className="form-control"
                value={num}
                onChange={(e) => handleCardChange(e.target.value, idx)}
              />
            ))}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">CVV2</label>
            <input
              type="text"
              maxLength="4"
              className="form-control"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Expiry Date</label>
            <input
              type="month"
              className="form-control"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Amount to Charge ($)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleCharge}>
          Add to Wallet
        </button>
      </div>

      <div className="alert alert-info text-center">
        Current Wallet Balance: <strong>${walletBalance.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Wallet;
