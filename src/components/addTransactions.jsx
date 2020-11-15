import React, {useState, useContext} from 'react';
import "../App.css";
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [type, setType] = useState('');
  const [tags, setTags] = useState({});
  const [amount, setAmount] = useState(0);
  const [image, setImage]=useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      tags,
      image,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  const types = ['', 'Donation', 'Expenditure']
  const dropdownChoicesOrg = ['', 'Project A', 'Project B', 'Project C', 'Initiative D', 'Company E', 'Company F', 'Unrelated Purchase (!!)']
  const dropdownChoicesDonor = ['', 'One-time Donation', 'Continuous Sponsorship']

  return (
    <div className="container">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="type">Type of Transaction</label>
          <select className="types" value={type} onChange={(e) => setType(e.target.value)}>
            {types.map(choice => (
              <option>{choice}</option>
            ))}
          </select>
          <label htmlFor="tags">Tags</label>
          <select className="tags" value={tags} onChange={(e) => setTags(e.target.value)}>
            {type === "Donation" && 
            dropdownChoicesDonor.map(choice => (
              <option>{choice}</option>
            ))}
            {type === "Expenditure" && 
            dropdownChoicesOrg.map(choice => (
              <option>{choice}</option>
            ))}
          </select>
          <label htmlFor="amount">
            Amount <br />
            <small>(negative for expenditures, positive for donations)</small></label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          <label htmlFor="text">
            Image Link<br/>
            <small>Enter url for the image of your receipt, purchase confirmation, etc.</small>
          </label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image url..." />
          <button className="btn">Add transaction</button>
        </div>
      </form>
    </div>
  )
}
