import React, { useState } from 'react';
import './app.css';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [accountName, setAccountName] = useState('');
  const [transferFrom, setTransferFrom] = useState('');
  const [transferTo, setTransferTo] = useState('');
  const [amount, setAmount] = useState(0);

  // Handle account creation
  const createAccount = () => {
    if (accountName && !accounts.some(acc => acc.name === accountName)) {
      setAccounts([...accounts, { name: accountName, balance: 0 }]);
      setAccountName('');
    }
  };

  // Handle money transfer
  const transferMoney = () => {
    const fromIndex = accounts.findIndex(acc => acc.name === transferFrom);
    const toIndex = accounts.findIndex(acc => acc.name === transferTo);

    if (fromIndex !== -1 && toIndex !== -1 && amount > 0 && accounts[fromIndex].balance >= amount) {
      const updatedAccounts = [...accounts];
      updatedAccounts[fromIndex].balance -= amount;
      updatedAccounts[toIndex].balance += amount;
      setAccounts(updatedAccounts);
      setTransferFrom('');
      setTransferTo('');
      setAmount(0);
    }
  };

  return (
    <div className="App">
      <h1>Bank Application</h1>

      {/* Create Account Section */}
      <div>
        <h2>Create Account</h2>
        <input
          type="text"
          value={accountName}
          onChange={e => setAccountName(e.target.value)}
          placeholder="Account Name"
        />
        <button onClick={createAccount}>Create</button>
      </div>

      {/* Transfer Money Section */}
      <div>
        <h2>Transfer Money</h2>
        <input
          type="text"
          value={transferFrom}
          onChange={e => setTransferFrom(e.target.value)}
          placeholder="From Account"
        />
        <input
          type="text"
          value={transferTo}
          onChange={e => setTransferTo(e.target.value)}
          placeholder="To Account"
        />
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          placeholder="Amount"
        />
        <button onClick={transferMoney}>Transfer</button>
      </div>

      {/* Accounts List */}
      <div>
        <h2>Accounts</h2>
        <ul>
          {accounts.map(acc => (
            <li key={acc.name}>
              {acc.name}: ${acc.balance.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
