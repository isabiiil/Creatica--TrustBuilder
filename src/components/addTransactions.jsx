import React, {useState, useContext} from 'react';
import "../App.css";
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [image, setImage]=useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    console.log("yeet")
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      image,
      amount: +amount
    }

    addTransaction(newTransaction);
    console.log("done")
  }

  return (
    <div className="container">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        
        <div className="form-control">
          <label htmlFor="text">
              <h5>Transaction Name</h5> <br/>
              Ex) Donation to _____
          </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter title..." />
        </div>
        
        <div className="form-control">
          <label htmlFor="amount"
            ><h5>Amount</h5> <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        
        <div className="form-control">
          <label htmlFor="text"
          ><h5> Image Link</h5> <br/>
          Enter url for the image of your receipt, purchase confirmation, etc.
          </label>
          <input type="text" value={text} onChange={(e) => setImage(e.target.value)} placeholder="Enter image url..." />
        </div>
        
        <button className="btn">Add transaction</button>
      </form>
      {console.log(GlobalContext)}
    </div>
  )
  
}
<div>
    <p>hi</p>
      </div>
